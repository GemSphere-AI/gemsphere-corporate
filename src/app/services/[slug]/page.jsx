/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import PillarPageTemplate from '../../../views/PillarPageTemplate';
import { PRODUCT_ECOSYSTEM } from '../../../data/productEcosystem';
import { SILO_DATA } from '../../../data/siloData';
import { generateCompositeSlugs, getSEOContent } from '../../../data/seoRegistry';

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
    const { slug } = await params;
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
            canonical: `/services/${slug}`
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
    const seoContent = getSEOContent(slug);
    
    // Build JSON-LD schemas
    const schemas = [];

    // FAQPage Schema
    if (seoContent && seoContent.faqs && seoContent.faqs.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": seoContent.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                }
            }))
        });
    }

    // Service Schema
    let serviceName = seoContent?.h1 || "GemSphere Business Services";
    let serviceDesc = seoContent?.description || "Enterprise Software and Consulting Services by GemSphere";
    schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "serviceType": "Enterprise Software Engineering",
        "provider": {
            "@type": "LocalBusiness",
            "name": "GemSphere Technologies",
            "url": "https://www.gemsphere.ai"
        },
        "description": serviceDesc
    });

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <PillarPageTemplate type="Service" slug={slug} />
        </>
    );
}

