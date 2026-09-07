/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Products from '../../../views/Products';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/products', locale);
  return {
    title: 'Enterprise Product Ecosystem — 50+ Unified Modules | GemSphere',
    description: "Explore GemSphere's modular enterprise product ecosystem: Commerce, Supply Chain, Finance, HR, AI/ML, and more — all on one composable platform.",
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Enterprise Product Ecosystem — 50+ Unified Modules | GemSphere',
      description: "Explore GemSphere's modular enterprise product ecosystem: Commerce, Supply Chain, Finance, HR, AI/ML, and more — all on one composable platform.",
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Enterprise Product Ecosystem — 50+ Unified Modules | GemSphere',
      description: "Explore GemSphere's modular enterprise product ecosystem.",
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <Products />;
}
