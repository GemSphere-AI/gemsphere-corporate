/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Careers from '../../../views/Careers';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/careers', locale);
  return {
    title: 'Careers — Join Our Global Engineering Team | GemSphere Technologies',
    description: 'Explore career opportunities at GemSphere Technologies. Join a team of world-class engineers building the future of enterprise software.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Careers — Join Our Global Engineering Team | GemSphere Technologies',
      description: 'Explore career opportunities at GemSphere Technologies. Join a team of world-class engineers building the future of enterprise software.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Careers — Join Our Global Engineering Team | GemSphere Technologies',
      description: 'Explore career opportunities at GemSphere Technologies.',
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <Careers />;
}
