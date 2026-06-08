/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Check, Download, FileText, Mail, Search, Sparkles, X } from 'lucide-react';

const RESOURCE_ITEMS = [
    {
        id: 'enterprise-ai-playbook',
        title: 'The Enterprise AI Playbook',
        description: 'A comprehensive engineering blueprint for scaling generative AI agents, fine-tuning large language models, and securing vector databases in enterprise networks.',
        type: 'Ebook / Guide',
        category: 'AI',
        downloadCount: '2.4k'
    },
    {
        id: 'legacy-erp-migration-checklist',
        title: 'ERP Migration Architecture Blueprint',
        description: 'A step-by-step technical checklist and microservice bridge architectural guide for migrating core financial ledger applications to cloud-native platforms.',
        type: 'Checklist / Architectures',
        category: 'Architecture',
        downloadCount: '1.8k'
    },
    {
        id: 'commerce-platform-performance-audit',
        title: 'Global Commerce Performance Handbook',
        description: 'Best practices for optimizing sub-second load times, configuring localized CDNs, and architecting multi-currency systems for global checkout operations.',
        type: 'Whitepaper',
        category: 'Commerce',
        downloadCount: '1.2k'
    },
    {
        id: 'saas-vendor-security-audit-sheet',
        title: '2026 Enterprise Vendor Security Audit Checklist',
        description: 'A formal compliance spreadsheet and question matrix covering SOC2 Type II, GDPR data residency, ISO 27001, and Zero-Trust identity controls for auditing external SaaS vendors.',
        type: 'Audit Spreadsheet',
        category: 'Security',
        downloadCount: '3.1k'
    }
];

const CATEGORIES = ['All', 'AI', 'Commerce', 'Security', 'Architecture'];

export default function Resources() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedResource, setSelectedResource] = useState(null);
    
    // Gated form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Sidebar newsletter
    const [sidebarEmail, setSidebarEmail] = useState('');
    const [sidebarSubscribed, setSidebarSubscribed] = useState(false);

    const filteredResources = useMemo(() => {
        return RESOURCE_ITEMS.filter(res => {
            const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
            const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 res.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [searchQuery, selectedCategory]);

    const handleDownloadSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !company) return;

        try {
            const existing = JSON.parse(localStorage.getItem('gemsphere-email-leads') || '[]');
            existing.push({
                name,
                email,
                company,
                source: `resource-download-${selectedResource.id}`,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('gemsphere-email-leads', JSON.stringify(existing));
        } catch {}

        setSubmitted(true);
        setTimeout(() => {
            setSelectedResource(null);
            setSubmitted(false);
            setName('');
            setEmail('');
            setCompany('');
        }, 3000);
    };

    const handleSidebarSubscribe = (e) => {
        e.preventDefault();
        if (!sidebarEmail) return;

        try {
            const existing = JSON.parse(localStorage.getItem('gemsphere-email-leads') || '[]');
            existing.push({
                email: sidebarEmail,
                source: 'resources-sidebar-subscribe',
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('gemsphere-email-leads', JSON.stringify(existing));
        } catch {}

        setSidebarSubscribed(true);
        setSidebarEmail('');
    };

    return (
        <main className="min-h-screen bg-brand-dark pt-12 pb-24">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-widest mb-4">
                        <BookOpen size={12} /> Knowledge Center
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-text-primary font-display">
                        Resources & Whitepapers
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                        Access detailed research publications, compliance checksheets, and integration guides compiled by GemSphere solutions architects.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left: Resource Cards List */}
                    <div className="lg:col-span-8 space-y-6">
                        {filteredResources.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredResources.map((res) => (
                                    <div 
                                        key={res.id}
                                        className="glass-card rounded-[24px] p-6 border-brand-border flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group hover:border-brand-cyan/20"
                                    >
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="px-2.5 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-wider">
                                                    {res.category}
                                                </span>
                                                <span className="text-[10px] text-text-muted font-bold uppercase tracking-wider">
                                                    {res.type}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-black text-text-primary group-hover:text-brand-cyan transition-colors font-display line-clamp-2 font-display">
                                                {res.title}
                                            </h3>
                                            <p className="text-xs text-text-secondary leading-relaxed font-medium line-clamp-3">
                                                {res.description}
                                            </p>
                                        </div>
                                        <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between">
                                            <span className="text-[10px] text-text-tertiary font-bold">
                                                📥 {res.downloadCount} Downloads
                                            </span>
                                            <button
                                                onClick={() => setSelectedResource(res)}
                                                className="btn-primary py-2 px-4 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                                            >
                                                Download Free <Download size={13} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 glass-card rounded-[32px] border-brand-border">
                                <p className="text-lg text-text-secondary font-medium">No resources found matching your criteria.</p>
                            </div>
                        )}
                    </div>

                    {/* Right: Search, Category list & Newsletter sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Search */}
                        <div className="glass-card p-6 rounded-[24px] border-brand-border space-y-4">
                            <h3 className="text-sm font-black text-text-primary uppercase tracking-wider">Search Resources</h3>
                            <div className="relative">
                                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search resources..."
                                    className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl pl-11 pr-4 py-3 text-xs text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="glass-card p-6 rounded-[24px] border-brand-border space-y-4">
                            <h3 className="text-sm font-black text-text-primary uppercase tracking-wider">Topics</h3>
                            <div className="flex flex-col gap-1.5">
                                {CATEGORIES.map((cat) => {
                                    const count = cat === 'All' 
                                        ? RESOURCE_ITEMS.length 
                                        : RESOURCE_ITEMS.filter(res => res.category === cat).length;
                                    return (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                                selectedCategory === cat
                                                ? 'bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan'
                                                : 'hover:bg-brand-card/40 text-text-secondary hover:text-text-primary'
                                            }`}
                                        >
                                            <span>{cat}</span>
                                            <span className="text-[10px] opacity-65 bg-brand-border/40 px-2 py-0.5 rounded-full">{count}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Newsletter box */}
                        <div className="relative rounded-[24px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/20 to-brand-indigo/20 rounded-[24px]" />
                            <div className="relative m-[1px] bg-brand-card rounded-[23px] p-6 border border-brand-border/60">
                                {sidebarSubscribed ? (
                                    <div className="text-center py-6">
                                        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                            <Check size={20} className="text-emerald-400" />
                                        </div>
                                        <h4 className="text-base font-bold text-text-primary mb-1">Subscribed!</h4>
                                        <p className="text-xs text-text-tertiary">You are now on the insider list.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSidebarSubscribe} className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <Mail size={16} className="text-brand-cyan" />
                                            <h4 className="text-sm font-black text-text-primary uppercase tracking-wider">
                                                Resource Alerts
                                            </h4>
                                        </div>
                                        <p className="text-xs text-text-secondary leading-relaxed font-medium">
                                            Subscribe to be notified when new whitepapers and implementation blueprints are published.
                                        </p>
                                        <div className="space-y-2">
                                            <input
                                                type="email"
                                                required
                                                value={sidebarEmail}
                                                onChange={(e) => setSidebarEmail(e.target.value)}
                                                placeholder="Enter your work email"
                                                className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-3 text-xs text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                            />
                                            <button
                                                type="submit"
                                                className="w-full btn-primary py-3 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5"
                                            >
                                                Subscribe Now <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gated Modal */}
            <AnimatePresence>
                {selectedResource && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"
                            onClick={() => setSelectedResource(null)}
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative w-full max-w-md bg-brand-card border border-brand-cyan/20 rounded-[24px] overflow-hidden shadow-2xl p-8"
                        >
                            <button
                                onClick={() => setSelectedResource(null)}
                                className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-white/10 text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                            >
                                <X size={16} />
                            </button>

                            {submitted ? (
                                <div className="text-center py-8 space-y-4">
                                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                        <Check size={24} className="text-emerald-400" />
                                    </div>
                                    <h3 className="text-xl font-black text-text-primary font-display">Download Started!</h3>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                        We are preparing your copy of <strong className="text-text-primary">{selectedResource.title}</strong>. Please check your inbox for the download link.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleDownloadSubmit} className="space-y-4 relative z-10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
                                            <FileText size={18} className="text-brand-cyan" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-black text-text-primary uppercase tracking-wider">Download Resource</h4>
                                            <p className="text-[10px] text-text-muted font-bold uppercase tracking-wider mt-0.5">{selectedResource.type}</p>
                                        </div>
                                    </div>

                                    <h3 className="text-base font-bold text-text-primary font-display leading-snug">
                                        {selectedResource.title}
                                    </h3>

                                    <div className="space-y-3 pt-2">
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your full name"
                                            className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-2.5 text-xs text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                        />
                                        <input
                                            type="text"
                                            required
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            placeholder="Company name"
                                            className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-2.5 text-xs text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                        />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Work email address"
                                            className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-2.5 text-xs text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full btn-primary py-3 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5"
                                        >
                                            Get Free Copy <ArrowRight size={14} />
                                        </button>
                                    </div>

                                    <p className="text-[9px] text-text-muted text-center pt-2">
                                        No spam. Unsubscribe anytime.
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}
