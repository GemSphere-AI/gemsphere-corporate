/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const BookingForm = dynamic(() => import('../components/BookingForm'), {
  ssr: false,
  loading: () => <div className="w-full min-h-[500px] bg-brand-border/10 animate-pulse rounded-[32px]" />
});
import ScrollReveal from '../components/ScrollReveal';

const Demo = () => {
    const [isFlagshipDemo, setIsFlagshipDemo] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const select = params.get('select');
            if (select && (select.includes('gemsphere-commerce') || select.includes('gemsphere-hospitality'))) {
                setIsFlagshipDemo(true);
            }
        }
    }, []);

    return (
        <div className="min-h-screen relative flex items-center justify-center pt-32 pb-24 overflow-hidden">
            {/* Background decorative gradients */}
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[120px] -z-10" />
            
            <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center">
                {/* Header Section */}
                <ScrollReveal direction="down" className="text-center mb-10 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white mb-6">
                        {isFlagshipDemo ? (
                            <>Explore our <span className="text-gradient">Flagship Solutions.</span></>
                        ) : (
                            <>Experience the <span className="text-gradient">Power of GemSphere.</span></>
                        )}
                    </h1>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        {isFlagshipDemo ? (
                            "Schedule a personalized walkthrough of GemSphere Commerce and Hospitality with our solution engineers."
                        ) : (
                            "Fill out the form below to schedule a live, personalized walk-through of the platform capabilities with our solution engineers."
                        )}
                    </p>
                </ScrollReveal>

                {/* Form Container */}
                <div className="w-full relative">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-cyan/25 to-brand-indigo/25 rounded-[40px] blur-3xl opacity-50 dark:opacity-30 -z-10 animate-pulse-glow" />
                    <BookingForm />
                </div>
            </div>
        </div>
    );
};

export default Demo;
