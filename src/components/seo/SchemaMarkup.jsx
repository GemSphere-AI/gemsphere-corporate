import React from 'react';

export default function SchemaMarkup({ schema }) {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper functions to generate specific schemas
export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": `GemSphere ${product.name}`,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, Cloud",
  "description": product.description || product.desc,
  "provider": {
    "@type": "Organization",
    "name": "GemSphere Technologies"
  }
});
