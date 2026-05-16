import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Rocket, Target, Users, ShieldCheck, Zap, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <Helmet>
                <title>About Us | GemSphere Technologies</title>
                <meta name="description" content="Learn about the team and vision behind GemSphere Technologies, a global leader in AI and enterprise software engineering." />
            </Helmet>

            {/* Mission Section */}
            <section className="max-w-4xl mx-auto text-center mb-32 animate-slide-up">
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-black uppercase tracking-widest mb-6">
                    Our Mission
                </div>
                <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">
                    Democratizing <span className="text-gradient">Intelligence</span> <br />
                    for the Global Enterprise
                </h1>
                <p className="text-xl text-white/50 leading-relaxed font-medium">
                    GemSphere Technologies was founded with a singular vision: to build high-performance, AI-driven software that empowers organizations to scale without limits. 
                </p>
            </section>

            {/* Values Grid */}
            <section className="mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black mb-4">The Values We Engineer By</h2>
                    <p className="text-white/40 font-bold uppercase tracking-widest text-sm">Integrity. Innovation. Scale.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <Target className="text-brand-cyan" />, title: 'Outcome-Driven', desc: 'We don\'t just build features; we engineer business outcomes that drive real-world impact.' },
                        { icon: <ShieldCheck className="text-brand-cyan" />, title: 'Enterprise Security', desc: 'Mission-critical systems require mission-critical security. It\'s baked into every line of code.' },
                        { icon: <Zap className="text-brand-cyan" />, title: 'High Performance', desc: 'Latency is the enemy of scale. Our architectures are optimized for extreme throughput.' },
                        { icon: <Users className="text-brand-cyan" />, title: 'Global Mindset', desc: 'With offices in Dubai and India, we bridge the gap between regional needs and global scale.' },
                        { icon: <Rocket className="text-brand-cyan" />, title: 'AI-First Approach', desc: 'We believe every modern enterprise should be powered by predictive intelligence.' },
                        { icon: <Award className="text-brand-cyan" />, title: 'Excellence in Craft', desc: 'Clean code, resilient architectures, and stunning UI. We take pride in what we build.' }
                    ].map((value, i) => (
                        <div key={i} className="glass-card p-10 group hover:-translate-y-2 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-brand-indigo/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-black mb-4">{value.title}</h3>
                            <p className="text-sm text-white/50 font-medium leading-relaxed">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="glass-card p-12 md:p-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10" />
                <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to start your journey?</h2>
                <p className="text-white/50 mb-12 max-w-xl mx-auto font-medium">
                    Join the 50+ Enterprises that have transformed their operations with GemSphere Technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/contact" className="btn-primary">Book a Demo</a>
                    <a href="/services" className="btn-secondary">Explore Services</a>
                </div>
            </section>
        </div>
    );
};

export default About;
