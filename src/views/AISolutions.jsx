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

import { Brain, Bot, Network, Sparkles, ArrowRight, CheckCircle2, Zap, Shield } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import NeuralBackground from '../components/NeuralBackground';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

const AISolutions = () => {
    const aiCategory = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'ai-analytics');

    return (
        <div className="min-h-screen">


            <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
                <NeuralBackground />
                
                {/* Gradient Mesh Orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0" aria-hidden="true">
                    <div className="absolute -top-[15%] -right-[10%] w-[55%] h-[55%] rounded-full opacity-20 dark:opacity-10 blur-[100px] animate-float"
                         style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(99,102,241,0.3) 50%, transparent 70%)' }} />
                    <div className="absolute bottom-[5%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-15 dark:opacity-8 blur-[120px]"
                         style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)', animation: 'float 9s ease-in-out infinite reverse' }} />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <ScrollReveal direction="up">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-xs font-bold uppercase tracking-widest mb-8">
                                <Brain size={14} /> AI Platform
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-6 text-white leading-tight">
                                Intelligence that <br />
                                <span className="text-gradient">Acts Autonomously.</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-10">
                                Move beyond basic chatbots. GemSphere's AI Platform integrates deep neural networks with your operational data to predict outcomes and execute complex workflows without human intervention.
                            </p>
                            <MagneticButton href="/demo" className="btn-primary">
                                Request AI Sandbox Access <ArrowRight size={18} />
                            </MagneticButton>

                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-24 border-y border-brand-border bg-brand-card/30 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand-violet/5 rounded-full blur-[150px] -z-10" />
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading 
                        badge="Capabilities"
                        title="The AI Ecosystem"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {aiCategory.modules.map((mod, i) => {
                            const Icon = mod.icon;
                            return (
                                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                    <div className="glass-card p-8 rounded-3xl h-full border-brand-violet/10 hover:border-brand-violet/40 transition-colors group">
                                        <div className="w-12 h-12 rounded-xl bg-brand-violet/10 flex items-center justify-center text-brand-violet mb-6 group-hover:scale-110 group-hover:bg-brand-violet/20 transition-all duration-300">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{mod.name}</h3>
                                        <p className="text-sm text-text-tertiary leading-relaxed">{mod.desc}</p>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="glass-heavy border-brand-violet/20 rounded-[40px] p-12 md:p-20 relative overflow-hidden max-w-5xl mx-auto">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-violet/20 rounded-full blur-[100px] -z-10" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black font-display text-white mb-6">Enterprise-Grade Security</h2>
                                <p className="text-lg text-text-secondary mb-8">
                                    Your data is your IP. Our AI models are deployed in single-tenant isolated environments ensuring zero data leakage to public models.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {['Zero-Trust Security', 'GDPR Compliant', 'HIPAA Compliant Infrastructure', 'Zero-Data-Retention Policies', 'Role-Based Inference Access'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white font-semibold">
                                            <CheckCircle2 className="text-brand-violet" size={20} /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative">
                                {/* Abstract Security Visual */}
                                <div className="aspect-square rounded-full border border-brand-violet/30 flex items-center justify-center relative">
                                    <div className="absolute inset-4 rounded-full border border-brand-violet/20 animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute inset-8 rounded-full border border-brand-violet/10 animate-[spin_15s_linear_infinite_reverse]" />
                                    <Shield className="text-brand-violet w-24 h-24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AISolutions;
