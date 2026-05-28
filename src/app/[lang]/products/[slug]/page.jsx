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

export function generateStaticParams() {
    const params = [];
    
    // Add categories
    PRODUCT_ECOSYSTEM.categories.forEach((cat) => {
        params.push({ slug: cat.id });
        
        // Add modules
        cat.modules.forEach((mod) => {
            params.push({ slug: slugify(mod.name) });
        });
    });

    // Add explicit aliases (e.g. crm, retail, billing, booking)
    const aliases = ['crm', 'retail', 'billing', 'booking'];
    aliases.forEach((alias) => {
        params.push({ slug: alias });
    });

    return params;
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    
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
        return { title: 'Product Detail | GemSphere Technologies' };
    }

    if (module) {
        return {
            title: `${module.name} | GemSphere Enterprise Hub`,
            description: module.desc
        };
    }

    return {
        title: `${category.name} | GemSphere Enterprise Hub`,
        description: category.description
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    
    // Determine whether to show ProductCategory or ProductDetail
    let isCategoryOnly = PRODUCT_ECOSYSTEM.categories.some(c => c.id === slug);
    
    if (isCategoryOnly) {
        return <ProductCategory categoryId={slug} />;
    } else {
        return <ProductDetail slug={slug} />;
    }
}
