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
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

const MegaMenu = ({ isOpen, onClose }) => {
    const [activeCategory, setActiveCategory] = useState(PRODUCT_ECOSYSTEM.categories[0].id);

    const category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === activeCategory);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-brand-dark/60 backdrop-blur-sm z-40 mt-[80px]"
                        onMouseEnter={onClose}
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
                        animate={{ opacity: 1, y: 0, scaleY: 1 }}
                        exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-[80px] left-0 w-full bg-brand-card/95 backdrop-blur-2xl border-b border-brand-border z-50 origin-top overflow-hidden"
                        onMouseLeave={onClose}
                    >
                        <div className="container mx-auto px-6 max-w-7xl">
                            <div className="flex flex-col lg:flex-row min-h-[400px]">
                                
                                {/* Left: Categories List */}
                                <div className="w-full lg:w-1/3 py-8 lg:py-10 lg:pr-10 border-b lg:border-b-0 lg:border-r border-brand-border">
                                    <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-6 px-4">
                                        Unified Platform
                                    </h4>
                                    <div className="space-y-1">
                                        {PRODUCT_ECOSYSTEM.categories.map((cat) => {
                                            const Icon = cat.icon;
                                            const isActive = activeCategory === cat.id;
                                            return (
                                                <button
                                                    key={cat.id}
                                                    onMouseEnter={() => setActiveCategory(cat.id)}
                                                    className="w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 text-left"
                                                    style={{ background: isActive ? 'var(--interactive-bg)' : 'transparent' }}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div
                                                            className={`p-2 rounded-lg transition-colors duration-200 ${isActive ? 'bg-brand-cyan/20 text-brand-cyan' : 'text-text-tertiary'}`}
                                                            style={!isActive ? { background: 'var(--interactive-bg)' } : undefined}
                                                        >
                                                            <Icon size={18} />
                                                        </div>
                                                        <div>
                                                            <div className={`font-semibold transition-colors duration-200 ${isActive ? 'text-brand-cyan' : 'text-text-primary'}`}>
                                                                {cat.name}
                                                            </div>
                                                            <div className="text-xs text-text-tertiary mt-0.5 hidden md:block">
                                                                {cat.modules.length} Modules
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ChevronRight size={16} className={`transition-transform duration-200 ${isActive ? 'text-brand-cyan translate-x-1' : 'text-text-muted'}`} />
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Right: Modules Grid */}
                                <div className="w-full lg:w-2/3 py-8 lg:py-10 lg:pl-10 relative bg-brand-dark/30 lg:bg-transparent">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeCategory}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.2 }}
                                            className="h-full flex flex-col"
                                        >
                                            <div className="mb-8">
                                                <h3 className="text-2xl font-bold text-text-primary mb-2 flex items-center gap-3">
                                                    {category.name}
                                                    <span className="px-2.5 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-[10px] uppercase tracking-wider font-bold">
                                                        Ecosystem
                                                    </span>
                                                </h3>
                                                <p className="text-sm text-text-secondary max-w-lg">
                                                    {category.description}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                                {category.modules.map((mod, idx) => {
                                                    const ModIcon = mod.icon;
                                                    return (
                                                        <a 
                                                            key={idx} 
                                                            href={`/products#${activeCategory}`}
                                                            className="group flex gap-4 p-3 -m-3 rounded-xl transition-colors"
                                                            style={{ ':hover': { background: 'var(--interactive-bg-hover)' } }}
                                                            onClick={onClose}
                                                        >
                                                            <div className="mt-0.5 text-text-tertiary group-hover:text-brand-cyan transition-colors">
                                                                <ModIcon size={20} />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-semibold text-text-primary group-hover:text-brand-cyan transition-colors mb-1">
                                                                    {mod.name}
                                                                </div>
                                                                <div className="text-xs text-text-tertiary">
                                                                    {mod.desc}
                                                                </div>
                                                            </div>
                                                        </a>
                                                    );
                                                })}
                                            </div>

                                            <div className="mt-auto pt-8 border-t border-brand-border flex items-center justify-between">
                                                <div className="flex gap-6 text-xs font-semibold text-text-tertiary">
                                                    <span className="flex items-center gap-2"><Zap size={14} className="text-brand-cyan"/> API-First</span>
                                                    <span className="flex items-center gap-2"><Shield size={14} className="text-brand-indigo"/> SOC2 & GDPR Compliant</span>
                                                    <span className="flex items-center gap-2"><Globe size={14} className="text-brand-violet"/> Multi-Region</span>
                                                </div>
                                                <a href="/products" onClick={onClose} className="text-sm font-bold text-brand-cyan hover:text-text-primary flex items-center gap-2 transition-colors">
                                                    Explore All Modules <ArrowRight size={16} />
                                                </a>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;
