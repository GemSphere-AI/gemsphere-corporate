/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Security from '../../../views/Security';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/security', locale);
  return {
    title: 'Enterprise Security — Zero-Trust & Dedicated Isolation Architecture | GemSphere',
    description: "Learn about GemSphere's enterprise-grade security architecture, GDPR adherence, zero-trust networking, dedicated database isolation, and compliance readiness.",
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Enterprise Security — Zero-Trust & Dedicated Isolation Architecture | GemSphere',
      description: "Learn about GemSphere's enterprise-grade security architecture, GDPR adherence, zero-trust networking, and dedicated database isolation.",
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Enterprise Security — Zero-Trust Architecture | GemSphere',
      description: "Learn about GemSphere's enterprise-grade security architecture and compliance readiness.",
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
    return <Security />;
}
