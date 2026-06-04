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
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="bg-brand-deeper pt-24 pb-12 border-t border-brand-border relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-indigo/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
                    
                    {/* Brand & Newsletter */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 flex items-center justify-center relative">
                                <img 
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-icon.png`} 
                                    alt="GemSphere" 
                                    className="w-full h-full object-contain" 
                                />
                            </div>
                            <span className="text-3xl font-black font-display tracking-tight text-text-primary">
                                Gem<span className="text-blue-600 dark:text-blue-400">Sphere</span>
                            </span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-sm">
                            {t('footer.description', 'Engineering Intelligent Digital Enterprises. The unified platform for global commerce, supply chain, and AI operations.')}
                        </p>
                        
                        <div className="mb-8">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">{t('footer.subscribe', 'Subscribe to Insights')}</h4>
                            <div className="flex gap-2">
                                <input 
                                    type="email" 
                                    placeholder={t('footer.subscribePlaceholder', 'Enter your email')} 
                                    className="glass-subtle border-brand-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-brand-cyan w-full transition-colors"
                                />
                                <button className="bg-brand-cyan text-[#0f172a] px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
                                    {t('footer.subscribeButton', 'Subscribe')}
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {/* LinkedIn */}
                            <LocalizedLink href="https://www.linkedin.com/company/gem-sphere-ai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:shadow-[0_0_15px_rgba(0,119,181,0.4)] transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </LocalizedLink>
                            {/* X (Twitter) */}
                            <LocalizedLink href="https://x.com/GemSphereAI" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </LocalizedLink>
                            {/* Facebook */}
                            <LocalizedLink href="https://www.facebook.com/people/GemSphere-AI/61581897367281/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </LocalizedLink>
                            {/* Instagram */}
                            <LocalizedLink href="https://www.instagram.com/gemsphereai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e1306c]/10 border border-[#e1306c]/30 text-[#e1306c] hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:to-[#ee2a7b] hover:text-white hover:border-[#ee2a7b] hover:shadow-[0_0_15px_rgba(238,42,123,0.4)] transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </LocalizedLink>
                            {/* Blog (Blogger) */}
                            <LocalizedLink href="https://gemsphereai.blogspot.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff5722] hover:bg-[#ff5722] hover:text-white hover:border-[#ff5722] hover:shadow-[0_0_15px_rgba(255,87,34,0.4)] transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.21 0H3.79C1.7 0 0 1.7 0 3.79v16.42C0 22.3 1.7 24 3.79 24h16.42c2.09 0 3.79-1.7 3.79-3.79V3.79C24 1.7 22.3 0 20.21 0zM17.41 15.65c0 1.48-1.2 2.68-2.68 2.68H9.27c-1.48 0-2.68-1.2-2.68-2.68v-3.25c0-1.48 1.2-2.68 2.68-2.68h5.46c1.48 0 2.68 1.2 2.68 2.68v3.25zm0-7.3c0 1.48-1.2 2.68-2.68 2.68H9.27c-1.48 0-2.68-1.2-2.68-2.68V6.15c0-1.48 1.2-2.68 2.68-2.68h5.46c1.48 0 2.68 1.2 2.68 2.68v2.2z"/></svg>
                            </LocalizedLink>
                        </div>
                    </div>

                    {/* Platform Columns */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-text-primary mb-6">{t('nav.platform', 'Platform')}</h4>
                        <ul className="space-y-4">
                            {PRODUCT_ECOSYSTEM.categories.slice(0, 5).map((cat, i) => (
                                <li key={i}>
                                    <LocalizedLink href={`/products/${cat.id}`} className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">
                                        {cat.name}
                                    </LocalizedLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-text-primary mb-6">{t('nav.solutions', 'Solutions')}</h4>
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
                        <h4 className="text-sm font-bold text-text-primary mb-6">{t('nav.about', 'Company')}</h4>
                        <ul className="space-y-4">
                            <li><LocalizedLink href="/about" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">{t('nav.about', 'About Us')}</LocalizedLink></li>
                            <li><LocalizedLink href="/careers" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">{t('nav.careers', 'Careers')}</LocalizedLink></li>
                            <li><LocalizedLink href="/contact" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">{t('nav.contact', 'Contact')}</LocalizedLink></li>
                            <li><LocalizedLink href="/blog" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">{t('nav.blog', 'Blog')}</LocalizedLink></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-text-primary mb-6">{t('footer.getInTouch', 'Get in Touch')}</h4>
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
                        <LocalizedLink href="/privacy" className="hover:text-brand-cyan transition-colors">{t('footer.privacyPolicy', 'Privacy Policy')}</LocalizedLink>
                        <LocalizedLink href="/cookie-policy" className="hover:text-brand-cyan transition-colors">{t('footer.cookiePolicy', 'Cookie Policy')}</LocalizedLink>
                        <LocalizedLink href="/terms" className="hover:text-brand-cyan transition-colors">{t('footer.termsConditions', 'Terms of Service')}</LocalizedLink>
                        <LocalizedLink href="/security" className="hover:text-brand-cyan transition-colors">{t('nav.security', 'Security')}</LocalizedLink>
                    </div>
                </div>
                
                <div className="mt-8 text-center text-xs text-text-muted">
                    {t('footer.copyright', '© 2026 GemSphere Technologies Private Limited. All rights reserved.', { year: 2026 })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
