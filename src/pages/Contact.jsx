import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Building2, Globe2 } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Contact Global Sales & Support | GemSphere Technologies</title>
                <meta name="description" content="Get in touch with GemSphere Technologies for enterprise software solutions, AI platform access, or global technical support." />
            </Helmet>

            <section className="pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[120px] -z-10" />
                
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        
                        {/* Left Content */}
                        <div className="lg:col-span-6">
                            <ScrollReveal direction="right">
                                <div className="mb-16">
                                    <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight mb-8 text-white leading-tight">
                                        Let's Build the <br />
                                        <span className="text-gradient">Next Big Thing.</span>
                                    </h1>
                                    <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
                                        Whether you're looking for a custom enterprise architecture, a demo of our AI platform, or global technical support — we're here to help.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <div className="space-y-8">
                                {[
                                    { 
                                        icon: Building2, 
                                        title: 'Global Sales', 
                                        desc: 'Talk to an enterprise architect about your needs.', 
                                        action: 'enterprise@gemsphere.ai',
                                        link: 'mailto:enterprise@gemsphere.ai'
                                    },
                                    { 
                                        icon: MessageSquare, 
                                        title: 'Technical Support', 
                                        desc: '24/7 support for existing enterprise platform clients.', 
                                        action: 'Go to Support Portal',
                                        link: '/login'
                                    },
                                    { 
                                        icon: Globe2, 
                                        title: 'Partner Network', 
                                        desc: 'Join our global network of system integrators.', 
                                        action: 'partners@gemsphere.ai',
                                        link: 'mailto:partners@gemsphere.ai'
                                    }
                                ].map((item, i) => (
                                    <ScrollReveal key={i} direction="right" delay={0.2 + (i * 0.1)}>
                                        <div className="flex gap-6 group">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan shrink-0 group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/30 transition-all duration-300">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                                <p className="text-text-secondary mb-3">{item.desc}</p>
                                                <a href={item.link} className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:text-white transition-colors">
                                                    {item.action} <ArrowRight size={16} />
                                                </a>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                            
                            <ScrollReveal direction="up" delay={0.6}>
                                <div className="mt-16 p-8 glass-card rounded-[32px] border-brand-indigo/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/20 rounded-full blur-[40px] pointer-events-none" />
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-brand-indigo/20 flex items-center justify-center text-brand-indigo">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white">Visit our Global HQ</h4>
                                            <p className="text-sm text-brand-indigo font-semibold">Dubai Internet City</p>
                                        </div>
                                    </div>
                                    <p className="text-text-secondary text-sm">
                                        We operate globally with major engineering centers in Dubai (UAE) and Bangalore (India), alongside remote teams across 15+ timezones.
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Right Form */}
                        <div className="lg:col-span-6 relative z-10">
                            <ScrollReveal direction="left" delay={0.3}>
                                <div className="sticky top-32">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-cyan/20 to-brand-indigo/20 rounded-[40px] blur-2xl opacity-50 -z-10" />
                                    <div className="glass-heavy rounded-[32px] border-white/10 p-2 shadow-2xl">
                                        <BookingForm />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
