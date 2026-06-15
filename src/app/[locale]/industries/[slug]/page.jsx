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

export function generateStaticParams() {
    const locales = ['en', 'de', 'fr', 'es', 'ja'];
    const paramsList = [];
    locales.forEach(locale => {
        PRODUCT_ECOSYSTEM.industries.forEach(ind => {
            paramsList.push({ locale, slug: ind.slug });
        });
    });
    return paramsList;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const ind = PRODUCT_ECOSYSTEM.industries.find(i => i.slug === slug);
    if (!ind) return { title: 'Industry Solutions | GemSphere Technologies' };
    const siloDetails = SILO_DATA.industry[slug];
    return {
        title: `${siloDetails?.title || ind.name} Industry Solutions | GemSphere`,
        description: siloDetails?.description || `Enterprise-grade ${ind.name.toLowerCase()} solutions powered by AI.`,
        alternates: {
            canonical: `/industries/${slug}`
        }
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const ind = PRODUCT_ECOSYSTEM.industries.find(i => i.slug === slug);
    const siloDetails = SILO_DATA.industry[slug];
    
    const schemas = [];
    
    // FAQPage Schema
    if (siloDetails && siloDetails.faqs && siloDetails.faqs.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": siloDetails.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.a
                }
            }))
        });
    }
    
    // SoftwareApplication Schema
    if (ind) {
        const displayName = siloDetails?.title || ind.name;
        const description = siloDetails?.description || `Enterprise-grade ${ind.name.toLowerCase()} solutions powered by AI.`;
        schemas.push({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": `GemSphere ${displayName}`,
            "operatingSystem": "All (Cloud-Based)",
            "applicationCategory": "BusinessApplication",
            "description": description.replace(/<[^>]*>/g, ''), // Strip HTML
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Contact for custom enterprise pricing"
            }
        });
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
            <PillarPageTemplate type="Industry" slug={slug} />
        </>
    );
}
