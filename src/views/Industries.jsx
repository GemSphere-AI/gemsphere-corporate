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

import { Building2, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

const Industries = () => {
    return (
        <div className="min-h-screen">


            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                
                <div className="container mx-auto px-6 max-w-7xl">
                    <ScrollReveal direction="up">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-bold uppercase tracking-widest mb-8">
                                <Building2 size={14} /> Vertical Expertise
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-6 text-white leading-tight">
                                Transformation for <br />
                                <span className="text-gradient">Every Vertical.</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-10">
                                True digital transformation requires deep domain expertise. We build industry-specific ecosystems that solve the unique operational and compliance challenges of your vertical.
                            </p>
                            <MagneticButton href="/contact" className="btn-primary px-8 py-4 text-lg">
                                Speak to an Industry Expert
                            </MagneticButton>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PRODUCT_ECOSYSTEM.industries.map((ind, i) => {
                            const Icon = ind.icon;
                            return (
                                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                    <a href={`/industries/${ind.slug}`} className="block glass-card rounded-[32px] p-8 h-full group hover:border-brand-cyan/30 transition-all duration-300">
                                        <div className="flex justify-between items-start mb-12">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/30 group-hover:text-brand-cyan group-hover:scale-110 transition-all duration-300">
                                                <Icon size={28} />
                                            </div>
                                            <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 px-3 py-1 rounded-full border border-brand-cyan/20">
                                                {ind.stat}
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-white mb-2">{ind.name}</h3>
                                        <div className="text-sm font-semibold text-text-tertiary flex items-center gap-2 group-hover:text-white transition-colors">
                                            Explore Use Cases <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </a>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-brand-border bg-gradient-to-b from-brand-dark to-brand-deeper">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Built for scale, regardless of industry.</h2>
                    <p className="text-lg text-text-secondary mb-10">
                        Our modular architecture allows us to rapidly configure solutions for new verticals while maintaining enterprise-grade security and performance.
                    </p>
                    <MagneticButton href="/contact" className="btn-secondary px-8 py-4 text-lg">
                        Discuss Your Requirements
                    </MagneticButton>
                </div>
            </section>
        </div>
    );
};

export default Industries;
