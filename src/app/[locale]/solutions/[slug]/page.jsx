/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import React from 'react';
import SolutionDetail from '../../../../views/SolutionDetail';
import { SOLUTIONS_MAP, SOLUTIONS_LIST } from '../../../../data/solutionsData';
import { getCanonicalAndHreflang, ACTIVE_LOCALES } from '../../../../utils/seoHelpers';
import { generateFAQSchema, generateBreadcrumbSchema, generateMobileApplicationSchema, getBaseUrl } from '../../../../utils/schemaGenerators';

export function generateStaticParams() {
  const paramsList = [];
  ACTIVE_LOCALES.forEach((locale) => {
    SOLUTIONS_LIST.forEach((sol) => {
      paramsList.push({ locale, slug: sol.slug });
    });
  });
  return paramsList;
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const sol = SOLUTIONS_MAP[slug];
  const { canonical, languages } = getCanonicalAndHreflang(`/solutions/${slug}`, locale);

  if (!sol) {
    return {
      title: 'Enterprise Solution | GemSphere Technologies',
      alternates: { canonical, languages }
    };
  }

  return {
    title: sol.title,
    description: sol.subtitle,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: sol.title,
      description: sol.subtitle,
      type: 'website',
      url: canonical,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: sol.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: sol.title,
      description: sol.subtitle,
      images: ['/og-image.jpg']
    }
  };
}

export default async function Page({ params }) {
  const { slug, locale } = await params;
  const sol = SOLUTIONS_MAP[slug];

  if (!sol) return null;

  const breadcrumbs = [
    { name: 'Home', url: `/${locale}/` },
    { name: 'Solutions', url: `/${locale}/solutions/` },
    { name: sol.badge, url: `/${locale}/solutions/${slug}/` }
  ];

  const baseUrl = getBaseUrl();
  const solUrl = `${baseUrl}/${locale}/solutions/${slug}/`;

  const solutionSchema = {
    "@context": "https://schema.org",
    "@type": ["Service", "SoftwareApplication"],
    "@id": `${solUrl}#solution`,
    "name": sol.headline,
    "description": sol.subtitle,
    "url": solUrl,
    "inLanguage": locale,
    "provider": {
      "@id": `${baseUrl}/#organization`
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "description": "Custom enterprise sizing & SLA deployment"
    }
  };

  const schemas = [
    generateBreadcrumbSchema(breadcrumbs),
    solutionSchema
  ];

  if (slug === 'omnichannel-retail-infrastructure') {
    schemas.push(generateMobileApplicationSchema());
  }

  if (sol.faqs && sol.faqs.length > 0) {
    const faqSchema = generateFAQSchema(sol.faqs);
    if (faqSchema) schemas.push(faqSchema);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <SolutionDetail solution={sol} />
    </>
  );
}
