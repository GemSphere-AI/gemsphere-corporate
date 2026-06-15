/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import GuideGeoTemplate from '../../../views/GuideGeoTemplate';
import { generateCompositeSlugs, getSEOContent } from '../../../data/seoRegistry';

export function generateStaticParams() {
    const slugs = new Set();
    
    // Add GEO pages (Tier 4)
    generateCompositeSlugs('geo').forEach(s => slugs.add(s));
    
    // Add Guide pages (Problem-focused)
    generateCompositeSlugs('guides').forEach(s => slugs.add(s));

    const locales = ['en', 'de', 'fr', 'es', 'ja'];
    const paramsList = [];
    
    locales.forEach(locale => {
        Array.from(slugs).forEach(slug => {
            paramsList.push({ locale, slug });
        });
    });

    return paramsList;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const seoContent = getSEOContent(slug);
    
    const title = seoContent?.title || 'GemSphere Technologies — Custom Solutions';
    const description = seoContent?.description || 'Learn how GemSphere Technologies engineers custom software solutions.';

    return {
        title,
        description,
        keywords: seoContent?.targetKeywords || [],
        alternates: {
            canonical: `/${slug}`
        },
        openGraph: {
            title,
            description,
            type: 'article',
            url: `https://gemsphere.ai/${slug}`,
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: title,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/og-image.jpg']
        }
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const seoContent = getSEOContent(slug);
    
    const schemas = [];

    if (seoContent) {
        // TechArticle / Article Schema
        schemas.push({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": seoContent.h1,
            "description": seoContent.description,
            "inLanguage": "en",
            "provider": {
                "@type": "Organization",
                "name": "GemSphere Technologies",
                "url": "https://gemsphere.ai"
            },
            "publisher": {
                "@type": "Organization",
                "name": "GemSphere Technologies",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://gemsphere.ai/logo.png"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://gemsphere.ai/${slug}`
            }
        });

        // FAQPage Schema
        if (seoContent.faqs && seoContent.faqs.length > 0) {
            schemas.push({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": seoContent.faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.q || faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.a || faq.answer
                    }
                }))
            });
        }
    }

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <GuideGeoTemplate slug={slug} />
        </>
    );
}
