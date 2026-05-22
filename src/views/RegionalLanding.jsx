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

import { MapPin, Globe2, Phone, Building } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const RegionalLanding = ({ region }) => {
    const regionalData = {
        'UAE': {
            title: 'GemSphere UAE | Leading AI & IT Partner in the Middle East',
            description: 'Enabling digital transformation for enterprises in Dubai, Abu Dhabi, and the wider UAE. Specialized in Arabic NLP and regional logistics automation.',
            office: 'Distributed Sales & Engineering',
            phone: '+971 4 XXX XXXX'
        },
        'India': {
            title: 'GemSphere India | Scalable IT & Software Engineering Hub',
            description: 'Building world-class software and AI solutions from the heart of India. Serving global startups and domestic industry leaders.',
            office: 'Garuda BHIVE Workspace, BTM Layout, Bengaluru, Karnataka 560076',
            phone: '+91 80 XXXX XXXX'
        }
    }[region];

    return (
        <div className="min-h-screen text-white relative overflow-hidden">


            {/* Backdrop Glow Effects */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[140px] -z-10" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 py-12 md:py-24 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7">
                        <div className="mb-8 animate-slide-up">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-black uppercase mb-6 w-fit">
                                <Globe2 size={14} /> Regional Excellence
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
                                Powering Innovation in <span className="text-gradient">{region}</span>
                            </h1>
                            <p className="text-xl text-white/60 leading-relaxed mb-12">
                                {regionalData.description} GemSphere Technologies provides localized expertise with a global mindset, ensuring our {region}-based clients stay ahead of the curve.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="glass-card p-6 border-white/5 hover:border-brand-cyan/20 transition-all">
                                <div className="w-10 h-10 rounded-lg bg-brand-indigo/20 flex items-center justify-center text-brand-cyan mb-4">
                                    <Building size={20} />
                                </div>
                                <h4 className="font-black mb-1 text-white">Local Headquarters</h4>
                                <p className="text-sm text-white/40 font-medium">{regionalData.office}</p>
                            </div>
                            <div className="glass-card p-6 border-white/5 hover:border-brand-cyan/20 transition-all">
                                <div className="w-10 h-10 rounded-lg bg-brand-indigo/20 flex items-center justify-center text-brand-cyan mb-4">
                                    <Phone size={20} />
                                </div>
                                <h4 className="font-black mb-1 text-white">Regional Support</h4>
                                <p className="text-sm text-white/40 font-medium">{regionalData.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="glass-card p-2 bg-white/5 backdrop-blur-3xl overflow-hidden">
                             <BookingForm />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] grayscale bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] -z-20" />
        </div>
    );
};

export default RegionalLanding;
