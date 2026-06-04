/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Products from '../../../views/Products';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Enterprise Product Ecosystem — 30+ Unified Modules',
    description: "Explore GemSphere's modular enterprise product ecosystem: Commerce, Supply Chain, Finance, HR, AI/ML, and more — all on one composable platform.",
    alternates: {
      canonical: `/${lang}/products`,
      languages: {
        'en-us': `/en-us/products`,
        'en-gb': `/en-gb/products`,
        'en-ae': `/en-ae/products`,
        'en-in': `/en-in/products`,
        'de-de': `/de-de/products`,
      }
    }
  };
}

export default function Page() {
  return <Products />;
}
