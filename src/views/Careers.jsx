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
import LocalizedLink from '../components/LocalizedLink';
import { Code2, Heart, Zap, Globe, ArrowRight, Laptop, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';
import { generateJobPostingSchema } from '../utils/schemaGenerators';
import { SITE_CONFIG } from '../config/siteConfig';

const OPEN_ROLES = [
    {
        role: 'Senior AI Researcher',
        team: 'AI Platform',
        loc: 'Remote / Bengaluru',
        type: 'Full-time',
        description: 'Lead cutting-edge AI research to build autonomous agent systems, predictive ML models, and LLM fine-tuning pipelines for enterprise-scale applications at GemSphere.',
    },
    {
        role: 'Staff Backend Engineer (Go/Rust)',
        team: 'Core Infrastructure',
        loc: 'Remote / Bengaluru',
        type: 'Full-time',
        description: 'Architect and build ultra-high-performance microservices in Go and Rust powering GemSphere\'s multi-tenant, global-scale commerce and supply chain infrastructure.',
    },
    {
        role: 'Lead Frontend Engineer',
        team: 'Commerce Platform',
        loc: 'Remote',
        type: 'Full-time',
        description: 'Own the frontend architecture of GemSphere\'s commerce platform — building stunning, accessible, high-performance React/Next.js applications used by enterprise clients worldwide.',
    },
    {
        role: 'Enterprise Solutions Architect',
        team: 'Sales Engineering',
        loc: 'Remote / London',
        type: 'Full-time',
        description: 'Partner with global enterprise prospects to design bespoke GemSphere deployment architectures, run technical demos, and close strategic accounts across EMEA.',
    },
    {
        role: 'Product Manager, Supply Chain',
        team: 'Product',
        loc: 'Remote',
        type: 'Full-time',
        description: 'Define and drive the roadmap for GemSphere\'s supply chain and logistics modules — working with customers, engineers, and leadership to ship transformative capabilities.',
    },
];

const Careers = () => {
    const { t } = useTranslation();

    // Inject JobPosting JSON-LD schema for Google for Jobs
    const jobPostingSchema = generateJobPostingSchema(OPEN_ROLES);

    return (
        <div className="min-h-screen">

            {/* JobPosting Structured Data — enables Google for Jobs rich results */}
            {jobPostingSchema.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}

            {/* HERO */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />

                <div className="container mx-auto px-6 max-w-7xl">
                    <ScrollReveal direction="up">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-text-primary text-xs font-bold uppercase tracking-widest mb-8">
                                <Code2 size={14} className="text-brand-cyan" />
                                {t('careers.badge', 'Join the Team')}
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-8 text-text-primary leading-tight">
                                {t('careers.heroLine1', 'Build Software that')} <br />
                                <span className="text-gradient">{t('careers.heroLine2', 'Runs the World.')}</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
                                {t('careers.heroSubtitle', 'We are looking for elite engineers, product visionaries, and AI researchers who want to solve the most complex scalability challenges on the planet.')}
                            </p>
                            <MagneticButton href="#open-roles" className="btn-primary px-8 py-4 text-lg">
                                {t('careers.ctaViewRoles', 'View Open Roles')} <ArrowRight size={18} />
                            </MagneticButton>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* PERKS */}
            <section className="py-24 border-y border-brand-border bg-brand-card/30">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading
                        badge={t('careers.cultureBadge', 'Culture')}
                        title={t('careers.cultureTitle', 'Why GemSphere?')}
                        subtitle={t('careers.cultureSubtitle', 'We treat engineering as a craft and believe in giving brilliant people the autonomy to do their best work.')}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Globe, titleKey: 'careers.perk1Title', title: 'Remote-First', descKey: 'careers.perk1Desc', desc: 'Work from anywhere. We care about output, not office hours.' },
                            { icon: Laptop, titleKey: 'careers.perk2Title', title: 'Best Gear', descKey: 'careers.perk2Desc', desc: 'Top-of-the-line MacBook Pro, monitors, and WFH stipend.' },
                            { icon: Heart, titleKey: 'careers.perk3Title', title: 'Health & Wellness', descKey: 'careers.perk3Desc', desc: 'Premium healthcare coverage for you and your family.' },
                            { icon: Clock, titleKey: 'careers.perk4Title', title: 'Flexible Time', descKey: 'careers.perk4Desc', desc: 'Unlimited PTO policy so you can recharge when you need to.' }
                        ].map((perk, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                <div className="glass-card p-8 rounded-3xl h-full hover:border-brand-cyan/30 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6">
                                        <perk.icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-text-primary mb-3">{t(perk.titleKey, perk.title)}</h3>
                                    <p className="text-sm text-text-secondary">{t(perk.descKey, perk.desc)}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* OPEN ROLES */}
            <section id="open-roles" className="py-24 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <SectionHeading
                        align="left"
                        badge={t('careers.hiringBadge', 'Hiring')}
                        title={t('careers.rolesTitle', 'Open Positions')}
                    />

                    <div className="space-y-4">
                        {OPEN_ROLES.map((job, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-brand-cyan/40 transition-all group flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-brand-cyan transition-colors">{job.role}</h3>
                                        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-text-tertiary">
                                            <span className="text-brand-cyan/80">{job.team}</span>
                                            <span className="w-1 h-1 rounded-full bg-brand-border-hover" />
                                            <span>{job.loc}</span>
                                            <span className="w-1 h-1 rounded-full bg-brand-border-hover" />
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                    <div className="shrink-0 hidden md:block">
                                        <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-text-tertiary group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:border-brand-cyan transition-all duration-300">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-text-secondary mb-6">
                            {t('careers.noFit', "Don't see a perfect fit? We're always looking for exceptional talent.")}
                        </p>
                        <LocalizedLink
                            href={`mailto:${SITE_CONFIG.contact.careersEmail}`}
                            className="inline-flex items-center gap-2 text-brand-cyan font-bold hover:text-text-primary transition-colors"
                        >
                            {t('careers.sendResume', 'Send us your resume')} <ArrowRight size={16} />
                        </LocalizedLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
