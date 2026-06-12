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
import LocalizedLink from './LocalizedLink';
import { 
    ShoppingCart, Monitor, BadgeCheck, Printer, Heart, 
    FolderOpen, Package, ClipboardList, Gift, Banknote, 
    ScanLine, Building, CheckCircle2, ArrowRight, XCircle, Code, 
    ShieldCheck, Zap
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TrustBadges from './TrustBadges';
import Breadcrumbs from './Breadcrumbs';
import { parseCompositeSlug, COUNTRIES_MAP } from '../data/seoRegistry';

export default function CommerceView({ categoryId }) {
    const parsing = parseCompositeSlug(categoryId || 'commerce');
    const isProgrammatic = parsing.type !== 'unknown' && parsing.type !== 'product-core';
    const countryData = isProgrammatic && parsing.country ? COUNTRIES_MAP[parsing.country] : null;
    const localCountry = countryData ? countryData.name : '';
    const localCurrency = countryData ? `${countryData.symbol} (${countryData.currency})` : '';
    const localCompliance = countryData ? countryData.compliance : '';

    const breadcrumbItems = [
        { name: 'Products', url: '/products' },
        { name: 'Commerce & Retail', url: '/products/commerce' }
    ];
    if (localCountry) {
        breadcrumbItems.push({ name: `${localCountry} Localized`, url: `/products/${categoryId}` });
    }

    const commerceFeatures = [
        {
            title: "Smart Omnichannel POS System",
            icon: Monitor,
            desc: localCountry
                ? `A lightning-fast checkout interface connecting retail counters, mobile POS, and inventory in real-time across ${localCountry}. Designed to handle high volume checkout without lag.`
                : "A lightning-fast checkout interface connecting retail counters, mobile POS, and inventory in real-time. Designed to handle high volume checkout without lag.",
            details: ["Thermal printer & drawer sync", "Cashier shift management", "Smart barcodes scanning"]
        },
        {
            title: localCountry ? `${localCountry} Tax & Compliance` : "Multi-Region Tax & Compliance",
            icon: BadgeCheck,
            desc: localCountry 
                ? `Enforce local tax compliance, generate electronic invoices, and satisfy ${localCompliance} auditing regulations automatically within ${localCountry}.`
                : "Sell in 170+ countries with automated compliance. Enforce localized sales tax rates, generate electronic invoices, and maintain immutable audit log books.",
            details: localCountry 
                ? [`${localCompliance} compliant logs`, `Real-time localized tax routing`, `Electronic billing compliance`]
                : ["Real-time localized tax routing", "Electronic billing compliance", "Immutable system audit logs"]
        },
        {
            title: "Headless E-commerce Engine",
            icon: ShoppingCart,
            desc: "Next-generation headless commerce supporting high-performance frontends, flexible catalog APIs, customizable checkout funnels, and sub-second page loads.",
            details: ["Fully API-first layout", "Tailorable custom checkout", "Sub-second product fetches"]
        },
        {
            title: "Intelligent Global Catalog",
            icon: FolderOpen,
            desc: "Orchestrate millions of SKUs from one hub. Configure custom modifier groups, localized currencies, category rules, and instant global price lists updates.",
            details: ["Multi-currency price lists", "Bespoke product variables", "Variant search optimization"]
        },
        {
            title: "Multi-Location Live Inventory",
            icon: Package,
            desc: "Avoid stockouts and overselling. Automatically synchronize stock counts across brick-and-mortar stores, online warehouses, and marketplaces in real-time.",
            details: ["Automated stock depletion sync", "Multi-warehouse dispatch rules", "Reorder alert reminders"]
        },
        {
            title: localCountry ? `${localCountry} Payments Hub` : "Multi-Gateway Payments Hub",
            icon: Banknote,
            desc: localCountry 
                ? `Accept card payments, bank transfers, and digital wallets. Settle transactions directly in your local currency: ${localCurrency}, integrated with automated reconciliation.`
                : "Accept card payments, bank transfers, digital wallets, and split tenders. Fully integrated with automated reconciliation logs to speed up accounting.",
            details: localCountry 
                ? [`Settle in local currency: ${localCurrency}`, `Automated payment reconcile`, `PCI-DSS security encryption`]
                : ["Integrated split tenders", "Automated payment reconcile", "PCI-DSS security encryption"]
        },
        {
            title: "Loyalty, Rewards & CRM",
            icon: Heart,
            desc: "Build long-term relationships with unified customer profiles. Configure points matrices, tier levels, reward coupons, and automated marketing flows.",
            details: ["360° customer ledger logs", "Bespoke rewards rules", "Integrated marketing alerts"]
        },
        {
            title: "Multi-Vendor Marketplace",
            icon: Building,
            desc: "Scale your inventory footprint without warehousing costs. Host third-party sellers, automate commission splits, and orchestrate fulfillment routes.",
            details: ["Seller portal integration", "Automated commission split", "Bespoke vendor onboarding"]
        }
    ];

    const comparisons = [
        { feature: "Fully Unified ERP Database", gemsphere: true, competitors: false, notes: "Direct, out-of-the-box sync with Supply Chain, Finance & CRM." },
        { feature: "0% Transaction Fee Markups", gemsphere: true, competitors: "Partial", notes: localCurrency ? `No platform markups on processing fees. Shopify charges up to 2% or local equivalent.` : "No platform markups on processing fees. Shopify charges up to 2%." },
        { feature: "Bespoke Custom Programming", gemsphere: true, competitors: false, notes: "Bespoke feature development specifically coded for your business." },
        { feature: "Headless Composable Architecture", gemsphere: true, competitors: "Partial", notes: "API-first endpoints make customizing checkout flows effortless." },
        { feature: "Omnichannel POS & Digital Sync", gemsphere: true, competitors: "Partial", notes: "Sync physical registers and digital channels in real-time." }
    ];

    return (
        <div className="min-h-screen bg-brand-dark">
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <Breadcrumbs items={breadcrumbItems} />
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-cyan/10 text-brand-cyan">
                                <ShoppingCart size={24} />
                            </div>
                            <h2 className="text-sm font-bold tracking-widest uppercase text-brand-cyan">
                                GemSphere Commerce {localCountry && `· ${localCountry}`}
                            </h2>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-text-primary mb-8 max-w-5xl">
                            Intelligent Commerce <span className="text-gradient">Without Transaction Fees.</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mb-10">
                            Orchestrate omnichannel registers, live inventory sync, global billing compliance, and headless storefronts under one unified platform. {localCountry ? `Fully localized for the ${localCountry} market supporting settlements in ${localCurrency} and compliant with ${localCompliance}.` : "We charge zero platform transaction fees, keeping your margins where they belong."}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <LocalizedLink href="/demo?select=gemsphere-commerce" className="btn-primary">
                                Schedule a Call <ArrowRight size={18} className="ml-2 inline" />
                            </LocalizedLink>
                            <LocalizedLink href="/contact" className="glass-subtle px-6 py-3 rounded-xl font-bold hover:bg-brand-border/50 transition-colors">
                                Talk to Solutions Team
                            </LocalizedLink>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <TrustBadges />

            {/* Core Capabilities */}
            <section className="py-24 bg-brand-card/30 border-y border-brand-border relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-3">Platform Modules</h2>
                        <h3 className="text-3xl md:text-5xl font-black font-display text-text-primary mb-4">
                            {localCountry ? `${localCountry} Retail Orchestration` : "Complete Omnichannel Retail"}
                        </h3>
                        <p className="text-text-secondary">
                            {localCountry 
                                ? `Everything you need to orchestrate retail and digital commerce at enterprise scale in ${localCountry}.` 
                                : "Everything you need to orchestrate global retail and digital commerce at enterprise scale."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commerceFeatures.map((feat, i) => {
                            const FeatIcon = feat.icon;
                            return (
                                <ScrollReveal key={i} delay={i * 0.05}>
                                    <div className="glass-card p-8 h-full rounded-[24px] border border-brand-border hover:border-brand-cyan/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                                        <div>
                                            <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center text-brand-cyan mb-6 group-hover:border-brand-cyan/30 transition-colors">
                                                <FeatIcon size={22} className="text-brand-cyan" />
                                            </div>
                                            <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-cyan transition-colors">{feat.title}</h4>
                                            <p className="text-text-secondary text-sm leading-relaxed mb-6">{feat.desc}</p>
                                        </div>
                                        <ul className="space-y-2.5 border-t border-brand-border/60 pt-5 mt-auto">
                                            {feat.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-text-tertiary">
                                                    <CheckCircle2 size={13} className="text-brand-cyan shrink-0" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Custom Tailoring via Code / Custom Programming */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-indigo/5 rounded-full blur-[130px] pointer-events-none" />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="glass-heavy border-brand-cyan/20 rounded-[40px] p-10 md:p-16 relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-8 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-widest">
                                    <Code size={12} /> Custom Coding & Bespoke Web Design
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black font-display text-text-primary">
                                    Bespoke Theme & Layouts. <br />
                                    <span className="text-gradient">Designed specifically for your brand.</span>
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                                    Every commerce operation is different. At GemSphere, we take care of all our customers individually. We do not restrict you to rigid templates. Whether you are an independent retail merchant, a specialty brand like **jewelers**, a restaurant/hotel owner, or a large multi-property giant, our team will provide a **fully customized website** and custom user interface tailored to your brand's unique theme, layout, and operational requirements{localCountry && ` for the ${localCountry} market`}.
                                </p>
                                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                                    Our unified Commerce Operating System manages your entire business footprint—from **real-time order tracking**, **profit & loss accounting**, **split billing**, and **supply chain inventory rules** to **multi-store management** and **staff shifts control**. If your business has specialized needs{localCountry && ` in ${localCountry}`}, our engineering team will build them for you using custom programming to solve your exact pain points.
                                </p>
                                <blockquote className="border-l-2 border-brand-cyan pl-4 italic text-sm text-text-tertiary">
                                    "Let's schedule a call, we will discuss your requirement and we will try to fulfill your like pain point."
                                </blockquote>
                            </div>
                            <div className="lg:col-span-4 flex flex-col gap-4">
                                <LocalizedLink href="/demo?select=gemsphere-commerce" className="btn-primary py-4 text-center font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2">
                                    Schedule a Call <ArrowRight size={16} />
                                </LocalizedLink>
                                <LocalizedLink href="/contact" className="btn-secondary py-4 text-center font-bold text-sm tracking-wider uppercase">
                                    Contact Support
                                </LocalizedLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Competitor Comparison */}
            <section className="py-24 border-t border-brand-border bg-brand-deeper">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-3">Compare Solutions</h2>
                        <h3 className="text-3xl md:text-5xl font-black font-display text-text-primary mb-4">GemSphere vs Competitors</h3>
                        <p className="text-text-secondary">See how GemSphere Commerce compares to Shopify Plus, Magento, and Salesforce Commerce platforms.</p>
                    </div>

                    <div className="max-w-4xl mx-auto overflow-x-auto rounded-[24px] border border-brand-border glass-card p-1">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="border-b border-brand-border/60">
                                    <th className="p-5 text-sm font-extrabold text-text-primary uppercase tracking-wider">Features</th>
                                    <th className="p-5 text-sm font-extrabold text-brand-cyan uppercase tracking-wider">GemSphere</th>
                                    <th className="p-5 text-sm font-extrabold text-text-muted uppercase tracking-wider">Competitors</th>
                                    <th className="p-5 text-sm font-extrabold text-text-muted uppercase tracking-wider">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisons.map((row, i) => (
                                    <tr key={i} className="border-b border-brand-border/30 last:border-b-0 hover:bg-brand-card/25 transition-colors">
                                        <td className="p-5 text-sm font-bold text-text-primary">{row.feature}</td>
                                        <td className="p-5 text-sm text-emerald-400 font-extrabold flex items-center gap-1.5">
                                            <CheckCircle2 size={16} /> Yes
                                        </td>
                                        <td className="p-5 text-sm text-rose-500 font-bold">
                                            {typeof row.competitors === 'boolean' ? (
                                                row.competitors ? "Yes" : <span className="flex items-center gap-1"><XCircle size={15} /> No</span>
                                            ) : (
                                                <span className="text-amber-400 font-semibold">{row.competitors}</span>
                                            )}
                                        </td>
                                        <td className="p-5 text-xs font-medium text-text-tertiary">{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}
