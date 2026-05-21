/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialCarousel = ({ testimonials = [], autoPlay = true, interval = 6000, className = '' }) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, [testimonials.length]);

    useEffect(() => {
        if (!autoPlay || testimonials.length <= 1) return;
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, next, testimonials.length]);

    if (!testimonials.length) return null;

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
    };

    return (
        <div className={`relative ${className}`}>
            <div className="overflow-hidden relative min-h-[200px]">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center"
                    >
                        <Quote className="mx-auto mb-6 text-brand-cyan/30" size={32} />
                        <p className="text-lg md:text-2xl font-medium text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto italic">
                            "{testimonials[current].quote}"
                        </p>
                        <div>
                            <p className="font-bold text-text-primary">{testimonials[current].name}</p>
                            <p className="text-sm text-text-tertiary">{testimonials[current].role}, {testimonials[current].company}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            {testimonials.length > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                        onClick={prev}
                        className="p-2 rounded-full border border-brand-border hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={16} className="text-text-tertiary" />
                    </button>
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-brand-cyan w-6' : 'bg-text-muted hover:bg-text-tertiary'}`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={next}
                        className="p-2 rounded-full border border-brand-border hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={16} className="text-text-tertiary" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default TestimonialCarousel;
