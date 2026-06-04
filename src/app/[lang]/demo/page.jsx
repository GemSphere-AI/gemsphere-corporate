/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Demo from '../../../views/Demo';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Book a Free Demo — Request Custom Walkthrough',
    description: 'Book a free personalized demo of GemSphere modules. Walk through our AI, commerce, supply chain, and custom solution architectures with our solution engineers.',
    alternates: {
      canonical: `/${lang}/demo`,
      languages: {
        'en-us': `/en-us/demo`,
        'en-gb': `/en-gb/demo`,
        'en-ae': `/en-ae/demo`,
        'en-in': `/en-in/demo`,
        'de-de': `/de-de/demo`,
      }
    }
  };
}

export default function Page() {
  return <Demo />;
}
