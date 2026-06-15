
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

export const generateWebSiteSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN ? `https://${process.env.NEXT_PUBLIC_DOMAIN}` : 'https://gemsphere.ai';
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GemSphere Technologies",
    "url": baseUrl,
    "sameAs": [
      "https://www.linkedin.com/company/gem-sphere-ai/",
      "https://x.com/GemSphereAI",
      "https://www.facebook.com/people/GemSphere-AI/61581897367281/",
      "https://www.instagram.com/gemsphereai/"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/en/blog?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
};

export const generateOrganizationSchema = () => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN ? `https://${process.env.NEXT_PUBLIC_DOMAIN}` : 'https://gemsphere.ai';
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GemSphere Technologies Private Limited",
    "alternateName": "GemSphere",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Premium AI, Enterprise SaaS & Custom Software Engineering Partner.",
    "foundingDate": "2025",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50+"
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Enterprise Software Development",
      "Artificial Intelligence",
      "Cloud Engineering",
      "Supply Chain Management",
      "E-Commerce Platforms",
      "Custom Platform Development"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/gem-sphere-ai/",
      "https://x.com/GemSphereAI",
      "https://www.facebook.com/people/GemSphere-AI/61581897367281/",
      "https://www.instagram.com/gemsphereai/",
      "https://gemsphereai.blogspot.com/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560076",
      "streetAddress": "Garuda BHIVE Workspace, BTM Layout",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "Contact@gemsphere.ai",
      "telephone": "+91-789-258-5801",
      "availableLanguage": ["English", "German", "French", "Spanish", "Japanese"]
    }
  };
};

/**
 * generateJobPostingSchema — enables Google for Jobs rich results.
 * Pass a job object with { role, team, loc, type, description, datePosted, validThrough }.
 */
export const generateJobPostingSchema = (jobs) => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN ? `https://${process.env.NEXT_PUBLIC_DOMAIN}` : 'https://gemsphere.ai';
  return jobs.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.role,
    "description": job.description || `${job.role} position at GemSphere Technologies. Team: ${job.team}. Join us to build enterprise-scale AI and software platforms.`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "GemSphere Technologies",
      "value": job.id || job.role.toLowerCase().replace(/\s+/g, '-')
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": "GemSphere Technologies Private Limited",
      "sameAs": baseUrl,
      "logo": `${baseUrl}/logo.png`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "jobLocationType": "TELECOMMUTE",
    "employmentType": "FULL_TIME",
    "datePosted": job.datePosted || "2026-06-01",
    "validThrough": job.validThrough || "2026-12-31",
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "unitText": "YEAR"
      }
    }
  }));
};

export const generateBlogPostingSchema = (post) => {
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN ? `https://${process.env.NEXT_PUBLIC_DOMAIN}` : 'https://gemsphere.ai';
  let datePublished;
  try {
    datePublished = new Date(post.date).toISOString().split('T')[0];
  } catch (e) {
    datePublished = new Date().toISOString().split('T')[0];
  }
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "mainEntityOfPage": `${baseUrl}/blog/${post.id}`,
    "image": `${baseUrl}/og-image.jpg`,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "GemSphere Editorial Team",
      "jobTitle": post.author?.role || "Principal Architect"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GemSphere Technologies Private Limited",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    }
  };
};
