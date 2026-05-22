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

export default function PillarPageTemplate({ type, slug }) {
    const dataList = type === 'Industry' ? PRODUCT_ECOSYSTEM.industries : PRODUCT_ECOSYSTEM.services;
    const data = dataList.find(d => d.slug === slug);
    if (!data) return null;

    const Icon = data.icon || ArrowRight;
    const parentPath = type === 'Industry' ? 'industries' : 'services';
    const breadcrumbItems = [
        { name: `${type}s`, url: `/${parentPath}` },
        { name: data.name, url: `/${parentPath}/${data.slug}` }
    ];

    return (
        <div className="min-h-screen">
            <SchemaMarkup schema={generateProductSchema({ ...data, description: data.desc || data.name })} />
            
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
                            {data.name}
                        </h1>
                        <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mb-10">
                            {data.desc || `Enterprise-grade ${data.name.toLowerCase()} solutions powered by AI.`}
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

            {/* Content Section Placeholder */}
            <section className="py-24 bg-brand-dark/30 border-y border-brand-border relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="glass-card p-12 text-center max-w-3xl mx-auto">
                        <Icon size={48} className="text-brand-indigo mx-auto mb-6" />
                        <h3 className="text-2xl font-bold mb-4 text-text-primary">Purpose-Built for {data.name}</h3>
                        <p className="text-text-secondary">
                            GemSphere provides deep, modular capabilities tailored to the unique requirements of this domain. 
                            Our scalable architecture ensures that as your operations grow globally, the platform scales effortlessly.
                        </p>
                    </div>
                </div>
            </section>

            <RelatedLinks type={parentPath} currentId={data.slug} />
        </div>
    );
}
