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
import { ArrowRight, Calculator, Check, DollarSign, Download, Sparkles } from 'lucide-react';
import { submitLead } from '../utils/leadCapture';

export default function RoiCalculator() {
    const [softwareSpend, setSoftwareSpend] = useState(150000);
    const [employeeCount, setEmployeeCount] = useState(80);
    const [hourlyCost, setHourlyCost] = useState(45);
    const [manualHours, setManualHours] = useState(10);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // B2B business case formulas
    const licenseSavings = softwareSpend * 0.35; // 35% saved through consolidation
    const hoursSavedPerYear = employeeCount * manualHours * 52 * 0.55; // 55% automated
    const productivitySavings = hoursSavedPerYear * hourlyCost;
    const totalAnnualSavings = licenseSavings + productivitySavings;
    const estimatedInvestment = softwareSpend * 0.18 + 15000; // typical GemSphere implementation cost
    const roiPercentage = Math.round((totalAnnualSavings / estimatedInvestment) * 100);
    const paybackPeriod = (estimatedInvestment / (totalAnnualSavings / 12)).toFixed(1);

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(val);
    };

    const handleDownload = async (e) => {
        e.preventDefault();
        if (!email || !name || !company) return;

        // Submit lead to backend / local offline queue
        await submitLead({
            name,
            email,
            company,
            source: 'roi-calculator-report',
            message: `ROI Metrics: Software Spend: $${softwareSpend}, Employees: ${employeeCount}, Hourly Cost: $${hourlyCost}/hr, Manual Hours/week: ${manualHours}, Projected Annual Savings: $${totalAnnualSavings}`
        });

        try {
            const existing = JSON.parse(localStorage.getItem('gemsphere-email-leads') || '[]');
            existing.push({
                name,
                email,
                company,
                source: 'roi-calculator-report',
                metrics: { softwareSpend, employeeCount, hourlyCost, manualHours, totalAnnualSavings },
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('gemsphere-email-leads', JSON.stringify(existing));
        } catch {}

        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-brand-dark pt-12 pb-24">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-widest mb-4">
                        <Calculator size={12} /> Interactive Tool
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-text-primary font-display">
                        Enterprise ROI Calculator
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary font-medium max-w-2xl mx-auto leading-relaxed">
                        Calculate the potential cost savings and efficiency gains of migrating your legacy ERP, CRM, and supply chain applications to GemSphere.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left: Input Sliders */}
                    <div className="lg:col-span-7 glass-card rounded-[32px] p-8 md:p-10 border-brand-border space-y-8">
                        <h2 className="text-xl font-black text-text-primary font-display tracking-wide pb-4 border-b border-brand-border flex items-center gap-2">
                            <Sparkles size={18} className="text-brand-cyan" /> Define Your Operation
                        </h2>

                        {/* Slider 1: Software Spend */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-text-secondary">Annual Software Spend ($)</label>
                                <span className="text-sm font-black text-brand-cyan font-display bg-brand-cyan/10 px-3 py-1 rounded-xl">
                                    {formatCurrency(softwareSpend)}
                                </span>
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="2000000"
                                step="10000"
                                value={softwareSpend}
                                onChange={(e) => setSoftwareSpend(Number(e.target.value))}
                                className="w-full accent-brand-cyan cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] text-text-muted font-bold">
                                <span>$10k</span>
                                <span>$1M</span>
                                <span>$2M</span>
                            </div>
                        </div>

                        {/* Slider 2: Operational Employees */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-text-secondary">Operational Employees</label>
                                <span className="text-sm font-black text-brand-indigo dark:text-brand-cyan font-display bg-brand-indigo/10 px-3 py-1 rounded-xl">
                                    {employeeCount} Users
                                </span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="1000"
                                step="5"
                                value={employeeCount}
                                onChange={(e) => setEmployeeCount(Number(e.target.value))}
                                className="w-full accent-brand-indigo cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] text-text-muted font-bold">
                                <span>5</span>
                                <span>500</span>
                                <span>1,000</span>
                            </div>
                        </div>

                        {/* Slider 3: Hourly Employee Cost */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-text-secondary">Avg. Hourly Employee Cost ($)</label>
                                <span className="text-sm font-black text-brand-cyan font-display bg-brand-cyan/10 px-3 py-1 rounded-xl">
                                    {formatCurrency(hourlyCost)}/hr
                                </span>
                            </div>
                            <input
                                type="range"
                                min="15"
                                max="150"
                                step="5"
                                value={hourlyCost}
                                onChange={(e) => setHourlyCost(Number(e.target.value))}
                                className="w-full accent-brand-cyan cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] text-text-muted font-bold">
                                <span>$15/hr</span>
                                <span>$80/hr</span>
                                <span>$150/hr</span>
                            </div>
                        </div>

                        {/* Slider 4: Manual Task Hours */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-text-secondary">Weekly Manual Task Hours / Employee</label>
                                <span className="text-sm font-black text-brand-indigo dark:text-brand-cyan font-display bg-brand-indigo/10 px-3 py-1 rounded-xl">
                                    {manualHours} hrs/week
                                </span>
                            </div>
                            <input
                                type="range"
                                min="2"
                                max="40"
                                step="1"
                                value={manualHours}
                                onChange={(e) => setManualHours(Number(e.target.value))}
                                className="w-full accent-brand-indigo cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] text-text-muted font-bold">
                                <span>2 hrs</span>
                                <span>20 hrs</span>
                                <span>40 hrs</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Calculations & Results */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {/* Results Card */}
                        <div className="relative rounded-[32px] overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/30 via-brand-indigo/40 to-brand-rose/20 rounded-[32px]" />
                            <div className="relative m-[1.5px] bg-brand-card rounded-[31px] p-8 space-y-6">
                                <h3 className="text-xs font-black text-brand-cyan uppercase tracking-widest">Projected Annual Value</h3>
                                
                                <div className="space-y-1">
                                    <div className="text-4xl md:text-5xl font-black text-text-primary font-display tracking-tight">
                                        {formatCurrency(totalAnnualSavings)}
                                    </div>
                                    <div className="text-xs text-text-muted font-bold uppercase tracking-wider">
                                        Total Estimated Savings / Year
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-brand-border">
                                    <div>
                                        <div className="text-xl font-black text-text-primary font-display">{roiPercentage}%</div>
                                        <div className="text-[10px] text-text-tertiary font-bold uppercase tracking-wider">Projected ROI</div>
                                    </div>
                                    <div>
                                        <div className="text-xl font-black text-text-primary font-display">{paybackPeriod} Months</div>
                                        <div className="text-[10px] text-text-tertiary font-bold uppercase tracking-wider">Payback Period</div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-6 border-t border-brand-border text-xs text-text-secondary leading-relaxed">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                                        <span>Consolidation Savings: <strong className="text-text-primary">{formatCurrency(licenseSavings)}</strong></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0" />
                                        <span>Productivity Reclaimed: <strong className="text-text-primary">{formatCurrency(productivitySavings)}</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gated Lead Capture Form */}
                        <div className="glass-card rounded-[24px] p-6 border-brand-border">
                            {submitted ? (
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="text-center py-6 space-y-4"
                                >
                                    <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                                        <Check size={20} className="text-emerald-400" />
                                    </div>
                                    <h4 className="text-base font-bold text-text-primary font-display">ROI Report Generated!</h4>
                                    <p className="text-xs text-text-secondary max-w-sm mx-auto leading-relaxed">
                                        A detailed PDF business case comparing your operational metrics to industry benchmarks has been sent to your email.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleDownload} className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <Download size={16} className="text-brand-cyan" />
                                        <h4 className="text-xs font-black text-text-primary uppercase tracking-wider">
                                            Request Detailed Business Case
                                        </h4>
                                    </div>
                                    <p className="text-xs text-text-tertiary font-medium">
                                        Get a personalized board-ready PDF analysis based on your operational sliders.
                                    </p>
                                    <div className="space-y-2.5">
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Your full name"
                                            className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-2.5 text-xs text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                        />
                                        <input
                                            type="text"
                                            required
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            placeholder="Your company name"
                                            className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-2.5 text-xs text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                        />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Your work email address"
                                            className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-2.5 text-xs text-text-primary focus:outline-none transition-colors placeholder:text-text-muted"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full btn-primary py-3 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5"
                                        >
                                            Generate Board PDF <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
