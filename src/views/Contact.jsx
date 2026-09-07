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
import LocalizedLink from '../components/LocalizedLink';
import { SITE_CONFIG } from '../config/siteConfig';
import { useTranslation } from 'react-i18next';


import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Building2, Globe2, Zap, Users, Clock } from 'lucide-react';
import dynamic from 'next/dynamic';
const BookingForm = dynamic(() => import('../components/BookingForm'), {
  ssr: false,
  loading: () => <div className="w-full min-h-[500px] bg-brand-border/10 animate-pulse rounded-[32px]" />
});
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen">


            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[120px] -z-10" />
                
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        
                        {/* Left Content */}
                        <div className="lg:col-span-5">
                            <ScrollReveal direction="right">
                                <div className="mb-14">
                                    <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-8 text-white leading-tight">
                                        {t('contact.letsBuild', "Let's Build the")} <br />
                                        <span className="text-gradient">{t('contact.nextBigThing', "Next Big Thing.")}</span>
                                    </h1>
                                    <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
                                        {t('contact.subtitle', "Whether you need a custom enterprise architecture, a demo of our AI platform, or global technical support — we're here to help.")}
                                    </p>
                                </div>
                            </ScrollReveal>

                            {/* Trust stats */}
                            <ScrollReveal direction="right" delay={0.15}>
                                <div className="grid grid-cols-3 gap-4 mb-12">
                                    {[
                                        { value: 'API-First', label: t('contact.stats.integrations', 'Architecture'), icon: Zap },
                                        { value: 'Fast', label: t('contact.stats.response', 'Response Times'), icon: Clock },
                                        { value: 'Global', label: t('contact.stats.timezones', 'Reach'), icon: Globe2 },
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                            <stat.icon size={16} className="text-brand-cyan mx-auto mb-2" />
                                            <div className="text-xl font-black text-white">{stat.value}</div>
                                            <div className="text-[11px] text-white/35 font-medium mt-0.5">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>

                            <div className="space-y-7">
                                {[
                                    { 
                                        icon: Building2, 
                                        title: t('contact.sales.title', 'Global Sales'), 
                                        desc: t('contact.sales.desc', 'Talk to an enterprise architect about your needs.'), 
                                        action: SITE_CONFIG.contact.salesEmail,
                                        link: `mailto:${SITE_CONFIG.contact.salesEmail}`
                                    },
                                    { 
                                        icon: MessageSquare, 
                                        title: t('contact.support.title', 'Technical Support'), 
                                        desc: t('contact.support.desc', '24/7 support for existing enterprise platform clients.'), 
                                        action: t('contact.support.action', 'Go to Support Portal'),
                                        link: SITE_CONFIG.portal.loginUrl
                                    },
                                    { 
                                        icon: Globe2, 
                                        title: t('contact.partner.title', 'Partner Network'), 
                                        desc: t('contact.partner.desc', 'Join our global network of system integrators.'), 
                                        action: SITE_CONFIG.contact.partnersEmail,
                                        link: `mailto:${SITE_CONFIG.contact.partnersEmail}`
                                    }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} direction="right" delay={0.2 + (i * 0.1)}>
                                        <div className="flex gap-5 group">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan shrink-0 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/30 transition-all duration-300">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                                                <p className="text-text-secondary text-sm mb-2">{item.desc}</p>
                                                <LocalizedLink href={item.link} className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:text-white transition-colors">
                                                    {item.action} <ArrowRight size={14} />
                                                </LocalizedLink>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                            
                            <ScrollReveal direction="up" delay={0.6}>
                                <div className="mt-12 p-6 glass-card rounded-[24px] border-brand-indigo/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/20 rounded-full blur-[40px] pointer-events-none" />
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-brand-indigo/20 flex items-center justify-center text-brand-indigo">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-white">{t('contact.hq.title', 'Visit our Global HQ')}</h4>
                                            <p className="text-xs text-brand-indigo font-semibold">{t('contact.hq.location', `${SITE_CONFIG.contact.address.city}, ${SITE_CONFIG.contact.address.country}`)}</p>
                                        </div>
                                    </div>
                                    <p className="text-text-secondary text-sm">
                                        {t('contact.hq.desc', `We operate globally with our physical headquarters in ${SITE_CONFIG.contact.address.city} (${SITE_CONFIG.contact.address.country}), alongside distributed sales and engineering teams operating across the globe.`)}
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Form */}
                        <div className="lg:col-span-7 relative z-10">
                            <ScrollReveal direction="left" delay={0.3}>
                                <div className="lg:sticky lg:top-28">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-cyan/25 to-brand-indigo/25 rounded-[40px] blur-3xl opacity-50 dark:opacity-30 -z-10 animate-pulse-glow" />
                                    <BookingForm />
                                </div>
                            </ScrollReveal>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
