/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Resources from '../../../views/Resources';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Enterprise Knowledge Hub — Resources & Whitepapers',
    description: 'Explore the GemSphere resource library featuring enterprise AI deployment checklists, cloud migration blueprints, and integration guides.',
    alternates: {
      canonical: `/${lang}/resources`,
      languages: {
        'en-us': `/en-us/resources`,
        'en-gb': `/en-gb/resources`,
        'en-ae': `/en-ae/resources`,
        'en-in': `/en-in/resources`,
        'de-de': `/de-de/resources`,
      }
    }
  };
}

export default function Page() {
  return <Resources />;
}
