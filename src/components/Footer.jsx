import React from 'react';
import { Rocket, Share2, Globe, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const siloData = [
        {
            title: 'Services',
            links: [
                { name: 'AI & Machine Learning', href: '/services/ai-solutions' },
                { name: 'Enterprise Software', href: '/services/software-development' },
                { name: 'SaaS Product Development', href: '/services/saas-products' },
                { name: 'CRM & ERP Solutions', href: '/services/crm-solutions' },
                { name: 'UI/UX Design Systems', href: '/services/ui-ux-design' },
            ]
        },
        {
            title: 'Industries',
            links: [
                { name: 'Healthcare', href: '/industries/healthcare' },
                { name: 'FinTech', href: '/industries/fintech' },
                { name: 'E-commerce', href: '/industries/ecommerce' },
                { name: 'Logistics & Supply Chain', href: '/industries/logistics' },
                { name: 'Retail Tech', href: '/industries/retail' },
            ]
        },
        {
            title: 'Global Presence',
            links: [
                { name: 'Emerging Africa', href: '/global/kenya' },
                { name: 'Western Europe', href: '/global/germany' },
                { name: 'Americas Hub', href: '/global/usa' },
                { name: 'Asia Pacific', href: '/global/singapore' },
                { name: 'Middle East', href: '/global/uae' },
            ]
        }
    ];

    return (
        <footer className="bg-brand-dark pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] -z-10" />
            
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
                    {/* Brand Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center">
                                <Rocket className="text-brand-dark fill-current" size={18} />
                            </div>
                            <span className="text-xl font-black tracking-tighter">GemSphere</span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                            GemSphere Technologies is a global leader in AI-driven enterprise solutions. We help organizations scale by engineering the future of business intelligence.
                        </p>
                        <div className="flex gap-4">
                            {[Share2, Globe, MessageSquare].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-cyan hover:text-brand-dark transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Silo Links */}
                    {siloData.map((silo, i) => (
                        <div key={i}>
                            <h4 className="text-sm font-black uppercase tracking-widest mb-6">{silo.title}</h4>
                            <ul className="space-y-4">
                                {silo.links.map((link, j) => (
                                    <li key={j}>
                                        <a href={link.href} className="text-sm text-white/40 hover:text-brand-cyan transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-white/30 text-xs font-medium">
                        © 2026 GemSphere Technologies Private Limited. All rights reserved.
                    </div>
                    <div className="flex gap-8 text-xs font-bold text-white/50">
                        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                        <a href="/terms" className="hover:text-white">Terms of Service</a>
                        <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
