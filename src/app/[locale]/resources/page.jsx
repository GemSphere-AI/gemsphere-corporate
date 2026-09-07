/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Resources from '../../../views/Resources';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/resources', locale);
  return {
    title: 'Enterprise Knowledge Hub — Resources & Whitepapers | GemSphere',
    description: 'Explore the GemSphere resource library featuring enterprise AI deployment checklists, cloud migration blueprints, and integration guides.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Enterprise Knowledge Hub — Resources & Whitepapers | GemSphere',
      description: 'Explore the GemSphere resource library featuring enterprise AI deployment checklists and guides.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Enterprise Knowledge Hub | GemSphere Technologies',
      description: 'Explore the GemSphere resource library.',
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <Resources />;
}
