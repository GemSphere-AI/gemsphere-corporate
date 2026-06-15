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
        { locale: 'en' },
        { locale: 'de' },
        { locale: 'fr' },
        { locale: 'es' },
        { locale: 'ja' }
    ];
}

export async function generateMetadata({ params }) {
  return {
    title: 'GemSphere Technologies | Engineering Intelligent Digital Enterprises',
    description: 'Premium AI + Enterprise Software + SaaS Transformation Partner.',
    alternates: {
            canonical: '/'
            }
  };
}

export default function Page() {
  return <Home />;
}
