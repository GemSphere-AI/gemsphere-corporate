/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import '../../index.css';
import ClientProviders from '../../components/ClientProviders';

export const metadata = {
  title: {
    default: 'GemSphere Technologies — Engineering Intelligent Digital Enterprises',
    template: '%s | GemSphere Technologies',
  },
  description: 'GemSphere Technologies is a global AI-powered enterprise software company delivering 28+ unified digital platform modules across Commerce, Supply Chain, Finance, Operations, AI, and Collaboration for 170+ countries.',
  metadataBase: new URL('https://gemsphere.ai'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-us',
      'en-GB': '/en-gb',
      'en-AE': '/en-ae',
      'en-IN': '/en-in',
      'de-DE': '/de-de',
    },
  },
  keywords: [
    'enterprise software', 'digital transformation', 'AI platform',
    'commerce platform', 'supply chain management', 'ERP software',
    'SaaS enterprise', 'cloud ERP', 'business automation',
    'GemSphere', 'enterprise AI', 'modular platform',
  ],
  openGraph: {
    title: 'GemSphere Technologies — Engineering Intelligent Digital Enterprises',
    description: 'Premium AI + Enterprise Software + SaaS Transformation Partner. 30+ enterprise capabilities. One unified digital ecosystem. Serving 170+ countries.',
    type: 'website',
    locale: 'en_US',
    url: 'https://gemsphere.ai',
    siteName: 'GemSphere Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GemSphere Technologies — Engineering Intelligent Digital Enterprises',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GemSphere Technologies — Engineering Intelligent Digital Enterprises',
    description: 'Premium AI + Enterprise Software + SaaS Transformation Partner. 30+ enterprise capabilities. Serving 170+ countries.',
    creator: '@GemSphereAI',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export function generateStaticParams() {
    return [
        { lang: 'en-us' },
        { lang: 'en-gb' },
        { lang: 'en-ae' },
        { lang: 'en-in' },
        { lang: 'de-de' }
    ];
}

import FloatingCTA from '../../components/FloatingCTA';

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        
        {/* Organization Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GemSphere Technologies Private Limited",
              "alternateName": "GemSphere",
              "url": "https://gemsphere.ai",
              "description": "Premium AI + Enterprise Software + SaaS Transformation Partner.",
              "foundingDate": "2024",
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
                "SaaS Product Development"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "email": "sales@gemsphere.ai",
                "availableLanguage": "English"
              }
            })
          }}
        />

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              var consent = 'denied';
              try {
                var stored = localStorage.getItem('gemsphere-cookie-consent');
                if (stored) {
                  var parsed = JSON.parse(stored);
                  if (parsed.analytics) consent = 'granted';
                }
              } catch(e) {}
              
              gtag('consent', 'default', {
                'analytics_storage': consent,
                'ad_storage': consent,
                'ad_user_data': consent,
                'ad_personalization': consent
              });
              
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_STRING_HERE" />
      </head>
      <body>
        <ClientProviders>
          {children}
          <FloatingCTA />
        </ClientProviders>
      </body>
    </html>
  );
}
