import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
    ArrowRight, Cpu, Globe, Layers, BarChart3, 
    ChevronRight, Zap, Shield, Rocket, Heart, 
    Database, Network, Infinity, Sparkles 
} from 'lucide-react';
import InteractiveGlobe from '../components/InteractiveGlobe';
import ShootingStars from '../components/ShootingStars';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-cyan/10 transition-all group"
        >
            <div className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-brand-cyan" size={32} />
            </div>
            <h3 className="text-2xl font-black mb-4 text-slate-900">{title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
        </motion.div>
    );
};

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

    const springScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-50 text-slate-900 selection:bg-brand-cyan/30 overflow-hidden">
            <Helmet>
                <title>GemSphere One | Engineering the Future of Global Business</title>
                <meta name="description" content="Mission-critical AI solutions, multi-tenant cloud architectures, and global enterprise intelligence platforms." />
            </Helmet>

            {/* Cinematic 3D Background */}
            <motion.div 
                style={{ y: backgroundY }}
                className="fixed inset-0 z-0 pointer-events-none"
            >
                <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-brand-indigo/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-brand-cyan/10 rounded-full blur-[180px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </motion.div>

            <div className="relative z-10">
                {/* HERO SECTION */}
                <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-visible">
                    {/* The Moving Globe - Absolute Centered Background */}
                    <div className="absolute inset-0 z-0 opacity-80">
                        <InteractiveGlobe />
                    </div>

                    <ShootingStars />

                    <motion.div 
                        style={{ opacity, scale }}
                        className="max-w-6xl mx-auto text-center relative z-10"
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/5 border border-brand-cyan/10 text-brand-cyan font-black text-sm tracking-[3px] uppercase mb-12 shadow-sm"
                        >
                            <Sparkles size={16} /> The Intelligence Layer
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-none text-slate-900"
                        >
                            Global <br /> <span className="text-brand-cyan">Orchestration.</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-3xl text-slate-500 mb-16 max-w-4xl mx-auto font-medium leading-tight"
                        >
                            We orchestrate the world's most complex supply chains with AI-driven precision, 
                            military-grade security, and infinite scalability.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:grow-0 sm:flex-row gap-6 justify-center"
                        >
                            <button 
                                onClick={() => window.location.href = '/login'}
                                className="group px-10 py-5 bg-brand-cyan text-white font-black text-xl rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-cyan/40 flex items-center gap-3"
                            >
                                Enter the Nexus <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button 
                                onClick={() => window.location.href = '/register'}
                                className="px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 font-black text-xl rounded-2xl hover:bg-slate-50 transition-all"
                            >
                                Join Ecosystem
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30"
                    >
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                            <div className="w-1 h-2 bg-white rounded-full" />
                        </div>
                    </motion.div>
                </section>

                {/* LIVE STATS TICKER */}
                <section className="py-20 bg-white border-y border-slate-100 overflow-hidden relative">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { label: "Global Transactions", val: "$4.2B+", sub: "Annual Flow" },
                                { label: "Active Nodes", val: "12,840", sub: "177 Countries" },
                                { label: "AI Latency", val: "< 0.8ms", sub: "Real-time Edge" },
                                { label: "Carbon Reduction", val: "22%", sub: "Net Impact" }
                            ].map((stat, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center md:text-left"
                                >
                                    <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">{stat.val}</div>
                                    <div className="text-sm font-black text-brand-cyan uppercase tracking-widest mb-1">{stat.label}</div>
                                    <div className="text-xs font-bold text-slate-400">{stat.sub}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURE GRID */}
                <section className="py-32 px-6 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">Core Competencies.</h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto">The engineering pillars that power GemSphere's global dominance.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FeatureCard 
                                icon={Cpu} 
                                title="AI Sourcing Nexus" 
                                desc="Our proprietary neural network optimizes supply routes in sub-millisecond intervals, reacting to global market shifts instantly." 
                                delay={0.1}
                            />
                            <FeatureCard 
                                icon={Shield} 
                                title="Sentinel Governance" 
                                desc="Military-grade data isolation protocols for multi-tenant architectures, ensuring absolute data sovereignty for every enterprise." 
                                delay={0.2}
                            />
                            <FeatureCard 
                                icon={Layers} 
                                title="Fluid Inventory" 
                                desc="Atomic-level synchronization across 177+ countries, providing a single source of truth for global franchise networks." 
                                delay={0.3}
                            />
                            <FeatureCard 
                                icon={BarChart3} 
                                title="Hyper-Ledger Billing" 
                                desc="Automated high-volume reconciliation engines that settle millions of transactions with 99.999% precision." 
                                delay={0.4}
                            />
                            <FeatureCard 
                                icon={Zap} 
                                title="Neural Analytics" 
                                desc="Predictive business intelligence that identifies market opportunities before they manifest in conventional data." 
                                delay={0.5}
                            />
                            <FeatureCard 
                                icon={Database} 
                                title="Compliance Shield" 
                                desc="Automated regulatory adaptation that ensures your business stays compliant with local laws in every jurisdiction." 
                                delay={0.6}
                            />
                        </div>
                    </div>
                </section>

                {/* SUSTAINABLE FUTURE */}
                <section className="py-32 px-6 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <h2 className="text-6xl font-black mb-12 text-slate-900 leading-none">A Vision for the <br /> <span className="text-brand-cyan">Whole World.</span></h2>
                                <div className="space-y-12">
                                    {[
                                        { title: "Waste Reduction", desc: "Using AI to eliminate excess production, saving millions of tons of waste annually." },
                                        { title: "Eco-Logistics", desc: "Smarter routing leads to a 40% reduction in logistics-related carbon emissions." },
                                        { title: "Global Access", desc: "Providing enterprise-grade tools to small businesses in emerging economies." }
                                    ].map((impact, i) => (
                                        <div key={i} className="flex gap-6">
                                            <div className="w-2 h-12 bg-brand-cyan rounded-full" />
                                            <div>
                                                <h4 className="text-2xl font-black text-slate-900 mb-2">{impact.title}</h4>
                                                <p className="text-lg text-slate-500 font-medium">{impact.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2 }}
                                className="relative aspect-square"
                            >
                                <div className="absolute inset-0 bg-brand-cyan/10 rounded-full blur-[100px] animate-pulse" />
                                <div className="relative z-10 w-full h-full bg-white border border-slate-100 shadow-2xl rounded-[60px] flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-64 h-64 mx-auto mb-8 opacity-60">
                                            <InteractiveGlobe />
                                        </div>
                                        <h3 className="text-4xl font-black mb-2 text-slate-900">Sustainable</h3>
                                        <p className="text-xl text-slate-400 uppercase tracking-[5px] font-bold">Future Engineering</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-32 px-6 text-center bg-white">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 max-w-4xl mx-auto p-16 md:p-24 rounded-[64px] shadow-2xl text-white"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to evolve?</h2>
                        <p className="text-xl md:text-2xl text-white/60 mb-12">
                            Join the world's most advanced businesses in the GemSphere ecosystem.
                        </p>
                        <button 
                            onClick={() => window.location.href = '/login'}
                            className="btn-primary px-16 py-6 text-2xl"
                        >
                            Request Core Access
                        </button>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Home;
