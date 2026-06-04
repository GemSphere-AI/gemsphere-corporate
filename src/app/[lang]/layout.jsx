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
import { generateOrganizationSchema, generateWebSiteSchema } from '../../utils/schemaGenerators';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  applicationName: 'GemSphere Technologies',
  title: {
    default: 'GemSphere Technologies — Engineering Intelligent Digital Enterprises',
    template: '%s | GemSphere Technologies',
  },
  description: 'GemSphere Technologies is a global AI-powered enterprise software company delivering 28+ unified digital platform modules across Commerce, Supply Chain, Finance, Operations, AI, and Collaboration for 170+ countries.',
  metadataBase: new URL('https://gemsphere.ai'),
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
    <html lang={lang} className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        
        {/* Organization Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema())
          }}
        />

        {/* WebSite Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema())
          }}
        />

        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4EWTL1GRQG"></script>
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
              gtag('config', 'G-4EWTL1GRQG', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Microsoft Customer Connect chatbot script */}
        <script
          type="text/javascript"
          src="https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js"
          id="chatbot"
          environmentId="d0804337-75d7-e516-874e-c28f97bb5ed0"
          crossOrigin="anonymous"
          async
        />
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
