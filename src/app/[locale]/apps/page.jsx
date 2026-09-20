/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

import AppsView from '../../../views/AppsView';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/apps', locale);
  return {
    title: 'Enterprise Mobile & Device Apps Suite | GemSphere Technologies',
    description: 'Explore GemSphere frontline mobile and terminal applications: Smart POS, WMS Barcode Scanner, Restaurant KDS Captain, and Field CRM for Android & enterprise tablets.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Enterprise Mobile & Device Apps Suite | GemSphere',
      description: 'Native Android & tablet applications built for store checkout, warehouse picking, restaurant order routing, and field operations.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Enterprise Mobile & Device Apps Suite | GemSphere',
      description: 'Native Android & tablet applications built for store checkout, warehouse picking, restaurant order routing, and field operations.',
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <AppsView />;
}
