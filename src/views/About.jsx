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

import { Users, Target, Rocket, Award, Globe, Building, Shield, Zap, Brain, Code2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
    return (
        <div className="min-h-screen">


            {/* HERO */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                
                <div className="container mx-auto px-6 max-w-7xl">
                    <ScrollReveal direction="up">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-text-primary text-xs font-bold uppercase tracking-widest mb-8">
                                <Rocket size={14} className="text-brand-cyan" /> Our Mission
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-8 text-text-primary leading-tight">
                                Democratizing <br />
                                <span className="text-gradient">Intelligence</span> for the Global Enterprise.
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed font-medium">
                                GemSphere Technologies was founded with a singular vision: to build high-performance, AI-driven software ecosystems that empower organizations to scale without limits.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* VALUES GRID */}
            <section className="py-24 border-y border-brand-border bg-brand-card/30">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading 
                        badge="Our DNA"
                        title="The Values We Engineer By"
                        subtitle="We believe in craftsmanship, extreme ownership, and pushing the boundaries of what's possible."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: 'Outcome-Driven', desc: "We don't just write code; we engineer business outcomes that drive real-world impact and ROI." },
                            { icon: Shield, title: 'Enterprise Security', desc: "Mission-critical systems require mission-critical security. It's baked into our DNA from day one." },
                            { icon: Zap, title: 'High Performance', desc: "Latency is the enemy of scale. Our architectures are optimized for extreme throughput and efficiency." },
                            { icon: Globe, title: 'Global Mindset', desc: "With a footprint across 170+ countries, we build software that respects local nuance while scaling globally." },
                            { icon: Brain, title: 'AI-First Approach', desc: "Every modern enterprise should be powered by predictive intelligence. We make that a reality." },
                            { icon: Award, title: 'Excellence in Craft', desc: "Clean code, resilient architectures, and stunning UI. We take immense pride in what we build." }
                        ].map((value, i) => {
                            const Icon = value.icon || Target;
                            return (
                                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                    <div className="glass-card p-10 rounded-[32px] group hover:border-brand-cyan/30 transition-all h-full">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-cyan/20 transition-all duration-300" style={{background: 'var(--interactive-bg)'}}>
                                            <Icon className="text-brand-cyan" size={28} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-text-primary mb-4">{value.title}</h3>
                                        <p className="text-text-secondary leading-relaxed">{value.desc}</p>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* GLOBAL OFFICES */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading 
                        badge="Presence"
                        title="Global Operations"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ScrollReveal direction="left">
                            <div className="glass-card p-10 rounded-[32px] border-brand-cyan/20 relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-[50px]" />
                                <Globe className="text-brand-cyan mb-6" size={40} />
                                <h3 className="text-3xl font-bold text-text-primary mb-2">Distributed Teams</h3>
                                <p className="text-brand-cyan font-semibold mb-6">Global Sales & Engineering</p>
                                <p className="text-text-secondary leading-relaxed">
                                    Our sales and engineering teams operate across the globe to deliver continuous support and innovation, serving customers in every timezone.
                                </p>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal direction="right">
                            <div className="glass-card p-10 rounded-[32px] border-brand-indigo/20 relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/10 rounded-full blur-[50px]" />
                                <Building className="text-brand-indigo mb-6" size={40} />
                                <h3 className="text-3xl font-bold text-text-primary mb-2">Bengaluru (HQ)</h3>
                                <p className="text-brand-indigo font-semibold mb-6">Global Headquarters & Physical Office</p>
                                <p className="text-text-secondary leading-relaxed">
                                    Garuda BHIVE Workspace,<br />
                                    BTM Layout, Bengaluru,<br />
                                    Karnataka 560076, India
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
