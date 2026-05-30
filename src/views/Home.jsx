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

import { motion } from 'framer-motion';
import { 
    ArrowRight, Globe2, Layers, Bot, Shield, 
    Network, Server, Sparkles, Code2, LineChart, Brain
} from 'lucide-react';
import NeuralBackground from '../components/NeuralBackground';
import AnimatedCounter from '../components/AnimatedCounter';
import MagneticButton from '../components/MagneticButton';
import ScrollReveal from '../components/ScrollReveal';
import MarqueeRow from '../components/MarqueeRow';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import WorldMap from '../components/WorldMap';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

const Home = () => {
    return (
        <div className="min-h-screen">

            {/* 1. CINEMATIC HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
                <NeuralBackground />
                
                {/* Gradient Mesh Orbs — premium floating gradients for both themes */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0" aria-hidden="true">
                    <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-20 dark:opacity-10 blur-[100px] animate-float"
                         style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(139,92,246,0.3) 50%, transparent 70%)' }} />
                    <div className="absolute top-[10%] -right-[15%] w-[50%] h-[50%] rounded-full opacity-15 dark:opacity-8 blur-[120px]"
                         style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.4) 0%, rgba(99,102,241,0.2) 50%, transparent 70%)', animation: 'float 8s ease-in-out infinite reverse' }} />
                    <div className="absolute -bottom-[10%] left-[20%] w-[45%] h-[45%] rounded-full opacity-15 dark:opacity-5 blur-[100px]"
                         style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(244,63,94,0.15) 50%, transparent 70%)', animation: 'float 10s ease-in-out infinite' }} />
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollReveal direction="up" delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-8">
                                <Sparkles size={14} className="text-brand-cyan" /> Unified Digital Enterprise Platform
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal direction="up" delay={0.2} stagger staggerDelay={0.05}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight leading-[1.1] mb-8 text-text-primary">
                                Engineering Intelligent <br />
                                <span className="text-gradient-animated">Digital Enterprises.</span>
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.3}>
                            <p className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
                                The world's most advanced modular ecosystem for commerce, supply chain, finance, and AI operations at global scale.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.4}>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <MagneticButton 
                                    href="/register" 
                                    className="btn-primary w-full sm:w-auto text-lg px-8 py-4"
                                >
                                    Start Free Trial <ArrowRight size={20} />
                                </MagneticButton>
                                <MagneticButton 
                                    href="/demo" 
                                    className="btn-secondary w-full sm:w-auto text-lg px-8 py-4"
                                >
                                    Book Free Demo
                                </MagneticButton>

                            </div>
                        </ScrollReveal>

                        {/* KPI Strip */}
                        <ScrollReveal direction="up" delay={0.6} className="mt-20 pt-10 border-t border-brand-border">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-brand-border">
                                {[
                                    { val: 'Global', label: 'Countries Served' },
                                    { val: '30+', label: 'Enterprise Capabilities' },
                                    { val: '99.99%', label: 'Uptime SLA' },
                                    { val: '24/7', label: 'Global Support' }
                                ].map((kpi, i) => (
                                    <div key={i} className="px-4">
                                        <div className="text-3xl md:text-4xl font-black text-text-primary font-display mb-1">
                                            <AnimatedCounter value={kpi.val} />
                                        </div>
                                        <div className="text-xs text-text-tertiary font-bold uppercase tracking-widest">
                                            {kpi.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                >
                    <div className="w-5 h-8 border border-brand-border-hover rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-text-primary rounded-full" />
                    </div>
                </motion.div>
            </section>

            {/* 2. CAPABILITIES, INDUSTRIES, & CLIENTS STRIPS */}
            <section className="py-16 border-y border-brand-border glass-subtle backdrop-blur-md overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl mb-8 text-center">
                    <p className="text-xs font-bold text-text-tertiary uppercase tracking-widest">
                        Built for Enterprise-Grade Operations
                    </p>
                </div>
                
                <div className="flex flex-col gap-6">
                    {/* Capabilities Row */}
                    <MarqueeRow speed={50}>
                        {['Multi-Tenant Architecture', 'API-First Design', 'GDPR Compliant', 'Real-Time Analytics', 'AI-Powered Workflows', 'Cloud-Native Infrastructure', 'Multi-Currency Support', 'Role-Based Access Control'].map((cap, i) => (
                            <div key={i} className="text-sm font-bold text-text-muted opacity-60 mx-10 font-display uppercase tracking-widest whitespace-nowrap">
                                {cap}
                            </div>
                        ))}
                    </MarqueeRow>

                    {/* Industries Row (Reverse) */}
                    <MarqueeRow speed={60} reverse={true}>
                        {PRODUCT_ECOSYSTEM.industries.map((industry, i) => (
                            <div key={i} className="text-sm font-bold text-brand-cyan/60 mx-10 font-display uppercase tracking-widest whitespace-nowrap">
                                ✦ {industry.name}
                            </div>
                        ))}
                    </MarqueeRow>

                    {/* Clients Row */}
                    <MarqueeRow speed={55}>
                        {['Top 10 Global Retailers', 'Tier-1 Financial Institutions', 'National Healthcare Networks', 'International Logistics Giants', 'Fortune 500 Manufacturers', 'Leading Hospitality Chains', 'Global E-Commerce Platforms'].map((client, i) => (
                            <div key={i} className="text-sm font-bold text-brand-indigo/60 mx-10 font-display uppercase tracking-widest whitespace-nowrap">
                                {client}
                            </div>
                        ))}
                    </MarqueeRow>
                </div>
            </section>

            {/* 3. PRODUCT ECOSYSTEM SHOWCASE */}
            <section className="section-padding relative">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] -z-10" />
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading 
                        badge="The Ecosystem"
                        title="30+ Enterprise Capabilities."
                        titleHighlight="One Intelligent Platform."
                        subtitle={PRODUCT_ECOSYSTEM.stats.description}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PRODUCT_ECOSYSTEM.categories.map((cat, i) => (
                            <ScrollReveal key={cat.id} direction="up" delay={i * 0.1}>
                                <ProductCard 
                                    icon={cat.icon}
                                    title={cat.name}
                                    description={cat.description}
                                    modules={cat.modules.map(m => m.name)}
                                    onClick={() => window.location.href = `/products/${cat.id}`}
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. AI SOLUTIONS SPOTLIGHT */}
            <section className="section-padding bg-brand-deeper relative border-y border-brand-border overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-brand-indigo/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <SectionHeading 
                                align="left"
                                badge="AI-First Architecture"
                                title="Intelligence at the Core."
                                subtitle="We don't just bolt on AI. GemSphere is built from the ground up with neural capabilities to automate, predict, and scale your operations autonomously."
                            />
                            
                            <div className="space-y-8">
                                {[
                                    { icon: Brain, title: 'Autonomous Agents', desc: 'Deploy AI agents that execute complex multi-step workflows without human intervention.' },
                                    { icon: LineChart, title: 'Predictive Insights', desc: 'Forecast demand, supply chain disruptions, and financial trends with advanced ML models.' },
                                    { icon: Shield, title: 'Enterprise Security', desc: 'Military-grade data isolation and GDPR compliant model fine-tuning for your data privacy.' }
                                ].map((feature, i) => (
                                    <ScrollReveal key={i} direction="left" delay={i * 0.15}>
                                        <div className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl glass-subtle flex items-center justify-center shrink-0 group-hover:bg-brand-indigo/10 group-hover:border-brand-indigo/30 transition-all duration-300">
                                                <feature.icon className="text-brand-indigo group-hover:scale-110 transition-transform duration-300" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-2 text-text-primary">{feature.title}</h4>
                                                <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                            
                            <ScrollReveal direction="up" delay={0.4} className="mt-12">
                                <LocalizedLink href="/ai-solutions" className="btn-secondary">
                                    Explore AI Capabilities
                                </LocalizedLink>
                            </ScrollReveal>
                        </div>
                        
                        <div className="relative">
                            <ScrollReveal direction="right" delay={0.2}>
                                <div className="aspect-square w-full max-w-lg mx-auto relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/20 to-brand-cyan/20 rounded-[40px] rotate-3 blur-sm" />
                                    <div className="absolute inset-0 bg-brand-card border border-brand-border rounded-[40px] flex items-center justify-center overflow-hidden">
                                        {/* Abstract neural visual placeholder */}
                                        <div className="absolute w-[150%] h-[150%] animate-spin-slow opacity-30 bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#6366f1_50%,#00d4ff_100%)]" />
                                        <div className="absolute inset-[2px] bg-brand-card rounded-[38px] z-10 flex items-center justify-center p-12">
                                            <div className="text-center z-20">
                                                <Bot size={64} className="text-brand-cyan mx-auto mb-6 opacity-80" />
                                                <div className="text-2xl font-black font-display tracking-widest text-text-muted uppercase mb-2">Custom AI Models</div>
                                                <div className="text-sm text-brand-cyan font-bold tracking-widest uppercase animate-pulse">Deployed</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. GLOBAL PRESENCE */}
            <section className="section-padding relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <SectionHeading 
                            badge="Global Reach"
                            title="Built for the World."
                            subtitle="Supporting multinational enterprises with localized compliance, taxation, and performance optimization."
                        />
                    </div>
                    
                    <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] lg:aspect-[2/1] rounded-3xl overflow-hidden glass-card p-4 md:p-8 flex items-center justify-center">
                        <WorldMap className="w-full h-full" />
                    </div>
                </div>
            </section>

            {/* 6. WHY GEMSPHERE */}
            <section className="section-padding bg-brand-deeper border-y border-brand-border">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading 
                        badge="Why GemSphere"
                        title="Engineered for Scale."
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: 'Modular by Design', desc: 'Start with what you need today. Add modules seamlessly as your business grows — no rip-and-replace migrations.' },
                            { title: 'Single Data Model', desc: 'All 30+ capabilities share one unified data layer. No more data silos, sync issues, or brittle integrations.' },
                            { title: 'Global-Ready', desc: 'Multi-currency, multi-language, and multi-region compliance built into every module from day one.' },
                        ].map((item, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                <div className="glass-card rounded-3xl p-8 h-full">
                                    <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                                    <p className="text-text-tertiary leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. INDUSTRY SOLUTIONS */}
            <section className="section-padding relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <SectionHeading 
                            align="left"
                            className="mb-0"
                            badge="Solutions"
                            title="Industry Expertise."
                            subtitle="Pre-configured ecosystems tailored for the unique challenges of your vertical."
                        />
                        <LocalizedLink href="/industries" className="btn-ghost shrink-0 mb-2">
                            View All Industries <ArrowRight size={16} />
                        </LocalizedLink>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PRODUCT_ECOSYSTEM.industries.map((ind, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                <LocalizedLink 
                                    href={`/industries/${ind.slug}`}
                                    className="group block glass-card p-8 rounded-2xl hover:border-brand-cyan/30 transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="w-12 h-12 rounded-xl glass-subtle flex items-center justify-center text-text-primary group-hover:text-brand-cyan group-hover:scale-110 transition-all duration-300">
                                            <ind.icon size={24} />
                                        </div>
                                        <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider bg-brand-cyan/10 px-3 py-1 rounded-full">
                                            {ind.stat}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-text-primary mb-2">{ind.name}</h3>
                                    <div className="text-sm font-semibold text-text-tertiary flex items-center gap-2 group-hover:text-text-primary transition-colors">
                                        Explore Solution <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </LocalizedLink>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-24 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-cyan/5" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="glass-heavy border-brand-cyan/20 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden max-w-5xl mx-auto">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-cyan/20 rounded-full blur-[100px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-indigo/20 rounded-full blur-[100px] -z-10" />
                        
                        <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight text-text-primary mb-6">
                            Ready to engineer your <br className="hidden md:block"/>
                            <span className="text-gradient">digital future?</span>
                        </h2>
                        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
                            Join the world's most advanced enterprises orchestrating their growth on the GemSphere platform.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <MagneticButton href="/register" className="btn-primary w-full sm:w-auto text-lg px-10 py-5">
                                Start Free Trial
                            </MagneticButton>
                            <MagneticButton href="/demo" className="btn-secondary w-full sm:w-auto text-lg px-10 py-5">
                                Book Free Demo
                            </MagneticButton>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
