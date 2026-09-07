/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import PrivacyPolicy from '../../../views/PrivacyPolicy';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/privacy', locale);
  return {
    title: 'Privacy Policy | GemSphere Technologies',
    description: 'GemSphere Technologies Privacy Policy — learn how we collect, use, and protect your personal data in compliance with GDPR, CCPA, and global privacy regulations.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Privacy Policy | GemSphere Technologies',
      description: 'GemSphere Technologies Privacy Policy.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <PrivacyPolicy />;
}
