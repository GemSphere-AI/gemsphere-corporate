/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import ProductComparison from '../../../views/ProductComparison';
import { generateCompositeSlugs, getSEOContent, COMPETITORS_MAP } from '../../../data/seoRegistry';

export function generateStaticParams() {
    const comparisonSlugs = generateCompositeSlugs('comparisons');
    return comparisonSlugs.map((slugStr) => ({
        slug: slugStr
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const seoContent = getSEOContent(slug);
    let title = 'GemSphere vs Competitors | Enterprise Architectural Comparison';
    let description = 'Compare GemSphere composable single-tenant infrastructure with monolithic software suites.';
    
    if (seoContent && seoContent.title !== 'Enterprise Software Solutions') {
        title = seoContent.title;
        description = seoContent.description;
    }

    return {
        title,
        description,
        alternates: {
            canonical: `/compare/${slug}`
        },
        openGraph: {
            title,
            description,
            type: 'website',
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
    const competitorKey = slug.replace('gemsphere-vs-', '');
    const compInfo = COMPETITORS_MAP[competitorKey];
    const seoContent = getSEOContent(slug);
    
    const schemas = [];
    if (seoContent) {
        // SoftwareApplication Schema
        schemas.push({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": `GemSphere vs ${compInfo?.name || competitorKey} Technical Comparison`,
            "operatingSystem": "All (Cloud-Based)",
            "applicationCategory": "BusinessApplication",
            "description": seoContent.description,
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Contact for custom enterprise pricing"
            }
        });
        
        // FAQ Schema
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
            <ProductComparison competitorKey={competitorKey} />
        </>
    );
}
