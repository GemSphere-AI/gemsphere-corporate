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
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Cpu, 
  ShieldCheck, 
  HardDrive, 
  Sparkles,
  ExternalLink,
  Store,
  Truck,
  UtensilsCrossed,
  Users
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import AppDownloadModal from '../components/AppDownloadModal';
import { SITE_CONFIG } from '../config/siteConfig';

const CATEGORY_ICONS = {
  'All': Layers,
  'Retail & Commerce': Store,
  'CRM & Enterprise Sales': Users,
  'Hospitality & Dining': UtensilsCrossed,
  'Documents & Workflow': HardDrive,
  'Utilities & Field Operations': Smartphone,
  'Strategy & Logic': Sparkles,
  'Casual & Multiplayer': Sparkles
};

/** Small helper component: renders app.icon with fallback to Smartphone on error */
function AppIcon({ app }) {
  const [failed, setFailed] = useState(false);

  if (!app.icon || failed) {
    return <Smartphone size={28} />;
  }

  return (
    <img
      src={app.icon}
      alt={app.appName}
      className="w-full h-full object-cover rounded-xl"
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

export default function AppsView() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAppForModal, setSelectedAppForModal] = useState(null);

  const categories = ['All', ...Array.from(new Set(SITE_CONFIG.apps.map((app) => app.category)))];

  const filteredApps = selectedCategory === 'All'
    ? SITE_CONFIG.apps
    : SITE_CONFIG.apps.filter(app => app.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-indigo/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 max-w-7xl mb-16 text-center">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-brand-cyan text-xs font-bold uppercase tracking-widest mb-6">
            <Smartphone size={14} /> GemSphere Device & Mobile Suite
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6">
            Enterprise Frontline Apps, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-teal-400 to-brand-indigo">
              Engineered for Real-World Workflows
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base md:text-lg text-text-secondary leading-relaxed mb-10">
            Native, offline-first Android and tablet client applications designed for retail counters, industrial warehouse barcode scanners, restaurant kitchen displays, and mobile sales teams.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat] || Layers;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-brand-cyan to-teal-400 text-brand-dark shadow-[0_4px_20px_rgba(6,182,212,0.35)] scale-105'
                      : 'glass-card border border-brand-border text-text-secondary hover:text-text-primary hover:border-brand-cyan/40'
                  }`}
                >
                  <Icon size={15} />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Official Google Play Developer Hub Link */}
          <div className="mt-8 flex justify-center">
            <a
              href={SITE_CONFIG.brand.googlePlayDevUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-card border border-brand-cyan/40 hover:border-brand-cyan hover:bg-brand-cyan/10 transition-all duration-300 text-xs sm:text-sm font-bold text-text-primary no-underline group shadow-md"
            >
              <HardDrive size={16} className="text-brand-cyan" />
              <span>Official GemSphere Google Play Developer Profile</span>
              <ExternalLink size={13} className="text-brand-cyan group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* APPS GRID */}
      <section className="container mx-auto px-6 max-w-7xl mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredApps.map((app, index) => (
            <ScrollReveal key={app.id} direction="up" delay={index * 0.1}>
              <div className="h-full glass-card p-6 sm:p-8 rounded-[28px] border border-brand-border hover:border-brand-cyan/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden shadow-lg">
                {/* Background glow hover effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[80px] group-hover:bg-brand-cyan/15 transition-all -z-10" />

                <div>
                  {/* Top Bar: Icon, Name, Category */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shadow-md shrink-0 group-hover:scale-105 transition-transform overflow-hidden p-1.5">
                        <AppIcon app={app} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                            {app.category}
                          </span>
                          <span className="text-xs text-text-muted">{app.version}</span>
                        </div>
                        <h3 className="text-xl font-extrabold text-text-primary group-hover:text-brand-cyan transition-colors">
                          {app.appName}
                        </h3>
                      </div>
                    </div>

                    {/* Rating pill */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl glass-subtle text-xs shrink-0">
                      <span className="text-amber-400 font-bold">★ {app.ratingValue}</span>
                      <span className="text-text-muted text-[11px]">({app.ratingCount})</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6 font-medium">
                    {app.tagline}
                  </p>

                  {/* Key Operational Features */}
                  <div className="space-y-2.5 mb-6">
                    {app.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <CheckCircle2 size={14} className="text-brand-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hardware compatibility note */}
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 mb-6 text-xs flex items-center gap-2">
                    <Cpu size={14} className="text-brand-cyan shrink-0" />
                    <span className="text-text-muted text-[11px]">
                      <strong className="text-text-primary">Supported Hardware:</strong> {app.supportedDevices}
                    </span>
                  </div>
                </div>

                {/* Actions Grid */}
                <div className="pt-4 border-t border-brand-border/60 flex flex-col sm:flex-row items-center gap-3">
                  {/* Google Play link or modal trigger */}
                  <a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-50 dark:bg-brand-cyan/15 hover:bg-cyan-600 dark:hover:bg-brand-cyan text-cyan-800 dark:text-brand-cyan hover:text-white dark:hover:text-brand-dark font-bold text-xs transition-all duration-300 no-underline cursor-pointer group shadow-sm border border-cyan-300 dark:border-brand-cyan/30"
                  >
                    <HardDrive size={15} />
                    <span>Google Play Store</span>
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Direct APK Sideload & Enterprise Download Modal */}
                  <button
                    onClick={() => setSelectedAppForModal(app)}
                    className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-pure-white font-bold text-xs transition-all duration-300 cursor-pointer border border-slate-700 shadow-sm"
                  >
                    <Download size={15} className="text-teal-400" />
                    <span>Enterprise APK & Setup</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* HARDWARE ECOSYSTEM BANNER */}
      <section className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal direction="up">
          <div className="glass-card p-8 md:p-12 rounded-[32px] border border-brand-border relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan text-xs font-bold mb-4">
                <ShieldCheck size={14} /> Enterprise Device Certification
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-3">
                Deploying Across 50+ Stores or Warehouses?
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                GemSphere provides centralized Mobile Device Management (MDM) enrollment, remote kiosk lockdown, pre-configured device staging, and direct thermal printer driver integration for enterprise fleet rollouts.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={SITE_CONFIG.contact.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3.5 px-6 text-sm font-bold no-underline flex items-center gap-2"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive Download / Sideload Modal */}
      <AppDownloadModal
        app={selectedAppForModal}
        isOpen={Boolean(selectedAppForModal)}
        onClose={() => setSelectedAppForModal(null)}
      />
    </div>
  );
}
