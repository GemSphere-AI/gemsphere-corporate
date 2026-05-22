/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

const Products = () => {
    const [activeTab, setActiveTab] = useState(() => {
        if (typeof window !== 'undefined' && window.location.hash) {
            const hash = window.location.hash.replace('#', '');
            if (PRODUCT_ECOSYSTEM.categories.find(c => c.id === hash)) {
                return hash;
            }
        }
        return PRODUCT_ECOSYSTEM.categories[0].id;
    });

    // Handle deep linking via hash
    useEffect(() => {
        const hash = typeof window !== 'undefined' ? window.location.hash : '';
        if (hash) {
            const id = hash.replace('#', '');
            if (PRODUCT_ECOSYSTEM.categories.find(c => c.id === id)) {
                // Smooth scroll to tabs section
                document.getElementById('ecosystem-tabs')?.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const activeCategory = PRODUCT_ECOSYSTEM.categories.find(c => c.id === activeTab);

    return (
        <div className="min-h-screen">


            {/* HERO */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                
                <div className="container mx-auto px-6 max-w-7xl">
                    <ScrollReveal direction="up">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-brand-cyan text-xs font-bold uppercase tracking-widest mb-8">
                                <Layers size={14} /> The Platform
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-6 text-text-primary leading-tight">
                                One Unified <br />
                                <span className="text-gradient">Digital Ecosystem.</span>
                            </h1>
                            <p className="text-xl text-text-secondary mb-10 leading-relaxed max-w-3xl mx-auto">
                                30+ enterprise capabilities built on a shared data model. Adopt what you need today, seamlessly scale to full capabilities tomorrow.
                            </p>
                            <MagneticButton href="/demo" className="btn-primary">
                                Speak to an Architect <ArrowRight size={18} />
                            </MagneticButton>

                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ARCHITECTURE VALUE PROP */}
            <section className="py-12 border-y border-brand-border bg-brand-card/30">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-border">
                        {[
                            { title: 'API-First', desc: 'Every feature exposed via secure REST & GraphQL endpoints.' },
                            { title: 'Multi-Tenant', desc: 'Logical data isolation with physical scale capabilities.' },
                            { title: 'Event-Driven', desc: 'Real-time synchronization across the entire ecosystem.' }
                        ].map((feature, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 0.1} className="pt-8 md:pt-0 px-4">
                                <h4 className="text-lg font-bold text-text-primary mb-2">{feature.title}</h4>
                                <p className="text-sm text-text-tertiary">{feature.desc}</p>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTERACTIVE ECOSYSTEM TABS */}
            <section id="ecosystem-tabs" className="section-padding relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading 
                        badge="Modules"
                        title="Explore the Platform"
                    />

                    {/* Tab Navigation */}
                    <ScrollReveal direction="up" className="mb-12">
                        <div className="flex flex-nowrap overflow-x-auto pb-4 gap-2 scrollbar-hide snap-x">
                            {PRODUCT_ECOSYSTEM.categories.map((cat) => {
                                const isActive = activeTab === cat.id;
                                const Icon = cat.icon;
                                return (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveTab(cat.id)}
                                        className={`snap-center shrink-0 flex items-center gap-3 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 border ${
                                            isActive 
                                            ? 'bg-brand-card border-brand-cyan/30 text-text-primary shadow-[0_0_20px_rgba(0,212,255,0.1)]' 
                                            : 'bg-transparent border-transparent text-text-tertiary hover:text-text-secondary'
                                        }`}
                                    >
                                        <Icon size={18} className={isActive ? 'text-brand-cyan' : ''} />
                                        {cat.name}
                                    </button>
                                );
                            })}
                        </div>
                    </ScrollReveal>

                    {/* Active Tab Content */}
                    <div className="glass-card rounded-[32px] p-8 md:p-12 border-brand-cyan/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
                        
                        <motion.div
                            key={activeCategory.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="max-w-3xl mb-12 relative z-10">
                                <h3 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
                                    {activeCategory.name}
                                </h3>
                                <p className="text-lg text-text-secondary">
                                    {activeCategory.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                                {activeCategory.modules.map((mod, idx) => {
                                    const ModIcon = mod.icon;
                                    return (
                                        <div key={idx} className="bg-brand-deeper border border-brand-border rounded-2xl p-6 hover:border-brand-cyan/30 transition-colors group cursor-pointer">
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-text-secondary mb-4 group-hover:bg-brand-cyan/20 group-hover:text-brand-cyan transition-colors" style={{background: 'var(--interactive-bg)'}}>
                                                <ModIcon size={20} />
                                            </div>
                                            <h4 className="text-text-primary font-bold mb-2 group-hover:text-brand-cyan transition-colors">{mod.name}</h4>
                                            <p className="text-xs text-text-tertiary leading-relaxed">{mod.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* CTA */}
            <section className="py-24 border-t border-brand-border bg-gradient-to-b from-brand-dark to-brand-deeper">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-6">Need a custom architecture?</h2>
                    <p className="text-lg text-text-secondary mb-10">
                        Our platform is highly composable. Connect with our solution engineers to map out your specific enterprise requirements.
                    </p>
                    <MagneticButton href="/demo" className="btn-primary px-8 py-4 text-lg">
                        Talk to our Enterprise Architect
                    </MagneticButton>

                </div>
            </section>
        </div>
    );
};

export default Products;
