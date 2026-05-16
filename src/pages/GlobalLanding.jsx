import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Globe2, Building, Phone, ArrowRight } from 'lucide-react';
import { COUNTRIES } from '../data/countries';
import { TRANSLATIONS } from '../data/translations';
import BookingForm from '../components/BookingForm';

const GlobalLanding = () => {
    const { countrySlug } = useParams();
    
    // Find country in database
    const country = COUNTRIES.find(c => c.slug === countrySlug);
    
    // Fallback if country not found (keep SEO safety)
    if (!country) return <Navigate to="/" replace />;

    // For now, use English (en) as core locale unless we have a specific match
    const strings = TRANSLATIONS.en; 

    // India HQ as global contact point (User Request)
    const contactInfo = {
        office: 'HSR Layout, Bangalore, India',
        phone: '+91 80 XXXX XXXX',
        email: 'global-sales@gemsphere.ai'
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <Helmet>
                <title>{strings.globalTitle} {country.name} | GemSphere Technologies</title>
                <meta name="description" content={`${strings.globalSubtitle} ${country.name}. ${strings.globalDescription}`} />
                <link rel="canonical" href={`https://gemsphere.ai/global/${country.slug}`} />
            </Helmet>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 animate-fade-in">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-black uppercase mb-6 w-fit">
                            <Globe2 size={14} /> Global Solutions: {country.region}
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
                            {strings.globalTitle} <span className="text-gradient">{country.name}</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-12">
                            {strings.globalSubtitle} {country.name}. {strings.globalDescription}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="glass-card p-6 border-white/5 hover:border-brand-cyan/20 transition-all">
                            <div className="w-10 h-10 rounded-lg bg-brand-indigo/20 flex items-center justify-center text-brand-cyan mb-4">
                                <Building size={20} />
                            </div>
                            <h4 className="font-black mb-1">{strings.officeTitle}</h4>
                            <p className="text-sm text-white/40 font-medium">{contactInfo.office}</p>
                        </div>
                        <div className="glass-card p-6 border-white/5 hover:border-brand-cyan/20 transition-all">
                            <div className="w-10 h-10 rounded-lg bg-brand-indigo/20 flex items-center justify-center text-brand-cyan mb-4">
                                <Phone size={20} />
                            </div>
                            <h4 className="font-black mb-1">{strings.supportTitle}</h4>
                            <p className="text-sm text-white/40 font-medium">{contactInfo.phone}</p>
                        </div>
                    </div>

                    <div className="p-8 glass-card border-brand-indigo/10 bg-brand-indigo/5 max-w-lg">
                        <p className="text-sm text-white/50 font-bold mb-4">
                            Looking for localized services in {country.name}? Our global implementation team features experts who understand the unique compliance and technical needs of the {country.region} market.
                        </p>
                        <a href="/services" className="text-brand-cyan font-black hover:underline flex items-center gap-2">
                            View All Enterprise Services <ArrowRight size={14} />
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32">
                        <BookingForm countryContext={country.name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalLanding;
