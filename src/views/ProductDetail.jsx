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
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import Breadcrumbs from '../components/Breadcrumbs';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import { generateProductSchema } from '../utils/schemaGenerators';
import RelatedLinks from '../components/RelatedLinks';
import TrustBadges from '../components/TrustBadges';
import { PRODUCT_ECOSYSTEM, slugify } from '../data/productEcosystem';

// Custom rich features mapping for key modules
const RICH_MODULES_DATA = {
    'crm-platform': {
        title: "GemSphere CRM",
        subtitle: "Sales intelligence and pipeline automation for global teams",
        features: [
            "AI-Powered Lead Scoring & Routing",
            "Interactive Sales Pipelines & Deal Stages",
            "Omnichannel Email & SMS Outreach Campaigns",
            "Unified 360° Customer Profile Matrix",
            "Advanced Activity Timelines & Reminders",
            "Real-time Revenue & Performance Analytics"
        ]
    },
    'crm': {
        title: "GemSphere CRM",
        subtitle: "Sales intelligence and pipeline automation for global teams",
        features: [
            "AI-Powered Lead Scoring & Routing",
            "Interactive Sales Pipelines & Deal Stages",
            "Omnichannel Email & SMS Outreach Campaigns",
            "Unified 360° Customer Profile Matrix",
            "Advanced Activity Timelines & Reminders",
            "Real-time Revenue & Performance Analytics"
        ]
    },
    'e-commerce-platform': {
        title: "GemSphere Commerce",
        subtitle: "Unified storefronts, inventory, and POS operations",
        features: [
            "Real-time Global Inventory Sync across Locations",
            "Headless Storefront APIs for custom Web & Mobile Apps",
            "Dynamic Promotion & Discount Orchestration Engine",
            "Multi-Currency & Localized Tax Compliance",
            "Unified Checkout & Cart Operations",
            "Automated Sourcing & Purchase Order Management"
        ]
    },
    'retail': {
        title: "GemSphere Retail",
        subtitle: "Unified storefronts, inventory, and POS operations",
        features: [
            "Real-time Global Inventory Sync across Locations",
            "Headless Storefront APIs for custom Web & Mobile Apps",
            "Dynamic Promotion & Discount Orchestration Engine",
            "Multi-Currency & Localized Tax Compliance",
            "Unified Checkout & Cart Operations",
            "Automated Sourcing & Purchase Order Management"
        ]
    },
    'billing-platform': {
        title: "GemSphere Billing",
        subtitle: "Flexible billing orchestration and subscription engines",
        features: [
            "Dynamic Subscription Lifecycle Manager",
            "Multi-Gateway Payment Integration & Reconciliations",
            "Automated Invoicing & E-receipt Dispatches",
            "Usage-Based / Metered Billing Schemes",
            "Dunning Management & Failed Payment Recoveries",
            "Strict Financial Auditing & GL Sync"
        ]
    },
    'billing': {
        title: "GemSphere Billing",
        subtitle: "Flexible billing orchestration and subscription engines",
        features: [
            "Dynamic Subscription Lifecycle Manager",
            "Multi-Gateway Payment Integration & Reconciliations",
            "Automated Invoicing & E-receipt Dispatches",
            "Usage-Based / Metered Billing Schemes",
            "Dunning Management & Failed Payment Recoveries",
            "Strict Financial Auditing & GL Sync"
        ]
    },
    'pos-system': {
        title: "GemSphere Smart POS",
        subtitle: "Fast checkout and mall-wide cash desk management",
        features: [
            "Offline Checkout Support with Local Cache Sync",
            "Thermal Printers & Cash Drawer System Drivers",
            "Barcode & QR Code Scanning SKU Registry",
            "Multi-Tender Payments & Cashier Session Management",
            "Interactive Digital Receipts & Mall Audits",
            "Loyalty Points Redemption at Checkout Desk"
        ]
    },
    'booking': {
        title: "GemSphere Hospitality & Booking",
        subtitle: "Smart table reservations, dining, and kitchen orchestration",
        features: [
            "Digital Restaurant Table Reservations & Seat Planners",
            "QR Code Tableside Ordering & Menu Catalogs",
            "Kitchen Display System (KDS) Ticketing Sync",
            "Multi-Property Reservation Centralizer",
            "Billing Integration with Split Tender Support",
            "VIP Guests & Diet Preference Catalogs"
        ]
    }
};

export default function ProductDetail({ slug }) {
    // Find the category or module
    let category = null;
    let module = null;

    // Direct check for category
    category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === slug);

    if (!category) {
        // Find which category holds the module matching this slug
        for (const cat of PRODUCT_ECOSYSTEM.categories) {
            const foundMod = cat.modules.find(m => slugify(m.name) === slug);
            if (foundMod) {
                category = cat;
                module = foundMod;
                break;
            }
        }
    }

    // Direct check for aliases if still not found
    if (!category) {
        if (slug === 'crm') {
            category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'operations');
            module = category.modules.find(m => m.name === 'CRM Platform');
        } else if (slug === 'retail') {
            category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'commerce');
            module = category.modules.find(m => m.name === 'E-commerce Platform');
        } else if (slug === 'billing') {
            category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'finance');
            module = category.modules.find(m => m.name === 'Billing Platform');
        } else if (slug === 'booking') {
            category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === 'commerce');
            module = category.modules.find(m => m.name === 'POS System'); // Fallback or mapping
        }
    }

    if (!category) return null;

    const Icon = module ? module.icon : category.icon;
    const displayName = module ? (RICH_MODULES_DATA[slug]?.title || `GemSphere ${module.name}`) : `GemSphere ${category.name}`;
    const displaySubtitle = module ? (RICH_MODULES_DATA[slug]?.subtitle || module.desc) : category.description;
    
    const breadcrumbItems = [
        { name: 'Products', url: '/products' },
        { name: category.name, url: `/products/${category.id}` }
    ];
    if (module) {
        breadcrumbItems.push({ name: module.name, url: `/products/${slug}` });
    }

    const customFeatures = RICH_MODULES_DATA[slug]?.features || (module ? [
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

    return (
        <div className="min-h-screen bg-brand-dark transition-colors duration-300">
            <SchemaMarkup schema={generateProductSchema({ name: displayName, description: displaySubtitle })} />
            
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
                            <h2 className="text-sm font-bold tracking-widest uppercase text-brand-cyan">
                                {module ? `${category.name} Module` : `Enterprise Category`}
                            </h2>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-text-primary mb-8 max-w-4xl leading-tight">
                            {displayName}
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
                            {displaySubtitle}
                        </p>
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
                        <div className="lg:col-span-7">
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
                        </div>

                        {/* Right Column: Sticky CTA Card */}
                        <div className="lg:col-span-5 relative">
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
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <RelatedLinks type="products" currentId={module ? slug : category.id} />
        </div>
    );
}
