/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import ProductComparison from '../../../../views/ProductComparison';
import { generateCompositeSlugs, getSEOContent } from '../../../../data/seoRegistry';

export function generateStaticParams() {
    const comparisonSlugs = generateCompositeSlugs('comparisons');
    return comparisonSlugs.map((slugStr) => ({
        slug: slugStr
    }));
}

export async function generateMetadata({ params }) {
    const { lang, slug } = await params;
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
            canonical: `/${lang}/compare/${slug}`,
            languages: {
                'en-us': `/en-us/compare/${slug}`,
                'en-gb': `/en-gb/compare/${slug}`,
                'en-ae': `/en-ae/compare/${slug}`,
                'en-in': `/en-in/compare/${slug}`,
                'de-de': `/de-de/compare/${slug}`,
            }
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
            images: ['/og-image.jpg'],
        }
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const competitorKey = slug.replace('gemsphere-vs-', '');
    
    return <ProductComparison competitorKey={competitorKey} />;
}
