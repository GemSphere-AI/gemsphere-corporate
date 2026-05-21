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
import { Rocket, MapPin, Mail, Phone, ShieldCheck, Award, Building2 } from 'lucide-react';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';

const Footer = () => {
    return (
        <footer className="bg-brand-deeper pt-24 pb-12 border-t border-brand-border relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-indigo/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
                    
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.2)]">
                                <Rocket className="text-pure-white fill-current" size={20} />
                            </div>
                            <span className="text-2xl font-black font-display tracking-tight text-text-primary">GemSphere</span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-sm">
                            Engineering Intelligent Digital Enterprises. The unified platform for global commerce, supply chain, and AI operations.
                        </p>
                        
                        <div className="mb-8">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">Subscribe to Insights</h4>
                            <div className="flex gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="glass-subtle border-brand-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-brand-cyan w-full transition-colors"
                                />
                                <button className="bg-brand-cyan text-[#0f172a] px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {/* LinkedIn */}
                            <LocalizedLink href="https://www.linkedin.com/company/gem-sphere-ai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-subtle flex items-center justify-center text-text-secondary hover:bg-brand-cyan hover:text-[#0f172a] hover:border-brand-cyan transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </LocalizedLink>
                            {/* X (Twitter) */}
                            <LocalizedLink href="https://x.com/GemSphereAI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-subtle flex items-center justify-center text-text-secondary hover:bg-brand-cyan hover:text-[#0f172a] hover:border-brand-cyan transition-all duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </LocalizedLink>
                            {/* Facebook */}
                            <LocalizedLink href="https://www.facebook.com/people/GemSphere-AI/61581897367281/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-subtle flex items-center justify-center text-text-secondary hover:bg-brand-cyan hover:text-[#0f172a] hover:border-brand-cyan transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </LocalizedLink>
                            {/* Instagram */}
                            <LocalizedLink href="https://www.instagram.com/gemsphereai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-subtle flex items-center justify-center text-text-secondary hover:bg-brand-cyan hover:text-[#0f172a] hover:border-brand-cyan transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </LocalizedLink>
                        </div>
                    </div>

                    {/* Platform Columns */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-text-primary mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {PRODUCT_ECOSYSTEM.categories.slice(0, 5).map((cat, i) => (
                                <li key={i}>
                                    <LocalizedLink href={`/products#${cat.id}`} className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">
                                        {cat.name}
                                    </LocalizedLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-text-primary mb-6">Solutions</h4>
                        <ul className="space-y-4">
                            {PRODUCT_ECOSYSTEM.industries.slice(0, 5).map((ind, i) => (
                                <li key={i}>
                                    <LocalizedLink href={`/industries/${ind.slug}`} className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">
                                        {ind.name}
                                    </LocalizedLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-text-primary mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><LocalizedLink href="/about" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">About Us</LocalizedLink></li>
                            <li><LocalizedLink href="/careers" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">Careers</LocalizedLink></li>
                            <li><LocalizedLink href="/contact" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">Contact</LocalizedLink></li>
                            <li><LocalizedLink href="/blog" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">Blog</LocalizedLink></li>
                            <li><LocalizedLink href="/partners" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">Partners</LocalizedLink></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-text-primary mb-6">Get in Touch</h4>
                        <ul className="space-y-4 text-sm text-text-secondary">
                            <li className="flex gap-3">
                                <MapPin size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                                <span>Garuda BHIVE Workspace,<br/>BTM Layout, Bengaluru,<br/>Karnataka 560076</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail size={18} className="text-brand-cyan shrink-0" />
                                <LocalizedLink href="mailto:Contact@gemsphere.ai" className="hover:text-brand-cyan transition-colors">Contact@gemsphere.ai</LocalizedLink>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone size={18} className="text-brand-cyan shrink-0" />
                                <LocalizedLink href="tel:+917892585801" className="hover:text-brand-cyan transition-colors">+91 7892585801</LocalizedLink>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Building2 size={18} className="text-brand-cyan shrink-0" />
                                <span className="text-xs text-text-muted">CIN: U62011KA2025PTC211975</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Trust Badges & Bottom */}
                <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-6 items-center">
                        <div className="flex items-center gap-2 text-xs font-bold text-text-tertiary">
                            <ShieldCheck size={16} /> GDPR Aligned
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-text-tertiary">
                            <Award size={16} /> Encrypted Storage
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 md:gap-6 text-xs font-semibold text-text-tertiary">
                        <LocalizedLink href="/privacy" className="hover:text-brand-cyan transition-colors">Privacy Policy</LocalizedLink>
                        <LocalizedLink href="/cookie-policy" className="hover:text-brand-cyan transition-colors">Cookie Policy</LocalizedLink>
                        <LocalizedLink href="/terms" className="hover:text-brand-cyan transition-colors">Terms of Service</LocalizedLink>
                        <LocalizedLink href="/security" className="hover:text-brand-cyan transition-colors">Security</LocalizedLink>
                    </div>
                </div>
                
                <div className="mt-8 text-center text-xs text-text-muted">
                    &copy; 2026 GemSphere Technologies Private Limited. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
