/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingCart, Stethoscope, Building2, Truck, UtensilsCrossed,
    Factory, GraduationCap, Landmark, Plane, Wifi
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

/**
 * Industry badge icons used as client logo placeholders.
 * Replace with real client logo images when available.
 */
const INDUSTRY_BADGES = [
    { icon: ShoppingCart, label: 'Global Retail', color: '#00d4ff' },
    { icon: Stethoscope, label: 'Healthcare', color: '#10b981' },
    { icon: Building2, label: 'Financial Services', color: '#6366f1' },
    { icon: Truck, label: 'Logistics & SCM', color: '#f59e0b' },
    { icon: UtensilsCrossed, label: 'Hospitality', color: '#f43f5e' },
    { icon: Factory, label: 'Manufacturing', color: '#8b5cf6' },
    { icon: GraduationCap, label: 'Education', color: '#0ea5e9' },
    { icon: Landmark, label: 'Government', color: '#64748b' },
    { icon: Plane, label: 'Travel & Tourism', color: '#ec4899' },
    { icon: Wifi, label: 'Telecom', color: '#14b8a6' },
];

export default function ClientLogos({ className = '' }) {
    return (
        <section className={`py-10 border-b border-brand-border relative overflow-hidden ${className}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <ScrollReveal direction="up" delay={0.1}>
                    <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted mb-8">
                        Trusted by enterprises across industries
                    </p>
                </ScrollReveal>

                {/* Scrolling logo strip */}
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-8"
                            animate={{ x: ['0%', '-50%'] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    duration: 30,
                                    ease: 'linear',
                                },
                            }}
                        >
                            {/* Duplicate for seamless loop */}
                            {[...INDUSTRY_BADGES, ...INDUSTRY_BADGES].map((badge, i) => {
                                const Icon = badge.icon;
                                return (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 px-6 py-3 rounded-xl border border-brand-border/40 bg-brand-card/30 shrink-0 group hover:border-brand-cyan/30 transition-all duration-300 cursor-default"
                                    >
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ background: `${badge.color}15` }}
                                        >
                                            <Icon
                                                size={18}
                                                className="transition-colors duration-300"
                                                style={{ color: badge.color }}
                                            />
                                        </div>
                                        <span className="text-xs font-bold text-text-muted group-hover:text-text-secondary whitespace-nowrap transition-colors duration-300">
                                            {badge.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Mini trust badges */}
                <ScrollReveal direction="up" delay={0.2}>
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                        {[
                            { emoji: '🛡️', label: 'GDPR Aligned' },
                            { emoji: '✓', label: '99.99% Uptime SLA' },
                            { emoji: '🔒', label: 'SOC2 Ready Architecture' },
                            { emoji: '🌍', label: '170+ Countries' },
                        ].map((badge, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-1.5 text-[11px] font-bold text-text-muted uppercase tracking-wider"
                            >
                                <span className="text-sm">{badge.emoji}</span>
                                {badge.label}
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
