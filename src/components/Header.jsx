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
import Image from 'next/image';
import LocalizedLink from '../components/LocalizedLink';
import { Menu, X, Rocket, ChevronDown, ChevronRight, Sun, Moon } from 'lucide-react';
import { getAbsoluteUrl } from '@GemSphere-AI/ui-kit';
import { motion, AnimatePresence } from 'framer-motion';
import MegaMenu from './MegaMenu';
import { LanguageSwitcher } from '@GemSphere-AI/i18n';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { LOGIN_URL, REGISTER_URL, triggerTeamsChat } from '../utils/apiConfig';


const Header = () => {
    const { t } = useTranslation();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Initialize theme based on localStorage, defaulting to light mode
        const savedMode = localStorage.getItem('gemsphere-ui-theme-mode') || localStorage.getItem('theme');
        if (savedMode === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            localStorage.setItem('gemsphere-ui-theme-mode', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            localStorage.setItem('gemsphere-ui-theme-mode', 'dark');
            setIsDarkMode(true);
        }
    };

    const navLinks = [
        { name: t('nav.solutions', 'Solutions'), href: '/solutions' },
        { name: t('nav.services', 'Services'), href: '/services' },
        { name: t('nav.industries', 'Industries'), href: '/industries' },
        { name: t('nav.about', 'Company'), href: '/about' },
    ];

    const isHome = pathname === '/' || /^\/(en|de|fr|es|ja)\/?$/.test(pathname);

    return (
        <>
            <header 
                className={`fixed left-0 w-full z-[60] transition-all duration-500 ${
                    (!isHome || scrolled || megaMenuOpen)
                    ? 'h-[80px] bg-gradient-to-b from-[#ffffff]/95 to-[#ffffff]/90 dark:from-[#0a0f1e]/95 dark:to-[#030712]/90 backdrop-blur-2xl border-b border-brand-cyan/20 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]' 
                    : 'h-[100px] bg-transparent'
                }`}
                style={{ top: scrolled ? '0px' : 'var(--announcement-height, 0px)' }}
            >
                {/* Top glowing gradient accent line */}
                {(!isHome || scrolled || megaMenuOpen) && (
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-rose animate-gradient-x z-[70]" />
                )}
                
                <div className="container mx-auto px-6 h-full flex justify-between items-center max-w-7xl relative">
                    {/* Logo */}
                    <LocalizedLink href="/" className="flex items-center gap-3 group z-[70]">
                        <div className="w-11 h-11 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative">
                            {/* Logo Glow */}
                            <div className="absolute inset-0 bg-brand-cyan/25 rounded-full filter blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Image 
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-icon.png`} 
                                alt="GemSphere" 
                                width={44}
                                height={44}
                                className="w-full h-full object-contain relative z-10" 
                                priority
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black font-display tracking-tight text-[#0f172a] dark:text-[#f8fafc] transition-colors leading-none">
                                Gem<span className="text-blue-600 dark:text-blue-400">Sphere</span>
                            </span>
                            <span className="text-[9px] font-black uppercase tracking-[0.15em] text-gradient-animated mt-1.5 leading-none">
                                Technology That Transforms
                            </span>
                        </div>
                    </LocalizedLink>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center h-full">
                        <nav className="flex items-center h-full mr-6">
                            {/* Mega Menu Trigger */}
                            <button
                                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                                className={`flex items-center gap-1 h-full px-4 text-sm font-semibold transition-colors relative group/link ${megaMenuOpen ? 'text-brand-cyan' : 'text-text-secondary hover:text-brand-cyan'}`}
                            >
                                {t('nav.platform', 'Platform')}
                                <ChevronDown size={14} className={`transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                                <span className={`absolute bottom-0 left-4 right-4 h-[2px] bg-brand-cyan transition-transform duration-300 origin-center ${megaMenuOpen ? 'scale-x-100' : 'scale-x-0 group-hover/link:scale-x-100'}`} />
                            </button>
                            
                            {navLinks.map((link) => (
                                <LocalizedLink 
                                    key={link.name} 
                                    href={link.href} 
                                    className="flex items-center h-full px-4 text-sm font-semibold text-text-secondary hover:text-brand-cyan transition-colors relative group/link"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-cyan scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-center" />
                                </LocalizedLink>
                            ))}
                        </nav>
                        
                        <div className="flex items-center gap-4">
                            <LanguageSwitcher />
                            <button 
                                onClick={toggleTheme} 
                                className="p-2 text-text-secondary hover:text-brand-cyan transition-colors rounded-full hover:bg-brand-border"
                                aria-label="Toggle Theme"
                            >
                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
 
                            <LocalizedLink 
                                href={LOGIN_URL} 
                                className="text-sm font-semibold text-text-secondary hover:text-brand-cyan transition-colors px-2 py-2"
                            >
                                {t('nav.signIn', 'Sign In')}
                            </LocalizedLink>
                            <button 
                                onClick={triggerTeamsChat}
                                className="text-sm font-semibold text-text-secondary hover:text-brand-cyan transition-colors px-2 py-2 ml-2 cursor-pointer bg-transparent border-none outline-none"
                            >
                                {t('nav.contactSales', 'Talk to Teams')}
                            </button>
                            {scrolled && (
                                <LocalizedLink href="/demo" className="text-sm font-semibold text-brand-cyan hover:text-pure-white hover:bg-brand-cyan/10 transition-all duration-300 px-4 py-2 border border-brand-cyan/30 rounded-xl animate-fade-in">
                                    Book Demo
                                </LocalizedLink>
                            )}
                            <LocalizedLink 
                                href={REGISTER_URL} 
                                className={`py-2 px-5 ml-2 transition-all duration-300 ${
                                    scrolled 
                                    ? 'btn-primary shadow-[0_0_15px_rgba(0,212,255,0.4)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] animate-pulse-glow' 
                                    : 'btn-primary'
                                }`}
                            >
                                {t('nav.getStarted', 'Free Trial')}
                            </LocalizedLink>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center gap-3 z-[70]">
                        <button 
                            onClick={toggleTheme} 
                            className="p-2 text-text-secondary hover:text-brand-cyan transition-colors"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button 
                            className="p-2 text-text-primary glass-subtle rounded-lg"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Desktop Mega Menu Dropdown */}
            <div className="hidden lg:block">
                <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 bg-brand-dark pt-[100px] px-6 pb-6 flex flex-col overflow-y-auto lg:hidden"
                    >
                        <nav className="flex flex-col gap-2 mb-8">
                            <LocalizedLink href="/products" className="py-4 text-2xl font-bold text-text-primary border-b border-brand-border flex justify-between items-center">
                                {t('nav.platform', 'Platform')} <ChevronRight size={20} className="text-brand-cyan" />
                            </LocalizedLink>
                            {navLinks.map((link) => (
                                <LocalizedLink key={link.name} href={link.href} className="py-4 text-2xl font-bold text-text-primary border-b border-brand-border flex justify-between items-center">
                                    {link.name} <ChevronRight size={20} className="text-brand-cyan opacity-0" />
                                </LocalizedLink>
                            ))}
                        </nav>
                        <div className="flex flex-col gap-4 mt-auto">
                            <div className="flex justify-center mb-4">
                                <LanguageSwitcher />
                            </div>
                            <LocalizedLink href={LOGIN_URL} className="w-full py-3 text-center border border-brand-border text-text-primary font-bold rounded-xl">
                                {t('nav.signIn', 'Sign In')}
                            </LocalizedLink>
                            <button 
                                onClick={triggerTeamsChat}
                                className="w-full py-3 text-center border border-brand-border text-text-primary font-bold rounded-xl cursor-pointer bg-transparent outline-none"
                            >
                                {t('nav.contactSales', 'Talk to Teams')}
                            </button>
                            <LocalizedLink href={REGISTER_URL} className="w-full py-3 text-center bg-brand-cyan text-[#0f172a] font-black rounded-xl">
                                {t('nav.getStarted', 'Free Trial')}
                            </LocalizedLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
