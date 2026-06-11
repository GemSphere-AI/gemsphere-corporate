/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Solutions from '../../views/Solutions';

export async function generateMetadata({ params }) {
  
  return {
    title: 'Enterprise Solutions — Industry-Specific Digital Transformation',
    description: 'Discover purpose-built enterprise solutions by GemSphere Technologies — tailored for Retail, Healthcare, Fintech, Manufacturing, Logistics, and more.',
    alternates: {
            canonical: '/solutions'
            }
  };
}
export default function Page() {
  return <Solutions />;
}
