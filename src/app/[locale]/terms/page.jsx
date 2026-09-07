/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import React from 'react';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/terms', locale);
  return {
    title: 'Terms of Service | GemSphere Technologies',
    description: 'Read the Terms of Service for using GemSphere Technologies products and services.',
    alternates: {
      canonical,
      languages
    },
    openGraph: {
      title: 'Terms of Service | GemSphere Technologies',
      description: 'Read the Terms of Service for using GemSphere Technologies products and services.',
      type: 'website',
      url: canonical,
      images: ['/og-image.jpg']
    }
  };
}
export default function TermsOfService() {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 text-text-primary">Terms of Service</h1>
                <p className="text-text-tertiary text-sm mb-12">Last Updated: April 2025</p>
                <div className="prose-custom space-y-8 text-text-secondary leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold text-text-primary mb-3">1. Agreement to Terms</h2>
                        <p>By accessing or using GemSphere Technologies' website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-text-primary mb-3">2. Enterprise Software License</h2>
                        <p>Usage of our proprietary enterprise software modules is governed by separate Enterprise License Agreements (ELA). These terms apply primarily to website usage and general information.</p>
                    </section>
                    <section>
                        <h2 className="text-xl font-bold text-text-primary mb-3">3. Intellectual Property Rights</h2>
                        <p>The website and its original content, features, algorithms, architectures, and functionality are owned by GemSphere Technologies Private Limited and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
