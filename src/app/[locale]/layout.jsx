/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import '../../index.css';
import Script from 'next/script';
import ClientProviders from '../../components/ClientProviders';
import { generateOrganizationSchema, generateWebSiteSchema } from '../../utils/schemaGenerators';
import { Inter, Outfit, Noto_Sans_Arabic } from 'next/font/google';
import FloatingCTA from '../../components/FloatingCTA';
import FloatingWhatsApp from '../../components/FloatingWhatsApp';
import ExitIntentPopup from '../../components/ExitIntentPopup';
import GoogleAnalytics from '../../components/GoogleAnalytics';
import { ACTIVE_LOCALES, OG_LOCALE_MAP, getCanonicalAndHreflang } from '../../utils/seoHelpers';
import { SITE_CONFIG } from '../../config/siteConfig';

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

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-noto-arabic',
});

/**
 * generateMetadata — runs per-request, sets correct canonical and full reciprocal hreflang
 * alternates across all 7 officially supported global enterprise locales.
 */
export async function generateMetadata({ params }) {
  const { locale } = await params;
  const lang = locale || 'en';
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN
    ? `https://${process.env.NEXT_PUBLIC_DOMAIN}`
    : 'https://gemsphere.ai';

  const { canonical, languages } = getCanonicalAndHreflang('', lang);

  return {
    applicationName: 'GemSphere Technologies',
    title: {
      default: 'GemSphere Technologies — Engineering Intelligent Digital Enterprises',
      template: '%s | GemSphere Technologies',
    },
    description: 'GemSphere Technologies is a global AI-powered enterprise engineering company delivering 50+ modular capabilities across Commerce, Supply Chain, Finance, Operations, AI, and Collaboration for 170+ countries.',
    metadataBase: new URL(baseUrl),
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
      locale: OG_LOCALE_MAP[lang] || 'en_US',
      url: canonical,
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
      canonical,
      languages,
    },
    icons: {
      icon: '/favicon.ico',
    },
    other: {
      'google-play-app': `app-id=${SITE_CONFIG.mobileApp.packageName}`,
      'al:android:package': SITE_CONFIG.mobileApp.packageName,
      'al:android:app_name': SITE_CONFIG.mobileApp.appName,
      'al:android:url': `${baseUrl}/en/products/pos-system/`,
      'theme-color': '#030712',
    },
  };
}

export function generateStaticParams() {
  return ACTIVE_LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const lang = locale || 'en';
  const isRtl = lang === 'ar';

  return (
    <html
      lang={lang}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${outfit.variable} ${notoSansArabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" type="application/rss+xml" title="GemSphere Insights RSS Feed" href="/feed.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.analytics.gaMeasurementId}`}
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
              gtag('config', '${SITE_CONFIG.analytics.gaMeasurementId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Microsoft Customer Connect chatbot script */}
        <Script
          src={SITE_CONFIG.analytics.microsoftChatInitScript}
          id="chatbot"
          strategy="lazyOnload"
          environmentId={SITE_CONFIG.analytics.microsoftCustomerConnectId}
          data-environment-id={SITE_CONFIG.analytics.microsoftCustomerConnectId}
          data-hide-chat-button="true"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ClientProviders>
          <GoogleAnalytics />
          <main id="main-content">
            {children}
          </main>
          <FloatingCTA />
          <FloatingWhatsApp />
          <ExitIntentPopup />
        </ClientProviders>
      </body>
    </html>
  );
}
