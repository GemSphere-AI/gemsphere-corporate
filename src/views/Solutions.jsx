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

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

const Solutions = () => {
    return (
        <div className="min-h-screen">


            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[150px] -z-10" />
                
                <div className="container mx-auto px-6 max-w-7xl">
                    <ScrollReveal direction="up">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-6 text-text-primary leading-tight">
                                Engineered for your <br />
                                <span className="text-gradient">Industry.</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                                We combine our unified platform modules into specialized solutions that address the unique regulatory, scaling, and operational challenges of your vertical.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PRODUCT_ECOSYSTEM.industries.map((ind, i) => {
                            const Icon = ind.icon;
                            return (
                                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                    <div className="glass-card rounded-[32px] p-8 h-full flex flex-col group hover:border-brand-indigo/30 transition-colors">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-text-primary group-hover:text-brand-indigo transition-all duration-300" style={{background: 'var(--interactive-bg)', border: '1px solid var(--interactive-border)'}}>
                                                <Icon size={28} />
                                            </div>
                                            <div className="text-xs font-bold text-brand-indigo uppercase tracking-wider bg-brand-indigo/10 px-3 py-1 rounded-full border border-brand-indigo/20">
                                                {ind.stat}
                                            </div>
                                        </div>
                                        
                                        <h3 className="text-2xl font-bold text-text-primary mb-4">{ind.name}</h3>
                                        
                                        <div className="mt-auto pt-8">
                                            <a href={`/industries/${ind.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand-indigo hover:text-text-primary transition-colors">
                                                View Solution <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-brand-border bg-gradient-to-b from-brand-dark to-brand-deeper">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-6">Don't see your industry?</h2>
                    <p className="text-lg text-text-secondary mb-10">
                        Our platform is vertical-agnostic at its core. We can configure a custom ecosystem for any complex enterprise requirement.
                    </p>
                    <MagneticButton href="/contact" className="btn-primary px-8 py-4 text-lg">
                        Discuss Custom Solutions
                    </MagneticButton>
                </div>
            </section>
        </div>
    );
};

export default Solutions;
