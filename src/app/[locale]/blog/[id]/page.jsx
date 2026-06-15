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

export function generateStaticParams() {
    const locales = ['en', 'de', 'fr', 'es', 'ja'];
    const paramsList = [];
    locales.forEach(locale => {
        BLOG_POSTS.forEach(post => {
            paramsList.push({ locale, id: post.id });
        });
    });
    return paramsList;
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const post = BLOG_POSTS.find(p => p.id === id);
    if (!post) {
        return {
            title: 'Blog Post | GemSphere Technologies',
        };
    }
    return {
        title: `${post.title} | GemSphere Insights`,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${post.id}`
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
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
    const { id } = await params;
    const post = BLOG_POSTS.find(p => p.id === id);
    const schema = post ? generateBlogPostingSchema(post) : null;
    return (
        <>
            {schema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            )}
            <BlogPost />
        </>
    );
}
