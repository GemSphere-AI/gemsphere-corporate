"use client";

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from './seo/SchemaMarkup';

export default function Breadcrumbs({ items }) {
  const schema = generateBreadcrumbSchema(
    [{ name: 'Home', url: 'https://gemsphere.ai' }, ...items]
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-text-muted">
          <li>
            <a href="/" className="hover:text-brand-cyan transition-colors flex items-center">
              <Home size={14} className="mr-1" /> Home
            </a>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.name} className="flex items-center space-x-2">
                <ChevronRight size={14} />
                {isLast ? (
                  <span className="text-text-primary font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <a href={item.url} className="hover:text-brand-cyan transition-colors">
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
