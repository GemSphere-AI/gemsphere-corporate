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
import { usePathname, useParams } from 'next/navigation';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { LightGlassmorphicTheme, DarkGlassmorphicTheme } from '@GemSphere-AI/ui-kit';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import { syncOfflineSubmissions, hasOfflineSubmissions } from '../utils/offlineSync';

export default function ClientProviders({ children }) {
    const pathname = usePathname();
    const params = useParams();
    const lang = params?.lang;

    useEffect(() => {
        if (lang) {
            const mappedLang = lang;
            if (i18n.language !== mappedLang) {
                i18n.changeLanguage(mappedLang);
            }
        }
    }, [lang]);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
    const [isDark, setIsDark] = useState(false);
    
    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateCursor);
        return () => window.removeEventListener('mousemove', updateCursor);
    }, []);

    useEffect(() => {
        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
        check();
        const obs = new MutationObserver(check);
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Offline submission background sync
    useEffect(() => {
        // Run sync on initial load
        syncOfflineSubmissions();

        // Listen for browser recovering internet connection
        window.addEventListener('online', syncOfflineSubmissions);
        
        // Polling retry every 30 seconds (only if queue is not empty)
        let syncInterval = null;
        if (hasOfflineSubmissions()) {
            syncInterval = setInterval(syncOfflineSubmissions, 30000);
        }

        return () => {
            window.removeEventListener('online', syncOfflineSubmissions);
            if (syncInterval) {
                clearInterval(syncInterval);
            }
        };
    }, []);

    return (
        <ThemeProvider theme={isDark ? DarkGlassmorphicTheme : LightGlassmorphicTheme}>
            <CssBaseline />
            <I18nextProvider i18n={i18n}>
                <div 
                    className={`pointer-events-none fixed inset-0 z-50 hidden lg:block transition-opacity duration-300 ${isDark ? 'mix-blend-screen' : 'mix-blend-multiply'}`}
                    style={{
                        background: isDark
                            ? `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(0,212,255,0.06), transparent 40%)`
                            : `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(99,102,241,0.06), transparent 40%)`
                    }}
                />

                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-indigo z-[100] origin-left"
                    style={{ scaleX }}
                />

                <div className="flex flex-col min-h-screen relative overflow-hidden bg-brand-dark">
                    
                    <div className="fixed inset-0 pointer-events-none z-0">
                        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[150px] animate-pulse-glow"
                             style={{ background: isDark ? 'rgba(99,102,241,0.1)' : 'rgba(99,102,241,0.08)' }} />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[150px]"
                             style={{ background: isDark ? 'rgba(0,212,255,0.05)' : 'rgba(0,212,255,0.06)' }} />
                        <div className="absolute top-[30%] right-[20%] w-[40vw] h-[40vw] rounded-full blur-[180px]"
                             style={{ background: isDark ? 'rgba(139,92,246,0.04)' : 'rgba(139,92,246,0.06)', animation: 'float 12s ease-in-out infinite' }} />
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: isDark ? "url('/textures/carbon-fibre.png')" : 'none' }} />
                    </div>

                    <Header />

                    <main className="flex-grow relative z-10 pt-[100px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={pathname}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </main>

                    <Footer />
                    <CookieConsent />
                </div>
            </I18nextProvider>
        </ThemeProvider>
    );
}
