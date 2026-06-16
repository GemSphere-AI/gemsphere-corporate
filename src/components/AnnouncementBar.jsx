/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import LocalizedLink from './LocalizedLink';

const STORAGE_KEY = 'gemsphere-announcement-dismissed';

export default function AnnouncementBar({
    message = "Tired of software integration headaches? Experience the unified power of GemSphere Commerce and Hospitality.",
    ctaText = "Schedule a Call",
    ctaHref = "/demo?select=gemsphere-commerce,gemsphere-hospitality",
    variant = "gradient", // "gradient" | "cyan" | "indigo"
}) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Check if user has previously dismissed this announcement
        try {
            const dismissed = localStorage.getItem(STORAGE_KEY);
            if (!dismissed) {
                setIsVisible(true);
            }
        } catch {
            setIsVisible(true);
        }
    }, []);

    useEffect(() => {
        if (!isVisible || !containerRef.current) {
            document.documentElement.style.setProperty('--announcement-height', '0px');
            return;
        }

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const height = entry.target.offsetHeight;
                document.documentElement.style.setProperty('--announcement-height', `${height}px`);
            }
        });

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
            document.documentElement.style.setProperty('--announcement-height', '0px');
        };
    }, [isVisible]);

    const handleDismiss = () => {
        setIsVisible(false);
        try {
            localStorage.setItem(STORAGE_KEY, 'true');
        } catch {}
        window.dispatchEvent(new Event('announcementDismissed'));
    };

    const bgStyles = {
        gradient: 'bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#0f172a] dark:from-[#00d4ff]/10 dark:via-[#6366f1]/10 dark:to-[#00d4ff]/10',
        cyan: 'bg-gradient-to-r from-brand-cyan/10 via-brand-cyan/20 to-brand-cyan/10',
        indigo: 'bg-gradient-to-r from-brand-indigo/10 via-brand-indigo/20 to-brand-indigo/10',
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={containerRef}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden relative z-[70]"
                    id="announcement-bar"
                >
                    <div className={`${bgStyles[variant]} border-b border-white/5 dark:border-white/5`}>
                        <div className="container mx-auto px-6 max-w-7xl">
                            <div className="flex items-center justify-center gap-3 py-2.5 text-center relative">
                                {/* Sparkle accent */}
                                <Sparkles size={14} className="text-brand-cyan shrink-0 hidden sm:block" />

                                {/* Message */}
                                <p className="text-xs sm:text-sm font-semibold text-pure-white dark:text-text-primary tracking-wide">
                                    <span className="opacity-90">{message}</span>
                                </p>

                                {/* CTA Link */}
                                <LocalizedLink
                                    href={ctaHref}
                                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-brand-cyan hover:text-pure-white dark:hover:text-brand-cyan transition-colors whitespace-nowrap group"
                                >
                                    {ctaText}
                                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                                </LocalizedLink>

                                {/* Dismiss button */}
                                <button
                                    onClick={handleDismiss}
                                    className="absolute right-0 p-1.5 rounded-full hover:bg-white/10 transition-colors text-white/40 hover:text-white/80 dark:text-text-muted dark:hover:text-text-secondary cursor-pointer"
                                    aria-label="Dismiss announcement"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
