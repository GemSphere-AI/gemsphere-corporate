/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import LocalizedLink from '../components/LocalizedLink';
import { Rocket, MapPin, Mail, Phone, ShieldCheck, Award, Building2 } from 'lucide-react';
import { PRODUCT_ECOSYSTEM } from '../data/productEcosystem';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-hot-toast';
import { submitLead } from '../utils/leadCapture';
import { SITE_CONFIG } from '../config/siteConfig';
import { trackPlayStoreClick } from '../utils/analytics';

const Footer = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        try {
            const res = await submitLead({ email, source: 'footer-subscribe' });
            if (res.success) {
                toast.success(t('footer.subscribeSuccess', 'Subscribed successfully!'));
                setEmail('');
            } else {
                toast.error(res.error || t('footer.subscribeError', 'Failed to subscribe.'));
            }
        } catch (err) {
            toast.error(t('footer.subscribeError', 'Failed to subscribe.'));
        } finally {
            setLoading(false);
        }
    };

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
                                <Image 
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo-icon.png`} 
                                    alt="GemSphere" 
                                    width={48}
                                    height={48}
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
                            <form onSubmit={handleSubscribe} className="flex gap-2">
                                <input 
                                    type="email" 
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('footer.subscribePlaceholder', 'Enter your email')} 
                                    aria-label={t('footer.subscribePlaceholder', 'Enter your email to subscribe to GemSphere insights')}
                                    className="glass-subtle border-brand-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-brand-cyan w-full transition-colors"
                                />
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    className="bg-brand-cyan text-[#0f172a] px-4 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                                >
                                    {loading ? '...' : t('footer.subscribeButton', 'Subscribe')}
                                </button>
                            </form>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-6">
                            {/* LinkedIn */}
                            <a href={SITE_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="GemSphere on LinkedIn" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0077b5]/10 border border-[#0077b5]/30 text-[#0077b5] hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] hover:shadow-[0_0_15px_rgba(0,119,181,0.4)] transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            {/* X (Twitter) */}
                            <a href={SITE_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="GemSphere on X" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                            </a>
                            {/* Facebook */}
                            <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="GemSphere on Facebook" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1877f2]/10 border border-[#1877f2]/30 text-[#1877f2] hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            {/* Instagram */}
                            <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="GemSphere on Instagram" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e1306c]/10 border border-[#e1306c]/30 text-[#e1306c] hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:to-[#ee2a7b] hover:text-white hover:border-[#ee2a7b] hover:shadow-[0_0_15px_rgba(238,42,123,0.4)] transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            {/* GitHub */}
                            <a href={SITE_CONFIG.social.github} target="_blank" rel="noopener noreferrer" aria-label="GemSphere on GitHub" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                            </a>
                            {/* YouTube */}
                            <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="GemSphere on YouTube" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ff0000]/10 border border-[#ff0000]/30 text-[#ff0000] hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                            </a>
                            {/* Blog (Blogger) */}
                            <a href={SITE_CONFIG.social.blogger} target="_blank" rel="noopener noreferrer" aria-label="GemSphere Blog" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ff5722]/10 border border-[#ff5722]/30 text-[#ff5722] hover:bg-[#ff5722] hover:text-white hover:border-[#ff5722] hover:shadow-[0_0_15px_rgba(255,87,34,0.4)] transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.21 0H3.79C1.7 0 0 1.7 0 3.79v16.42C0 22.3 1.7 24 3.79 24h16.42c2.09 0 3.79-1.7 3.79-3.79V3.79C24 1.7 22.3 0 20.21 0zM17.41 15.65c0 1.48-1.2 2.68-2.68 2.68H9.27c-1.48 0-2.68-1.2-2.68-2.68v-3.25c0-1.48 1.2-2.68 2.68-2.68h5.46c1.48 0 2.68 1.2 2.68 2.68v3.25zm0-7.3c0 1.48-1.2 2.68-2.68 2.68H9.27c-1.48 0-2.68-1.2-2.68-2.68V6.15c0-1.48 1.2-2.68 2.68-2.68h5.46c1.48 0 2.68 1.2 2.68 2.68v2.2z"/></svg>
                            </a>
                        </div>

                        {/* Official Google Play Store Badge */}
                        <div>
                            <a 
                                href={SITE_CONFIG.mobileApp.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackPlayStoreClick({ moduleName: 'Footer' })}
                                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl glass-card border border-brand-border hover:border-brand-cyan/50 hover:bg-brand-cyan/10 transition-all duration-300 text-text-primary group"
                            >
                                <svg className="w-5 h-5 text-brand-cyan shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.368-.383-.61-.951-.61-1.686V3.5c0-.735.242-1.303.609-1.686zm11.235 11.238l2.583 2.583-11.458 6.55 8.875-9.133zm0-2.104L5.969 1.815l11.458 6.55-2.583 2.583zm1.488 1.052l3.434 1.963c.967.553.967 1.453 0 2.006l-3.434 1.963-2.072-2.072 2.072-1.86z"/>
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-semibold text-text-muted leading-none">GET IT ON</div>
                                    <div className="text-xs font-bold text-text-primary group-hover:text-brand-cyan transition-colors">{SITE_CONFIG.mobileApp.storeName}</div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Products Columns */}
                    <div className="lg:col-span-1">
                        <h4 className="text-sm font-bold text-text-primary mb-6">{t('footer.products', 'Products')}</h4>
                        <ul className="space-y-4">
                            <li>
                                <LocalizedLink href="/products/crm-platform" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">
                                    {t('footer.crmPlatform', 'CRM Platform')}
                                </LocalizedLink>
                            </li>
                            <li>
                                <LocalizedLink href="/products/pos-system" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">
                                    {t('footer.posSystem', 'Smart POS System')}
                                </LocalizedLink>
                            </li>
                            <li>
                                <LocalizedLink href="/products/billing-platform" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">
                                    {t('footer.billingPlatform', 'Billing Platform')}
                                </LocalizedLink>
                            </li>
                            <li>
                                <LocalizedLink href="/products/erp-system" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">
                                    {t('footer.erpSystem', 'Ecosystem ERP Core')}
                                </LocalizedLink>
                            </li>
                            <li>
                                <LocalizedLink href="/products/ai-chatbots" className="text-sm text-text-secondary hover:text-brand-cyan transition-colors">
                                    {t('footer.aiChatbots', 'AI Chatbots')}
                                </LocalizedLink>
                            </li>
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
                                <span>
                                    {SITE_CONFIG.contact.address.street},<br/>
                                    {SITE_CONFIG.contact.address.city},<br/>
                                    {SITE_CONFIG.contact.address.state} {SITE_CONFIG.contact.address.postalCode}
                                </span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail size={18} className="text-brand-cyan shrink-0" />
                                <LocalizedLink href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-brand-cyan transition-colors">
                                    {SITE_CONFIG.contact.email}
                                </LocalizedLink>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone size={18} className="text-brand-cyan shrink-0" />
                                <LocalizedLink href={SITE_CONFIG.contact.phoneTel} className="hover:text-brand-cyan transition-colors">
                                    {SITE_CONFIG.contact.phoneDisplay}
                                </LocalizedLink>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Building2 size={18} className="text-brand-cyan shrink-0" />
                                <span className="text-xs text-text-muted">CIN: {SITE_CONFIG.brand.cin}</span>
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
                    {t('footer.copyright', '© {{year}} {{company}}. All rights reserved.', { year: new Date().getFullYear(), company: SITE_CONFIG.brand.legalName })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
