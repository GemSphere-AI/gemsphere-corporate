"use client";
import React from 'react';
import LocalizedLink from '../components/LocalizedLink';
import ScrollReveal from '../components/ScrollReveal';

const Security = () => {
    return (
        <div className="min-h-screen">
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ScrollReveal direction="up">
                        <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-4 text-text-primary">Security Overview</h1>
                        <p className="text-text-tertiary text-sm mb-12">Last Updated: April 2025</p>
                    </ScrollReveal>

                    <div className="prose-custom space-y-8 text-text-secondary leading-relaxed">
                        <ScrollReveal direction="up" delay={0.1}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">1. Enterprise-Grade Security</h2>
                                <p>At GemSphere Technologies, security is embedded in everything we do. We employ defense-in-depth strategies, continuous monitoring, and rigorous compliance checks to ensure our global platform is secure by design.</p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.15}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">2. Data Encryption</h2>
                                <p className="mb-3">All customer data is fiercely protected:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong className="text-text-primary">In Transit:</strong> All data transmitted between clients and our servers is encrypted using TLS 1.3.</li>
                                    <li><strong className="text-text-primary">At Rest:</strong> All databases, storage volumes, and backups are encrypted at rest using AES-256 block-level encryption.</li>
                                </ul>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.2}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">3. Access Control (RBAC & MFA)</h2>
                                <p>We enforce strict Role-Based Access Control (RBAC) across our entire infrastructure. Access to production environments requires multi-factor authentication (MFA) and is granted on a least-privilege basis.</p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.25}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">4. Audit & Monitoring</h2>
                                <p>Comprehensive audit logging is enabled across all systems. We utilize automated security information and event management (SIEM) tools to monitor anomalous behavior and potential threats in real-time.</p>
                            </section>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.3}>
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-3">5. Compliance & Privacy</h2>
                                <p>GemSphere operates strictly in alignment with global privacy regulations, including GDPR and CCPA. We regularly review our security posture against industry standards to ensure robust defense against emerging threats.</p>
                            </section>
                        </ScrollReveal>
                        
                        <ScrollReveal direction="up" delay={0.35}>
                            <section className="glass-card p-8 rounded-2xl">
                                <h2 className="text-xl font-bold text-text-primary mb-3">6. Report a Vulnerability</h2>
                                <p className="mb-2">If you believe you have discovered a security vulnerability in our platform, please report it immediately.</p>
                                <p>Email: <LocalizedLink href="mailto:security@gemsphere.ai" className="text-brand-cyan hover:underline">security@gemsphere.ai</LocalizedLink></p>
                            </section>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Security;
