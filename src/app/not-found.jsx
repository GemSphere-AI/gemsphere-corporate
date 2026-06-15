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
import { usePathname, useRouter } from 'next/navigation';
import LocalizedLink from '../components/LocalizedLink';
import { Home, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
    const pathname = usePathname();
    const router = useRouter();
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        const supportedLocales = ['en', 'de', 'fr', 'es', 'ja'];
        const parts = pathname.split('/').filter(Boolean);
        
        if (parts.length === 0 || !supportedLocales.includes(parts[0].toLowerCase())) {
            let detectedLang = 'en';
            if (typeof localStorage !== 'undefined') {
                const saved = localStorage.getItem('gemsphere-preferred-language');
                if (saved) {
                    detectedLang = saved;
                } else if (typeof navigator !== 'undefined') {
                    const browserLang = navigator.language.split('-')[0];
                    if (supportedLocales.includes(browserLang)) {
                        detectedLang = browserLang;
                    }
                }
            }
            const cleanPath = pathname.startsWith('/') ? pathname : '/' + pathname;
            setIsRedirecting(true);
            router.replace(`/${detectedLang}${cleanPath}`);
        }
    }, [pathname, router]);

    if (isRedirecting) {
        return (
            <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center relative overflow-hidden">
                {/* Decorative glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none" />
                <div className="flex flex-col items-center relative z-10">
                    {/* Animated spinner/glowing circle */}
                    <div className="relative w-16 h-16 mb-6">
                        <div className="absolute inset-0 rounded-full border-2 border-brand-cyan/20" />
                        <div className="absolute inset-0 rounded-full border-2 border-t-brand-cyan border-r-brand-cyan animate-spin" />
                    </div>
                    <h2 className="text-xl font-bold text-text-primary tracking-wide mb-2 font-display">Optimizing Routing...</h2>
                    <p className="text-sm text-text-muted">Redirecting you to our clean, flat path structure.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-dark flex items-center justify-center relative overflow-hidden px-6 pt-32 pb-24">
            {/* Background Gradients */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[150px] -z-10" />
            
            <div className="max-w-xl w-full text-center relative z-10 flex flex-col items-center">
                {/* Big Glowing 404 tag */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 200 }}
                    className="relative mb-6"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-violet rounded-full blur opacity-40 hover:opacity-100 transition duration-1000" />
                    <span className="relative inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-card/80 border border-brand-border text-sm font-semibold text-brand-cyan">
                        <Sparkles size={14} className="animate-pulse" />
                        Status: 404 — Page Relocated
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-7xl md:text-8xl font-black font-display tracking-tight text-white mb-6"
                >
                    Lost in <span className="text-gradient">Space?</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-lg"
                >
                    The page you are looking for has been relocated to our clean, flat SEO architecture, or does not exist. Let's get you back on track.
                </motion.p>

                {/* CTAs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <LocalizedLink 
                        href="/" 
                        className="btn-primary py-3.5 px-6 text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 rounded-xl"
                    >
                        <Home size={16} /> Return Home
                    </LocalizedLink>
                    <LocalizedLink 
                        href="/solutions" 
                        className="glass-subtle hover:bg-brand-border/40 text-text-primary border-brand-border hover:border-brand-cyan/40 py-3.5 px-6 text-sm font-bold flex items-center justify-center gap-2 rounded-xl transition-all duration-300"
                    >
                        <Compass size={16} /> Browse Solutions <ArrowRight size={14} />
                    </LocalizedLink>
                </motion.div>
            </div>
        </div>
    );
}
