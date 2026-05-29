
/* global process */
export const generateBreadcrumbSchema = (items) => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN ? `https://${process.env.NEXT_PUBLIC_DOMAIN}` : 'https://gemsphere.ai';
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  };
};

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

export const generateFAQSchema = (faqs) => {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question || faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer || faq.a
      }
    }))
  };
};
