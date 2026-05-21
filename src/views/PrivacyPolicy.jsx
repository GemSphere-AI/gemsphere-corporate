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

import ScrollReveal from '../components/ScrollReveal';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen">


            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollReveal direction="up">
                        <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 text-text-primary">Privacy Policy</h1>
                        <p className="text-text-tertiary text-sm mb-12">Last Updated: April 2025</p>
                    </ScrollReveal>

                    <div className="prose-custom space-y-8 text-text-secondary leading-relaxed">
                        <ScrollReveal direction="up" delay={0.1}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">1. Introduction</h2>
                                <p>GemSphere Technologies Private Limited ("GemSphere AI," "we," "our," or "us") operates the website <a href="https://www.gemsphere.ai" className="text-brand-cyan hover:underline">www.gemsphere.ai</a>. This Privacy Policy explains how we collect, use, share, and protect your personal information when you visit our website or use our services.</p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.15}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">2. Information We Collect</h2>
                                <p className="mb-3">We may collect the following types of information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-text-primary">Personal Information:</strong> Name, email address, phone number, company name, and job title when you fill out forms, subscribe to newsletters, or contact us.</li>
                                    <li><strong className="text-text-primary">Usage Data:</strong> IP address, browser type, operating system, pages visited, time spent, and referral URLs collected automatically through cookies and analytics tools.</li>
                                    <li><strong className="text-text-primary">Device Information:</strong> Device type, screen resolution, and language preferences.</li>
                                    <li><strong className="text-text-primary">Communication Data:</strong> Records of inquiries, feedback, or correspondence you send us.</li>
                                </ul>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.2}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">3. How We Use Your Information</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>To provide, operate, and improve our website and services.</li>
                                    <li>To respond to inquiries and provide customer support.</li>
                                    <li>To send marketing emails or newsletters (with your consent).</li>
                                    <li>To analyze website traffic and usage trends.</li>
                                    <li>To comply with legal obligations and protect our rights.</li>
                                </ul>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.25}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">4. Sharing of Information</h2>
                                <p className="mb-3">We do not sell your personal data. We may share information with:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-text-primary">Service Providers:</strong> Third-party vendors who assist in hosting, analytics, email delivery, and customer support.</li>
                                    <li><strong className="text-text-primary">Legal Requirements:</strong> If required by law, regulation, or legal process.</li>
                                    <li><strong className="text-text-primary">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                                </ul>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.3}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">5. Data Security</h2>
                                <p>We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the Internet is 100% secure.</p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.35}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">6. Your Rights</h2>
                                <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Access, correct, or delete your personal data.</li>
                                    <li>Opt out of marketing communications.</li>
                                    <li>Withdraw consent where applicable.</li>
                                    <li>Lodge a complaint with a supervisory authority.</li>
                                </ul>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.4}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">7. Third-Party Links</h2>
                                <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to read the privacy policies of every website you visit.</p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.45}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">8. Changes to This Policy</h2>
                                <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date.</p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.5}>
                            <section className="glass-card p-8 rounded-2xl">
                                <h2 className="text-xl font-bold text-text-primary mb-3">9. Contact Us</h2>
                                <p className="mb-2">If you have questions about this Privacy Policy, contact us at:</p>
                                <p><strong className="text-text-primary">GemSphere Technologies Private Limited</strong></p>
                                <p>Garuda BHIVE Workspace, BTM Layout, Bengaluru, Karnataka 560076</p>
                                <p>Email: <a href="mailto:Contact@gemsphere.ai" className="text-brand-cyan hover:underline">Contact@gemsphere.ai</a></p>
                                <p>Phone: <a href="tel:+917892585801" className="text-brand-cyan hover:underline">+91 7892585801</a></p>
                                <p className="text-text-muted text-xs mt-3">CIN: U62011KA2025PTC211975</p>
                            </section>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
