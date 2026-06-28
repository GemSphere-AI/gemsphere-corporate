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
import dynamic from 'next/dynamic';
import ScrollReveal from '../components/ScrollReveal';
import { ShieldAlert, Info, Trash2, ShieldCheck, History } from 'lucide-react';

const DeleteAccountForm = dynamic(() => import('../components/DeleteAccountForm'), {
    ssr: false,
    loading: () => <div className="w-full min-h-[400px] bg-brand-border/10 animate-pulse rounded-[32px]" />
});

const DeleteAccount = () => {
    return (
        <div className="min-h-screen relative flex items-center justify-center pt-32 pb-24 overflow-hidden">
            {/* Background decorative gradients */}
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[120px] -z-10" />
            
            <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center">
                {/* Header Section */}
                <ScrollReveal direction="down" className="text-center mb-10 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mb-6">
                        Delete Your <span className="text-gradient">Account.</span>
                    </h1>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        We value your privacy. In compliance with Google Play and Apple App Store policies, you can request permanent deletion of your account and all associated personal data below.
                    </p>
                </ScrollReveal>

                {/* Main Content Grid */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
                    
                    {/* Compliance & Policy Details (Left column) */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Policy Alert Box */}
                        <ScrollReveal direction="left" delay={0.1} className="glass-card p-6 border-l-4 border-red-500/75 rounded-r-2xl">
                            <div className="flex gap-4">
                                <span className="text-red-500"><ShieldAlert size={24} /></span>
                                <div>
                                    <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Important Notice</h4>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                        Account deletion is permanent and cannot be undone. Once processed, you will lose access to all products, active subscriptions, and history.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Data Deleted List */}
                        <ScrollReveal direction="left" delay={0.2} className="glass-card p-6 space-y-4">
                            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                <Trash2 size={16} className="text-brand-cyan" /> Data to be removed
                            </h4>
                            <ul className="text-xs text-text-secondary space-y-2 leading-relaxed list-disc list-inside">
                                <li>Personal identification records (name, email, phone)</li>
                                <li>Account credentials & secure tokens</li>
                                <li>Saved addresses, preferences & wishlists</li>
                                <li>Submitted product ratings & customer reviews</li>
                            </ul>
                        </ScrollReveal>

                        {/* Data Retained Disclosure */}
                        <ScrollReveal direction="left" delay={0.3} className="glass-card p-6 space-y-4">
                            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                <History size={16} className="text-brand-cyan" /> Retention Policy
                            </h4>
                            <p className="text-xs text-text-secondary leading-relaxed">
                                Pursuant to local regulatory and tax requirements, **financial transaction invoices** will be retained for up to 7 years. Direct personal details will be anonymized where legally permissible.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Form (Right column) */}
                    <div className="lg:col-span-7 w-full relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-cyan/25 to-brand-indigo/25 rounded-[40px] blur-3xl opacity-50 dark:opacity-30 -z-10 animate-pulse-glow" />
                        <ScrollReveal direction="right" delay={0.2}>
                            <DeleteAccountForm />
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeleteAccount;
