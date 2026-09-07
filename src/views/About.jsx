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
import { useTranslation } from 'react-i18next';
import { Users, Target, Rocket, Award, Globe, Building, Shield, Zap, Brain, Code2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import LocalizedLink from '../components/LocalizedLink';
import { SITE_CONFIG } from '../config/siteConfig';

// Leadership team section — add real team members with genuine bios and photos when ready.
// See corporate audit P0 recommendation: feature real founder(s) with authentic credentials.

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen">

            {/* HERO */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                
                <div className="container mx-auto px-6 max-w-7xl">
                    <ScrollReveal direction="up">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-text-primary text-xs font-bold uppercase tracking-widest mb-8">
                                <Rocket size={14} className="text-brand-cyan" />
                                {t('about.missionBadge', 'Our Mission')}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-8 text-text-primary leading-tight">
                                {t('about.heroTitle', 'Democratizing')} <br />
                                <span className="text-gradient">{t('about.heroHighlight', 'Intelligence')}</span>{' '}
                                {t('about.heroSuffix', 'for the Global Enterprise.')}
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed font-medium">
                                {t('about.heroSubtitle', 'GemSphere Technologies was founded with a singular vision: to build high-performance, AI-driven software ecosystems that empower organizations to scale without limits.')}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* VALUES GRID */}
            <section className="py-24 border-y border-brand-border bg-brand-card/30">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading
                        badge={t('about.dnaTitle', 'Our DNA')}
                        title={t('about.valuesTitle', 'The Values We Engineer By')}
                        subtitle={t('about.valuesSubtitle', "We believe in craftsmanship, extreme ownership, and pushing the boundaries of what's possible.")}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Target, key: 'outcomeDriven', title: t('about.value1Title', 'Outcome-Driven'), desc: t('about.value1Desc', "We don't just write code; we engineer business outcomes that drive real-world impact and ROI.") },
                            { icon: Shield, key: 'security', title: t('about.value2Title', 'Enterprise Security'), desc: t('about.value2Desc', "Mission-critical systems require mission-critical security. It's baked into our DNA from day one.") },
                            { icon: Zap, key: 'performance', title: t('about.value3Title', 'High Performance'), desc: t('about.value3Desc', "Latency is the enemy of scale. Our architectures are optimized for extreme throughput and efficiency.") },
                            { icon: Globe, key: 'global', title: t('about.value4Title', 'Global Mindset'), desc: t('about.value4Desc', "Available globally in all countries, we build software that respects local nuance while scaling globally.") },
                            { icon: Brain, key: 'ai', title: t('about.value5Title', 'AI-First Approach'), desc: t('about.value5Desc', "Every modern enterprise should be powered by predictive intelligence. We make that a reality.") },
                            { icon: Award, key: 'excellence', title: t('about.value6Title', 'Excellence in Craft'), desc: t('about.value6Desc', "Clean code, resilient architectures, and stunning UI. We take immense pride in what we build.") }
                        ].map((value, i) => {
                            const Icon = value.icon || Target;
                            return (
                                <ScrollReveal key={value.key} direction="up" delay={i * 0.1}>
                                    <div className="glass-card p-10 rounded-[32px] group hover:border-brand-cyan/30 transition-all h-full">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-cyan/20 transition-all duration-300" style={{ background: 'var(--interactive-bg)' }}>
                                            <Icon className="text-brand-cyan" size={28} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-text-primary mb-4">{value.title}</h3>
                                        <p className="text-text-secondary leading-relaxed">{value.desc}</p>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* LEADERSHIP TEAM - Hidden for now */}
            {/* <section className="py-24 relative">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-indigo/5 rounded-full blur-[150px] -z-10" />
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading
                        badge={t('about.leadershipBadge', 'Leadership')}
                        title={t('about.leadershipTitle', 'The Team Behind GemSphere')}
                        subtitle={t('about.leadershipSubtitle', 'Industry veterans and deep technologists united by a shared mission to redefine enterprise software.')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {LEADERSHIP.map((person, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 0.12}>
                                <div className="glass-card p-8 rounded-[32px] group hover:border-brand-cyan/30 transition-all duration-300 h-full flex flex-col">
                                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${person.color} flex items-center justify-center mb-6 text-pure-white text-2xl font-black font-display shadow-lg`}>
                                        {person.initials}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary mb-1">{person.name}</h3>
                                    <p className="text-sm font-semibold text-brand-cyan mb-4">{person.title}</p>
                                    <p className="text-sm text-text-secondary leading-relaxed flex-1">{person.bio}</p>
                                    <div className="mt-6 pt-4 border-t border-brand-border">
                                        <LocalizedLink
                                            href={person.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-xs font-bold text-text-tertiary hover:text-brand-cyan transition-colors"
                                        >
                                            <Linkedin size={14} />
                                            {t('about.viewLinkedIn', 'View on LinkedIn')}
                                        </LocalizedLink>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* GLOBAL OFFICES */}
            <section className="py-24 relative border-t border-brand-border bg-brand-deeper">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading
                        badge={t('about.presenceBadge', 'Presence')}
                        title={t('about.presenceTitle', 'Global Operations')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ScrollReveal direction="left">
                            <div className="glass-card p-10 rounded-[32px] border-brand-cyan/20 relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-[50px]" />
                                <Globe className="text-brand-cyan mb-6" size={40} />
                                <h3 className="text-3xl font-bold text-text-primary mb-2">{t('about.distributedTeamsTitle', 'Distributed Teams')}</h3>
                                <p className="text-brand-cyan font-semibold mb-6">{t('about.distributedTeamsSubtitle', 'Global Sales & Engineering')}</p>
                                <p className="text-text-secondary leading-relaxed">
                                    {t('about.distributedTeamsDesc', 'Our sales and engineering teams operate across the globe to deliver continuous support and innovation, serving customers in every timezone.')}
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="right">
                            <div className="glass-card p-10 rounded-[32px] border-brand-indigo/20 relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/10 rounded-full blur-[50px]" />
                                <Building className="text-brand-indigo mb-6" size={40} />
                                <h3 className="text-3xl font-bold text-text-primary mb-2">{t('about.hqCity', 'Bengaluru (HQ)')}</h3>
                                <p className="text-brand-indigo font-semibold mb-6">{t('about.hqSubtitle', 'Global Headquarters & Physical Office')}</p>
                                <p className="text-text-secondary leading-relaxed">
                                    {SITE_CONFIG.contact.address.street},<br />
                                    {SITE_CONFIG.contact.address.city},<br />
                                    {SITE_CONFIG.contact.address.state} {SITE_CONFIG.contact.address.postalCode}, {SITE_CONFIG.contact.address.country}
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
