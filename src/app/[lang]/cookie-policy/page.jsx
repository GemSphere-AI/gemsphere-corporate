/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import CookiePolicy from '../../../views/CookiePolicy';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Cookie Policy',
    description: 'GemSphere Technologies Cookie Policy — understand how we use cookies and similar tracking technologies on our website.',
    alternates: {
      canonical: `/${lang}/cookie-policy`,
      languages: {
        'en-us': `/en-us/cookie-policy`,
        'en-gb': `/en-gb/cookie-policy`,
        'en-ae': `/en-ae/cookie-policy`,
        'en-in': `/en-in/cookie-policy`,
        'de-de': `/de-de/cookie-policy`,
      }
    }
  };
}

export default function Page() {
  return <CookiePolicy />;
}
