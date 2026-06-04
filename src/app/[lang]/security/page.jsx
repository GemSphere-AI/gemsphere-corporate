/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Security from '../../../views/Security';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Enterprise Security — GDPR & Zero-Trust Architecture',
    description: "Learn about GemSphere's military-grade security architecture, GDPR adherence, zero-trust networking, and enterprise data protection measures.",
    alternates: {
      canonical: `/${lang}/security`,
      languages: {
        'en-us': `/en-us/security`,
        'en-gb': `/en-gb/security`,
        'en-ae': `/en-ae/security`,
        'en-in': `/en-in/security`,
        'de-de': `/de-de/security`,
      }
    }
  };
}

export default function Page() {
    return <Security />;
}
