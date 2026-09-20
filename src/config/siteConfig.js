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
    employeeRange: '10-50',
    googlePlayDevUrl: 'https://play.google.com/store/apps/dev?id=5307203924209575187'
  },

  // Official Mobile App Distribution (Verified Published Google Play Store Suite)
  apps: [
    {
      id: 'gemsphere-commerce',
      appName: 'GemSphere Commerce',
      tagline: 'All-in-one ecommerce platform to manage products, orders & inventory',
      category: 'Commerce & Retail',
      platform: 'Android',
      supportedDevices: 'Android Smartphones, Tablets & POS Terminals',
      packageName: 'com.gemsphere.mobile',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gemsphere.mobile',
      developerUrl: 'https://play.google.com/store/apps/dev?id=5307203924209575187',
      icon: 'https://play-lh.googleusercontent.com/IzSsl_mt6GhDwPBIayEk1urFxoGLHTimGuoHFsZo-tbmdMxpHFaadCgUY7YGxa5Dd4LGvkOg7kHEWkCiMB6YLw=w240-h480-rw',
      ratingValue: '4.9',
      ratingCount: '120+',
      version: 'v2.4.0',
      fileSize: '26.4 MB',
      status: 'AVAILABLE',
      productSlugs: ['commerce', 'retail', 'pos-system', 'smart-pos', 'point-of-sale', 'inventory-management'],
      features: [
        'Multi-channel sales order management with real-time sync',
        'Offline-first product catalog & barcode inventory counting',
        'Direct customer invoice, billing & receipt generation',
        'Instant multi-store inventory updates across warehouses'
      ]
    },
    {
      id: 'gemsphere-crm',
      appName: 'GemSphere CRM',
      tagline: 'Sales CRM and lead tracker for business pipeline and customer management',
      category: 'CRM & Sales',
      platform: 'Android',
      supportedDevices: 'Android Smartphones & Enterprise Tablets',
      packageName: 'com.gemsphere.crm',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gemsphere.crm',
      developerUrl: 'https://play.google.com/store/apps/dev?id=5307203924209575187',
      icon: 'https://play-lh.googleusercontent.com/nr62bDiLmIaaItNucIorna5wLs6ZTUuUPZ8KwYYPApeEZzo5ebfj1i7FDhEYDNU30Q3qStgW4EMXMuNl0UANU-s=w240-h480-rw',
      ratingValue: '4.9',
      ratingCount: '150+',
      version: 'v1.6.2',
      fileSize: '22.0 MB',
      status: 'AVAILABLE',
      productSlugs: ['crm', 'lead-intelligence', 'field-sales', 'sales-pipeline', 'customer-service'],
      features: [
        'End-to-end B2B sales pipeline & deal stage progression',
        'Real-time customer interaction timelines & call notes',
        'Automated lead qualification and status notifications',
        'Omnichannel prospect follow-ups via WhatsApp & Email'
      ]
    },
    {
      id: 'gemsphere-hospitality',
      appName: 'GemSphere Hospitality',
      tagline: 'All-in-one hospitality platform for restaurants, hotels, cafés & POS management',
      category: 'Hospitality & Dining',
      platform: 'Android',
      supportedDevices: 'Android Tablets, KDS Wall Displays, Handheld POS & Terminals',
      packageName: 'com.gemsphere.hospitality',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gemsphere.hospitality',
      developerUrl: 'https://play.google.com/store/apps/dev?id=5307203924209575187',
      icon: 'https://play-lh.googleusercontent.com/4v6P-w-kpBHoBpYjkfh3LC0Wy57yTcg_STzZcB6JqQJRul8moBNWcNHFMCMC7nK8tCakFvVtL8OQVC35OCwaTg=w240-h480-rw',
      ratingValue: '4.9',
      ratingCount: '100+',
      version: 'v2.1.2',
      fileSize: '28.1 MB',
      status: 'AVAILABLE',
      productSlugs: ['hospitality', 'restaurant-pos', 'kitchen-display', 'hotel-management'],
      features: [
        'Visual floor plan table management & guest reservations',
        'Live Kitchen Order Ticket (KOT) firing with order timers',
        'Waiter captain handheld ordering with multi-tender checkout',
        'Room billing, dining split payment & thermal receipt printing'
      ]
    },
    {
      id: 'gemdocs',
      appName: 'GemDocs',
      tagline: 'Read, edit & manage PDF, Word, Excel and PowerPoint files offline',
      category: 'Productivity & Documents',
      platform: 'Android',
      supportedDevices: 'Android Smartphones, Tablets & ChromeOS',
      packageName: 'com.gemsphere.gemdocs',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gemsphere.gemdocs',
      developerUrl: 'https://play.google.com/store/apps/dev?id=5307203924209575187',
      icon: 'https://play-lh.googleusercontent.com/EK5S2tEt6_MBtFbE9qwWrMMwZVu2nkrNfMYxDFQVq8efbTKleuKsKq9_Ohe3XGNswBhzJSg8uBIRN_KRgs-khQ=w240-h480-rw',
      ratingValue: '4.9',
      ratingCount: '500+',
      version: 'v3.2.0',
      fileSize: '31.5 MB',
      status: 'AVAILABLE',
      productSlugs: ['productivity', 'documents', 'pdf-editor', 'office-suite'],
      features: [
        'Offline PDF annotation, high-speed reader & digital signing',
        'Full document viewing & editing for Word, Excel and PPT',
        'Document scanner with automatic edge detection & OCR',
        'Encrypted local storage with cloud backup export'
      ]
    },
    {
      id: 'gps-camera',
      appName: 'GPS Map Camera',
      tagline: 'Stamp your pictures with accurate GPS location, date, and time tags',
      category: 'Field Operations & Utilities',
      platform: 'Android',
      supportedDevices: 'Android Smartphones & Rugged Field Devices',
      packageName: 'com.gemsphere.gpscamera',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gemsphere.gpscamera',
      developerUrl: 'https://play.google.com/store/apps/dev?id=5307203924209575187',
      icon: 'https://play-lh.googleusercontent.com/y5ok961BYUuilwOKmDvBjMLRu4I0T47ZgWVboxm633PZ2A_jIhSLeBj-l12HyzcxLLZYqDumvrwMPPnc99udsA=w240-h480-rw',
      ratingValue: '4.9',
      ratingCount: '200+',
      version: 'v2.0.4',
      fileSize: '18.7 MB',
      status: 'AVAILABLE',
      productSlugs: ['field-operations', 'auditing', 'geotag', 'gps-camera'],
      features: [
        'Automatic GPS latitude, longitude & address watermarking',
        'Customizable timestamp formats for legal & audit records',
        'Field proof verification for deliveries, audits & inspections',
        'Works completely offline with cached satellite coordinates'
      ]
    },
    {
      id: 'chess-sphere',
      appName: 'Chess',
      tagline: 'Offline chess with intelligent AI engine. Easy, Moderate & Hard modes',
      category: 'Strategy & Gaming',
      platform: 'Android',
      supportedDevices: 'Android Smartphones & Tablets',
      packageName: 'com.gemsphere.chess',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gemsphere.chess',
      developerUrl: 'https://play.google.com/store/apps/dev?id=5307203924209575187',
      icon: 'https://play-lh.googleusercontent.com/Pgnaqpqv88vBvnzFfQzuK_iwNDkt1LCmQajNjypIUyVK-e_BN9rnrBTb1-PSnvz_PWsExEWZ1gz70gWlRafjO6g=w240-h480-rw',
      ratingValue: '4.9',
      ratingCount: '300+',
      version: 'v1.4.0',
      fileSize: '16.2 MB',
      status: 'AVAILABLE',
      productSlugs: ['chess', 'gaming', 'strategy-games'],
      features: [
        'Intelligent offline AI engine with adaptive difficulty levels',
        '2-player pass-and-play local board mode',
        'Move undo, game history replay & tactical hint guidance',
        'Clean, minimalist board UI with zero distractions'
      ]
    },
    {
      id: 'ludo-sphere',
      appName: 'Ludo Sphere',
      tagline: 'Play classic Ludo anytime! Fun board game with friends or offline mode',
      category: 'Social & Gaming',
      platform: 'Android',
      supportedDevices: 'Android Smartphones & Tablets',
      packageName: 'com.gemsphere.ludo',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gemsphere.ludo',
      developerUrl: 'https://play.google.com/store/apps/dev?id=5307203924209575187',
      icon: 'https://play-lh.googleusercontent.com/0LFYW0HG7XYjVvdZ1xIOtqoQJP5JZ4X9uY4ASQ5qtdC-4oPhLydrMPRZE0S7iyQM579oZ0LnbT9FxQ5Rlji9jw=w240-h480-rw',
      ratingValue: '5.0',
      ratingCount: '250+',
      version: 'v1.2.0',
      fileSize: '19.4 MB',
      status: 'AVAILABLE',
      productSlugs: ['ludo', 'gaming', 'board-games'],
      features: [
        'Classic 2 to 4-player board mechanics with realistic dice rolls',
        'Offline play against computer AI or with friends & family',
        'Smooth animations, interactive tokens and vibrant board themes',
        'Lightweight, fast battery-efficient performance'
      ]
    }
  ],

  // Backwards-compatible primary mobile app reference
  mobileApp: {
    platform: 'Android',
    storeName: 'Google Play Store',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.gemsphere.mobile',
    developerUrl: 'https://play.google.com/store/apps/dev?id=5307203924209575187',
    packageName: 'com.gemsphere.mobile',
    appName: 'GemSphere Commerce',
    ratingValue: '4.9',
    ratingCount: '120+'
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
    salesEmail: 'sales@gemsphere.ai',
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
    blogger: 'https://gemsphereai.blogspot.com/'
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
