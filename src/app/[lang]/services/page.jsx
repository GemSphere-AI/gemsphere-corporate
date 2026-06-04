/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Services from '../../../views/Services';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: 'Enterprise Services — Development, Cloud & DevOps',
    description: "Accelerate your transformation with GemSphere's professional services: software development, cloud engineering, DevOps, data analytics, and AI/ML consulting.",
    alternates: {
      canonical: `/${lang}/services`,
      languages: {
        'en-us': `/en-us/services`,
        'en-gb': `/en-gb/services`,
        'en-ae': `/en-ae/services`,
        'en-in': `/en-in/services`,
        'de-de': `/de-de/services`,
      }
    }
  };
}

export default function Page() {
  return <Services />;
}
