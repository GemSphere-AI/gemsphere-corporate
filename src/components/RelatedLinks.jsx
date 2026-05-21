"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

export default function RelatedLinks({ type, currentId }) {
    let items = [];
    let basePath = '';
    let title = '';

    if (type === 'products') {
        items = PRODUCT_ECOSYSTEM.categories.filter(c => c.id !== currentId).slice(0, 3);
        basePath = '/products';
        title = 'Explore Other Solutions';
    } else if (type === 'industries') {
        items = PRODUCT_ECOSYSTEM.industries.filter(i => i.slug !== currentId).slice(0, 3);
        basePath = '/industries';
        title = 'Other Industries We Serve';
    } else if (type === 'services') {
        items = PRODUCT_ECOSYSTEM.services.filter(s => s.slug !== currentId).slice(0, 3);
        basePath = '/services';
        title = 'Explore More Services';
    }

    if (items.length === 0) return null;

    return (
        <section className="py-20 border-t border-brand-border bg-brand-dark/20">
            <div className="container mx-auto px-6 max-w-7xl">
                <h3 className="text-2xl font-bold text-text-primary mb-10">{title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, idx) => {
                        const Icon = item.icon || ArrowRight;
                        const link = `${basePath}/${item.id || item.slug}`;
                        return (
                            <a 
                                key={idx} 
                                href={link}
                                className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 block"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brand-dark border border-brand-border group-hover:border-brand-cyan transition-colors text-brand-cyan">
                                        <Icon size={20} />
                                    </div>
                                    <h4 className="font-bold text-text-primary group-hover:text-brand-cyan transition-colors">
                                        {item.name}
                                    </h4>
                                </div>
                                <p className="text-sm text-text-muted line-clamp-2">
                                    {item.description || item.desc}
                                </p>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
