/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import AISolutions from '../../../views/AISolutions';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/ai-solutions', locale);
  return {
    title: 'AI Solutions — Intelligent Automation & Machine Learning | GemSphere',
    description: "Explore GemSphere's enterprise AI capabilities: intelligent automation, predictive analytics, NLP, computer vision, and ML-powered business workflows.",
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'AI Solutions — Intelligent Automation & Machine Learning | GemSphere',
      description: "Explore GemSphere's enterprise AI capabilities: intelligent automation, predictive analytics, and ML-powered business workflows.",
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Solutions — Intelligent Automation | GemSphere',
      description: "Explore GemSphere's enterprise AI capabilities.",
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <AISolutions />;
}
