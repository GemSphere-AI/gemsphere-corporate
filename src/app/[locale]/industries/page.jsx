/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Industries from '../../../views/Industries';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/industries', locale);
  return {
    title: 'Industry Solutions — Retail, Healthcare, Fintech & More | GemSphere',
    description: 'See how GemSphere Technologies powers digital transformation across Retail, Healthcare, Fintech, Manufacturing, Logistics, Education, and Government sectors.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Industry Solutions — Retail, Healthcare, Fintech & More | GemSphere',
      description: 'See how GemSphere Technologies powers digital transformation across Retail, Healthcare, Fintech, Manufacturing, Logistics, Education, and Government sectors.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Industry Solutions — Retail, Healthcare, Fintech & More | GemSphere',
      description: 'See how GemSphere Technologies powers digital transformation across Retail, Healthcare, Fintech, Manufacturing, and Logistics.',
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <Industries />;
}
