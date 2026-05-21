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
import LocalizedLink from '../components/LocalizedLink';
import { Menu, X, Rocket, ChevronDown, ChevronRight, Sun, Moon } from 'lucide-react';
import { getAbsoluteUrl } from '@GemSphere-AI/ui-kit';
import { motion, AnimatePresence } from 'framer-motion';
import MegaMenu from './MegaMenu';
import { LanguageSwitcher } from '@GemSphere-AI/i18n';

const Header = () => {
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
        // Initialize theme based on localStorage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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
            localStorage.theme = 'light';
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDarkMode(true);
        }
    };

    const navLinks = [
        { name: 'Solutions', href: '/solutions' },
        { name: 'Services', href: '/services' },
        { name: 'Industries', href: '/industries' },
        { name: 'Company', href: '/about' },
    ];

    return (
        <>
            <header 
                className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
                    scrolled || megaMenuOpen 
                    ? 'h-[80px] bg-brand-dark/80 backdrop-blur-xl border-b border-brand-border' 
                    : 'h-[100px] bg-transparent'
                }`}
            >
                <div className="container mx-auto px-6 h-full flex justify-between items-center max-w-7xl">
                    {/* Logo */}
                    <LocalizedLink href="/" className="flex items-center gap-3 group z-[70]">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300">
                            <Rocket className="text-pure-white fill-current" size={20} />
                        </div>
                        <span className="text-2xl font-black font-display tracking-tight text-text-primary group-hover:text-brand-cyan transition-colors">
                            GemSphere
                        </span>
                    </LocalizedLink>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center h-full">
                        <nav className="flex items-center h-full mr-6">
                            {/* Mega Menu Trigger */}
                            <button
                                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                                className={`flex items-center gap-1 h-full px-4 text-sm font-semibold transition-colors ${megaMenuOpen ? 'text-brand-cyan' : 'text-text-secondary hover:text-text-primary'}`}
                            >
                                Platform
                                <ChevronDown size={14} className={`transition-transform duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {navLinks.map((link) => (
                                <LocalizedLink 
                                    key={link.name} 
                                    href={link.href} 
                                    className="flex items-center h-full px-4 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
                                >
                                    {link.name}
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
                                href="/login" 
                                className="text-sm font-semibold text-text-secondary hover:text-brand-cyan transition-colors px-2 py-2"
                            >
                                Sign In
                            </LocalizedLink>
                            <LocalizedLink href="/contact" className="btn-primary py-2 px-5 ml-2">
                                Talk to Sales
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
                                Platform <ChevronRight size={20} className="text-brand-cyan" />
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
                            <LocalizedLink href="/login" className="w-full py-4 text-center border border-brand-border text-text-primary font-bold rounded-xl">
                                Sign In
                            </LocalizedLink>
                            <LocalizedLink href="/contact" className="w-full py-4 text-center bg-brand-cyan text-[#0f172a] font-black rounded-xl">
                                Talk to Sales
                            </LocalizedLink>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
