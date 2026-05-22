"use client";

import React from 'react';
import LocalizedLink from '../components/LocalizedLink';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';
import Breadcrumbs from '../components/Breadcrumbs';
import SchemaMarkup from '../components/seo/SchemaMarkup';
import { generateProductSchema } from '../utils/schemaGenerators';
import RelatedLinks from '../components/RelatedLinks';
import TrustBadges from '../components/TrustBadges';

export default function ProductCategory({ categoryId }) {
    const category = PRODUCT_ECOSYSTEM.categories.find(c => c.id === categoryId);
    if (!category) return null;

    const Icon = category.icon;
    const breadcrumbItems = [
        { name: 'Products', url: '/products' },
        { name: category.name, url: `/products/${category.id}` }
    ];

    return (
        <div className="min-h-screen">
            <SchemaMarkup schema={generateProductSchema(category)} />
            
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <Breadcrumbs items={breadcrumbItems} />
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${category.color}20`, color: category.color }}>
                                <Icon size={24} />
                            </div>
                            <h2 className="text-sm font-bold tracking-widest uppercase" style={{ color: category.color }}>
                                GemSphere {category.name}
                            </h2>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-text-primary mb-8 max-w-4xl">
                            Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">{category.name}</span> Orchestration.
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
                            {category.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <LocalizedLink href="/demo" className="btn-primary">
                                Schedule a Demo <ArrowRight size={18} className="ml-2 inline" />
                            </LocalizedLink>

                            <LocalizedLink href="/about" className="glass-subtle px-6 py-3 rounded-xl font-bold hover:bg-brand-border/50 transition-colors">
                                View Architecture
                            </LocalizedLink>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <TrustBadges />

            {/* Modules Grid */}
            <section className="py-24 bg-brand-dark/30 border-y border-brand-border relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeading 
                        badge="Platform Modules"
                        title="Comprehensive Capabilities."
                        subtitle={`Everything you need to orchestrate ${category.name.toLowerCase()} at global scale.`}
                        centered
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.modules.map((module, idx) => {
                            const ModuleIcon = module.icon;
                            return (
                                <ScrollReveal key={idx} delay={idx * 0.1}>
                                    <div className="glass-card p-8 h-full group hover:-translate-y-2 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-brand-dark border border-brand-border group-hover:border-brand-cyan transition-colors">
                                            <ModuleIcon size={24} className="text-brand-cyan" />
                                        </div>
                                        <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-cyan transition-colors">{module.name}</h3>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                            {module.desc}
                                        </p>
                                        <ul className="space-y-2 mt-auto">
                                            <li className="flex items-center gap-2 text-sm text-text-muted">
                                                <CheckCircle2 size={14} className="text-brand-indigo" /> Enterprise Grade
                                            </li>
                                            <li className="flex items-center gap-2 text-sm text-text-muted">
                                                <CheckCircle2 size={14} className="text-brand-indigo" /> API-First Architecture
                                            </li>
                                        </ul>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            {/* CTA */}
            <section className="py-32 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/10 to-brand-cyan/10" />
                <div className="container mx-auto px-6 max-w-3xl relative z-10">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight text-text-primary mb-6">
                            Ready to transform your {category.name.toLowerCase()}?
                        </h2>
                        <p className="text-lg text-text-secondary mb-10">
                            Join the world's most advanced enterprises orchestrating their operations on GemSphere.
                        </p>
                        <LocalizedLink href="/demo" className="btn-primary inline-flex">
                            Talk to an Expert
                        </LocalizedLink>

                    </ScrollReveal>
                </div>
            </section>

            <RelatedLinks type="products" currentId={category.id} />
        </div>
    );
}
