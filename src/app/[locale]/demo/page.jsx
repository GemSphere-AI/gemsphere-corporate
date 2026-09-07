/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Demo from '../../../views/Demo';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/demo', locale);
  return {
    title: 'Book a Free Demo — Request Custom Walkthrough | GemSphere',
    description: 'Book a free personalized demo of GemSphere modules. Walk through our AI, commerce, supply chain, and custom solution architectures with our solution engineers.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Book a Free Demo — Request Custom Walkthrough | GemSphere',
      description: 'Book a free personalized demo of GemSphere modules.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Book a Free Demo | GemSphere Technologies',
      description: 'Book a free personalized demo of GemSphere modules.',
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <Demo />;
}
