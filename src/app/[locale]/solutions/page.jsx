/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Solutions from '../../../views/Solutions';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/solutions', locale);
  return {
    title: 'Enterprise Solutions — Industry-Specific Digital Transformation | GemSphere',
    description: 'Discover purpose-built enterprise solutions by GemSphere Technologies — tailored for Retail, Healthcare, Fintech, Manufacturing, Logistics, and more.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Enterprise Solutions — Industry-Specific Digital Transformation | GemSphere',
      description: 'Discover purpose-built enterprise solutions by GemSphere Technologies — tailored for Retail, Healthcare, Fintech, Manufacturing, Logistics, and more.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Enterprise Solutions — Industry-Specific Digital Transformation | GemSphere',
      description: 'Discover purpose-built enterprise solutions by GemSphere Technologies.',
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <Solutions />;
}
