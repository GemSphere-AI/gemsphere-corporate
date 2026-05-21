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
import { useParams, redirect } from 'next/navigation';

import { SILO_DATA } from '../data/siloData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const DetailPage = ({ type }) => {
    const { id } = useParams();
    
    // Handle Listing View if no ID provided or if type explicitly ends with _list
    if (!id || type.endsWith('_list')) {
        const category = type.replace('_list', '');
        const items = Object.entries(SILO_DATA[category] || {}).map(([key, value]) => ({
            id: key,
            ...value
        }));

        return (
            <div className="min-h-screen text-white relative overflow-hidden py-24">

                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-black mb-16 tracking-tighter">
                        Platform <span className="text-brand-cyan">{category.charAt(0).toUpperCase() + category.slice(1)}s.</span>
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item) => (
                            <div 
                                key={item.id} 
                                onClick={() => window.location.href = `/${category}s/${item.id}`}
                                className="glass-card p-10 cursor-pointer hover:scale-[1.02] transition-all group border-white/5"
                            >
                                <h3 className="text-2xl font-black mb-4 group-hover:text-brand-cyan transition-colors">{item.title}</h3>
                                <p className="text-white/50 font-medium leading-relaxed mb-8">{item.subtitle}</p>
                                <div className="flex items-center gap-2 text-brand-cyan font-black text-sm uppercase tracking-widest">
                                    View Details <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    const data = SILO_DATA[type]?.[id];

    if (!data) {
        redirect('/');
        return null;
    }

    return (
        <div className="min-h-screen text-white relative overflow-hidden">


            {/* Backdrop Glow Effects */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-indigo/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 py-12 md:py-24 relative">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Content Side */}
                <div className="lg:col-span-7">
                    <div className="mb-12 animate-fade-in">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-black uppercase tracking-widest mb-6">
                            {type} Solution
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl text-brand-cyan font-bold mb-8">
                            {data.subtitle}
                        </p>
                        <p className="text-lg text-white/60 leading-relaxed mb-10">
                            {data.description}
                        </p>
                    </div>

                    <div className="glass-card p-8 md:p-12 mb-12">
                        <h2 className="text-2xl font-black mb-8 italic">Key Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data.features.map((feature, i) => (
                                <div key={i} className="flex gap-4">
                                    <CheckCircle2 className="text-brand-cyan shrink-0" size={24} />
                                    <span className="text-white/80 font-bold">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SEO Rich Text Section */}
                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-2xl font-black mb-6">Why Global Enterprises Choose GemSphere</h3>
                        <p className="text-white/50 leading-relaxed mb-6">
                            In today's digital landscape, generic solutions are no longer enough. GemSphere Technologies specializes in creating high-performance, {data.title.toLowerCase()} that are specifically engineered for global scale. Our approach combines deep technical expertise with a focus on real-world business outcomes.
                        </p>
                        <p className="text-white/50 leading-relaxed">
                            Whether you are a startup in the US or a logistics giant in the UAE, our systems are built to ensure your operations remain agile, secure, and data-driven at every step of your growth journey.
                        </p>
                    </div>
                </div>

                {/* Sidebar / Form Side */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32">
                        <BookingForm />
                        
                        <div className="mt-8 glass-card p-6 border-brand-indigo/20">
                            <h4 className="font-black mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-brand-cyan rounded-full" />
                                Support & Consultation
                            </h4>
                            <p className="text-sm text-white/50 mb-6 font-medium">
                                Ready to scale? Our solution architects are available for a detailed technical consultation.
                            </p>
                            <a href="mailto:solutions@gemsphere.ai" className="text-brand-cyan font-black hover:underline flex items-center gap-2">
                                solutions@gemsphere.ai <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            {/* Background Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] grayscale bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] -z-20" />
        </div>
    );
};

export default DetailPage;
