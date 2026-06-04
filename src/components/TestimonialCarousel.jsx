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
import { ChevronLeft, ChevronRight, Quote, Star, X, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getEndpointUrl } from '../utils/apiConfig';
import { queueOfflineSubmission } from '../utils/offlineSync';

const TestimonialCarousel = ({ testimonials = [], autoPlay = true, interval = 6000, className = '' }) => {
    const { t } = useTranslation();
    
    // Manage dynamic list of testimonials (static defaults + customer inputs)
    const [activeTestimonials, setActiveTestimonials] = useState(testimonials);
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    
    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', role: '', company: '', quote: '', rating: 5 });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Merge static/remote testimonials with localStorage submissions
    useEffect(() => {
        const loadTestimonials = async () => {
            let baseList = testimonials;
            try {
                const url = getEndpointUrl('testimonials');
                const res = await fetch(url);
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data) && data.length > 0) {
                        baseList = data;
                    }
                }
            } catch (e) {
                console.warn("Could not fetch testimonials from database, falling back to static code data.", e);
            }

            try {
                const stored = localStorage.getItem('gemsphere_submitted_testimonials');
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        setActiveTestimonials([...baseList, ...parsed]);
                    } else {
                        setActiveTestimonials(baseList);
                    }
                } else {
                    setActiveTestimonials(baseList);
                }
            } catch (e) {
                console.error("Failed to load testimonials from localStorage", e);
                setActiveTestimonials(baseList);
            }
        };

        loadTestimonials();
    }, [testimonials]);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % activeTestimonials.length);
    }, [activeTestimonials.length]);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + activeTestimonials.length) % activeTestimonials.length);
    }, [activeTestimonials.length]);

    useEffect(() => {
        if (!autoPlay || activeTestimonials.length <= 1 || showModal) return;
        const timer = setInterval(next, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, next, activeTestimonials.length, showModal]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.role || !formData.company || !formData.quote) {
            return;
        }
        setIsSubmitting(true);

        const newEntry = {
            quote: formData.quote,
            name: formData.name,
            role: formData.role,
            company: formData.company,
            rating: formData.rating,
            isUserSubmitted: true
        };

        // Try hitting the database backend endpoint via configured POST endpoint
        let apiSuccess = false;
        const endpoint = getEndpointUrl('testimonials');
        const testimonialPayload = {
            quote: newEntry.quote,
            name: newEntry.name,
            role: newEntry.role,
            company: newEntry.company,
            rating: newEntry.rating
        };

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(testimonialPayload)
            });
            if (res.ok) {
                apiSuccess = true;
            } else if (res.status >= 500 || res.status === 0) {
                queueOfflineSubmission(endpoint, testimonialPayload, 'testimonial');
            }
        } catch (err) {
            console.warn("POST to testimonial endpoint failed. Saving offline for sync.", err);
            queueOfflineSubmission(endpoint, testimonialPayload, 'testimonial');
        }

        try {
            const stored = localStorage.getItem('gemsphere_submitted_testimonials');
            const parsed = stored ? JSON.parse(stored) : [];
            const updatedList = [...parsed, newEntry];
            localStorage.setItem('gemsphere_submitted_testimonials', JSON.stringify(updatedList));

            // Reload database items to merge if API was successful
            let baseList = testimonials;
            if (apiSuccess) {
                try {
                    const url = getEndpointUrl('testimonials');
                    const res = await fetch(url);
                    if (res.ok) {
                        const data = await res.json();
                        if (Array.isArray(data) && data.length > 0) {
                            baseList = data;
                        }
                    }
                } catch (e) {
                    console.error("Failed to re-fetch backend testimonials.", e);
                }
            }

            setActiveTestimonials([...baseList, ...updatedList]);
            setSubmitSuccess(true);
            setFormData({ name: '', role: '', company: '', quote: '', rating: 5 });

            // Close modal & transition to the new testimonial
            setTimeout(() => {
                setSubmitSuccess(false);
                setShowModal(false);
                setCurrent(baseList.length + updatedList.length - 1);
            }, 1800);
        } catch (error) {
            console.error("Failed to persist testimonial locally", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!activeTestimonials.length) return null;

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
    };

    return (
        <div className={`relative ${className}`}>
            <div className="overflow-hidden relative min-h-[220px]">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center px-4"
                    >
                        <Quote className="mx-auto mb-6 text-brand-cyan/30" size={32} />
                        
                        {/* Rating indicator */}
                        {activeTestimonials[current].rating && (
                            <div className="flex justify-center gap-1 mb-4" aria-label={`Rating: ${activeTestimonials[current].rating} out of 5 stars`}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star 
                                        key={i} 
                                        size={14} 
                                        className={i < activeTestimonials[current].rating ? 'text-amber-400 fill-amber-400' : 'text-brand-border'} 
                                    />
                                ))}
                            </div>
                        )}

                        <p className="text-lg md:text-2xl font-medium text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto italic">
                            "{activeTestimonials[current].quote}"
                        </p>
                        <div>
                            <p className="font-bold text-text-primary">{activeTestimonials[current].name}</p>
                            <p className="text-sm text-text-tertiary">{activeTestimonials[current].role}, {activeTestimonials[current].company}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation & Submission Controls */}
            <div className="flex flex-col items-center gap-6 mt-8">
                {activeTestimonials.length > 1 && (
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full border border-brand-border hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all cursor-pointer"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={16} className="text-text-tertiary" />
                        </button>
                        <div className="flex gap-2">
                            {activeTestimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current ? 'bg-brand-cyan w-6' : 'bg-text-muted hover:bg-text-tertiary'}`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="p-2 rounded-full border border-brand-border hover:border-brand-cyan/30 hover:bg-brand-cyan/5 transition-all cursor-pointer"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={16} className="text-text-tertiary" />
                        </button>
                    </div>
                )}

                {/* Submissions Action */}
                <button
                    onClick={() => setShowModal(true)}
                    className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand-cyan/25 hover:border-brand-cyan text-sm font-semibold text-text-primary hover:text-brand-cyan hover:bg-brand-cyan/5 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(0,212,255,0.05)]"
                >
                    {t('home.submitTestimonial', 'Share Your Experience')}
                </button>
            </div>

            {/* Premium Submission Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/85 backdrop-blur-md">
                        <motion.div
                            initial={{ scale: 0.95, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                            className="w-full max-w-lg glass-card border border-brand-border rounded-[32px] p-8 relative overflow-hidden shadow-2xl"
                        >
                            {/* Modal Close */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-border/30 text-text-tertiary hover:text-text-primary transition-colors cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X size={18} />
                            </button>

                            {submitSuccess ? (
                                <div className="text-center py-10 flex flex-col items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 animate-pulse">
                                        <Check size={32} />
                                    </div>
                                    <h4 className="text-2xl font-black text-white mb-2">{t('home.successSubmitTitle', 'Thank You!')}</h4>
                                    <p className="text-text-secondary">{t('home.submitSuccessMsg', 'Your testimonial has been submitted successfully.')}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <h3 className="text-2xl font-black font-display text-text-primary">{t('home.submitTestimonialHeader', 'Write a Testimonial')}</h3>
                                        <p className="text-xs text-text-tertiary mt-1">{t('home.testimonialDescription', 'Share your genuine engineering feedback on GemSphere products.')}</p>
                                    </div>

                                    {/* Star Rating Selection */}
                                    <div>
                                        <label className="block text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">{t('home.labelRating', 'Rating')}</label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, rating: star })}
                                                    className="text-2xl transition-all cursor-pointer hover:scale-110"
                                                    aria-label={`Rate ${star} stars`}
                                                >
                                                    <Star 
                                                        size={22} 
                                                        className={star <= formData.rating ? 'text-amber-400 fill-amber-400' : 'text-brand-border hover:text-amber-400'} 
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">{t('contact.name', 'Your Name')}</label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="e.g. John Doe"
                                                className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="role" className="block text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">{t('home.labelRole', 'Job Title / Role')}</label>
                                            <input
                                                id="role"
                                                type="text"
                                                required
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                placeholder="e.g. VP of Engineering"
                                                className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">{t('home.labelCompany', 'Company Name')}</label>
                                        <input
                                            id="company"
                                            type="text"
                                            required
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            placeholder="e.g. Vanguard Logistics"
                                            className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="quote" className="block text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">{t('home.labelQuote', 'Your Testimonial')}</label>
                                        <textarea
                                            id="quote"
                                            required
                                            rows={4}
                                            value={formData.quote}
                                            onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                                            placeholder="Tell us about your experience building and scaling with GemSphere..."
                                            className="w-full glass-subtle border-brand-border focus:border-brand-cyan rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3.5 bg-gradient-to-r from-brand-cyan to-brand-indigo text-[#0f172a] font-black rounded-xl hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(0,212,255,0.2)]"
                                    >
                                        {isSubmitting ? t('home.buttonSubmitting', 'Submitting...') : t('home.buttonSubmit', 'Submit Testimonial')}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TestimonialCarousel;
