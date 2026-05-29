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
    return PRODUCT_ECOSYSTEM.industries.map((ind) => ({
        slug: ind.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const ind = PRODUCT_ECOSYSTEM.industries.find(i => i.slug === slug);
    if (!ind) return { title: 'Industry Solutions | GemSphere Technologies' };
    const siloDetails = SILO_DATA.industry[slug];
    return {
        title: `${siloDetails?.title || ind.name} Industry Solutions | GemSphere`,
        description: siloDetails?.description || `Enterprise-grade ${ind.name.toLowerCase()} solutions powered by AI.`
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    return <PillarPageTemplate type="Industry" slug={slug} />;
}
