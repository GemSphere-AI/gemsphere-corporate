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

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollReveal direction="up">
                        <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 text-text-primary">Privacy Policy</h1>
                        <p className="text-text-tertiary text-sm mb-12">Last Updated: June 2026</p>
                    </ScrollReveal>

                    <div className="prose-custom space-y-8 text-text-secondary leading-relaxed">
                        <ScrollReveal direction="up" delay={0.1}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">1. Introduction & Scope</h2>
                                <p className="mb-3">
                                    GemSphere Technologies Private Limited ("GemSphere AI," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy governs the data collection, processing, and storage practices for:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-3">
                                    <li>Our corporate website located at <LocalizedLink href="https://www.gemsphere.ai" className="text-brand-cyan hover:underline">www.gemsphere.ai</LocalizedLink>.</li>
                                    <li>Our software platforms, API portals, and the <strong className="text-text-primary">GemSphere Commerce</strong> mobile application (available on the Google Play Store).</li>
                                </ul>
                                <p>
                                    This policy has been updated to fully align with global data protection regulations, including the European Union's General Data Protection Regulation (<strong className="text-text-primary">GDPR</strong>) and Google Play Store App Developer Policies.
                                </p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.12}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">2. Data Controller</h2>
                                <p>
                                    The Data Controller responsible for processing your personal data is:
                                    <br />
                                    <strong className="text-text-primary">GemSphere Technologies Private Limited</strong>
                                    <br />
                                    Garuda BHIVE Workspace, BTM Layout, Bengaluru, Karnataka 560076, India.
                                    <br />
                                    CIN: U62011KA2025PTC211975
                                    <br />
                                    Inquiries regarding this policy or data protection can be sent directly to <LocalizedLink href="mailto:Contact@gemsphere.ai" className="text-brand-cyan hover:underline">Contact@gemsphere.ai</LocalizedLink>.
                                </p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.15}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">3. Information We Collect</h2>
                                <p className="mb-3">We collect information directly provided by you, automatically through your interaction with our platforms, and via device permissions enabled inside our mobile application.</p>
                                
                                <h3 className="text-lg font-bold text-text-primary mt-4 mb-2">A. Personal Information (Forms and Authentication)</h3>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong className="text-text-primary">Account Credentials:</strong> Full name, business email address, phone number, company/store name, password, and job title used to authenticate and create admin or cashier profiles.</li>
                                    <li><strong className="text-text-primary">Customer & Billing Information:</strong> Billing name, email address, phone number, shipping address, and GSTIN/tax identification numbers used to process transactions, invoice details, and loyalty rewards.</li>
                                    <li><strong className="text-text-primary">Communication Data:</strong> Inquiry details, feedback, chat history with support services, or email correspondence.</li>
                                </ul>

                                <h3 className="text-lg font-bold text-text-primary mb-2">B. Mobile Application Permissions & Collected Data</h3>
                                <p className="mb-2">To perform core Point of Sale (POS) and ordering tasks, the <strong className="text-text-primary">GemSphere Commerce</strong> app requests the following device integrations:</p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li><strong className="text-text-primary">Camera Access:</strong> Utilized exclusively when the user activates the barcode scanner to scan product barcodes and add items directly to the checkout cart. No images or videos are saved, stored, or sent to external servers.</li>
                                    <li><strong className="text-text-primary">Storage & Files:</strong> Needed to download, save, and share PDF invoices and thermal receipt files locally on the device or share them via external communication channels (e.g., WhatsApp).</li>
                                    <li><strong className="text-text-primary">Device & Notification Identifiers:</strong> Unique device IDs (UUIDs), operating system metadata, and Push Notification Tokens to deliver critical system updates and transaction alerts.</li>
                                </ul>

                                <h3 className="text-lg font-bold text-text-primary mb-2">C. Usage & Website Analytics</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>IP address, browser type, referral source, time spent on pages, and navigation paths collected through secure, anonymized analytics cookies.</li>
                                </ul>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.2}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">4. GDPR Legal Basis for Processing</h2>
                                <p className="mb-3">Under the GDPR, we only process your personal data where there is a valid legal basis:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-text-primary">Contractual Necessity:</strong> To set up your account, process orders, issue invoices, redeem loyalty rewards, and deliver POS services.</li>
                                    <li><strong className="text-text-primary">Consent:</strong> Where you have explicitly opted in, such as allowing analytics cookies or subscribing to marketing emails.</li>
                                    <li><strong className="text-text-primary">Legitimate Interests:</strong> To secure our systems, prevent fraudulent transactions, analyze system usage patterns, and optimize app performance.</li>
                                    <li><strong className="text-text-primary">Legal Obligation:</strong> To comply with tax laws, accounting regulations, and statutory reporting requirements.</li>
                                </ul>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.25}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">5. Data Sharing & Third-Party SDKs</h2>
                                <p className="mb-3">We do not sell your personal data. We only share information with trusted third-party service providers who conform to strict confidentiality standards, including:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-text-primary">Hosting and Backend Services:</strong> Secure cloud providers hosting our database, microservices, and media storage.</li>
                                    <li><strong className="text-text-primary">App Utilities & SDKs:</strong> Core libraries (such as React Native, Expo, and Reanimated) for rendering UI, and notification relays to deliver push notifications.</li>
                                    <li><strong className="text-text-primary">Legal Disclosures:</strong> When required to comply with binding court requests, tax audits, or statutory laws.</li>
                                </ul>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.3}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">6. Data Security & Encryption</h2>
                                <p>
                                    All data collected via our website and the GemSphere Commerce mobile application is encrypted in transit using industry-standard <strong className="text-text-primary">Transport Layer Security (TLS/HTTPS)</strong> and encrypted at rest in our cloud databases. We implement strict internal access controls to ensure that only authorized personnel can access account details.
                                </p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.32}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">7. International Data Transfers</h2>
                                <p>
                                    If personal data originating in the European Economic Area (EEA) is transferred to servers located outside the EEA, we ensure appropriate safeguards are in place (such as Standard Contractual Clauses approved by the European Commission) to maintain equivalent data protection standards.
                                </p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.35}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">8. Your Rights Under GDPR & Data Protection Regulations</h2>
                                <p className="mb-3">Depending on your location, you hold the following rights regarding your personal information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-text-primary">Right of Access:</strong> Obtain a copy of the personal data we hold about you.</li>
                                    <li><strong className="text-text-primary">Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                                    <li><strong className="text-text-primary">Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal data under certain conditions.</li>
                                    <li><strong className="text-text-primary">Right to Restrict Processing:</strong> Request that we limit how your data is processed.</li>
                                    <li><strong className="text-text-primary">Right to Data Portability:</strong> Obtain your data in a structured, commonly-used, machine-readable format.</li>
                                    <li><strong className="text-text-primary">Right to Object:</strong> Object to processing based on legitimate interests or direct marketing.</li>
                                    <li><strong className="text-text-primary">Right to Withdraw Consent:</strong> Withdraw consent at any time without affecting prior lawful processing.</li>
                                </ul>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.38}>
                            <section className="border border-brand-cyan/20 bg-brand-cyan/5 p-8 rounded-2xl">
                                <h2 className="text-xl font-bold text-text-primary mb-3 text-brand-cyan">9. Account & Data Deletion Requests</h2>
                                <p className="mb-3">
                                    In compliance with Google Play Store developer policies, we offer a straightforward mechanism for users to delete their account and associated personal data:
                                </p>
                                <p className="mb-3">
                                    You can request deletion of your account and all associated transactional/personal records by:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Submitting a request inside the Account Settings screen of the <strong className="text-text-primary">GemSphere Commerce</strong> mobile application.</li>
                                    <li>Sending an email directly to <LocalizedLink href="mailto:Contact@gemsphere.ai" className="text-brand-cyan hover:underline font-bold">Contact@gemsphere.ai</LocalizedLink> with the subject line "Account Deletion Request".</li>
                                </ul>
                                <p className="text-sm">
                                    Upon request, we will permanently delete or anonymize your personal information, unless we are legally required to retain specific transaction data for financial, tax, or local accounting compliance.
                                </p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.4}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">10. Data Retention</h2>
                                <p>
                                    We retain your personal data only as long as your account remains active or as needed to provide our services. Once the purpose for data collection is fulfilled, we securely delete or anonymize it, unless retention is required to fulfill statutory audit and tax reporting obligations.
                                </p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.45}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">11. Changes to This Privacy Policy</h2>
                                <p>
                                    We may update this Privacy Policy from time to time. Any changes will be published directly on this page with an updated revision date.
                                </p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.5}>
                            <section className="glass-card p-8 rounded-2xl">
                                <h2 className="text-xl font-bold text-text-primary mb-3">12. Contact Information</h2>
                                <p className="mb-2">For any questions, clarifications, or to exercise your privacy rights, please reach out to us at:</p>
                                <p><strong className="text-text-primary">GemSphere Technologies Private Limited</strong></p>
                                <p>Garuda BHIVE Workspace, BTM Layout, Bengaluru, Karnataka 560076, India</p>
                                <p>Email: <LocalizedLink href="mailto:Contact@gemsphere.ai" className="text-brand-cyan hover:underline">Contact@gemsphere.ai</LocalizedLink></p>
                                <p>Phone: <LocalizedLink href="tel:+917892585801" className="text-brand-cyan hover:underline">+91 7892585801</LocalizedLink></p>
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
