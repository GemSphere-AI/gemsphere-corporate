/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import ProductCategory from '../../../../views/ProductCategory';
import { PRODUCT_ECOSYSTEM } from '../../../../data/productEcosystem';

export function generateStaticParams() {
    return PRODUCT_ECOSYSTEM.categories.map((c) => ({
        category: c.id,
    }));
}

export async function generateMetadata({ params }) {
    const { category } = await params;
    const cat = PRODUCT_ECOSYSTEM.categories.find(c => c.id === category);
    if (!cat) return { title: 'Product Category | GemSphere Technologies' };
    return {
        title: `${cat.name} | GemSphere Enterprise Hub`,
        description: cat.description
    };
}

export default async function Page({ params }) {
    const { category } = await params;
    return <ProductCategory categoryId={category} />;
}
