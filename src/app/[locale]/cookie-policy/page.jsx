/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import CookiePolicy from '../../../views/CookiePolicy';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/cookie-policy', locale);
  return {
    title: 'Cookie Policy | GemSphere Technologies',
    description: 'GemSphere Technologies Cookie Policy — understand how we use cookies and similar tracking technologies on our website.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Cookie Policy | GemSphere Technologies',
      description: 'GemSphere Technologies Cookie Policy.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <CookiePolicy />;
}
