/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Services from '../../../views/Services';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/services', locale);
  return {
    title: 'Enterprise Services — Development, Cloud & DevOps | GemSphere Technologies',
    description: "Accelerate your transformation with GemSphere's professional services: software development, cloud engineering, DevOps, data analytics, and AI/ML consulting.",
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Enterprise Services — Development, Cloud & DevOps | GemSphere Technologies',
      description: "Accelerate your transformation with GemSphere's professional services: software development, cloud engineering, DevOps, data analytics, and AI/ML consulting.",
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Enterprise Services — Development, Cloud & DevOps | GemSphere Technologies',
      description: "Accelerate your transformation with GemSphere's professional services.",
      images: ['/og-image.jpg']
    }
  };
}

export default function Page() {
  return <Services />;
}
