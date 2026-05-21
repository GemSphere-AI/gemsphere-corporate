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

import { Code2, Heart, Zap, Globe, ArrowRight, Laptop, Clock, Coffee } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';

const Careers = () => {
    return (
        <div className="min-h-screen">


            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                
                <div className="container mx-auto px-6 max-w-7xl">
                    <ScrollReveal direction="up">
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8">
                                <Code2 size={14} className="text-brand-cyan" /> Join the Team
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-8 text-white leading-tight">
                                Build Software that <br />
                                <span className="text-gradient">Runs the World.</span>
                            </h1>
                            <p className="text-xl text-text-secondary leading-relaxed font-medium mb-10 max-w-3xl mx-auto">
                                We are looking for elite engineers, product visionaries, and AI researchers who want to solve the most complex scalability challenges on the planet.
                            </p>
                            <MagneticButton href="#open-roles" className="btn-primary px-8 py-4 text-lg">
                                View Open Roles <ArrowRight size={18} />
                            </MagneticButton>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-24 border-y border-brand-border bg-brand-card/30">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading 
                        badge="Culture"
                        title="Why GemSphere?"
                        subtitle="We treat engineering as a craft and believe in giving brilliant people the autonomy to do their best work."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere. We care about output, not office hours.' },
                            { icon: Laptop, title: 'Best Gear', desc: 'Top-of-the-line MacBook Pro, monitors, and WFH stipend.' },
                            { icon: Heart, title: 'Health & Wellness', desc: 'Premium healthcare coverage for you and your family.' },
                            { icon: Clock, title: 'Flexible Time', desc: 'Unlimited PTO policy so you can recharge when you need to.' }
                        ].map((perk, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                <div className="glass-card p-8 rounded-3xl h-full border-white/5 hover:border-brand-cyan/30 transition-colors">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-brand-cyan mb-6">
                                        <perk.icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3">{perk.title}</h3>
                                    <p className="text-sm text-text-secondary">{perk.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section id="open-roles" className="py-24 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <SectionHeading 
                        align="left"
                        badge="Hiring"
                        title="Open Positions"
                    />

                    <div className="space-y-4">
                        {[
                            { role: 'Senior AI Researcher', team: 'AI Platform', loc: 'Remote / Bangalore', type: 'Full-time' },
                            { role: 'Staff Backend Engineer (Go/Rust)', team: 'Core Infrastructure', loc: 'Remote / Bangalore', type: 'Full-time' },
                            { role: 'Lead Frontend Engineer', team: 'Commerce Platform', loc: 'Remote', type: 'Full-time' },
                            { role: 'Enterprise Solutions Architect', team: 'Sales Engineering', loc: 'Remote / London', type: 'Full-time' },
                            { role: 'Product Manager, Supply Chain', team: 'Product', loc: 'Remote', type: 'Full-time' }
                        ].map((job, i) => (
                            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                                <div className="glass-card p-6 md:p-8 rounded-2xl border-white/5 hover:border-brand-cyan/40 transition-all group flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{job.role}</h3>
                                        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-text-tertiary">
                                            <span className="text-brand-cyan/80">{job.team}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                            <span>{job.loc}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                    <div className="shrink-0 hidden md:block">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-tertiary group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:border-brand-cyan transition-all duration-300">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-text-secondary mb-6">Don't see a perfect fit? We're always looking for exceptional talent.</p>
                        <LocalizedLink href="mailto:careers@gemsphere.ai" className="inline-flex items-center gap-2 text-brand-cyan font-bold hover:text-white transition-colors">
                            Send us your resume <ArrowRight size={16} />
                        </LocalizedLink>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
