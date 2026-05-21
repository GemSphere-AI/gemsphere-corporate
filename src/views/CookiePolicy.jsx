/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";
import React from 'react';
import LocalizedLink from '../components/LocalizedLink';

import ScrollReveal from '../components/ScrollReveal';

const CookiePolicy = () => {
    return (
        <div className="min-h-screen">


            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollReveal direction="up">
                        <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 text-text-primary">Cookie Policy</h1>
                        <p className="text-text-tertiary text-sm mb-12">Last Updated: April 2025</p>
                    </ScrollReveal>

                    <div className="prose-custom space-y-8 text-text-secondary leading-relaxed">
                        <ScrollReveal direction="up" delay={0.1}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">1. What Are Cookies?</h2>
                                <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give information to the site owners.</p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.15}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">2. How We Use Cookies</h2>
                                <p className="mb-3">GemSphere Technologies Private Limited uses cookies and similar technologies for the following purposes:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-text-primary">Essential Cookies:</strong> Required for core website functionality such as security, network management, and accessibility. These cannot be disabled.</li>
                                    <li><strong className="text-text-primary">Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting data anonymously. We use Google Analytics (GA4) for this purpose.</li>
                                    <li><strong className="text-text-primary">Functional Cookies:</strong> Enable enhanced features such as language preferences and personalized content.</li>
                                    <li><strong className="text-text-primary">Marketing Cookies:</strong> Used to track visitors across websites and display ads that are relevant and engaging.</li>
                                </ul>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.2}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">3. Cookies We Use</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b border-brand-border">
                                                <th className="text-left py-3 px-4 text-text-primary font-bold">Cookie</th>
                                                <th className="text-left py-3 px-4 text-text-primary font-bold">Provider</th>
                                                <th className="text-left py-3 px-4 text-text-primary font-bold">Purpose</th>
                                                <th className="text-left py-3 px-4 text-text-primary font-bold">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-text-secondary">
                                            <tr className="border-b border-brand-border">
                                                <td className="py-3 px-4">_ga</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">Distinguishes unique users</td>
                                                <td className="py-3 px-4">2 years</td>
                                            </tr>
                                            <tr className="border-b border-brand-border">
                                                <td className="py-3 px-4">_ga_*</td>
                                                <td className="py-3 px-4">Google Analytics</td>
                                                <td className="py-3 px-4">Stores and counts page views</td>
                                                <td className="py-3 px-4">2 years</td>
                                            </tr>
                                            <tr className="border-b border-brand-border">
                                                <td className="py-3 px-4">theme</td>
                                                <td className="py-3 px-4">GemSphere</td>
                                                <td className="py-3 px-4">Stores light/dark preference</td>
                                                <td className="py-3 px-4">Persistent</td>
                                            </tr>
                                            <tr className="border-b border-brand-border">
                                                <td className="py-3 px-4">i18nextLng</td>
                                                <td className="py-3 px-4">GemSphere</td>
                                                <td className="py-3 px-4">Stores language preference</td>
                                                <td className="py-3 px-4">Persistent</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.25}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">4. Managing Cookies</h2>
                                <p className="mb-3">You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>View what cookies are stored and delete them individually.</li>
                                    <li>Block third-party cookies.</li>
                                    <li>Block cookies from specific sites.</li>
                                    <li>Block all cookies.</li>
                                    <li>Delete all cookies when you close your browser.</li>
                                </ul>
                                <p className="mt-3">Please note that blocking or deleting cookies may impact your experience on our website.</p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.3}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">5. Changes to This Policy</h2>
                                <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We encourage you to review this page periodically.</p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.35}>
                            <section className="glass-card p-8 rounded-2xl">
                                <h2 className="text-xl font-bold text-text-primary mb-3">6. Contact Us</h2>
                                <p className="mb-2">If you have questions about our use of cookies, contact us at:</p>
                                <p>Email: <LocalizedLink href="mailto:Contact@gemsphere.ai" className="text-brand-cyan hover:underline">Contact@gemsphere.ai</LocalizedLink></p>
                                <p>Phone: <LocalizedLink href="tel:+917892585801" className="text-brand-cyan hover:underline">+91 7892585801</LocalizedLink></p>
                            </section>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CookiePolicy;
