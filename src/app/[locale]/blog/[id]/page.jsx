/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import BlogPost from '../../../../views/BlogPost';
import { BLOG_POSTS } from '../../../../data/blogData';
import { generateBlogPostingSchema } from '../../../../utils/schemaGenerators';
import { getCanonicalAndHreflang, ACTIVE_LOCALES, getBaseUrl } from '../../../../utils/seoHelpers';

export function generateStaticParams() {
    const paramsList = [];
    ACTIVE_LOCALES.forEach(locale => {
        BLOG_POSTS.forEach(post => {
            paramsList.push({ locale, id: post.id });
        });
    });
    return paramsList;
}

export async function generateMetadata({ params }) {
    const { id, locale } = await params;
    const { canonical, languages } = getCanonicalAndHreflang(`/blog/${id}`, locale);
    const post = BLOG_POSTS.find(p => p.id === id);
    if (!post) {
        return {
            title: 'Blog Post | GemSphere Technologies',
            alternates: { canonical, languages }
        };
    }
    return {
        title: `${post.title} | GemSphere Insights`,
        description: post.excerpt,
        alternates: {
            canonical,
            languages
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            url: canonical,
            publishedTime: new Date(post.date).toISOString(),
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: ['/og-image.jpg']
        }
    };
}

export default async function Page({ params }) {
    const { id, locale } = await params;
    const post = BLOG_POSTS.find(p => p.id === id);
    const postSchema = post ? generateBlogPostingSchema(post, locale) : null;
    
    const baseUrl = getBaseUrl();
    const breadcrumbSchema = post ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${baseUrl}/${locale}/`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${baseUrl}/${locale}/blog/`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `${baseUrl}/${locale}/blog/${id}/`
            }
        ]
    } : null;

    return (
        <>
            {postSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
                />
            )}
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            )}
            <BlogPost />
        </>
    );
}
