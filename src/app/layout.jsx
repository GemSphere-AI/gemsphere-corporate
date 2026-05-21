/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import '../index.css';
import ClientProviders from '../components/ClientProviders';

export const metadata = {
  title: "GemSphere Technologies Ã¢â‚¬â€ Engineering Intelligent Digital Enterprises",
  description: "GemSphere Technologies is a global AI-powered enterprise software company delivering 28+ unified digital platform modules across Commerce, Supply Chain, Finance, Operations, AI, and Collaboration for 170+ countries.",
  metadataBase: new URL('https://gemsphere.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GemSphere Technologies Ã¢â‚¬â€ Engineering Intelligent Digital Enterprises",
    description: "Premium AI + Enterprise Software + SaaS Transformation Partner. 30+ enterprise capabilities. One unified digital ecosystem. Serving 170+ countries.",
    type: 'website',
    locale: 'en_US',
    url: 'https://gemsphere.ai',
    siteName: 'GemSphere Technologies',
    title: 'GemSphere | Enterprise Business Applications',
    description: 'A modular, composable platform architecture where every module works independently and integrates seamlessly.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GemSphere Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GemSphere | Enterprise Business Applications',
    description: 'A modular, composable platform architecture where every module works independently and integrates seamlessly.',
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

import FloatingCTA from '../components/FloatingCTA';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
