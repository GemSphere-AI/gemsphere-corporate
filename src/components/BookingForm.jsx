import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Building2, Globe2, MessageSquare } from 'lucide-react';
import { toast } from 'react-hot-toast';

const BookingForm = ({ countryContext = '' }) => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        region: countryContext || 'US',
        interestedService: 'AI & ML Solutions',
        message: countryContext ? `Interested in solutions specifically for ${countryContext}.` : ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/api/public/leads/demo-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
                toast.success('Demo request received!');
            }
        } catch (error) {
            toast.error('Failed to submit request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="glass-card p-12 text-center animate-fade-in">
                <div className="w-20 h-20 bg-brand-cyan/20 text-brand-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-black mb-4">Request Received</h3>
                <p className="text-white/60 mb-8 max-w-sm mx-auto">
                    Thank you for your interest in GemSphere. Our expert team will reach out to you within 24 hours to schedule your demo.
                </p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="text-brand-cyan font-bold hover:underline"
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-brand-cyan/20 transition-all" />
            
            <div className="mb-8">
                <h3 className="text-3xl font-black mb-2">Book a Free Demo</h3>
                <p className="text-white/50 text-sm font-medium">Fill in your details and we'll reach out to schedule a deep-dive session.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-white/40">Full Name</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"><User size={18} /></span>
                            <input 
                                required name="name" type="text" placeholder="John Doe"
                                value={formData.name} onChange={handleChange}
                                className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-white/40">Work Email</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"><Mail size={18} /></span>
                            <input 
                                required name="email" type="email" placeholder="john@company.com"
                                value={formData.email} onChange={handleChange}
                                className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-white/40">Company Name</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"><Building2 size={18} /></span>
                            <input 
                                required name="company" type="text" placeholder="Gemsphere Inc."
                                value={formData.company} onChange={handleChange}
                                className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-white/40">Region</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"><Globe2 size={18} /></span>
                            <select 
                                name="region"
                                value={formData.region} onChange={handleChange}
                                className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-cyan transition-all text-sm appearance-none cursor-pointer"
                            >
                                <option value="US">USA & Canada</option>
                                <option value="UK">UK & Europe</option>
                                <option value="UAE">UAE & Middle East</option>
                                <option value="IN">India</option>
                                <option value="Global">Other Regions</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-white/40">Interested In</label>
                    <select 
                        name="interestedService"
                        value={formData.interestedService} onChange={handleChange}
                        className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brand-cyan transition-all text-sm"
                    >
                        <option>AI & ML Solutions</option>
                        <option>Enterprise Software Development</option>
                        <option>SaaS Product Engineering</option>
                        <option>CRM & ERP Solutions</option>
                        <option>UI/UX Design Systems</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-wider text-white/40">Message (Optional)</label>
                    <div className="relative">
                        <span className="absolute left-4 top-4 text-white/20"><MessageSquare size={18} /></span>
                        <textarea 
                            name="message" rows="4" placeholder="Tell us about your project or requirements..."
                            value={formData.message} onChange={handleChange}
                            className="w-full bg-brand-dark/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-cyan transition-all text-sm resize-none"
                        ></textarea>
                    </div>
                </div>

                <button 
                    type="submit" disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                >
                    {loading ? 'Processing...' : (
                        <>Send Request <Send size={18} /></>
                    )}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
