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

import { Code2, Cloud, Terminal, Shield, ArrowRight, Server, Zap, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

const Services = () => {
    return (
        <div className="min-h-screen">


            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                
                <div className="container mx-auto px-6 max-w-7xl">
                    <ScrollReveal direction="up">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-6 text-white leading-tight">
                                World-Class <br />
                                <span className="text-gradient">Engineering Services.</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                                Beyond our platform modules, we provide elite engineering teams to build custom architectures, migrate legacy systems, and manage your mission-critical infrastructure.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PRODUCT_ECOSYSTEM.services.map((service, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                <div className="glass-card rounded-[32px] p-8 h-full flex flex-col group hover:border-brand-cyan/30 transition-colors">
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">{service.name}</h3>
                                    <p className="text-text-secondary mb-8 flex-grow">{service.desc}</p>
                                    <div className="pt-6 border-t border-white/5">
                                        <a href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:text-white transition-colors">
                                            Learn More <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-y border-brand-border bg-brand-card/30 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading 
                        badge="Methodology"
                        title="How We Deliver"
                        subtitle="We operate as an extension of your technical leadership."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { icon: Terminal, title: 'Dedicated Squads', desc: 'Cross-functional agile teams including architects, engineers, QA, and DevOps.' },
                            { icon: Cloud, title: 'Cloud-Native', desc: 'Everything we build is designed for elastic scale on AWS, GCP, or Azure.' },
                            { icon: Shield, title: 'Secure by Design', desc: 'Security is shifted left, baked into the CI/CD pipeline from day one.' }
                        ].map((item, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mx-auto mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                                <p className="text-text-secondary">{item.desc}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-b from-brand-dark to-brand-deeper">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Start your transformation.</h2>
                    <p className="text-lg text-text-secondary mb-10">
                        Our solution architects are ready to review your current architecture and propose a high-performance roadmap.
                    </p>
                    <MagneticButton href="/contact" className="btn-primary px-8 py-4 text-lg">
                        Book Technical Consultation
                    </MagneticButton>
                </div>
            </section>
        </div>
    );
};

export default Services;
