/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import RoiCalculator from '../../../views/RoiCalculator';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/roi-calculator', locale);
  return {
    title: 'Enterprise ROI Calculator — Measure Cost Savings | GemSphere',
    description: 'Use the interactive GemSphere ROI Calculator to estimate licensing cost reductions, manual hour savings, and total return on investment.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Enterprise ROI Calculator — Measure Cost Savings | GemSphere',
      description: 'Use the interactive GemSphere ROI Calculator to estimate licensing cost reductions and ROI.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Enterprise ROI Calculator | GemSphere',
      description: 'Estimate enterprise cost reductions and ROI with GemSphere.',
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <RoiCalculator />;
}
