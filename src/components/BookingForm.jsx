/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Send, CheckCircle2, User, Mail, Building2, Globe2,
    MessageSquare, Phone, Briefcase, Users, ChevronDown,
    Shield, Clock, Sparkles, ArrowRight
} from 'lucide-react';
import { toast } from 'react-hot-toast';

const SERVICE_OPTIONS = [
    { id: 'ecommerce-supply-chain', label: 'E-commerce & Supply Chain', icon: '🛒' },
    { id: 'ai-ml', label: 'AI & ML Solutions', icon: '🤖' },
    { id: 'enterprise-dev', label: 'Enterprise Software', icon: '⚡' },
    { id: 'saas', label: 'SaaS Products', icon: '☁️' },
    { id: 'crm-erp', label: 'CRM & ERP', icon: '📊' },
    { id: 'ui-ux', label: 'UI/UX Design', icon: '🎨' },
    { id: 'cloud', label: 'Cloud & DevOps', icon: '🔧' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { id: 'consulting', label: 'Tech Consulting', icon: '💡' },
];

const COMPANY_SIZES = [
    { value: '1-10', label: '1–10 employees' },
    { value: '11-50', label: '11–50 employees' },
    { value: '51-200', label: '51–200 employees' },
    { value: '201-1000', label: '201–1,000 employees' },
    { value: '1001+', label: '1,000+ employees' },
];

const BUDGET_RANGES = [
    { value: 'under-10k', label: 'Under $10K' },
    { value: '10k-50k', label: '$10K – $50K' },
    { value: '50k-100k', label: '$50K – $100K' },
    { value: '100k-500k', label: '$100K – $500K' },
    { value: '500k+', label: '$500K+' },
    { value: 'not-sure', label: 'Not sure yet' },
];

const inputClasses = "w-full bg-[#f8fafc] dark:bg-[#0d1527] border border-[#cbd5e1] dark:border-[#1e293b]/80 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-[#008ba8] dark:focus:border-brand-cyan focus:ring-2 focus:ring-[#008ba8]/15 dark:focus:ring-brand-cyan/15 transition-all duration-300 text-sm text-[#0f172a] dark:text-[#f8fafc] placeholder-[#94a3b8] dark:placeholder-[#475569]";
const selectClasses = "w-full bg-[#f8fafc] dark:bg-[#0d1527] border border-[#cbd5e1] dark:border-[#1e293b]/80 rounded-xl py-3.5 pl-12 pr-10 focus:outline-none focus:border-[#008ba8] dark:focus:border-brand-cyan focus:ring-2 focus:ring-[#008ba8]/15 dark:focus:ring-brand-cyan/15 transition-all duration-300 text-sm text-[#0f172a] dark:text-[#f8fafc] appearance-none cursor-pointer";
const labelClasses = "text-xs font-extrabold uppercase tracking-wider text-[#334155] dark:text-[#cbd5e1] mb-2 block";
const iconClasses = "absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300";

const SuccessCheckmark = () => (
    <div className="relative w-24 h-24 mx-auto mb-8">
        {/* Outer ring pulse */}
        <motion.div
            className="absolute inset-0 rounded-full border-2 border-brand-cyan/30"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.3, 1], opacity: [0, 0.5, 0] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <motion.div
            className="absolute inset-0 rounded-full border-2 border-brand-cyan/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.6, 1.2], opacity: [0, 0.3, 0] }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
        />
        {/* Main circle */}
        <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 flex items-center justify-center relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
        >
            <motion.div
                className="absolute inset-0 rounded-full bg-brand-cyan/10"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.svg
                width="40" height="40" viewBox="0 0 40 40" fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                <motion.path
                    d="M10 20L17 27L30 13"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-brand-cyan"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                />
            </motion.svg>
        </motion.div>
    </div>
);

const BookingForm = ({ countryContext = '' }) => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        jobTitle: '',
        company: '',
        companySize: '',
        region: countryContext || 'US',
        services: [],
        budgetRange: '',
        message: countryContext ? `Interested in solutions specifically for ${countryContext}.` : ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleService = (serviceId) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(serviceId)
                ? prev.services.filter(s => s !== serviceId)
                : [...prev.services, serviceId]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.services.length === 0) {
            toast.error('Please select at least one service you\'re interested in.');
            return;
        }

        setLoading(true);
        try {
            const payload = {
                ...formData,
                interestedService: formData.services.map(id =>
                    SERVICE_OPTIONS.find(s => s.id === id)?.label
                ).join(', ')
            };

            const response = await fetch('/api/public/leads/demo-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
                toast.success('Demo request received!');
            }
        } catch (error) {
            toast.error('Failed to submit request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <motion.div
                className="glass-card p-10 md:p-14 text-center relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Subtle bg particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-brand-cyan/30"
                            style={{
                                left: `${15 + i * 14}%`,
                                top: `${20 + (i % 3) * 25}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0, 0.8, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.3 + i * 0.15,
                                ease: "easeOut",
                            }}
                        />
                    ))}
                </div>

                <SuccessCheckmark />

                <motion.h3
                    className="text-3xl font-black mb-3 text-text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    You're All Set!
                </motion.h3>
                <motion.p
                    className="text-text-secondary mb-4 max-w-sm mx-auto text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    Our enterprise team will reach out within <span className="text-[#007da0] dark:text-brand-cyan font-semibold">24 hours</span> to schedule your personalized demo.
                </motion.p>

                <motion.div
                    className="flex items-center justify-center gap-6 text-xs text-text-muted mt-8 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span className="flex items-center gap-1.5"><Clock size={13} /> Avg. response: 4h</span>
                    <span className="flex items-center gap-1.5"><Shield size={13} /> 100% confidential</span>
                </motion.div>

                <motion.button
                    onClick={() => {
                        setSubmitted(false);
                        setFormData({
                            name: '', email: '', phone: '', jobTitle: '', company: '',
                            companySize: '', region: countryContext || 'US', services: [],
                            budgetRange: '', message: ''
                        });
                    }}
                    className="text-[#007da0] hover:text-[#005f7a] dark:text-brand-cyan dark:hover:text-brand-cyan/80 font-bold text-sm hover:underline underline-offset-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                >
                    Submit another request
                </motion.button>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="glass-heavy p-7 md:p-10 rounded-[32px] relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Premium glow accents */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-cyan/8 rounded-full blur-3xl -translate-y-20 translate-x-20 group-hover:bg-brand-cyan/15 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-indigo/8 rounded-full blur-3xl translate-y-16 -translate-x-16 group-hover:bg-brand-indigo/12 transition-all duration-700" />

            {/* Header */}
            <div className="mb-7 relative">
                <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 flex items-center justify-center border border-[#008ba8]/20 dark:border-brand-cyan/20 shadow-[0_0_15px_rgba(0,212,255,0.1)]">
                        <Sparkles size={18} className="text-[#008ba8] dark:text-brand-cyan" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black leading-tight bg-gradient-to-r from-[#006f8a] via-[#4f46e5] to-[#8b5cf6] dark:from-[#00d4ff] dark:via-[#818cf8] dark:to-[#a78bfa] bg-clip-text text-transparent">
                            Book a Free Demo
                        </h3>
                    </div>
                </div>
                <p className="text-text-secondary text-sm font-medium ml-[54px] leading-relaxed">Get a personalized walkthrough tailored to your business.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

                {/* ── Row 1: Name + Email ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className={labelClasses}>Full Name *</label>
                        <div className="relative">
                            <span className={`${iconClasses} ${focusedField === 'name' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><User size={16} /></span>
                            <input
                                required name="name" type="text" placeholder="Jane Smith"
                                value={formData.name} onChange={handleChange}
                                onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)}
                                className={inputClasses}
                            />
                        </div>
                    </div>
                    <div>
                        <label className={labelClasses}>Work Email *</label>
                        <div className="relative">
                            <span className={`${iconClasses} ${focusedField === 'email' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><Mail size={16} /></span>
                            <input
                                required name="email" type="email" placeholder="jane@company.com"
                                value={formData.email} onChange={handleChange}
                                onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                                className={inputClasses}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Row 2: Phone + Job Title ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className={labelClasses}>Phone Number *</label>
                        <div className="relative">
                            <span className={`${iconClasses} ${focusedField === 'phone' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><Phone size={16} /></span>
                            <input
                                required name="phone" type="tel" placeholder="+1 (555) 000-0000"
                                value={formData.phone} onChange={handleChange}
                                onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)}
                                className={inputClasses}
                            />
                        </div>
                    </div>
                    <div>
                        <label className={labelClasses}>Job Title *</label>
                        <div className="relative">
                            <span className={`${iconClasses} ${focusedField === 'jobTitle' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><Briefcase size={16} /></span>
                            <input
                                required name="jobTitle" type="text" placeholder="CTO, VP Engineering..."
                                value={formData.jobTitle} onChange={handleChange}
                                onFocus={() => setFocusedField('jobTitle')} onBlur={() => setFocusedField(null)}
                                className={inputClasses}
                            />
                        </div>
                    </div>
                </div>

                {/* ── Row 3: Company + Company Size ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className={labelClasses}>Company *</label>
                        <div className="relative">
                            <span className={`${iconClasses} ${focusedField === 'company' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><Building2 size={16} /></span>
                            <input
                                required name="company" type="text" placeholder="Acme Corp"
                                value={formData.company} onChange={handleChange}
                                onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)}
                                className={inputClasses}
                            />
                        </div>
                    </div>
                    <div>
                        <label className={labelClasses}>Company Size *</label>
                        <div className="relative">
                            <span className={`${iconClasses} ${focusedField === 'companySize' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><Users size={16} /></span>
                            <select
                                required name="companySize"
                                value={formData.companySize} onChange={handleChange}
                                onFocus={() => setFocusedField('companySize')} onBlur={() => setFocusedField(null)}
                                className={selectClasses}
                            >
                                <option value="" disabled className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">Select size...</option>
                                {COMPANY_SIZES.map(s => (
                                    <option key={s.value} value={s.value} className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">{s.label}</option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] dark:text-[#64748b] pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* ── Row 4: Region + Budget ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className={labelClasses}>Region *</label>
                        <div className="relative">
                            <span className={`${iconClasses} ${focusedField === 'region' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><Globe2 size={16} /></span>
                            <select
                                name="region"
                                value={formData.region} onChange={handleChange}
                                onFocus={() => setFocusedField('region')} onBlur={() => setFocusedField(null)}
                                className={selectClasses}
                            >
                                <option value="US" className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">USA & Canada</option>
                                <option value="UK" className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">UK & Europe</option>
                                <option value="UAE" className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">UAE & Middle East</option>
                                <option value="IN" className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">India & South Asia</option>
                                <option value="APAC" className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">Asia Pacific</option>
                                <option value="LATAM" className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">Latin America</option>
                                <option value="AF" className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">Africa</option>
                                <option value="Global" className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">Other / Global</option>
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] dark:text-[#64748b] pointer-events-none" />
                        </div>
                    </div>
                    <div>
                        <label className={labelClasses}>Budget Range <span className="normal-case text-text-muted/80">(optional)</span></label>
                        <div className="relative">
                            <span className={`${iconClasses} ${focusedField === 'budget' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><span className="text-[15px]">💰</span></span>
                            <select
                                name="budgetRange"
                                value={formData.budgetRange} onChange={handleChange}
                                onFocus={() => setFocusedField('budget')} onBlur={() => setFocusedField(null)}
                                className={selectClasses}
                            >
                                <option value="" className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">Prefer not to say</option>
                                {BUDGET_RANGES.map(b => (
                                    <option key={b.value} value={b.value} className="bg-white dark:bg-[#0f172a] text-[#0f172a] dark:text-[#f8fafc]">{b.label}</option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] dark:text-[#64748b] pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* ── Services Multi-Select Chips ── */}
                <div>
                    <label className={labelClasses}>Interested In * <span className="normal-case text-text-muted/80">(select all that apply)</span></label>
                    <div className="flex flex-wrap gap-2.5 mt-1">
                        {SERVICE_OPTIONS.map((service) => {
                            const isSelected = formData.services.includes(service.id);
                            return (
                                <motion.button
                                    key={service.id}
                                    type="button"
                                    onClick={() => toggleService(service.id)}
                                    whileTap={{ scale: 0.95 }}
                                    className={`
                                        inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold
                                        border transition-all duration-300 cursor-pointer select-none
                                        ${isSelected
                                            ? 'bg-[#008ba8]/10 dark:bg-brand-cyan/10 border-[#008ba8]/40 dark:border-brand-cyan/40 text-[#006f8a] dark:text-brand-cyan shadow-[0_0_12px_rgba(0,212,255,0.15)] font-bold'
                                            : 'bg-[#f1f5f9] dark:bg-[#1e293b]/50 border border-[#cbd5e1]/60 dark:border-[#334155]/60 text-[#334155] dark:text-[#cbd5e1] hover:border-[#008ba8]/40 dark:hover:border-brand-cyan/40 hover:text-[#006f8a] dark:hover:text-brand-cyan hover:bg-[#008ba8]/5 dark:hover:bg-brand-cyan/5'
                                        }
                                    `}
                                >
                                    <span className="text-sm">{service.icon}</span>
                                    {service.label}
                                    {isSelected && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="ml-0.5"
                                        >
                                            <CheckCircle2 size={13} />
                                        </motion.span>
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* ── Message ── */}
                <div>
                    <label className={labelClasses}>Tell Us About Your Project <span className="normal-case text-[#94a3b8] dark:text-[#64748b]">(optional)</span></label>
                    <div className="relative">
                        <span className={`absolute left-4 top-3.5 transition-colors duration-300 ${focusedField === 'message' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><MessageSquare size={16} /></span>
                        <textarea
                            name="message" rows="3" placeholder="Brief overview of what you're looking to build, key challenges, timeline expectations..."
                            value={formData.message} onChange={handleChange}
                            onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                            className={`${inputClasses} resize-none`}
                        />
                    </div>
                </div>

                {/* ── Submit ── */}
                <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-2.5 py-4 text-[15px] font-extrabold rounded-xl
                               bg-gradient-to-r from-[#008ba8] to-brand-indigo dark:from-brand-cyan dark:to-brand-indigo
                               text-white dark:text-[#0f172a] shadow-[0_4px_20px_rgba(0,139,168,0.2)] dark:shadow-[0_4px_20px_rgba(0,212,255,0.25)]
                               hover:shadow-[0_8px_30px_rgba(0,139,168,0.4)] dark:hover:shadow-[0_8px_30px_rgba(0,212,255,0.45)]
                               transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                    {loading ? (
                        <motion.div className="flex items-center gap-3">
                            <motion.div
                                className="w-5 h-5 border-2 border-white/30 border-t-white dark:border-brand-dark/30 dark:border-t-brand-dark rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                            />
                            <span>Submitting...</span>
                        </motion.div>
                    ) : (
                        <span className="flex items-center gap-2">
                            Request Your Demo
                            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                        </span>
                    )}
                </motion.button>

                {/* ── Trust Badges ── */}
                <div className="flex items-center justify-center gap-5 pt-1 text-[11px] text-text-muted font-medium">
                    <span className="flex items-center gap-1.5">
                        <Shield size={12} /> Enterprise-grade security
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={12} /> Response within 24h
                    </span>
                </div>
            </form>
        </motion.div>
    );
};

export default BookingForm;
