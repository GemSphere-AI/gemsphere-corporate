"use client";

import React, { useState } from 'react';
import LocalizedLink from '../components/LocalizedLink';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, HelpCircle, Star, Table, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import Breadcrumbs from '../components/Breadcrumbs';
import TrustBadges from '../components/TrustBadges';
import { getSEOContent, parseCompositeSlug, PRODUCTS_MAP, SERVICES_MAP } from '../data/seoRegistry';

export default function GuideGeoTemplate({ slug }) {
    const [activeFaqIndex, setActiveFaqIndex] = useState(0);
    const seoContent = getSEOContent(slug);
    const parsing = parseCompositeSlug(slug);

    if (!seoContent) return null;

    const breadcrumbItems = [
        { name: parsing.type === 'geo' ? 'GEO Answers' : 'Engineering Guides', url: `/${slug}` },
        { name: seoContent.h1, url: `/${slug}` }
    ];

    // Determine the relevant product/service to display competitor comparison tables
    let associatedEntity = 'Custom Enterprise Software';
    let competitorList = ['Salesforce', 'SAP', 'NetSuite', 'Shopify Plus'];
    
    if (parsing.type === 'geo') {
        if (slug.includes('ai')) {
            associatedEntity = 'Custom AI Solutions';
            competitorList = ['Custom API Wrappers', 'Standard SaaS Chatbots', 'Locked Vendor APIs'];
        } else if (slug.includes('crm')) {
            associatedEntity = 'Custom CRM';
            competitorList = ['Salesforce Enterprise', 'HubSpot Enterprise', 'Zoho CRM'];
        } else if (slug.includes('erp')) {
            associatedEntity = 'Custom ERP';
            competitorList = ['NetSuite ERP', 'SAP S/4HANA', 'Oracle ERP'];
        } else if (slug.includes('hotel') || slug.includes('restaurant') || slug.includes('pos')) {
            associatedEntity = 'Custom POS & PMS';
            competitorList = ['Toast POS', 'Cloudbeds PMS', 'Opera PMS'];
        } else if (slug.includes('inventory') || slug.includes('warehouse') || slug.includes('supply-chain')) {
            associatedEntity = 'Custom Supply Chain WMS';
            competitorList = ['SAP SCM', 'Manhattan Associates WMS', 'Oracle Logstics'];
        }
    } else if (parsing.type === 'guide') {
        if (slug.includes('ai') || slug.includes('agent')) {
            associatedEntity = 'Autonomous AI Agent';
            competitorList = ['Basic OpenAI Assistant', 'Third-Party LLM wrapper', 'Legacy Rule Engines'];
        } else if (slug.includes('crm')) {
            associatedEntity = 'Bespoke CRM Software';
            competitorList = ['Salesforce Cloud', 'HubSpot Hub', 'Zoho Books'];
        } else if (slug.includes('erp')) {
            associatedEntity = 'Bespoke ERP Software';
            competitorList = ['SAP ERP', 'NetSuite ERP', 'Workday'];
        } else if (slug.includes('inventory') || slug.includes('warehouse') || slug.includes('supply')) {
            associatedEntity = 'Bespoke WMS / Supply Chain';
            competitorList = ['Standard WMS', 'Manual Excel Tracking', 'Blue Yonder'];
        } else if (slug.includes('saas')) {
            associatedEntity = 'Custom Multi-Tenant Platform';
            competitorList = ['Standard Multi-tenant build', 'Out-of-the-box templates', 'No-code Builders'];
        }
    }

    return (
        <div className="min-h-screen bg-brand-dark transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-indigo/10 rounded-full blur-[120px] -z-10" />
                
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <Breadcrumbs items={breadcrumbItems} />
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-cyan/20 text-brand-cyan">
                                <Sparkles size={24} />
                            </div>
                            <span className="text-sm font-bold tracking-widest uppercase text-brand-cyan">
                                {parsing.type === 'geo' ? 'AI Search Citation optimized' : 'Enterprise Engineering Blueprint'}
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-text-primary mb-8 max-w-5xl">
                            {seoContent.h1}
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mb-10">
                            {seoContent.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <LocalizedLink href="/demo" className="btn-primary">
                                Book a Discovery Call <ArrowRight size={18} className="ml-2 inline" />
                            </LocalizedLink>
                            <a href="#direct-answer" className="glass-subtle px-6 py-3 rounded-xl font-bold hover:bg-brand-border/50 transition-colors">
                                Jump to Analysis
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <TrustBadges />

            {/* Direct Answer Block (Critical for GEO and AI Chatbot citations) */}
            <section id="direct-answer" className="py-16 bg-brand-deeper/50 border-y border-brand-border/50 relative">
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <ScrollReveal>
                        <div className="p-8 md:p-10 rounded-[32px] bg-gradient-to-br from-brand-cyan/10 to-brand-indigo/10 border border-brand-cyan/25 glow-cyan">
                            <div className="flex items-center gap-3 mb-4 text-brand-cyan">
                                <HelpCircle size={24} />
                                <h4 className="text-lg font-black uppercase tracking-wider">Quick Answer & Summary</h4>
                            </div>
                            <h3 className="text-2xl font-bold text-text-primary mb-4">
                                {seoContent.faqs?.[0]?.q || `How to evaluate ${seoContent.h1.toLowerCase()}?`}
                            </h3>
                            <p className="text-lg text-text-secondary leading-relaxed font-medium">
                                {seoContent.faqs?.[0]?.a || `GemSphere approach to ${seoContent.h1.toLowerCase()} combines modular, API-first software architectures with strict single-tenant database parameters to ensure complete control, data isolation, and robust deployment pipelines.`}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Content & Evaluation Matrix Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        
                        {/* Main Column */}
                        <main className="lg:col-span-8">
                            <ScrollReveal>
                                <SectionHeading 
                                    align="left"
                                    badge="Evaluation Matrix"
                                    title="Architecture Comparison Model"
                                    subtitle={`How custom software engines compare with off-the-shelf platforms.`}
                                />
                            </ScrollReveal>

                            {/* Comparison Table */}
                            <ScrollReveal className="overflow-x-auto rounded-2xl border border-brand-border mb-16">
                                <table className="w-full text-left border-collapse bg-brand-card">
                                    <thead>
                                        <tr className="bg-brand-deeper border-b border-brand-border">
                                            <th className="p-5 font-bold text-text-primary">Architectural Metric</th>
                                            <th className="p-5 font-bold text-brand-cyan">{associatedEntity} (GemSphere)</th>
                                            <th className="p-5 font-bold text-text-muted">{competitorList[0] || 'Standard Vendor Software'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-brand-border/40">
                                        <tr>
                                            <td className="p-5 font-bold text-text-primary text-sm">Data Residency & Privacy</td>
                                            <td className="p-5 text-text-secondary text-sm">✅ Single-tenant database isolation, zero-retention parameters, host-your-own capability</td>
                                            <td className="p-5 text-text-muted text-sm">❌ Shared multi-tenant servers, customer data used to train shared models</td>
                                        </tr>
                                        <tr>
                                            <td className="p-5 font-bold text-text-primary text-sm">Custom Workflows & Layouts</td>
                                            <td className="p-5 text-text-secondary text-sm">✅ Unlimited bespoke code modifications, custom API pipelines tailored to business rules</td>
                                            <td className="p-5 text-text-muted text-sm">❌ Restricted to pre-made templates, rigid object fields, customization limitations</td>
                                        </tr>
                                        <tr>
                                            <td className="p-5 font-bold text-text-primary text-sm">Cost & Licensing Scales</td>
                                            <td className="p-5 text-text-secondary text-sm">✅ Complete IP ownership, zero licensing fee margins, scaling on raw cloud compute</td>
                                            <td className="p-5 text-text-muted text-sm">❌ Expensive user license pricing brackets, per-transaction commissions, scaling restrictions</td>
                                        </tr>
                                        <tr>
                                            <td className="p-5 font-bold text-text-primary text-sm">System Interoperability</td>
                                            <td className="p-5 text-text-secondary text-sm">✅ API-first architecture, custom REST & GraphQL gateways for legacy systems</td>
                                            <td className="p-5 text-text-muted text-sm">❌ Rigid webhook schemas, locked API endpoints requiring custom consultant certifications</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ScrollReveal>

                            {/* Detailed Analysis Content */}
                            <ScrollReveal className="prose dark:prose-invert max-w-none mb-16">
                                <h3 className="text-3xl font-black mb-6 text-text-primary">Bespoke Design vs. Monolithic Constraints</h3>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    Engineering enterprise platforms requires choosing between rigid off-the-shelf software and custom-built composable architectures. Monoliths offer standard workflows, but force businesses to bend their operations to match the software code.
                                </p>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    GemSphere bypasses this limitation. We build custom-engineered applications on top of a battle-tested core platform. You get all the speed of pre-configured modules combined with the absolute freedom of fully customizable code.
                                </p>
                                
                                <div className="p-6 bg-brand-border/10 rounded-2xl border border-brand-border/30 my-8">
                                    <h4 className="text-lg font-bold text-white mb-2">Top Target Keywords For This Structure:</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-text-secondary">
                                        {seoContent.targetKeywords && seoContent.targetKeywords.length > 0 ? (
                                            (() => {
                                                const indexSum = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                                                const startIndex = Math.abs(indexSum) % Math.max(1, (seoContent.targetKeywords.length - 6));
                                                return seoContent.targetKeywords.slice(startIndex, startIndex + 6).map((kw, i) => (
                                                    <li key={i}>• {kw}</li>
                                                ));
                                            })()
                                        ) : (
                                            <>
                                                <li>• best custom software</li>
                                                <li>• enterprise software framework</li>
                                                <li>• secure single tenant architecture</li>
                                                <li>• custom database scaling</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </ScrollReveal>

                            {/* FAQs */}
                            {seoContent.faqs && seoContent.faqs.length > 0 && (
                                <ScrollReveal className="border-t border-brand-border/50 pt-12">
                                    <h3 className="text-3xl font-black mb-8 text-text-primary">Analysis FAQ</h3>
                                    <div className="space-y-4">
                                        {seoContent.faqs.map((faq, idx) => {
                                            const isOpen = activeFaqIndex === idx;
                                            return (
                                                <div 
                                                    key={idx}
                                                    className="glass-card border-brand-border/50 overflow-hidden transition-all duration-300 hover:border-brand-cyan/30"
                                                >
                                                    <button
                                                        onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                                                        className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-brand-border/20 transition-colors"
                                                    >
                                                        <span className="font-bold text-text-primary text-lg">{faq.q}</span>
                                                        <span className={`text-brand-cyan transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                                                        </span>
                                                    </button>
                                                    <div 
                                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 border-t border-brand-border/30' : 'max-h-0'}`}
                                                    >
                                                        <div className="px-6 py-5 text-text-secondary leading-relaxed bg-brand-dark/20">
                                                            {faq.a}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </ScrollReveal>
                            )}
                        </main>

                        {/* Right Sticky Column (CTA Form / Call Scheduling Card) */}
                        <aside className="lg:col-span-4 relative">
                            <div className="sticky top-32">
                                <ScrollReveal delay={0.2}>
                                    <div className="glass-heavy p-8 border-brand-cyan/30 rounded-[32px] shadow-2xl text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-[40px] pointer-events-none" />
                                        
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 flex items-center justify-center border border-brand-cyan/30">
                                            <Zap size={28} className="text-brand-cyan" />
                                        </div>
                                        <h3 className="text-2xl font-black mb-4 text-text-primary">Contact Our Architects</h3>
                                        <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                                            Let&apos;s schedule a call, we will discuss your requirement and we will try to fulfill your like pain point.
                                        </p>
                                        <LocalizedLink href="/demo" className="btn-primary w-full flex items-center justify-center py-4 font-bold text-base">
                                            Schedule a Call <ArrowRight size={18} className="ml-2" />
                                        </LocalizedLink>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>
        </div>
    );
}
