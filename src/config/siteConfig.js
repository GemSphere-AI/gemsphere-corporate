/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

/* global process */

/**
 * GemSphere Technologies — Unified Master Configuration & Settings
 * Central single source of truth for all corporate URLs, app stores,
 * video links, social media, contact channels, API endpoints, and branding constants.
 * 
 * Update this file to modify any URL, contact point, video embed, or integration setting
 * across the entire GemSphere platform.
 */
export const SITE_CONFIG = {
  // Brand & Corporate Details
  brand: {
    name: 'GemSphere',
    legalName: 'GemSphere Technologies Private Limited',
    cin: 'U62011KA2025PTC211975',
    alternateNames: ['GemSphere', 'GemSphere.ai', 'GemSphere Technologies'],
    tagline: 'Engineering Intelligent Digital Enterprises',
    description: 'Global AI-powered enterprise software and custom SaaS engineering partner delivering 50+ modular capabilities across Commerce, Supply Chain, Finance, Operations, AI, and Collaboration for 170+ countries.',
    domain: 'gemsphere.ai',
    websiteUrl: 'https://gemsphere.ai',
    getBaseUrl: () => process.env.NEXT_PUBLIC_DOMAIN ? `https://${process.env.NEXT_PUBLIC_DOMAIN}` : 'https://gemsphere.ai',
    foundingYear: 2025,
    employeeRange: '10-50'
  },

  // Official Mobile App Distribution (Android Google Play Store ONLY)
  mobileApp: {
    platform: 'Android',
    storeName: 'Google Play Store',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gemsphere.pos',
    packageName: 'com.gemsphere.pos',
    appName: 'GemSphere Smart POS',
    ratingValue: '4.9',
    ratingCount: '128',
    ratingNumeric: 4.9,
    ratingCountNumeric: 128,
    version: '2.4.0',
    fileSize: '28MB',
    category: 'BusinessApplication',
    price: '0',
    priceCurrency: 'USD'
  },

  // Media, Assets & Video Links (Centralized Hub)
  media: {
    logo: '/logo.png',
    logoIcon: '/logo-icon.png',
    logoIconCropped: '/logo-icon-cropped.png',
    ogImage: '/og-image.jpg',
    heroMockup: '/hero_dashboard_mockup.png',
    neuralSpotlight: '/neural_engine_spotlight.png',
    // Video Embeds & Walkthrough URLs
    videos: {
      demoEmbed: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
      platformOverview: 'https://www.youtube.com/watch?v=gemsphere-platform',
      productWalkthrough: 'https://www.youtube.com/watch?v=gemsphere-demo',
      commerceWalkthrough: 'https://www.youtube.com/watch?v=gemsphere-commerce',
      hospitalityWalkthrough: 'https://www.youtube.com/watch?v=gemsphere-hospitality'
    },
    // Backwards-compatible aliases
    demoVideoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ',
    platformOverviewVideo: 'https://www.youtube.com/watch?v=gemsphere-platform',
    productWalkthroughVideo: 'https://www.youtube.com/watch?v=gemsphere-demo'
  },

  // Platform & SaaS Portal URLs
  portal: {
    domain: 'gemsphere.in',
    baseUrl: 'https://gemsphere.in',
    loginUrl: 'https://gemsphere.in/login',
    registerUrl: 'https://gemsphere.in/register',
    superAdminUrl: 'https://gemsphere.in/super-admin',
    forgotPasswordUrl: 'https://gemsphere.in/forgot-password',
    resetPasswordUrl: 'https://gemsphere.in/reset-password',
    onboardingUrl: 'https://gemsphere.in/onboarding'
  },

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://gemsphere.in',
    defaultTenant: process.env.NEXT_PUBLIC_TARGET_TENANT || 'system',
    endpoints: {
      testimonials: '/v1/testimonials',
      demoRequest: '/api/v1/public/leads/demo-request',
      trialRegistration: '/identity/auth/discovery/register'
    }
  },

  // Official Corporate Contact Points
  contact: {
    email: 'Contact@gemsphere.ai',
    supportEmail: 'support@gemsphere.ai',
    careersEmail: 'careers@gemsphere.ai',
    salesEmail: 'enterprise@gemsphere.ai',
    partnersEmail: 'partners@gemsphere.ai',
    securityEmail: 'security@gemsphere.ai',
    phone: '+91-789-258-5801',
    phoneRaw: '+917892585801',
    phoneDisplay: '+91 789 258 5801',
    phoneTel: 'tel:+917892585801',
    whatsapp: {
      number: '+917892585801',
      link: 'https://wa.me/917892585801?text=Hello%20GemSphere%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20enterprise%20solutions.',
      prefilledMessage: 'Hello GemSphere Team, I would like to know more about your enterprise solutions.'
    },
    address: {
      street: 'Garuda BHIVE Workspace, BTM Layout',
      city: 'Bengaluru',
      state: 'Karnataka',
      postalCode: '560076',
      country: 'India',
      countryCode: 'IN',
      fullFormatted: 'Garuda BHIVE Workspace, BTM Layout, Bengaluru, Karnataka 560076, India'
    }
  },

  // Social Profiles & Community
  social: {
    linkedin: 'https://www.linkedin.com/company/gem-sphere-ai/',
    twitter: 'https://x.com/GemSphereAI',
    twitterHandle: '@GemSphereAI',
    facebook: 'https://www.facebook.com/people/GemSphere-AI/61581897367281/',
    instagram: 'https://www.instagram.com/gemsphereai/',
    github: 'https://github.com/GemSphere-AI',
    youtube: 'https://www.youtube.com/@GemSphereAI',
    blogger: 'https://gemsphereai.blogspot.com/',
    getSameAsList: () => [
      'https://www.linkedin.com/company/gem-sphere-ai/',
      'https://x.com/GemSphereAI',
      'https://www.facebook.com/people/GemSphere-AI/61581897367281/',
      'https://www.instagram.com/gemsphereai/',
      'https://github.com/GemSphere-AI',
      'https://www.youtube.com/@GemSphereAI',
      'https://gemsphereai.blogspot.com/',
      'https://play.google.com/store/apps/details?id=com.gemsphere.pos'
    ]
  },

  // SEO, GEO & Machine-Readable Endpoints
  seo: {
    feedUrl: 'https://gemsphere.ai/feed.xml',
    sitemapUrl: 'https://gemsphere.ai/sitemap.xml',
    llmsUrl: 'https://gemsphere.ai/llms.txt',
    llmsFullUrl: 'https://gemsphere.ai/llms-full.txt',
    manifestUrl: 'https://gemsphere.ai/manifest.json',
    assetLinksUrl: 'https://gemsphere.ai/.well-known/assetlinks.json'
  },

  // Analytics & Third-Party Telemetry Keys
  analytics: {
    gaMeasurementId: 'G-4EWTL1GRQG',
    microsoftCustomerConnectId: 'd0804337-75d7-e516-874e-c28f97bb5ed0',
    microsoftChatInitScript: 'https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js'
  },

  // Global Supported Locales (7 Officially Active Locales)
  locales: {
    active: ['en', 'de', 'fr', 'es', 'ja', 'ar', 'pt-br'],
    default: 'en',
    rtlLocales: ['ar'],
    hreflangMap: {
      en: 'en',
      de: 'de',
      fr: 'fr',
      es: 'es',
      ja: 'ja',
      ar: 'ar',
      'pt-br': 'pt-BR'
    },
    ogLocaleMap: {
      en: 'en_US',
      de: 'de_DE',
      fr: 'fr_FR',
      es: 'es_ES',
      ja: 'ja_JP',
      ar: 'ar_AE',
      'pt-br': 'pt_BR'
    }
  }
};

export default SITE_CONFIG;
