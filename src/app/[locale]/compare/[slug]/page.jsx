/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import ProductComparison from '../../../../views/ProductComparison';
import { generateCompositeSlugs, getSEOContent, COMPETITORS_MAP, CUSTOM_COMPARISONS } from '../../../../data/seoRegistry';
import { getCanonicalAndHreflang, ACTIVE_LOCALES } from '../../../../utils/seoHelpers';
import { generateBreadcrumbSchema } from '../../../../utils/schemaGenerators';

export function generateStaticParams() {
    const comparisonSlugs = generateCompositeSlugs('comparisons');
    const paramsList = [];
    ACTIVE_LOCALES.forEach(locale => {
        comparisonSlugs.forEach(slug => {
            paramsList.push({ locale, slug });
        });
    });
    return paramsList;
}

export async function generateMetadata({ params }) {
    const { slug, locale } = await params;
    const { canonical, languages } = getCanonicalAndHreflang(`/compare/${slug}`, locale);
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
            canonical,
            languages
        },
        openGraph: {
            title,
            description,
            type: 'website',
            url: canonical,
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
    const { slug, locale } = await params;
    
    let competitorKey = '';
    if (CUSTOM_COMPARISONS[slug]) {
        competitorKey = CUSTOM_COMPARISONS[slug].compKey;
    } else {
        competitorKey = slug.replace('gemsphere-vs-', '');
    }

    const compInfo = COMPETITORS_MAP[competitorKey];
    const seoContent = getSEOContent(slug);
    
    const breadcrumbs = [
        { name: 'Home', url: `/${locale}/` },
        { name: 'Compare', url: `/${locale}/compare/` },
        { name: `GemSphere vs ${compInfo?.name || competitorKey}`, url: `/${locale}/compare/${slug}/` }
    ];

    const schemas = [
        generateBreadcrumbSchema(breadcrumbs)
    ];

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
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "128",
                "bestRating": "5",
                "worstRating": "1"
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
