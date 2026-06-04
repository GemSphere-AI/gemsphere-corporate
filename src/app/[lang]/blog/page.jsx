/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import BlogList from '../../../views/BlogList';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Engineering Blog — Insights on Enterprise AI & Cloud',
    description: "Read insights from GemSphere's engineering team on enterprise AI, cloud-native architecture, digital transformation strategies, and industry trends.",
    alternates: {
      canonical: `/${lang}/blog`,
      languages: {
        'en-us': `/en-us/blog`,
        'en-gb': `/en-gb/blog`,
        'en-ae': `/en-ae/blog`,
        'en-in': `/en-in/blog`,
        'de-de': `/de-de/blog`,
      }
    }
  };
}

export default function Page() {
  return <BlogList />;
}
