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
import dynamic from 'next/dynamic';
import { Play, Calendar, Video, ExternalLink, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import ScrollReveal from '../components/ScrollReveal';

const BookingForm = dynamic(() => import('../components/BookingForm'), {
  ssr: false,
  loading: () => <div className="w-full min-h-[500px] bg-brand-border/10 animate-pulse rounded-[32px]" />
});

const Demo = () => {
    const [isFlagshipDemo, setIsFlagshipDemo] = useState(false);
    const [activeTab, setActiveTab] = useState('live'); // 'live' | 'video'

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const select = params.get('select');
            if (select && (select.includes('gemsphere-commerce') || select.includes('gemsphere-hospitality'))) {
                setIsFlagshipDemo(true);
            }
            if (params.get('mode') === 'video') {
                setActiveTab('video');
            }
        }
    }, []);

    return (
        <div className="min-h-screen relative flex items-center justify-center pt-32 pb-24 overflow-hidden">
            {/* Background decorative gradients */}
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[120px] -z-10" />
            
            <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center">
                {/* Header Section */}
                <ScrollReveal direction="down" className="text-center mb-8 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                        <Sparkles size={14} className="text-brand-cyan" /> Enterprise Demo Experience
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mb-6">
                        {isFlagshipDemo ? (
                            <>Explore our <span className="text-gradient">Flagship Solutions.</span></>
                        ) : (
                            <>Experience the <span className="text-gradient">Power of GemSphere.</span></>
                        )}
                    </h1>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        {isFlagshipDemo ? (
                            "Schedule a personalized walkthrough of GemSphere Commerce and Hospitality with our solution engineers or watch an on-demand overview."
                        ) : (
                            "Experience GemSphere either through a personalized live architectural session or by watching our on-demand executive platform overview."
                        )}
                    </p>
                </ScrollReveal>

                {/* Mode Selector Tabs */}
                <div className="flex items-center gap-3 p-1.5 rounded-2xl glass-card border border-brand-border mb-10">
                    <button
                        onClick={() => setActiveTab('live')}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                            activeTab === 'live'
                                ? 'bg-brand-cyan text-brand-dark shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                                : 'text-text-secondary hover:text-white'
                        }`}
                    >
                        <Calendar size={16} /> Schedule Live Demo
                    </button>
                    <button
                        onClick={() => setActiveTab('video')}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                            activeTab === 'video'
                                ? 'bg-brand-cyan text-brand-dark shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                                : 'text-text-secondary hover:text-white'
                        }`}
                    >
                        <Play size={16} /> Watch On-Demand Video
                    </button>
                </div>

                {/* Content Area */}
                <div className="w-full relative">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-cyan/25 to-brand-indigo/25 rounded-[40px] blur-3xl opacity-50 dark:opacity-30 -z-10 animate-pulse-glow" />

                    {activeTab === 'live' ? (
                        <BookingForm />
                    ) : (
                        <div className="glass-card p-6 md:p-10 rounded-[32px] border border-brand-border text-center">
                            <div className="mb-6 text-left">
                                <h2 className="text-2xl font-bold text-white mb-2">GemSphere Enterprise Platform Walkthrough</h2>
                                <p className="text-text-secondary text-sm">
                                    Watch an executive architectural overview detailing our unified Commerce, Supply Chain, and AI automation engines.
                                </p>
                            </div>

                            {/* Responsive 16:9 Video Embed */}
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-brand-border/60 bg-black/60 shadow-2xl mb-8">
                                <iframe
                                    src={SITE_CONFIG.media.videos.demoEmbed}
                                    title="GemSphere Platform Walkthrough"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Additional Video Resource Links */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left pt-4 border-t border-brand-border/60">
                                <a
                                    href={SITE_CONFIG.media.videos.platformOverview}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl glass-subtle border border-brand-border/50 hover:border-brand-cyan/50 transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
                                            <Video size={18} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">Architecture Deep Dive</div>
                                            <div className="text-xs text-text-muted">Distributed cloud overview</div>
                                        </div>
                                    </div>
                                    <ExternalLink size={15} className="text-text-muted group-hover:text-brand-cyan transition-colors" />
                                </a>

                                <a
                                    href={SITE_CONFIG.media.videos.productWalkthrough}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-xl glass-subtle border border-brand-border/50 hover:border-brand-cyan/50 transition-all flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-brand-indigo/20 text-brand-indigo flex items-center justify-center">
                                            <Play size={18} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">Smart POS & Retail Demo</div>
                                            <div className="text-xs text-text-muted">Omnichannel checkout flow</div>
                                        </div>
                                    </div>
                                    <ExternalLink size={15} className="text-text-muted group-hover:text-brand-cyan transition-colors" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Demo;
