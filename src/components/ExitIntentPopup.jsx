/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import LocalizedLink from './LocalizedLink';

const STORAGE_KEY = 'gemsphere-exit-intent-shown';

export default function ExitIntentPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [scrolledEnough, setScrolledEnough] = useState(false);

    // Track scroll depth — only show popup if user has engaged (scrolled > 40%)
    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 40) {
                setScrolledEnough(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Detect exit intent (cursor leaving viewport top)
    const handleMouseLeave = useCallback((e) => {
        if (e.clientY <= 0 && scrolledEnough) {
            try {
                const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
                if (!alreadyShown) {
                    setIsVisible(true);
                    sessionStorage.setItem(STORAGE_KEY, 'true');
                }
            } catch {
                // Fallback if sessionStorage is unavailable
                setIsVisible(true);
            }
        }
    }, [scrolledEnough]);

    useEffect(() => {
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [handleMouseLeave]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        // Store the lead locally
        try {
            const existing = JSON.parse(localStorage.getItem('gemsphere-email-leads') || '[]');
            existing.push({ email, source: 'exit-intent', timestamp: new Date().toISOString() });
            localStorage.setItem('gemsphere-email-leads', JSON.stringify(existing));
        } catch {}

        setSubmitted(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 2500);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-brand-dark/80 backdrop-blur-md"
                        onClick={handleClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg overflow-hidden rounded-[32px] shadow-2xl"
                    >
                        {/* Gradient border effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/30 via-brand-indigo/20 to-brand-violet/30 rounded-[32px] p-[1px]">
                            <div className="absolute inset-[1px] bg-brand-card rounded-[31px]" />
                        </div>

                        <div className="relative p-8 md:p-10">
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-5 right-5 p-2 rounded-full hover:bg-brand-border/30 text-text-muted hover:text-text-primary transition-colors cursor-pointer z-10"
                                aria-label="Close popup"
                            >
                                <X size={18} />
                            </button>

                            {/* Decorative gradient blob */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-cyan/15 rounded-full blur-[60px] pointer-events-none" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brand-indigo/15 rounded-full blur-[60px] pointer-events-none" />

                            {submitted ? (
                                /* Success state */
                                <div className="text-center py-8 relative z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', damping: 15, stiffness: 400 }}
                                        className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center"
                                    >
                                        <Sparkles size={28} className="text-emerald-400" />
                                    </motion.div>
                                    <h3 className="text-2xl font-black text-text-primary mb-2 font-display">Thank You!</h3>
                                    <p className="text-text-secondary text-sm">We'll reach out shortly to schedule your demo. Check your inbox for updates.</p>
                                </div>
                            ) : (
                                /* Form state */
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 flex items-center justify-center border border-brand-cyan/20">
                                            <Sparkles size={22} className="text-brand-cyan" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-text-primary font-display leading-tight">
                                                Before You Go...
                                            </h3>
                                            <p className="text-xs text-text-muted font-semibold uppercase tracking-wider mt-0.5">
                                                Flagship Solutions
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                        Explore our flagship enterprise products — <strong className="text-text-primary">GemSphere Commerce</strong> and <strong className="text-text-primary">GemSphere Hospitality</strong>. 
                                        Schedule a free 15-minute consultation to see how they can transform your operations.
                                    </p>

                                    {/* Benefits list */}
                                    <div className="grid grid-cols-2 gap-2 mb-6">
                                        {[
                                            'GemSphere Commerce Platform',
                                            'GemSphere Hospitality Core',
                                            'Omnichannel Retail Integrations',
                                            'Reservations & Booking Systems'
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-text-tertiary font-semibold">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your work email"
                                            className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-3.5 text-sm text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full btn-primary py-3.5 text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2"
                                        >
                                            Schedule a Call <ArrowRight size={16} />
                                        </button>
                                    </form>

                                    <p className="text-[10px] text-text-muted text-center mt-4">
                                        No spam. Unsubscribe anytime. Your data stays private.
                                    </p>

                                    {/* Alternative CTA */}
                                    <div className="mt-5 pt-5 border-t border-brand-border text-center">
                                        <LocalizedLink
                                            href="/demo"
                                            className="text-sm font-bold text-text-tertiary hover:text-brand-cyan transition-colors inline-flex items-center gap-1.5"
                                        >
                                            Or book a free 15-min architecture review <ArrowRight size={14} />
                                        </LocalizedLink>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
