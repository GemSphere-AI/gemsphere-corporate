"use client";

import React from 'react';
import LocalizedLink from '../components/LocalizedLink';
import { ArrowRight, Globe, Layers, Activity } from 'lucide-react';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';
import { 
    parseCompositeSlug, 
    PRODUCTS_MAP, 
    INDUSTRIES_MAP, 
    COUNTRIES_MAP, 
    PRODUCT_INDUSTRY_RELATIONS, 
    HIGH_VALUE_COUNTRIES 
} from '../data/seoRegistry';

export default function RelatedLinks({ type, currentId }) {
    let links = [];
    let title = 'Recommended Solutions';

    // Parse the current ID if it is a product-related slug
    const parsing = parseCompositeSlug(currentId || '');
    
    if (type === 'products') {
        const productKey = parsing.product || currentId;
        const isCoreProduct = PRODUCTS_MAP[productKey];

        if (isCoreProduct) {
            title = `Solutions & Localization for ${PRODUCTS_MAP[productKey].name}`;
            
            // 1. Add Core Product page link if we are on a composite page
            if (parsing.type !== 'product-core' && parsing.type !== 'unknown') {
                links.push({
                    name: `Core ${PRODUCTS_MAP[productKey].name} Platform`,
                    desc: PRODUCTS_MAP[productKey].desc,
                    url: `/products/${productKey}`,
                    icon: Layers
                });
            }

            // 2. Add Industry configurations based on PRODUCT_INDUSTRY_RELATIONS
            const allowedIndustries = PRODUCT_INDUSTRY_RELATIONS[productKey] || [];
            allowedIndustries.forEach(indKey => {
                if (indKey !== parsing.industry) {
                    links.push({
                        name: `${PRODUCTS_MAP[productKey].name} for ${INDUSTRIES_MAP[indKey]?.name}`,
                        desc: `Specialized compliance & workflows for the ${INDUSTRIES_MAP[indKey]?.name.toLowerCase()} sector.`,
                        url: `/products/${productKey}-for-${indKey}`,
                        icon: Activity
                    });
                }
            });

            // 3. Add High-Value country configurations
            HIGH_VALUE_COUNTRIES.forEach(cKey => {
                if (cKey !== parsing.country) {
                    links.push({
                        name: `${PRODUCTS_MAP[productKey].name} in ${COUNTRIES_MAP[cKey]?.name}`,
                        desc: `Localized multi-currency billing and ${COUNTRIES_MAP[cKey]?.compliance} compliance.`,
                        url: `/products/${productKey}-in-${cKey}`,
                        icon: Globe
                    });
                }
            });
        } else {
            // Fallback to categories
            const cats = PRODUCT_ECOSYSTEM.categories.filter(c => c.id !== currentId).slice(0, 3);
            cats.forEach(c => {
                links.push({
                    name: c.name,
                    desc: c.description || c.desc,
                    url: `/products/${c.id}`,
                    icon: ArrowRight
                });
            });
            title = 'Explore Other Categories';
        }
    } else if (type === 'services') {
        const serviceKey = parsing.service || currentId;
        title = 'Explore Related Services';
        
        // Fallback to ecosystem services
        const srvs = PRODUCT_ECOSYSTEM.services.filter(s => s.slug !== currentId).slice(0, 3);
        srvs.forEach(s => {
            links.push({
                name: s.name,
                desc: s.desc,
                url: `/services/${s.slug}`,
                icon: ArrowRight
            });
        });
    } else if (type === 'industries') {
        const inds = PRODUCT_ECOSYSTEM.industries.filter(i => i.slug !== currentId).slice(0, 3);
        inds.forEach(i => {
            links.push({
                name: i.name,
                desc: i.desc || i.description,
                url: `/industries/${i.slug}`,
                icon: ArrowRight
            });
        });
        title = 'Other Industries We Serve';
    }

    // Slice to maximum of 6 links for clean layout grid
    const displayLinks = links.slice(0, 6);
    if (displayLinks.length === 0) return null;

    return (
        <section className="py-20 border-t border-brand-border bg-brand-dark/20">
            <div className="container mx-auto px-6 max-w-7xl">
                <h3 className="text-2xl font-bold text-text-primary mb-10">{title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {displayLinks.map((link, idx) => {
                        const Icon = link.icon || ArrowRight;
                        return (
                            <LocalizedLink 
                                key={idx} 
                                href={link.url}
                                className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 block"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-dark border border-brand-border group-hover:border-brand-cyan transition-colors text-brand-cyan">
                                        <Icon size={20} />
                                    </div>
                                    <h4 className="font-bold text-text-primary group-hover:text-brand-cyan transition-colors">
                                        {link.name}
                                    </h4>
                                </div>
                                <p className="text-sm text-text-muted line-clamp-2">
                                    {link.desc}
                                </p>
                            </LocalizedLink>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

