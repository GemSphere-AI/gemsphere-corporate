/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LocalizedLink from './LocalizedLink';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState({
        essential: true,
        analytics: true,
        marketing: false
    });

    useEffect(() => {
        // Check if consent has already been given
        const consent = localStorage.getItem('gemsphere-cookie-consent');
        if (!consent) {
            // Show banner after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        } else {
            // Even if consent exists, sync analytics settings if accepted
            try {
                const parsed = JSON.parse(consent);
                if (window.gtag) {
                    window.gtag('consent', 'update', {
                        'analytics_storage': parsed.analytics ? 'granted' : 'denied',
                        'ad_storage': parsed.marketing ? 'granted' : 'denied',
                        'ad_user_data': parsed.marketing ? 'granted' : 'denied',
                        'ad_personalization': parsed.marketing ? 'granted' : 'denied'
                    });
                }
            } catch (e) {
                // Legacy flat string fallback
                if (consent === 'accepted' && window.gtag) {
                    window.gtag('consent', 'update', {
                        'analytics_storage': 'granted',
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted'
                    });
                }
            }
        }
    }, []);

    const handleAcceptAll = () => {
        const consentObj = { essential: true, analytics: true, marketing: true };
        localStorage.setItem('gemsphere-cookie-consent', JSON.stringify(consentObj));
        
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted'
            });
        }
        setIsVisible(false);
    };

    const handleDeclineAll = () => {
        const consentObj = { essential: true, analytics: false, marketing: false };
        localStorage.setItem('gemsphere-cookie-consent', JSON.stringify(consentObj));
        
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
            });
        }
        setIsVisible(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('gemsphere-cookie-consent', JSON.stringify(preferences));
        
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': preferences.analytics ? 'granted' : 'denied',
                'ad_storage': preferences.marketing ? 'granted' : 'denied',
                'ad_user_data': preferences.marketing ? 'granted' : 'denied',
                'ad_personalization': preferences.marketing ? 'granted' : 'denied'
            });
        }
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="fixed bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-[999] overflow-hidden rounded-2xl border border-brand-border bg-brand-card/95 p-6 shadow-2xl backdrop-blur-xl"
                >
                    {/* Decorative Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-cyan via-purple-500 to-brand-indigo" />

                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🍪</span>
                            <h3 className="text-lg font-bold text-white font-display tracking-tight">Cookie Settings & Privacy</h3>
                        </div>

                        <p className="text-sm text-text-secondary leading-relaxed">
                            We use cookies to personalize content, analyze site traffic, and improve your browsing experience. 
                            You can choose which cookies you're comfortable with. Read our{' '}
                            <LocalizedLink href="/cookie-policy" className="text-brand-indigo dark:text-brand-cyan hover:underline font-medium">
                                Cookie Policy
                            </LocalizedLink>{' '}
                            and{' '}
                            <LocalizedLink href="/privacy-policy" className="text-brand-indigo dark:text-brand-cyan hover:underline font-medium">
                                Privacy Policy
                            </LocalizedLink>{' '}
                            for more details.
                        </p>

                        {showPreferences && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="space-y-3 pt-3 border-t border-brand-border"
                            >
                                {/* Essential */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Necessary Cookies</h4>
                                        <p className="text-xs text-text-tertiary">Required for the website to function correctly.</p>
                                    </div>
                                    <span className="text-xs font-semibold text-brand-indigo dark:text-brand-cyan bg-brand-indigo/10 dark:bg-brand-cyan/10 px-2 py-0.5 rounded-full border border-brand-indigo/20 dark:border-brand-cyan/20">Always Active</span>
                                </div>

                                {/* Analytics */}
                                <div className="flex items-center justify-between pt-2">
                                    <div>
                                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Analytics & Performance</h4>
                                        <p className="text-xs text-text-tertiary">Allows us to analyze visitor behavior to improve our design.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="sr-only peer"
                                            checked={preferences.analytics}
                                            onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                        />
                                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-pure-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-pure-white after:border-slate-300 dark:after:border-slate-600 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-indigo dark:peer-checked:bg-brand-cyan" />
                                    </label>
                                </div>

                                {/* Marketing */}
                                <div className="flex items-center justify-between pt-2">
                                    <div>
                                        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Marketing & Targeting</h4>
                                        <p className="text-xs text-text-tertiary">Used to deliver more relevant advertisements on external networks.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="sr-only peer"
                                            checked={preferences.marketing}
                                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                        />
                                        <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-pure-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-pure-white after:border-slate-300 dark:after:border-slate-600 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-indigo dark:peer-checked:bg-brand-cyan" />
                                    </label>
                                </div>
                            </motion.div>
                        )}

                        <div className="flex flex-wrap gap-2 pt-2 md:justify-end">
                            <button
                                onClick={() => setShowPreferences(!showPreferences)}
                                className="flex-grow md:flex-grow-0 px-4 py-2 text-xs font-medium text-text-secondary hover:text-text-primary border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800/40 rounded-lg transition-colors"
                            >
                                {showPreferences ? 'Hide Options' : 'Manage Options'}
                            </button>
                            
                            {showPreferences ? (
                                <>
                                    <button
                                        onClick={handleDeclineAll}
                                        className="flex-grow md:flex-grow-0 px-4 py-2 text-xs font-medium text-text-secondary hover:text-text-primary bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                    >
                                        Decline All
                                    </button>
                                    <button
                                        onClick={handleSavePreferences}
                                        className="flex-grow md:flex-grow-0 px-4 py-2 text-xs font-bold text-slate-950 bg-brand-cyan hover:bg-brand-cyan/90 rounded-lg transition-colors"
                                    >
                                        Save Preferences
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        onClick={handleDeclineAll}
                                        className="flex-grow md:flex-grow-0 px-4 py-2 text-xs font-medium text-text-secondary hover:text-text-primary bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                    >
                                        Decline
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        className="flex-grow md:flex-grow-0 px-4 py-2 text-xs font-bold text-slate-950 bg-brand-cyan hover:bg-brand-cyan/90 rounded-lg transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                                    >
                                        Accept All
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
