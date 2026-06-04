/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import PrivacyPolicy from '../../../views/PrivacyPolicy';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Privacy Policy',
    description: 'GemSphere Technologies Privacy Policy — learn how we collect, use, and protect your personal data in compliance with GDPR, CCPA, and global privacy regulations.',
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: {
        'en-us': `/en-us/privacy`,
        'en-gb': `/en-gb/privacy`,
        'en-ae': `/en-ae/privacy`,
        'en-in': `/en-in/privacy`,
        'de-de': `/de-de/privacy`,
      }
    }
  };
}

export default function Page() {
  return <PrivacyPolicy />;
}
