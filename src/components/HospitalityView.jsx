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
    Building, ScanLine, Monitor, Printer, Users, Calendar, 
    FolderOpen, DollarSign, ClipboardList, CheckCircle2, 
    ArrowRight, Star, XCircle, Code, ShieldCheck, Heart
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TrustBadges from './TrustBadges';
import Breadcrumbs from './Breadcrumbs';
import { parseCompositeSlug, COUNTRIES_MAP } from '../data/seoRegistry';

export default function HospitalityView({ categoryId }) {
    const parsing = parseCompositeSlug(categoryId || 'hospitality');
    const isProgrammatic = parsing.type !== 'unknown' && parsing.type !== 'product-core';
    const countryData = isProgrammatic && parsing.country ? COUNTRIES_MAP[parsing.country] : null;
    const localCountry = countryData ? countryData.name : '';
    const localCurrency = countryData ? `${countryData.symbol} (${countryData.currency})` : '';
    const localCompliance = countryData ? countryData.compliance : '';

    const breadcrumbItems = [
        { name: 'Products', url: '/products' },
        { name: 'Hospitality', url: '/products/hospitality' }
    ];
    if (localCountry) {
        breadcrumbItems.push({ name: `${localCountry} Localized`, url: `/products/${categoryId}` });
    }

    const hospitalityFeatures = [
        {
            title: "Contactless QR Code Ordering",
            icon: ScanLine,
            desc: localCountry
                ? `Empower guests to scan, browse, order, and pay directly from their tables in ${localCountry}. Reduces wait times, raises average order size, and syncs instantly.`
                : "Empower guests to scan, browse, order, and pay directly from their tables. Reduces wait times, raises average order size, and syncs instantly with front-of-house.",
            details: ["Instant QR Menu generation", "Self-checkout & digital tips", "Real-time menu modifiers"]
        },
        {
            title: "Kitchen Display System (KDS)",
            icon: Monitor,
            desc: "Ditch paper tickets. Our real-time KDS routes orders to specific kitchen prep stations, tracks prep duration, and alerts waiters the moment food is ready.",
            details: ["Station-wise ticket routing", "Color-coded prep timers", "One-tap order dispatching"]
        },
        {
            title: localCountry ? `${localCountry} POS Station` : "Cashier & Waiter POS Station",
            icon: Printer,
            desc: localCountry
                ? `A frictionless Point of Sale system optimized for speed in ${localCountry}. Seamlessly manage tables, split bills in ${localCurrency}, apply local taxes, and execute cashier shifts.`
                : "A frictionless Point of Sale system optimized for speed. Seamlessly manage tables, split bills among guests, apply local taxes, and execute cashier shifts.",
            details: ["Frictionless cash drawer control", "Thermal receipt printer integration", "Waiter performance metrics"]
        },
        {
            title: "Table Layout & Live Bookings",
            icon: Users,
            desc: "Design your dining floor digitally. Track table statuses (available, ordered, paying) in real-time and manage incoming guest reservations on a unified calendar.",
            details: ["Bespoke floor layout builder", "Seating availability optimizer", "Live guest arrival alerts"]
        },
        {
            title: "Banquet & Event Planner",
            icon: Calendar,
            desc: "Optimized for hotels and multi-property managers. Plan banquets, book event halls, configure seating plans, schedule packages, and track billing in one dashboard.",
            details: ["Event scheduling calendar", "Bespoke package pricing", "Deposit & installment payments"]
        },
        {
            title: "Waitlist Management",
            icon: ClipboardList,
            desc: "Never lose walk-in guests. Smart queue sequencing tracks wait times and automatically sends SMS updates when a table is ready, maximizing table occupancy.",
            details: ["Queue time forecast algorithm", "Automated SMS alerts", "Guest profile history tracking"]
        },
        {
            title: "F&B Menu Modifier Editor",
            icon: FolderOpen,
            desc: "Configure multi-level menus with flexible modifier groups (extra toppings, allergies, sizes), seasonal pricing models, and automatic stock depletion warnings.",
            details: ["Modifier dependency routing", "Real-time stock alerts", "Multi-lingual menu support"]
        },
        {
            title: localCountry ? `${localCountry} Revenue Sync` : "Accounts & Ledger Sync",
            icon: DollarSign,
            desc: localCountry
                ? `Synchronize restaurant and banquet revenues with your accounting core in ${localCountry}. Automate daily sales reconciliations, tax splits, and generate audit-ready logs aligned with ${localCompliance}.`
                : "Synchronize restaurant and banquet revenues with your accounting core. Automate daily sales reconciliations, tax splits, and generate audit-ready ledger logs.",
            details: localCountry 
                ? [`Settle in ${localCurrency}`, `${localCompliance} aligned logs`, `PCI-DSS security encryption`]
                : ["Automated reconciliations", "Pre-integrated tax compliance", "PCI-DSS security encryption"]
        }
    ];

    const comparisons = [
        { feature: "Fully Unified Database", gemsphere: true, competitors: false, notes: "No middleware or external API syncing required." },
        { feature: "Bespoke Custom Programming", gemsphere: true, competitors: false, notes: "Our solutions architects write code specifically for your business." },
        { feature: "0% Transaction Fee Markups", gemsphere: true, competitors: false, notes: localCurrency ? `Pay only your processor's direct cost in ${localCurrency}; we add zero transaction fees.` : "Pay only your processor's direct cost; we add zero transaction fees." },
        { feature: "Unified Retail + F&B Operations", gemsphere: true, competitors: false, notes: "Run gift shops, retail stands, and dining halls under one ledger." },
        { feature: "Zero-Latency Offline Mode", gemsphere: true, competitors: "Partial", notes: "Orders queue locally and sync dynamically when connection restores." }
    ];

    return (
        <div className="min-h-screen bg-brand-dark">
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[150px] -z-10" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <Breadcrumbs items={breadcrumbItems} />
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#ec4899]/10 text-[#ec4899]">
                                <Building size={24} />
                            </div>
                            <h2 className="text-sm font-bold tracking-widest uppercase text-[#ec4899]">
                                GemSphere Hospitality {localCountry && `· ${localCountry}`}
                            </h2>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-text-primary mb-8 max-w-5xl">
                            Intelligent Hospitality <span className="text-gradient">Without the Silos.</span>
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mb-10">
                            Say goodbye to separate, disconnected software. Connect guest QR ordering, KDS, front-of-house POS, waitlists, and banquet reservations under a single, unified database{localCountry && ` compliant with ${localCountry} regulations`}.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <LocalizedLink href="/demo?select=gemsphere-hospitality" className="btn-primary">
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
                        <h2 className="text-xs font-bold text-[#ec4899] uppercase tracking-widest mb-3">Platform Modules</h2>
                        <h3 className="text-3xl md:text-5xl font-black font-display text-text-primary mb-4">
                            {localCountry ? `${localCountry} Hospitality Management` : "Complete F&B Operations"}
                        </h3>
                        <p className="text-text-secondary">
                            {localCountry 
                                ? `Everything you need to orchestrate hospitality and restaurant operations at enterprise scale in ${localCountry}.`
                                : "Everything you need to orchestrate hospitality and restaurant operations at enterprise scale."}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {hospitalityFeatures.map((feat, i) => {
                            const FeatIcon = feat.icon;
                            return (
                                <ScrollReveal key={i} delay={i * 0.05}>
                                    <div className="glass-card p-8 h-full rounded-[24px] border border-brand-border hover:border-[#ec4899]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                                        <div>
                                            <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-border flex items-center justify-center text-brand-cyan mb-6 group-hover:border-[#ec4899]/30 transition-colors">
                                                <FeatIcon size={22} className="text-[#ec4899]" />
                                            </div>
                                            <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-[#ec4899] transition-colors">{feat.title}</h4>
                                            <p className="text-text-secondary text-sm leading-relaxed mb-6">{feat.desc}</p>
                                        </div>
                                        <ul className="space-y-2.5 border-t border-brand-border/60 pt-5 mt-auto">
                                            {feat.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-text-tertiary">
                                                    <CheckCircle2 size={13} className="text-[#ec4899] shrink-0" />
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
                    <div className="glass-heavy border-[#ec4899]/20 rounded-[40px] p-10 md:p-16 relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#ec4899]/10 rounded-full blur-[80px] pointer-events-none" />
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-8 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-[10px] font-black uppercase tracking-widest">
                                    <Code size={12} /> Bespoke Code & Custom Web Design
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black font-display text-text-primary">
                                    Bespoke Theme & Layouts. <br />
                                    <span className="text-gradient">Designed specifically for your brand.</span>
                                </h3>
                                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                                    At GemSphere, we take care of all our customers individually. We do not restrict you to rigid templates. Whether you are a small independent restaurant, a growing hotel owner, or a multi-location hospitality giant, our team will provide a **fully customized website** and custom user interface tailored to your brand's unique theme, layout, and operational flow{localCountry && ` designed for the ${localCountry} region`}.
                                </p>
                                <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                                    Our unified F&B Operating System manages your entire business footprint—from **real-time order tracking**, **table & floor layout management**, and **seating calendars** to **profit/loss accounting**, **billing splits**, **staff shifts rules**, and **supply chain inventory**. If there is any feature your business requires{localCountry && ` in ${localCountry}`}, our engineering team will build it for you using custom programming.
                                </p>
                                <blockquote className="border-l-2 border-[#ec4899] pl-4 italic text-sm text-text-tertiary">
                                    "Let's schedule a call, we will discuss your requirement and we will try to fulfill your like pain point."
                                </blockquote>
                            </div>
                            <div className="lg:col-span-4 flex flex-col gap-4">
                                <LocalizedLink href="/demo?select=gemsphere-hospitality" className="btn-primary py-4 text-center font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2">
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
                        <h2 className="text-xs font-bold text-[#ec4899] uppercase tracking-widest mb-3">Compare Solutions</h2>
                        <h3 className="text-3xl md:text-5xl font-black font-display text-text-primary mb-4">GemSphere vs Competitors</h3>
                        <p className="text-text-secondary">See how GemSphere Hospitality compares to Toast, Lightspeed, and legacy monolithic restaurant management setups.</p>
                    </div>

                    <div className="max-w-4xl mx-auto overflow-x-auto rounded-[24px] border border-brand-border glass-card p-1">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="border-b border-brand-border/60">
                                    <th className="p-5 text-sm font-extrabold text-text-primary uppercase tracking-wider">Features</th>
                                    <th className="p-5 text-sm font-extrabold text-[#ec4899] uppercase tracking-wider">GemSphere</th>
                                    <th className="p-5 text-sm font-extrabold text-text-muted uppercase tracking-wider">Legacy Apps</th>
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
