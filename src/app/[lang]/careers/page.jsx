/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Careers from '../../../views/Careers';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Careers — Join Our Global Engineering Team',
    description: 'Explore career opportunities at GemSphere Technologies. Join a team of world-class engineers building the future of enterprise software.',
    alternates: {
      canonical: `/${lang}/careers`,
      languages: {
        'en-us': `/en-us/careers`,
        'en-gb': `/en-gb/careers`,
        'en-ae': `/en-ae/careers`,
        'en-in': `/en-in/careers`,
        'de-de': `/de-de/careers`,
      }
    }
  };
}

export default function Page() {
  return <Careers />;
}
