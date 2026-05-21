"use client";

import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, Key, Database } from 'lucide-react';

export default function TrustBadges() {
    return (
        <div className="py-6 border-y border-brand-border bg-brand-dark/50 backdrop-blur-sm relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="text-brand-cyan" size={24} />
                    <span className="text-sm font-bold tracking-widest text-text-secondary uppercase">GDPR Aligned</span>
                </div>
                <div className="flex items-center gap-2">
                    <Lock className="text-brand-cyan" size={24} />
                    <span className="text-sm font-bold tracking-widest text-text-secondary uppercase">HTTPS Secured</span>
                </div>
                <div className="flex items-center gap-2">
                    <Key className="text-brand-cyan" size={24} />
                    <span className="text-sm font-bold tracking-widest text-text-secondary uppercase">RBAC & MFA</span>
                </div>
                <div className="flex items-center gap-2">
                    <Database className="text-brand-cyan" size={24} />
                    <span className="text-sm font-bold tracking-widest text-text-secondary uppercase">Encrypted Storage</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-brand-cyan" size={24} />
                    <span className="text-sm font-bold tracking-widest text-text-secondary uppercase">Audit Logging</span>
                </div>
            </div>
        </div>
    );
}
