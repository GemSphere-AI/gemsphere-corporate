/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import ProductCategory from '../../../../views/ProductCategory';
import ProductDetail from '../../../../views/ProductDetail';
import { PRODUCT_ECOSYSTEM, slugify } from '../../../../data/productEcosystem';
import { generateCompositeSlugs, getSEOContent, parseCompositeSlug, COUNTRIES_MAP } from '../../../../data/seoRegistry';

export function generateStaticParams() {
    const slugs = new Set();
    
    // Add categories
    PRODUCT_ECOSYSTEM.categories.forEach((cat) => {
        slugs.add(cat.id);
        
        // Add modules
        cat.modules.forEach((mod) => {
            slugs.add(slugify(mod.name));
        });
    });

    // Add explicit aliases (e.g. crm, retail, billing, booking)
    const aliases = ['crm', 'retail', 'billing', 'booking'];
    aliases.forEach((alias) => {
        slugs.add(alias);
    });

    // Add dynamic composite programmatic SEO slugs
    const seoSlugs = generateCompositeSlugs('products');
    seoSlugs.forEach((slugStr) => {
        slugs.add(slugStr);
    });

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
    
    // Check if it's in programmatic SEO database
    const seoContent = getSEOContent(slug);
    let title = '';
    let description = '';

    if (seoContent && seoContent.title !== 'Enterprise Software Solutions') {
        title = seoContent.title;
        description = seoContent.description;
    } else {
        // Find if it's a category
        let category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === slug);
        let module = null;

        if (!category) {
            // Search in modules
            for (const cat of PRODUCT_ECOSYSTEM.categories) {
                const foundMod = cat.modules.find(m => slugify(m.name) === slug);
                if (foundMod) {
                    category = cat;
                    module = foundMod;
                    break;
                }
            }
        }

        if (!category) {
            // Alias checks
            if (slug === 'crm') {
                category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'operations');
                module = category.modules.find(m => m.name === 'CRM Platform');
            } else if (slug === 'retail') {
                category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'commerce');
                module = category.modules.find(m => m.name === 'E-commerce Platform');
            } else if (slug === 'billing') {
                category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'finance');
                module = category.modules.find(m => m.name === 'Billing Platform');
            } else if (slug === 'booking') {
                category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'commerce');
                module = category.modules.find(m => m.name === 'POS System');
            }
        }

        if (!category) {
            title = 'Product Detail | GemSphere Technologies';
            description = 'Enterprise-grade SaaS products and modular platforms.';
        } else if (module) {
            title = `${module.name} | GemSphere Enterprise Hub`;
            description = module.desc;
        } else {
            title = `${category.name} | GemSphere Enterprise Hub`;
            description = category.description;
        }
    }

    return {
        title,
        description,
        keywords: seoContent?.targetKeywords || [],
        alternates: {
            canonical: `/products/${slug}`
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

    // SoftwareApplication Schema
    let productName = seoContent?.h1 || "GemSphere Enterprise Solutions";
    let productDesc = seoContent?.description || "Custom Enterprise Solutions by GemSphere";
    
    if (!seoContent) {
        let category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === slug);
        let module = null;
        if (!category) {
            for (const cat of PRODUCT_ECOSYSTEM.categories) {
                const foundMod = cat.modules.find(m => slugify(m.name) === slug);
                if (foundMod) {
                    category = cat;
                    module = foundMod;
                    break;
                }
            }
        }
        
        if (module) {
            productName = `GemSphere ${module.name}`;
            productDesc = module.desc;
        } else if (category) {
            productName = `GemSphere ${category.name}`;
            productDesc = category.description;
        }
    }

    const parsing = parseCompositeSlug(slug);
    const countryData = parsing?.country ? COUNTRIES_MAP[parsing.country] : null;
    const localCurrencyCode = countryData?.currency || "USD";

    schemas.push({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": productName,
        "operatingSystem": "All (Cloud-Based)",
        "applicationCategory": "BusinessApplication",
        "description": productDesc,
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": localCurrencyCode,
            "description": "Contact for custom enterprise pricing"
        }
    });

    // Determine whether to show ProductCategory or ProductDetail
    let isCategoryOnly = PRODUCT_ECOSYSTEM.categories.some(c => c.id === slug) ||
                         (parsing && (parsing.product === 'commerce' || parsing.product === 'hospitality') && parsing.type !== 'comparison');
    
    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            {isCategoryOnly ? (
                <ProductCategory categoryId={slug} />
            ) : (
                <ProductDetail slug={slug} />
            )}
        </>
    );
}

