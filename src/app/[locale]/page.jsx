/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Home from '../../views/Home';
import { getCanonicalAndHreflang, ACTIVE_LOCALES } from '../../utils/seoHelpers';

export function generateStaticParams() {
    return ACTIVE_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('', locale);
  return {
    title: 'GemSphere Technologies | Engineering Intelligent Digital Enterprises',
    description: 'Premium AI + Enterprise Software + SaaS Transformation Partner.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'GemSphere Technologies | Engineering Intelligent Digital Enterprises',
      description: 'Premium AI + Enterprise Software + SaaS Transformation Partner.',
      type: 'website',
      url: canonical,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'GemSphere Technologies | Engineering Intelligent Digital Enterprises'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GemSphere Technologies | Engineering Intelligent Digital Enterprises',
      description: 'Premium AI + Enterprise Software + SaaS Transformation Partner.',
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <Home />;
}
