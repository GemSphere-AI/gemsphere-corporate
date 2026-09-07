/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Contact from '../../../views/Contact';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/contact', locale);
  return {
    title: 'Contact Sales — Get a Custom Enterprise Demo | GemSphere Technologies',
    description: 'Schedule a personalized enterprise demo with GemSphere sales team. Get pricing, implementation timelines, and ROI projections for your digital transformation.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Contact Sales — Get a Custom Enterprise Demo | GemSphere Technologies',
      description: 'Schedule a personalized enterprise demo with GemSphere sales team. Get pricing, implementation timelines, and ROI projections for your digital transformation.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Sales — Get a Custom Enterprise Demo | GemSphere Technologies',
      description: 'Schedule a personalized enterprise demo with GemSphere sales team.',
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <Contact />;
}
