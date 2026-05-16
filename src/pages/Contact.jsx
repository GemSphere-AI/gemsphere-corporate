import React from 'react';
import { Helmet } from 'react-helmet-async';
import BookingForm from '../components/BookingForm';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <Helmet>
                <title>Contact Us | GemSphere Technologies</title>
                <meta name="description" content="Reach out to GemSphere Technologies for a free demo or technical consultation on AI and enterprise software solutions." />
            </Helmet>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
                            Let's Build the <br />
                            <span className="text-gradient">Next Big Thing</span>
                        </h1>
                        <p className="text-xl text-white/50 leading-relaxed max-w-lg">
                            Whether you're looking for a free demo of our platform or need a deep technical consultation, our experts are ready to assist you.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {[
                            { icon: <Mail />, title: 'Email Us', desc: 'General queries: info@gemsphere.ai', sub: 'Technical solutions: solutions@gemsphere.ai' },
                            { icon: <Phone />, title: 'Call Us', desc: 'Regional Support: +971 4 XXX XXXX', sub: 'HQ Operations: +91 80 XXXX XXXX' },
                            { icon: <MapPin />, title: 'Visit Us', desc: 'Global Offices in Dubai and Bangalore', sub: 'Remote-first engineering team across the globe' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start group">
                                <div className="w-12 h-12 rounded-xl bg-brand-indigo/20 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-black text-lg mb-1">{item.title}</h4>
                                    <p className="text-white/40 text-sm font-medium">{item.desc}</p>
                                    <p className="text-white/40 text-sm font-medium">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 glass-card border-brand-indigo/10 bg-brand-indigo/5">
                        <div className="flex items-center gap-2 text-brand-cyan font-black mb-4 uppercase tracking-widest text-xs">
                            <MessageCircle size={16} /> Instant Support
                        </div>
                        <h4 className="font-black mb-2 italic">Looking for a quick chat?</h4>
                        <p className="text-sm text-white/40 font-bold mb-6">Our dedicated support channel is available for existing platform clients.</p>
                        <a href="/login" className="text-sm font-black text-white hover:text-brand-cyan transition-colors underline underline-offset-4">Log in to Support Portal</a>
                    </div>
                </div>

                <div>
                    <BookingForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;
