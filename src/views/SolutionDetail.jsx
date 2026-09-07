/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React from 'react';
import { Rocket, CheckCircle2, ShieldCheck, ArrowRight, Layers, HelpCircle, ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import LocalizedLink from '../components/LocalizedLink';

const SolutionDetail = ({ solution }) => {
  if (!solution) return null;

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pb-16">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[140px] -z-10" />

        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="mb-6">
              <LocalizedLink
                href="/solutions"
                className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-brand-cyan transition-colors"
              >
                <ArrowLeft size={16} /> Back to Enterprise Solutions
              </LocalizedLink>
            </div>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-subtle text-brand-cyan text-xs font-bold uppercase tracking-widest mb-6">
                <Rocket size={14} />
                {solution.badge}
              </div>
              <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-text-primary mb-6 leading-tight">
                {solution.headline}
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed font-medium mb-10 max-w-3xl">
                {solution.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <LocalizedLink
                  href="/contact"
                  className="px-8 py-4 rounded-xl bg-brand-cyan text-black font-bold text-base hover:bg-brand-cyan/90 transition-all flex items-center gap-2 shadow-lg shadow-brand-cyan/20"
                >
                  Schedule Solution Architecture Call <ArrowRight size={18} />
                </LocalizedLink>
                <LocalizedLink
                  href="/roi-calculator"
                  className="px-8 py-4 rounded-xl glass-subtle text-text-primary font-bold text-base hover:border-brand-cyan/50 transition-all"
                >
                  Calculate Enterprise ROI
                </LocalizedLink>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CHALLENGE VS ARCHITECTURE */}
      <section className="py-16 border-y border-brand-border/60 bg-brand-card/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-red-500/20 bg-red-950/10 flex flex-col justify-between">
              <div>
                <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3">The Architectural Problem</div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">Enterprise Bottlenecks We Eliminate</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {solution.challenge}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-brand-bg/60 border border-brand-border text-xs text-text-tertiary">
                Eliminates multi-vendor fragmentation, unpredictable SaaS seat price hikes, and proprietary database lock-in.
              </div>
            </div>

            <div className="glass-card p-8 md:p-10 rounded-2xl border border-brand-cyan/30 bg-brand-cyan/5 flex flex-col justify-between">
              <div>
                <div className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-3">The GemSphere Architecture</div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">How We Solve It at Scale</h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {solution.architecture}
                </p>
              </div>
              <div className="space-y-3">
                {solution.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-text-primary">
                    <CheckCircle2 size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPOSABLE MODULES */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-subtle text-text-tertiary text-xs font-bold uppercase tracking-wider mb-4">
              <Layers size={14} className="text-brand-cyan" /> Composable Building Blocks
            </div>
            <h2 className="text-3xl font-black font-display text-text-primary tracking-tight mb-4">
              Architectural Modules Included in this Solution
            </h2>
            <p className="text-text-secondary">
              Deploy as a unified turnkey platform or integrate individually into your existing enterprise infrastructure via clean REST and GraphQL APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.modules.map((mod, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-brand-border/60 hover:border-brand-cyan/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-4 font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{mod.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">{mod.desc}</p>
                </div>
                <div className="pt-4 border-t border-brand-border/40 text-xs text-brand-cyan flex items-center gap-1 font-medium">
                  <ShieldCheck size={14} /> Production Ready
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      {solution.faqs && solution.faqs.length > 0 && (
        <section className="py-20 border-t border-brand-border/60 bg-brand-card/20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-subtle text-brand-cyan text-xs font-bold uppercase tracking-wider mb-4">
                <HelpCircle size={14} /> Frequently Asked Questions
              </div>
              <h2 className="text-3xl font-black font-display text-text-primary tracking-tight">
                Solution Engineering & Deployment FAQs
              </h2>
            </div>

            <div className="space-y-6">
              {solution.faqs.map((faq, idx) => (
                <div key={idx} className="glass-card p-8 rounded-2xl border border-brand-border">
                  <h3 className="text-lg font-bold text-text-primary mb-3">{faq.q}</h3>
                  <p className="text-text-secondary leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM CTA */}
      <section className="pt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="glass-card p-12 rounded-3xl border border-brand-cyan/40 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/15 rounded-full blur-[100px] -z-10" />
            <h2 className="text-3xl md:text-4xl font-black font-display text-text-primary tracking-tight mb-4">
              Ready to Deploy {solution.badge}?
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              Speak directly with our senior enterprise software architects. Receive a tailored deployment timeline and custom architectural blueprint.
            </p>
            <LocalizedLink
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan text-black font-bold text-base hover:bg-brand-cyan/90 transition-all shadow-xl shadow-brand-cyan/25"
            >
              Talk to Solution Engineering Pod <ArrowRight size={18} />
            </LocalizedLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail;
