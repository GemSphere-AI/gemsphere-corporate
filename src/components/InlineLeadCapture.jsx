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
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function InlineLeadCapture({
    headline = "Schedule a Call",
    subtitle = "Schedule a 1-on-1 technical walkthrough with our solutions team. Let's discuss your requirements and how we can fulfill your business pain points.",
    className = '',
}) {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        // Store the lead locally
        try {
            const existing = JSON.parse(localStorage.getItem('gemsphere-email-leads') || '[]');
            existing.push({ email, source: 'inline-lead-capture', timestamp: new Date().toISOString() });
            localStorage.setItem('gemsphere-email-leads', JSON.stringify(existing));
        } catch {}

        setSubmitted(true);
    };

    return (
        <section className={`py-16 relative overflow-hidden ${className}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <ScrollReveal direction="up">
                    <div className="relative rounded-[32px] overflow-hidden">
                        {/* Animated gradient border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/30 via-brand-indigo/40 to-brand-violet/30 rounded-[32px] animate-gradient-x" />

                        {/* Inner card */}
                        <div className="relative m-[1px] bg-brand-card rounded-[31px] p-8 md:p-12 lg:p-14">
                            {/* Background accents */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-brand-indigo/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                {/* Left: Content */}
                                <div className="lg:col-span-7">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-widest mb-4">
                                        <Sparkles size={12} /> Flagship Solutions
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black text-text-primary font-display tracking-tight mb-3">
                                        {headline}
                                    </h3>
                                    <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                                        {subtitle}
                                    </p>

                                    {/* Bullet points */}
                                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                                        {[
                                            'Custom Platform Demo',
                                            'Bespoke Theme Layouts',
                                            '0% Transaction Fee Structure',
                                            'Bespoke Custom Coding'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-text-tertiary font-semibold">
                                                <div className="w-1 h-1 rounded-full bg-brand-cyan" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Form */}
                                <div className="lg:col-span-5">
                                    {submitted ? (
                                        <motion.div
                                            initial={{ scale: 0.9, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="text-center py-8 glass-card rounded-2xl border-emerald-500/20"
                                        >
                                            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                                <Check size={24} className="text-emerald-400" />
                                            </div>
                                            <h4 className="text-lg font-bold text-text-primary mb-1">Thank you!</h4>
                                            <p className="text-xs text-text-tertiary">Our solutions team will contact you shortly to schedule a call.</p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-3">
                                            <div className="relative">
                                                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                                                <input
                                                    type="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Your work email address"
                                                    className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl pl-11 pr-4 py-3.5 text-sm text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full btn-primary py-3.5 text-sm font-black flex items-center justify-center gap-2"
                                            >
                                                Schedule a Call <ArrowRight size={16} />
                                            </button>
                                            <p className="text-[10px] text-text-muted text-center">
                                                By submitting, you agree to our privacy policy.
                                            </p>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
