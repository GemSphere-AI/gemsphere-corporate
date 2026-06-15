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
  
  return {
    title: 'Enterprise Product Ecosystem — 50+ Unified Modules',
    description: "Explore GemSphere's modular enterprise product ecosystem: Commerce, Supply Chain, Finance, HR, AI/ML, and more — all on one composable platform.",
    alternates: {
            canonical: '/products'
            }
  };
}
export default function Page() {
  return <Products />;
}
