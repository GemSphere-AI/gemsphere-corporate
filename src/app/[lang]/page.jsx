/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Home from '../../views/Home';

export function generateStaticParams() {
  return [
    { lang: 'en-us' },
    { lang: 'en-gb' },
    { lang: 'en-ae' },
    { lang: 'en-in' },
    { lang: 'de-de' }
  ];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'GemSphere Technologies | Engineering Intelligent Digital Enterprises',
    description: 'Premium AI + Enterprise Software + SaaS Transformation Partner.',
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en-us': `/en-us`,
        'en-gb': `/en-gb`,
        'en-ae': `/en-ae`,
        'en-in': `/en-in`,
        'de-de': `/de-de`,
      }
    }
  };
}

export default function Page() {
  return <Home />;
}
