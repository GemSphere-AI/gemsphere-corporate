"use client";

import React, { useState } from 'react';
import LocalizedLink from '../components/LocalizedLink';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';
import { SILO_DATA } from '../data/siloData';
import Breadcrumbs from '../components/Breadcrumbs';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import { generateProductSchema, generateFAQSchema } from '../utils/schemaGenerators';
import RelatedLinks from '../components/RelatedLinks';
import TrustBadges from '../components/TrustBadges';
import { parseCompositeSlug, getSEOContent, SERVICES_MAP, INDUSTRIES_MAP, COUNTRIES_MAP, COMPETITORS_MAP } from '../data/seoRegistry';

export default function PillarPageTemplate({ type, slug }) {
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);
    
    // Parse composite slug
    const parsing = parseCompositeSlug(slug);
    const isProgrammatic = parsing.type !== 'unknown';
    
    let resolvedSlug = slug;
    if (isProgrammatic) {
        const s = parsing.service || parsing.industry;
        if (s === 'custom-software-development') resolvedSlug = 'software-development';
        else resolvedSlug = s;
    }

    const dataList = type === 'Industry' ? PRODUCT_ECOSYSTEM.industries : PRODUCT_ECOSYSTEM.services;
    const data = dataList.find(d => d.slug === resolvedSlug);
    if (!data) return null;

    const siloDetails = type === 'Industry' ? SILO_DATA.industry[resolvedSlug] : SILO_DATA.service[resolvedSlug];

    const Icon = data.icon || ArrowRight;
    const parentPath = type === 'Industry' ? 'industries' : 'services';
    const breadcrumbItems = [
        { name: `${type}s`, url: `/${parentPath}` },
        { name: data.name, url: `/${parentPath}/${slug}` }
    ];

    // Fetch custom content overrides for Programmatic SEO pages
    const seoContent = isProgrammatic ? getSEOContent(slug) : null;
    const displayName = isProgrammatic ? seoContent.h1 : (siloDetails?.title || data.name);
    const displaySubtitle = isProgrammatic ? seoContent.description : (siloDetails?.subtitle || data.desc || `Enterprise-grade ${data.name.toLowerCase()} solutions powered by AI.`);
    const description = isProgrammatic ? seoContent.description : (siloDetails?.description || data.desc || data.name);
    const faqs = isProgrammatic ? seoContent.faqs : (siloDetails?.faqs || []);

    // Resolve dynamic competitor link for the service/industry
    let compareLink = `/${parentPath}/${slug}`;
    const serviceToProductMap = {
        'software-development': 'erp',
        'custom-software-development': 'erp',
        'enterprise-application-development': 'erp',
        'saas-development': 'erp',
        'saas-products': 'erp',
        'product-engineering': 'erp',
        'microservices-development': 'iam-platform',
        'cloud-consulting': 'erp',
        'cloud-migration': 'erp',
        'cloud-engineering': 'erp',
        'api-development': 'iam-platform',
        'api-integration': 'iam-platform',
        'devops': 'iam-platform',
        'devops-consulting': 'iam-platform',
        'ai-consulting': 'ai-chatbot',
        'ai-solutions': 'ai-chatbot',
        'ai-transformation': 'ai-chatbot',
        'managed-services': 'helpdesk',
        'application-modernization': 'erp',
        'performance-optimization': 'erp',
        'architecture-consulting': 'erp',
        // Industry mappings:
        'retail': 'retail-management',
        'ecommerce': 'retail-management',
        'hospitality': 'restaurant-pos',
        'hospitality_silo': 'restaurant-pos',
        'healthcare': 'healthcare-management',
        'fintech': 'billing-platform',
        'logistics': 'warehouse-management',
        'manufacturing': 'erp'
    };

    const serviceKey = parsing.service || parsing.industry || resolvedSlug;
    const mappedProductKey = serviceToProductMap[serviceKey] || 'erp';
    
    if (mappedProductKey) {
        const competitorKeys = Object.keys(COMPETITORS_MAP);
        const matchedCompKey = competitorKeys.find(key => COMPETITORS_MAP[key].product === mappedProductKey);
        if (matchedCompKey) {
            compareLink = `/compare/gemsphere-vs-${matchedCompKey}`;
        }
    }

    return (
        <div className="min-h-screen bg-brand-dark transition-colors duration-300">
            <SchemaMarkup schema={generateProductSchema({ name: displayName, description: description })} />
            {faqs && faqs.length > 0 && (
                <SchemaMarkup schema={generateFAQSchema(faqs)} />
            )}
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[150px] -z-10" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <Breadcrumbs items={breadcrumbItems} />
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-cyan/20 text-brand-cyan">
                                <Icon size={24} />
                            </div>
                            <h2 className="text-sm font-bold tracking-widest uppercase text-brand-cyan">
                                GemSphere {type}
                            </h2>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-text-primary mb-8 max-w-4xl">
                            {displayName}
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
                            {displaySubtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <LocalizedLink href="/demo" className="btn-primary">
                                Schedule a Demo <ArrowRight size={18} className="ml-2 inline" />
                            </LocalizedLink>

                            <LocalizedLink href="/about" className="glass-subtle px-6 py-3 rounded-xl font-bold hover:bg-brand-border/50 transition-colors">
                                Learn More
                            </LocalizedLink>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
            
            <TrustBadges />

            {/* Content Section */}
            <section className="py-24 bg-brand-dark/30 border-y border-brand-border relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        
                        {/* Left Column: Capabilities Grid */}
                        <div className="lg:col-span-7">
                            <ScrollReveal>
                                <SectionHeading 
                                    align="left"
                                    badge="Capabilities"
                                    title="Features Engineered for Scale."
                                    subtitle={`Deep-dive capabilities of the ${displayName} framework built to maximize operational efficiency.`}
                                />
                            </ScrollReveal>

                            {siloDetails?.features && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                    {siloDetails.features.map((feat, idx) => (
                                        <ScrollReveal key={idx} delay={idx * 0.08}>
                                            <div className="glass-card p-6 h-full border-brand-border/50 hover:border-brand-cyan/30 transition-all hover:-translate-y-1">
                                                <div className="flex gap-4">
                                                    <CheckCircle2 className="text-brand-cyan shrink-0" size={24} />
                                                    <span className="text-text-secondary font-bold leading-relaxed">{feat}</span>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            )}

                            <ScrollReveal className="prose dark:prose-invert max-w-none border-t border-brand-border/50 pt-10">
                                <h3 className="text-2xl font-black mb-6 text-text-primary">Industry-Specific Alignment</h3>
                                <p className="text-text-secondary leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: description }} />
                                <p className="text-text-secondary leading-relaxed">
                                    GemSphere provides deep, modular capabilities tailored to the unique requirements of this domain. 
                                    Our scalable architecture ensures that as your operations grow globally, the platform scales effortlessly.
                                </p>
                            </ScrollReveal>

                            {/* Programmatic SEO Dynamic Internal Linking Grid */}
                            {isProgrammatic && (
                                <ScrollReveal className="mt-12 border-t border-brand-border/50 pt-10">
                                    <h4 className="text-xl font-bold mb-6 text-text-primary">Related Enterprise Service Configurations</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {parsing.service && (
                                            <LocalizedLink 
                                                href={`/services/${parsing.service}`}
                                                className="glass-card p-4 flex justify-between items-center border-brand-border/40 hover:border-brand-cyan/40 transition-colors"
                                            >
                                                <span className="text-text-secondary text-sm font-semibold">Core Service: <strong className="text-brand-cyan">{SERVICES_MAP[parsing.service]?.name}</strong></span>
                                                <ArrowRight size={16} className="text-brand-cyan" />
                                            </LocalizedLink>
                                        )}

                                        {parsing.industry && (
                                            <LocalizedLink 
                                                href={`/industries/${parsing.industry}`}
                                                className="glass-card p-4 flex justify-between items-center border-brand-border/40 hover:border-brand-cyan/40 transition-colors"
                                            >
                                                <span className="text-text-secondary text-sm font-semibold">Industry Focus: <strong className="text-brand-cyan">{INDUSTRIES_MAP[parsing.industry]?.name}</strong></span>
                                                <ArrowRight size={16} className="text-brand-cyan" />
                                            </LocalizedLink>
                                        )}

                                        {parsing.country && (
                                            <LocalizedLink 
                                                href={`/services/${parsing.service || resolvedSlug}`}
                                                className="glass-card p-4 flex justify-between items-center border-brand-border/40 hover:border-brand-cyan/40 transition-colors"
                                            >
                                                <span className="text-text-secondary text-sm font-semibold">Regional Compliance: <strong className="text-brand-cyan">{COUNTRIES_MAP[parsing.country]?.name}</strong></span>
                                                <ArrowRight size={16} className="text-brand-cyan" />
                                            </LocalizedLink>
                                        )}

                                        <LocalizedLink 
                                            href={compareLink}
                                            className="glass-card p-4 flex justify-between items-center border-brand-border/40 hover:border-brand-cyan/40 transition-colors"
                                        >
                                            <span className="text-text-secondary text-sm font-semibold">Compare Options: <strong className="text-brand-cyan">GemSphere vs Alternatives</strong></span>
                                            <ArrowRight size={16} className="text-brand-cyan" />
                                        </LocalizedLink>
                                    </div>
                                </ScrollReveal>
                            )}

                            {faqs && faqs.length > 0 && (
                                <ScrollReveal className="mt-16 border-t border-brand-border/50 pt-12">
                                    <h3 className="text-3xl font-black mb-8 text-text-primary">Frequently Asked Questions</h3>
                                    <div className="space-y-4">
                                        {faqs.map((faq, idx) => {
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
                                                        <span className="font-bold text-text-primary text-lg">{faq.q || faq.question}</span>
                                                        <span className={`text-brand-cyan transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                                                        </span>
                                                    </button>
                                                    <div 
                                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 border-t border-brand-border/30' : 'max-h-0'}`}
                                                    >
                                                        <div className="px-6 py-5 text-text-secondary leading-relaxed bg-brand-dark/20">
                                                            {faq.a || faq.answer}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </ScrollReveal>
                            )}
                        </div>

                        {/* Right Column: Sticky CTA Card */}
                        <div className="lg:col-span-5 relative">
                            <div className="sticky top-32">
                                <ScrollReveal delay={0.2}>
                                    <div className="glass-heavy p-8 border-brand-cyan/20 rounded-[32px] shadow-2xl text-center">
                                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 flex items-center justify-center border border-brand-cyan/30">
                                            <Zap size={28} className="text-brand-cyan" />
                                        </div>
                                        <h3 className="text-2xl font-black mb-4 text-text-primary">Request a Custom Demo</h3>
                                        <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                                            Schedule a 1-on-1 technical walkthrough with a solutions architect. Explore code sandboxes, deployment configurations, and staging environments customized for your operations.
                                        </p>
                                        <LocalizedLink href="/demo" className="btn-primary w-full flex items-center justify-center py-4 font-bold">
                                            Schedule a Demo <ArrowRight size={18} className="ml-2" />
                                        </LocalizedLink>
                                        {compareLink && compareLink !== `/${parentPath}/${slug}` && (
                                            <LocalizedLink href={compareLink} className="glass-subtle w-full flex items-center justify-center py-3 font-bold border border-brand-border/40 mt-3 rounded-xl hover:bg-brand-border/60 transition-colors">
                                                Compare Options <ArrowRight size={16} className="ml-2" />
                                            </LocalizedLink>
                                        )}
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <RelatedLinks type={parentPath} currentId={data.slug} />
        </div>
    );
}
