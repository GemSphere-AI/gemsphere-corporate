/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import React from 'react';
import AuthorProfile from '../../../../views/AuthorProfile';
import { AUTHORS, AUTHORS_MAP } from '../../../../data/authorsData';
import { getCanonicalAndHreflang, ACTIVE_LOCALES } from '../../../../utils/seoHelpers';
import { generateProfilePageSchema, generateBreadcrumbSchema } from '../../../../utils/schemaGenerators';

export function generateStaticParams() {
  const paramsList = [];
  ACTIVE_LOCALES.forEach((locale) => {
    AUTHORS.forEach((author) => {
      paramsList.push({ locale, slug: author.slug });
    });
  });
  return paramsList;
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const author = AUTHORS_MAP[slug];
  const { canonical, languages } = getCanonicalAndHreflang(`/authors/${slug}`, locale);

  if (!author) {
    return {
      title: 'Author Profile | GemSphere Technologies',
      alternates: { canonical, languages }
    };
  }

  const title = `${author.name} — ${author.role} | GemSphere Technologies`;
  const description = author.bio;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title,
      description,
      type: 'profile',
      url: canonical,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: author.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.jpg']
    }
  };
}

export default async function Page({ params }) {
  const { slug, locale } = await params;
  const author = AUTHORS_MAP[slug];

  if (!author) return null;

  const breadcrumbs = [
    { name: 'Home', url: `/${locale}/` },
    { name: 'Authors', url: `/${locale}/about/` },
    { name: author.name, url: `/${locale}/authors/${slug}/` }
  ];

  const schemas = [
    generateBreadcrumbSchema(breadcrumbs),
    generateProfilePageSchema(author, locale)
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <AuthorProfile author={author} />
    </>
  );
}
