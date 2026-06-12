/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import '../index.css';
import Script from 'next/script';
import ClientProviders from '../components/ClientProviders';
import { generateOrganizationSchema, generateWebSiteSchema } from '../utils/schemaGenerators';
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
  description: 'GemSphere Technologies is a global AI-powered enterprise engineering company delivering 50+ modular capabilities across Commerce, Supply Chain, Finance, Operations, AI, and Collaboration for 170+ countries.',
  metadataBase: new URL('https://gemsphere.ai'),
  keywords: [
    'enterprise software', 'digital transformation', 'AI platform',
    'commerce platform', 'supply chain management', 'ERP software',
    'custom enterprise engineering', 'cloud ERP', 'business automation',
    'GemSphere', 'enterprise AI', 'modular engineering',
  ],
  openGraph: {
    title: 'GemSphere Technologies — Engineering Intelligent Digital Enterprises',
    description: 'Premium AI, Enterprise SaaS, & Custom Software Engineering Partner. 50+ enterprise capabilities. One unified digital ecosystem. Serving 170+ countries.',
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
    description: 'Premium AI, Enterprise SaaS, & Custom Software Engineering Partner. 50+ enterprise capabilities. Serving 170+ countries.',
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
  alternates: {
    canonical: 'https://gemsphere.ai',
    languages: {
      'en-US': 'https://gemsphere.ai/en-us',
      'de-DE': 'https://gemsphere.ai/de',
    },
  },
};

import FloatingCTA from '../components/FloatingCTA';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import AnnouncementBar from '../components/AnnouncementBar';
import ExitIntentPopup from '../components/ExitIntentPopup';
import GoogleAnalytics from '../components/GoogleAnalytics';


export default async function RootLayout({ children, params }) {
  const lang = 'en';
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

        {/* Google Analytics 4 — loaded via next/script for proper hydration */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4EWTL1GRQG"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
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
        <Script
          src="https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js"
          id="chatbot"
          strategy="lazyOnload"
          environmentId="d0804337-75d7-e516-874e-c28f97bb5ed0"
          data-environment-id="d0804337-75d7-e516-874e-c28f97bb5ed0"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ClientProviders>
          <GoogleAnalytics />
          {children}
          <FloatingCTA />
          <FloatingWhatsApp />
          <ExitIntentPopup />
        </ClientProviders>
      </body>
    </html>
  );
}
