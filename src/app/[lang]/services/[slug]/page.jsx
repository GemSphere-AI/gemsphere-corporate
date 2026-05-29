/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import PillarPageTemplate from '../../../../views/PillarPageTemplate';
import { PRODUCT_ECOSYSTEM } from '../../../../data/productEcosystem';
import { SILO_DATA } from '../../../../data/siloData';
import { generateCompositeSlugs, getSEOContent } from '../../../../data/seoRegistry';

export function generateStaticParams() {
    const params = PRODUCT_ECOSYSTEM.services.map((srv) => ({
        slug: srv.slug,
    }));

    // Add dynamic composite programmatic SEO service slugs
    const seoSlugs = generateCompositeSlugs('services');
    seoSlugs.forEach((slugStr) => {
        params.push({ slug: slugStr });
    });

    return params;
}

export async function generateMetadata({ params }) {
    const { lang, slug } = await params;

    // Check if it's in programmatic SEO database
    const seoContent = getSEOContent(slug);
    let title = '';
    let description = '';

    if (seoContent && seoContent.title !== 'Enterprise Software Solutions') {
        title = seoContent.title;
        description = seoContent.description;
    } else {
        const srv = PRODUCT_ECOSYSTEM.services.find(s => s.slug === slug);
        if (!srv) {
            title = 'Enterprise Services | GemSphere Technologies';
            description = 'Enterprise engineering services.';
        } else {
            const siloDetails = SILO_DATA.service[slug];
            title = `${siloDetails?.title || srv.name} Services | GemSphere`;
            description = siloDetails?.description || srv.desc;
        }
    }

    return {
        title,
        description,
        alternates: {
            canonical: `/${lang}/services/${slug}`,
            languages: {
                'en-us': `/en-us/services/${slug}`,
                'en-gb': `/en-gb/services/${slug}`,
                'en-ae': `/en-ae/services/${slug}`,
                'en-in': `/en-in/services/${slug}`,
                'de-de': `/de-de/services/${slug}`,
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
    return <PillarPageTemplate type="Service" slug={slug} />;
}
