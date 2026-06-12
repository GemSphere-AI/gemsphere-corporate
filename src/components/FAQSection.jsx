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
import { ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';
import { triggerTeamsChat } from '../utils/apiConfig';
import LocalizedLink from './LocalizedLink';
import { generateFAQSchema } from '../utils/schemaGenerators';

const HOMEPAGE_FAQS = [
    {
        q: "What is GemSphere Technologies?",
        a: "GemSphere Technologies is a global AI-powered enterprise software company delivering 50+ unified digital platform modules across Commerce, Supply Chain, Finance, Operations, AI, and Collaboration for businesses in over 170 countries."
    },
    {
        q: "How many modules does the GemSphere platform include?",
        a: "The GemSphere platform contains 50+ modular capabilities spanning CRM, ERP, E-commerce, Warehousing, Procurement, Analytics, and generative AI agents. You can start with a single module and scale seamlessly."
    },
    {
        q: "Is GemSphere suitable for enterprise-scale operations?",
        a: "Yes. GemSphere is built specifically for global enterprises. It features role-based access control (RBAC), multi-currency/multi-language setups, GDPR-aligned data privacy frameworks, 99.99% uptime SLA, and SOC2-ready cloud architectures."
    },
    {
        q: "Does GemSphere support multi-currency and multi-language?",
        a: "Yes, GemSphere features native multi-currency transactional capability, real-time localized tax compliance engine support, and multi-language interface routing built into its core framework."
    },
    {
        q: "How does GemSphere compare to Salesforce or SAP?",
        a: "Unlike legacy software suites that require costly integrations and complex licensing, GemSphere offers a single data model across all modules. This eliminates data silos, reduces total cost of ownership by up to 40%, and provides native out-of-the-box AI orchestration."
    },
    {
        q: "Is there a free trial available?",
        a: "Because we custom-engineer layouts and features for each enterprise client individually, we do not provide a generic, standardized trial. Instead, we configure a dedicated sandbox environment tailored specifically to your operational scale and requirements. Let's schedule a call to discuss your business objectives and design a trial that addresses your exact pain points."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="py-24 border-t border-brand-border relative overflow-hidden bg-brand-dark/20">
            {/* Schema Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(HOMEPAGE_FAQS))
                }}
            />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column: Heading and CTAs */}
                    <div className="lg:col-span-5 space-y-8 flex flex-col justify-start">
                        <div className="space-y-4">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-black uppercase tracking-widest">
                                FAQ
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-primary font-display leading-[1.15]">
                                Frequently Asked <br className="hidden lg:block" /> Questions
                            </h2>
                            <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium max-w-md">
                                Have questions about GemSphere? Get answers to the most common queries regarding our platform, deployment, and pricing.
                            </p>
                        </div>

                        {/* Direct CTAs for help */}
                        <div className="glass-card p-6 rounded-2xl border-brand-border/80 max-w-md space-y-4">
                            <h4 className="text-sm font-black text-text-primary uppercase tracking-wider">Still have questions?</h4>
                            <p className="text-xs text-text-tertiary font-medium">
                                Can't find the answer you are looking for? Contact our sales team for personalized integration support.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <button
                                    onClick={triggerTeamsChat}
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-brand-border bg-brand-card/30 text-xs font-bold text-text-secondary hover:text-text-primary hover:border-brand-cyan/30 transition-all duration-300 cursor-pointer"
                                >
                                    <PhoneCall size={14} className="text-brand-cyan" /> Talk to Teams
                                </button>
                                <LocalizedLink
                                    href="/contact"
                                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-bold text-brand-cyan hover:bg-brand-cyan/20 transition-all duration-300"
                                >
                                    <MessageSquare size={14} /> Send Message
                                </LocalizedLink>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="space-y-4">
                            {HOMEPAGE_FAQS.map((faq, i) => {
                                const isOpen = openIndex === i;
                                return (
                                    <div 
                                        key={i} 
                                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                            isOpen 
                                            ? 'bg-brand-card border-brand-cyan/20 shadow-lg' 
                                            : 'bg-brand-card/30 border-brand-border/60 hover:border-brand-border'
                                        }`}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(i)}
                                            className="w-full px-6 py-5 flex items-center justify-between text-left font-display font-black text-sm md:text-base text-text-primary hover:text-brand-cyan transition-colors cursor-pointer select-none"
                                        >
                                            <span>{faq.q}</span>
                                            <ChevronDown 
                                                size={18} 
                                                className={`text-text-muted shrink-0 transition-transform duration-300 ${
                                                    isOpen ? 'rotate-180 text-brand-cyan' : ''
                                                }`} 
                                            />
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                >
                                                    <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-text-secondary leading-relaxed font-medium border-t border-brand-border/30">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
