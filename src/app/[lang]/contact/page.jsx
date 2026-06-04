/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Contact from '../../../views/Contact';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Contact Sales — Get a Custom Enterprise Demo',
    description: 'Schedule a personalized enterprise demo with GemSphere sales team. Get pricing, implementation timelines, and ROI projections for your digital transformation.',
    alternates: {
      canonical: `/${lang}/contact`,
      languages: {
        'en-us': `/en-us/contact`,
        'en-gb': `/en-gb/contact`,
        'en-ae': `/en-ae/contact`,
        'en-in': `/en-in/contact`,
        'de-de': `/de-de/contact`,
      }
    }
  };
}

export default function Page() {
  return <Contact />;
}
