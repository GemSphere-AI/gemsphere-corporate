/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useState } from 'react';
import LocalizedLink from '../components/LocalizedLink';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe2, Monitor } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import Breadcrumbs from '../components/Breadcrumbs';
import RelatedLinks from '../components/RelatedLinks';
import TrustBadges from '../components/TrustBadges';
import { PRODUCT_ECOSYSTEM, slugify } from '../data/productEcosystem';
import { RICH_MODULES_DATA } from '../data/moduleDescriptions';
import { parseCompositeSlug, getSEOContent, PRODUCTS_MAP, INDUSTRIES_MAP, COUNTRIES_MAP, COMPETITORS_MAP } from '../data/seoRegistry';
import { SITE_CONFIG } from '../config/siteConfig';
import { trackPlayStoreClick } from '../utils/analytics';

export default function ProductDetail({ slug }) {
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);
    
    // Parse composite slug
    const parsing = parseCompositeSlug(slug);
    const isProgrammatic = parsing.type !== 'unknown';
    
    let resolvedSlug = slug;
    if (isProgrammatic) {
        const p = parsing.product;
        if (p === 'crm-software') resolvedSlug = 'crm';
        else if (p === 'restaurant-pos') resolvedSlug = 'booking';
        else if (p === 'hotel-management-software') resolvedSlug = 'booking';
        else if (p === 'booking-software' || p === 'reservation-software') resolvedSlug = 'booking';
        else if (p === 'iam-platform' || p === 'identity-management') resolvedSlug = 'identity-and-access';
        else if (p === 'supply-chain-management') resolvedSlug = 'supply-chain-management';
        else if (p === 'erp') resolvedSlug = 'erp-system';
        else if (p === 'hrms') resolvedSlug = 'identity-and-access';
        else if (p === 'helpdesk') resolvedSlug = 'notification-engine';
        else if (p === 'ai-chatbot') resolvedSlug = 'ai-chatbots';
        else resolvedSlug = p;
    }

    // Find the category or module using resolvedSlug
    let category = null;
    let module = null;

    // Direct check for category
    category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === resolvedSlug);

    if (!category) {
        // Find which category holds the module matching this slug
        for (const cat of PRODUCT_ECOSYSTEM.categories) {
            const foundMod = cat.modules.find(m => slugify(m.name) === resolvedSlug);
            if (foundMod) {
                category = cat;
                module = foundMod;
                break;
            }
        }
    }

    // Direct check for aliases if still not found
    if (!category) {
        if (resolvedSlug === 'crm') {
            category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'operations');
            module = category.modules.find(m => m.name === 'CRM Platform');
        } else if (resolvedSlug === 'retail') {
            category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'commerce');
            module = category.modules.find(m => m.name === 'E-commerce Platform');
        } else if (resolvedSlug === 'billing') {
            category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'finance');
            module = category.modules.find(m => m.name === 'Billing Platform');
        } else if (resolvedSlug === 'booking') {
            category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'commerce');
            module = { name: 'Booking & Reservations', icon: Monitor, desc: 'Enterprise room reservations, restaurant table planners, and appointment booking apps' };
        }
    }

    if (!category) return null;

    let moduleKey = resolvedSlug;
    if (resolvedSlug === 'crm') moduleKey = 'crm-platform';
    else if (resolvedSlug === 'retail') moduleKey = 'e-commerce-platform';
    else if (resolvedSlug === 'billing') moduleKey = 'billing-platform';
    else if (resolvedSlug === 'booking') moduleKey = 'booking';

    const Icon = module ? module.icon : category.icon;
    
    // Fetch custom content overrides for Programmatic SEO pages
    const seoContent = isProgrammatic ? getSEOContent(slug) : null;
    const displayName = isProgrammatic ? seoContent.h1 : (module ? (RICH_MODULES_DATA[moduleKey]?.title || `GemSphere ${module.name}`) : `GemSphere ${category.name}`);
    const displaySubtitle = isProgrammatic ? seoContent.description : (module ? (RICH_MODULES_DATA[moduleKey]?.subtitle || module.desc) : category.description);
    
    const breadcrumbItems = [
        { name: 'Products', url: '/products' },
        { name: category.name, url: `/products/${category.id}` }
    ];
    if (module) {
        breadcrumbItems.push({ name: module.name, url: `/products/${slug}` });
    }

    const customFeatures = RICH_MODULES_DATA[moduleKey]?.features || (module ? [
        `${module.name} Core Engine & API Access`,
        "Real-time Enterprise Synchronization Layer",
        "Granular Role-Based Access Control",
        "Custom Workflow Automations & Rules",
        "Comprehensive Audit Logging & Trails",
        "Detailed Multi-tenant Data Isolation"
    ] : [
        "Fully Composable Platform Services",
        "Advanced REST & GraphQL Gateway APIs",
        "Military-Grade Data Compliance Policies",
        "Real-Time Activity Timelines & Logging"
    ]);

    const faqs = isProgrammatic ? seoContent.faqs : (RICH_MODULES_DATA[moduleKey]?.faqs || []);

    // Map standard slugs to programmatic product keys
    const standardToProgrammaticProductMap = {
        'crm': 'crm-software',
        'growth-crm': 'crm-software',
        'retail': 'retail-management',
        'retail-pos': 'retail-management',
        'hospitality-suite': 'restaurant-pos',
        'booking': 'restaurant-pos',
        'billing': 'erp',
        'identity-and-access': 'iam-platform',
        'supply-chain-management': 'supply-chain-management',
        'erp-system': 'erp',
        'notification-engine': 'helpdesk',
        'ai-chatbots': 'ai-chatbot'
    };

    let productKeyForComparison = parsing.product;
    if (!isProgrammatic) {
        productKeyForComparison = standardToProgrammaticProductMap[resolvedSlug] || resolvedSlug;
    }

    // Resolve dynamic competitor link for the product
    let compareLink = `/products/${slug}`;
    if (productKeyForComparison) {
        const competitorKeys = Object.keys(COMPETITORS_MAP);
        const matchedCompKey = competitorKeys.find(key => COMPETITORS_MAP[key].product === productKeyForComparison);
        if (matchedCompKey) {
            compareLink = `/compare/gemsphere-vs-${matchedCompKey}`;
        }
    }

    return (
        <div className="min-h-screen bg-brand-dark transition-colors duration-300">
            
            {/* Background Accent Mesh Orbs (Matches home page animations) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full opacity-20 dark:opacity-10 blur-[100px] animate-float"
                     style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.5) 0%, rgba(139,92,246,0.3) 50%, transparent 70%)' }} />
                <div className="absolute top-[10%] -right-[15%] w-[50%] h-[50%] rounded-full opacity-15 dark:opacity-8 blur-[120px]"
                     style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.4) 0%, rgba(99,102,241,0.2) 50%, transparent 70%)', animation: 'float 8s ease-in-out infinite reverse' }} />
            </div>

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <Breadcrumbs items={breadcrumbItems} />
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-cyan/20 text-brand-cyan shadow-lg shadow-brand-cyan/10">
                                <Icon size={24} />
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-brand-cyan">
                                {module ? `${category.name} Module` : `Enterprise Category`}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-text-primary mb-8 max-w-4xl leading-tight">
                            {displayName}
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mb-10" dangerouslySetInnerHTML={{ __html: displaySubtitle }} />
                        <div className="flex flex-wrap gap-4">
                            <LocalizedLink href="/demo" className="btn-primary flex items-center justify-center">
                                Schedule a Demo <ArrowRight size={18} className="ml-2" />
                            </LocalizedLink>
                            <LocalizedLink href="/about" className="glass-subtle text-text-primary px-6 py-3 rounded-xl font-bold hover:bg-brand-border/50 dark:hover:bg-brand-border/30 border border-brand-border/40 transition-colors">
                                View Technical Specs
                            </LocalizedLink>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            
            <TrustBadges />

            {/* Main Content Layout */}
            <section className="py-24 bg-brand-dark/30 border-y border-brand-border relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        
                        {/* Left Column: Capabilities Grid */}
                        <main className="lg:col-span-7">
                            <ScrollReveal>
                                <SectionHeading 
                                    align="left"
                                    badge="Capabilities"
                                    title="Features Engineered for Scale."
                                    subtitle={`Deep-dive capabilities of the ${displayName} framework built to maximize operational efficiency.`}
                                />
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {customFeatures.map((feat, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.08}>
                                        <div className="glass-card p-6 h-full border-brand-border/50 hover:border-brand-cyan/30 transition-all hover:-translate-y-1">
                                            <div className="flex gap-4">
                                                <CheckCircle2 className="text-brand-cyan shrink-0" size={24} />
                                                <span className="text-text-secondary font-bold leading-relaxed">{feat}</span>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            {/* Additional Enterprise Pitch */}
                            <ScrollReveal className="prose dark:prose-invert max-w-none border-t border-brand-border/50 pt-10">
                                <h3 className="text-2xl font-black mb-6 text-text-primary">Why Global Enterprises Run on GemSphere</h3>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    In today's digital economy, fragmented toolchains and brittle synchronization wrappers degrade performance. 
                                    GemSphere provides a unified API-first modular design. Each module hooks natively into our shared transactional database, 
                                    securing data isolation (GDPR/Compliance ready) while leveraging multi-region clustering for near-zero latency.
                                </p>
                                <div className="flex flex-wrap gap-6 text-xs font-bold text-text-muted mt-6">
                                    <span className="flex items-center gap-2"><Zap size={14} className="text-brand-cyan"/> Composable Core</span>
                                    <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-brand-indigo"/> Enterprise-Grade Shield</span>
                                    <span className="flex items-center gap-2"><Globe2 size={14} className="text-brand-cyan"/> Global Multi-Tenant Node</span>
                                </div>
                            </ScrollReveal>

                            {/* Programmatic SEO Dynamic Internal Linking Grid */}
                            {isProgrammatic && (
                                <ScrollReveal className="mt-12 border-t border-brand-border/50 pt-10">
                                    <h4 className="text-xl font-bold mb-6 text-text-primary">Related Enterprise Setup Configurations</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <LocalizedLink 
                                            href={`/products/${parsing.product}`}
                                            className="glass-card p-4 flex justify-between items-center border-brand-border/40 hover:border-brand-cyan/40 transition-colors"
                                        >
                                            <span className="text-text-secondary text-sm font-semibold">Core Product: <strong className="text-brand-cyan">{PRODUCTS_MAP[parsing.product]?.name}</strong></span>
                                            <ArrowRight size={16} className="text-brand-cyan" />
                                        </LocalizedLink>

                                        {parsing.industry && (
                                            <LocalizedLink 
                                                href={`/industries/${parsing.industry}`}
                                                className="glass-card p-4 flex justify-between items-center border-brand-border/40 hover:border-brand-cyan/40 transition-colors"
                                            >
                                                <span className="text-text-secondary text-sm font-semibold">Industry Focus: <strong className="text-brand-cyan">{INDUSTRIES_MAP[parsing.industry]?.name}</strong></span>
                                                <ArrowRight size={16} className="text-brand-cyan" />
                                            </LocalizedLink>
                                        )}

                                        {parsing.country && (
                                            <LocalizedLink 
                                                href={`/products/${parsing.product}`}
                                                className="glass-card p-4 flex justify-between items-center border-brand-border/40 hover:border-brand-cyan/40 transition-colors"
                                            >
                                                <span className="text-text-secondary text-sm font-semibold">Regional Compliance: <strong className="text-brand-cyan">{COUNTRIES_MAP[parsing.country]?.name}</strong></span>
                                                <ArrowRight size={16} className="text-brand-cyan" />
                                            </LocalizedLink>
                                        )}

                                        <LocalizedLink 
                                            href={compareLink}
                                            className="glass-card p-4 flex justify-between items-center border-brand-border/40 hover:border-brand-cyan/40 transition-colors"
                                        >
                                            <span className="text-text-secondary text-sm font-semibold">Compare Options: <strong className="text-brand-cyan">GemSphere vs Alternatives</strong></span>
                                            <ArrowRight size={16} className="text-brand-cyan" />
                                        </LocalizedLink>
                                    </div>
                                </ScrollReveal>
                            )}

                            {faqs && faqs.length > 0 && (
                                <ScrollReveal className="mt-16 border-t border-brand-border/50 pt-12">
                                    <h3 className="text-3xl font-black mb-8 text-text-primary">Frequently Asked Questions</h3>
                                    <div className="space-y-4">
                                        {faqs.map((faq, idx) => {
                                            const isOpen = activeFaqIndex === idx;
                                            return (
                                                <div 
                                                    key={idx}
                                                    className="glass-card border-brand-border/50 overflow-hidden transition-all duration-300 hover:border-brand-cyan/30"
                                                >
                                                    <button
                                                        onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                                                        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-brand-border/20 transition-colors"
                                                    >
                                                        <span className="font-bold text-text-primary text-lg">{faq.q || faq.question}</span>
                                                        <span className={`text-brand-cyan transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                                                        </span>
                                                    </button>
                                                    <div 
                                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 border-t border-brand-border/30' : 'max-h-0'}`}
                                                    >
                                                        <div className="px-6 py-5 text-text-secondary leading-relaxed bg-brand-dark/20">
                                                            {faq.a || faq.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </ScrollReveal>
                            )}
                        </main>

                        {/* Right Column: Sticky CTA Card */}
                        <aside className="lg:col-span-5 relative">
                            <div className="sticky top-32">
                                <ScrollReveal delay={0.2}>
                                    <div className="glass-heavy p-8 border-brand-cyan/20 rounded-[32px] shadow-2xl text-center">
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 flex items-center justify-center border border-brand-cyan/30">
                                            <Zap size={28} className="text-brand-cyan" />
                                        </div>
                                        <h3 className="text-2xl font-black mb-4 text-text-primary">Request a Custom Demo</h3>
                                        <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                                            Schedule a 1-on-1 technical walkthrough with a solutions architect. Explore code sandboxes, deployment configurations, and staging environments customized for your operations.
                                        </p>
                                        <LocalizedLink href="/demo" className="btn-primary w-full flex items-center justify-center py-4 font-bold">
                                            Schedule a Demo <ArrowRight size={18} className="ml-2" />
                                        </LocalizedLink>
                                        {compareLink && compareLink !== `/products/${slug}` && (
                                            <LocalizedLink href={compareLink} className="glass-subtle w-full flex items-center justify-center py-3 font-bold border border-brand-border/40 mt-3 rounded-xl hover:bg-brand-border/60 transition-colors">
                                                Compare Options <ArrowRight size={16} className="ml-2" />
                                            </LocalizedLink>
                                        )}

                                        {/* Google Play Store ASO Integration for POS / Retail / Commerce */}
                                        {(slug.includes('pos') || slug.includes('retail') || slug.includes('commerce')) && (
                                            <div className="glass-card p-5 border-brand-cyan/20 rounded-[24px] mt-5 text-left">
                                                <div className="flex items-center gap-3 mb-2.5">
                                                    <div className="w-9 h-9 rounded-xl bg-brand-cyan/15 flex items-center justify-center text-brand-cyan shrink-0">
                                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M3.609 1.814L13.792 12 3.61 22.186c-.368-.383-.61-.951-.61-1.686V3.5c0-.735.242-1.303.609-1.686zm11.235 11.238l2.583 2.583-11.458 6.55 8.875-9.133zm0-2.104L5.969 1.815l11.458 6.55-2.583 2.583zm1.488 1.052l3.434 1.963c.967.553.967 1.453 0 2.006l-3.434 1.963-2.072-2.072 2.072-1.86z"/>
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-xs text-text-primary">{SITE_CONFIG.mobileApp.appName}</h4>
                                                        <div className="flex items-center gap-1.5 text-[11px] text-text-tertiary">
                                                            <span className="text-amber-400 font-bold">★ {SITE_CONFIG.mobileApp.ratingValue}</span>
                                                            <span>• {SITE_CONFIG.mobileApp.ratingCount} reviews</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-[11px] text-text-secondary leading-relaxed mb-3">
                                                    Android client built for retail counters, mobile POS tablets, and automated receipt printing.
                                                </p>
                                                <a
                                                    href={SITE_CONFIG.mobileApp.playStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={() => trackPlayStoreClick({ moduleName: displayName })}
                                                    className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-brand-cyan/15 border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan hover:text-brand-dark font-bold text-xs transition-all duration-300 group cursor-pointer"
                                                >
                                                    <span>Install from {SITE_CONFIG.mobileApp.storeName}</span>
                                                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </ScrollReveal>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            <RelatedLinks type="products" currentId={module ? slug : category.id} />
        </div>
    );
}
