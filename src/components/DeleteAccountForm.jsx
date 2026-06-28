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
import { motion } from 'framer-motion';
import { User, Mail, Phone, Clock, Shield, Send, MessageSquare } from 'lucide-react';
import { toast } from 'react-hot-toast';

const inputClasses = "w-full bg-[#f8fafc] dark:bg-[#0d1527] border border-[#cbd5e1] dark:border-[#1e293b]/80 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-[#008ba8] dark:focus:border-brand-cyan focus:ring-2 focus:ring-[#008ba8]/15 dark:focus:ring-brand-cyan/15 transition-all duration-300 text-sm text-[#0f172a] dark:text-[#f8fafc] placeholder-[#94a3b8] dark:placeholder-[#475569]";
const labelClasses = "text-xs font-extrabold uppercase tracking-wider text-[#334155] dark:text-[#cbd5e1] mb-2 block";
const iconClasses = "absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300";

const SuccessCheckmark = () => (
    <div className="relative w-24 h-24 mx-auto mb-8">
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

export default function DeleteAccountForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulation of submission process
            await new Promise(resolve => setTimeout(resolve, 1200));
            console.log('Account deletion request submitted:', formData);
            toast.success('Your deletion request has been submitted.');
            setSubmitted(true);
        } catch (error) {
            toast.error('An error occurred. Please try again.');
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
                <SuccessCheckmark />

                <motion.h3
                    className="text-3xl font-black mb-3 text-text-primary font-display"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    Request Received
                </motion.h3>
                <motion.p
                    className="text-text-secondary mb-4 max-w-md mx-auto text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    We have registered your deletion request. Our team will verify and process it within <span className="text-[#007da0] dark:text-brand-cyan font-semibold">7 business days</span>. A confirmation email will be sent once the process is complete.
                </motion.p>

                <motion.div
                    className="flex items-center justify-center gap-6 text-xs text-text-muted mt-8 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span className="flex items-center gap-1.5"><Clock size={13} /> Process: 7 days</span>
                    <span className="flex items-center gap-1.5"><Shield size={13} /> Strict GDPR erasure</span>
                </motion.div>

                <motion.button
                    onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', reason: '' });
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
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-cyan/8 rounded-full blur-3xl -translate-y-20 translate-x-20 group-hover:bg-brand-cyan/15 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-indigo/8 rounded-full blur-3xl translate-y-16 -translate-x-16 group-hover:bg-brand-indigo/12 transition-all duration-700" />

            <div className="mb-8 border-b border-[#cbd5e1]/30 dark:border-[#1e293b]/50 pb-5">
                <h3 className="text-xl font-bold text-text-primary tracking-tight font-display mb-1">Request Deletion via Form</h3>
                <p className="text-text-secondary text-sm">Please provide your registered account details to confirm identity.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                        <label className={labelClasses}>Registered Email *</label>
                        <div className="relative">
                            <span className={`${iconClasses} ${focusedField === 'email' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><Mail size={16} /></span>
                            <input
                                required name="email" type="email" placeholder="jane@example.com"
                                value={formData.email} onChange={handleChange}
                                onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)}
                                className={inputClasses}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>Registered Phone Number (Optional)</label>
                    <div className="relative">
                        <span className={`${iconClasses} ${focusedField === 'phone' ? 'text-[#008ba8] dark:text-brand-cyan' : 'text-[#94a3b8] dark:text-[#64748b]'}`}><Phone size={16} /></span>
                        <input
                            name="phone" type="tel" placeholder="+1 (555) 000-0000"
                            value={formData.phone} onChange={handleChange}
                            onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)}
                            className={inputClasses}
                        />
                    </div>
                </div>

                <div>
                    <label className={labelClasses}>Reason for Deletion (Optional)</label>
                    <div className="relative">
                        <span className="absolute left-4 top-4 text-[#94a3b8] dark:text-[#64748b]"><MessageSquare size={16} /></span>
                        <textarea
                            name="reason" placeholder="Please let us know how we could have done better..."
                            rows={3} value={formData.reason} onChange={handleChange}
                            className="w-full bg-[#f8fafc] dark:bg-[#0d1527] border border-[#cbd5e1] dark:border-[#1e293b]/80 rounded-xl py-3.5 pl-12 pr-4 focus:outline-none focus:border-[#008ba8] dark:focus:border-brand-cyan focus:ring-2 focus:ring-[#008ba8]/15 dark:focus:ring-brand-cyan/15 transition-all duration-300 text-sm text-[#0f172a] dark:text-[#f8fafc] placeholder-[#94a3b8] dark:placeholder-[#475569] resize-none"
                        />
                    </div>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 disabled:from-red-600/50 disabled:to-red-500/50 text-white rounded-xl py-4 font-bold text-sm shadow-lg hover:shadow-red-500/10 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        {loading ? (
                            <>
                                <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                                Processing Request...
                            </>
                        ) : (
                            <>
                                <Send size={15} />
                                Permanently Delete My Account
                            </>
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
