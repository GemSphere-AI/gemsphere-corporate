/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import BlogList from '../../../views/BlogList';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/blog', locale);
  return {
    title: 'Engineering Blog — Insights on Enterprise AI & Cloud | GemSphere',
    description: "Read insights from GemSphere's engineering team on enterprise AI, cloud-native architecture, digital transformation strategies, and industry trends.",
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Engineering Blog — Insights on Enterprise AI & Cloud | GemSphere',
      description: "Read insights from GemSphere's engineering team on enterprise AI, cloud-native architecture, and digital transformation.",
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Engineering Blog | GemSphere Technologies',
      description: "Read insights from GemSphere's engineering team.",
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <BlogList />;
}
