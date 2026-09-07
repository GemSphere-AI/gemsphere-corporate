/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

import { SITE_CONFIG } from '../config/siteConfig';

export const getBaseUrl = () => SITE_CONFIG.brand.getBaseUrl();

/**
 * Generates interconnected Schema.org BreadcrumbList.
 */
export const generateBreadcrumbSchema = (items) => {
  const baseUrl = getBaseUrl();
  return {
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/#breadcrumb`,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  };
};

/**
 * Generates interconnected SoftwareApplication and Product schema for enterprise modules.
 */
export const generateProductSchema = (product, locale = 'en') => {
  const baseUrl = getBaseUrl();
  const slug = product.slug || product.id || (product.name ? product.name.toLowerCase().replace(/\s+/g, '-') : 'platform');
  const url = `${baseUrl}/${locale}/products/${slug}/`;

  return {
    "@type": ["SoftwareApplication", "Product"],
    "@id": `${url}#software`,
    "name": `GemSphere ${product.name}`,
    "url": url,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Cloud, Android",
    "description": product.description || product.desc || 'Enterprise software architecture engineered by GemSphere Technologies.',
    "provider": {
      "@id": `${baseUrl}/#organization`
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Custom enterprise deployment pricing based on modular architectural sizing.",
      "availability": "https://schema.org/InStock"
    }
  };
};

/**
 * Generates MobileApplication schema strictly for Android on Google Play Store from SITE_CONFIG.
 * (Zero iOS mentions in compliance with business reality)
 */
export const generateMobileApplicationSchema = ({
  name = SITE_CONFIG.mobileApp.appName,
  description = "Enterprise mobile POS and operations client for Android.",
  packageName = SITE_CONFIG.mobileApp.packageName
} = {}) => {
  const baseUrl = getBaseUrl();
  return {
    "@type": "MobileApplication",
    "@id": `${baseUrl}/#mobileapp`,
    "name": name,
    "operatingSystem": "Android",
    "applicationCategory": "BusinessApplication",
    "description": description,
    "installUrl": SITE_CONFIG.mobileApp.playStoreUrl,
    "downloadUrl": SITE_CONFIG.mobileApp.playStoreUrl,
    "softwareVersion": "2.4.0",
    "fileSize": "28MB",
    "screenshot": `${baseUrl}/hero_dashboard_mockup.png`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "128",
      "bestRating": "5",
      "worstRating": "1"
    },
    "publisher": {
      "@id": `${baseUrl}/#organization`
    }
  };
};

/**
 * Generates Schema.org FAQPage markup for questions and answers.
 */
export const generateFAQSchema = (faqs) => {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null;
  return {
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

/**
 * Generates WebSite schema connected to the root Organization node.
 */
export const generateWebSiteSchema = () => {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "name": SITE_CONFIG.brand.legalName,
    "url": baseUrl,
    "inLanguage": ["en", "de", "fr", "es", "ja", "ar", "pt-BR"],
    "publisher": {
      "@id": `${baseUrl}/#organization`
    },
    "sameAs": typeof SITE_CONFIG.social.getSameAsList === 'function' ? SITE_CONFIG.social.getSameAsList() : [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.blogger,
      SITE_CONFIG.mobileApp.playStoreUrl
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

/**
 * Generates the definitive Organization schema for GemSphere Technologies Private Limited.
 */
export const generateOrganizationSchema = () => {
  const baseUrl = getBaseUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": SITE_CONFIG.brand.legalName,
    "alternateName": SITE_CONFIG.brand.alternateNames,
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      "url": `${baseUrl}${SITE_CONFIG.media.logo}`,
      "caption": `${SITE_CONFIG.brand.name} Logo`
    },
    "image": `${baseUrl}${SITE_CONFIG.media.logo}`,
    "description": SITE_CONFIG.brand.description,
    "foundingDate": String(SITE_CONFIG.brand.foundingYear),
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": SITE_CONFIG.brand.employeeRange
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Enterprise Software Development",
      "Artificial Intelligence",
      "Generative Engine Optimization",
      "Cloud Engineering",
      "Supply Chain Management",
      "E-Commerce Platforms",
      "Custom Platform Engineering",
      "Domain-Driven Design (DDD)"
    ],
    "sameAs": typeof SITE_CONFIG.social.getSameAsList === 'function' ? SITE_CONFIG.social.getSameAsList() : [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.youtube,
      SITE_CONFIG.social.blogger,
      SITE_CONFIG.mobileApp.playStoreUrl
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": SITE_CONFIG.contact.address.city,
      "addressRegion": SITE_CONFIG.contact.address.state,
      "postalCode": SITE_CONFIG.contact.address.postalCode,
      "streetAddress": SITE_CONFIG.contact.address.street,
      "addressCountry": SITE_CONFIG.contact.address.countryCode
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": SITE_CONFIG.contact.email,
      "telephone": SITE_CONFIG.contact.phone,
      "availableLanguage": ["English", "German", "French", "Spanish", "Japanese", "Arabic", "Portuguese"]
    }
  };
};

/**
 * Generates JobPosting schema for Google for Jobs rich results (required by Careers view).
 */
export const generateJobPostingSchema = (jobs) => {
  const baseUrl = getBaseUrl();
  const jobList = Array.isArray(jobs) ? jobs : [jobs];
  return jobList.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.role || job.title,
    "description": job.description || `${job.role || job.title} position at GemSphere Technologies. Team: ${job.team || 'Engineering'}. Join us to build enterprise-scale AI and software platforms.`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "GemSphere Technologies",
      "value": job.id || (job.role ? job.role.toLowerCase().replace(/\s+/g, '-') : 'position')
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": SITE_CONFIG.brand.legalName,
      "sameAs": baseUrl,
      "logo": `${baseUrl}${SITE_CONFIG.media.logo}`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": SITE_CONFIG.contact.address.city,
        "addressRegion": SITE_CONFIG.contact.address.state,
        "addressCountry": SITE_CONFIG.contact.address.countryCode
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

/**
 * Generates ProfilePage schema for verified authors (E-E-A-T).
 */
export const generateProfilePageSchema = (author, locale = 'en') => {
  const baseUrl = getBaseUrl();
  const slug = author.slug || author.name.toLowerCase().replace(/\s+/g, '-');
  const url = `${baseUrl}/${locale}/authors/${slug}/`;

  return {
    "@type": "ProfilePage",
    "@id": `${url}#profile`,
    "url": url,
    "name": `${author.name} — Author Profile`,
    "mainEntity": {
      "@type": "Person",
      "@id": `${url}#author`,
      "name": author.name,
      "jobTitle": author.role || "Principal Architect & Technology Strategist",
      "description": author.bio || "Enterprise engineering leader specializing in high-scale distributed systems and AI architecture at GemSphere Technologies.",
      "worksFor": {
        "@id": `${baseUrl}/#organization`
      },
      "sameAs": author.socialLinks || []
    }
  };
};

/**
 * Generates rich BlogPosting / Article schema with author attribution.
 */
export const generateBlogPostingSchema = (post, locale = 'en') => {
  const baseUrl = getBaseUrl();
  let datePublished;
  try {
    datePublished = new Date(post.date).toISOString().split('T')[0];
  } catch (e) {
    datePublished = new Date().toISOString().split('T')[0];
  }

  const postUrl = `${baseUrl}/${locale}/blog/${post.id}/`;

  return {
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "mainEntityOfPage": postUrl,
    "inLanguage": locale,
    "image": `${baseUrl}${SITE_CONFIG.media.ogImage}`,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".blog-excerpt", ".blog-content"]
    },
    "author": {
      "@type": "Person",
      "name": post.author?.name || "GemSphere Technical Editorial Team",
      "jobTitle": post.author?.role || "Principal Enterprise Architect",
      "url": post.author?.slug ? `${baseUrl}/${locale}/authors/${post.author.slug}/` : `${baseUrl}/${locale}/about/`
    },
    "publisher": {
      "@id": `${baseUrl}/#organization`
    }
  };
};

/**
 * Master @graph generator that bundles schemas into a unified, interconnected knowledge graph.
 */
export const generateMasterGraphSchema = ({
  pageUrl,
  pageName,
  pageDescription,
  locale = 'en',
  breadcrumbs = null,
  product = null,
  faqs = null,
  article = null,
  author = null,
  mobileApp = null
}) => {
  const baseUrl = getBaseUrl();
  const graph = [];

  // 1. Root WebPage node
  const webPageNode = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    "url": pageUrl,
    "name": pageName,
    "description": pageDescription,
    "isPartOf": {
      "@id": `${baseUrl}/#website`
    },
    "inLanguage": locale
  };

  if (breadcrumbs && breadcrumbs.length > 0) {
    webPageNode.breadcrumb = {
      "@id": `${baseUrl}/#breadcrumb`
    };
    graph.push(generateBreadcrumbSchema(breadcrumbs));
  }

  graph.push(webPageNode);

  // 2. Product or Software node
  if (product) {
    graph.push(generateProductSchema(product, locale));
  }

  // 3. MobileApplication node (Android Play Store only)
  if (mobileApp) {
    graph.push(generateMobileApplicationSchema(mobileApp));
  }

  // 4. FAQPage node
  if (faqs && faqs.length > 0) {
    const faqSchema = generateFAQSchema(faqs);
    if (faqSchema) graph.push(faqSchema);
  }

  // 5. Article / Blog node
  if (article) {
    graph.push(generateBlogPostingSchema(article, locale));
  }

  // 6. Author node
  if (author) {
    graph.push(generateProfilePageSchema(author, locale));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
};
