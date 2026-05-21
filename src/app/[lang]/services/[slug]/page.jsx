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

export function generateStaticParams() {
    return PRODUCT_ECOSYSTEM.services.map((srv) => ({
        slug: srv.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const srv = PRODUCT_ECOSYSTEM.services.find(s => s.slug === slug);
    if (!srv) return { title: 'Enterprise Services | GemSphere Technologies' };
    return {
        title: `${srv.name} Services | GemSphere`,
        description: srv.desc
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    return <PillarPageTemplate type="Service" slug={slug} />;
}
