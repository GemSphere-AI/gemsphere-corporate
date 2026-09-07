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
import { Award, ShieldCheck, CheckCircle2, Linkedin, Github, BookOpen, ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import LocalizedLink from '../components/LocalizedLink';

const AuthorProfile = ({ author }) => {
  if (!author) return null;

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollReveal direction="up">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <LocalizedLink
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-tertiary hover:text-brand-cyan transition-colors"
            >
              <ArrowLeft size={16} /> Back to Insights & Engineering
            </LocalizedLink>
          </div>

          {/* Header Card */}
          <div className="glass-card p-8 md:p-12 rounded-3xl border border-brand-border/60 relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] -z-10" />

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="relative">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-purple-500/20 border-2 border-brand-cyan/40 flex items-center justify-center text-4xl font-bold font-display text-text-primary shadow-2xl">
                  {author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute -bottom-2 -right-2 p-1.5 bg-brand-bg rounded-full border border-brand-border">
                  <ShieldCheck size={20} className="text-brand-cyan" />
                </div>
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-subtle text-brand-cyan text-xs font-bold uppercase tracking-wider mb-3">
                  <Award size={14} />
                  Verified Engineering Contributor
                </div>
                <h1 className="text-3xl md:text-5xl font-black font-display text-text-primary tracking-tight mb-2">
                  {author.name}
                </h1>
                <p className="text-lg text-brand-cyan font-medium mb-4">
                  {author.role}
                </p>
                <p className="text-text-secondary leading-relaxed max-w-3xl">
                  {author.bio}
                </p>

                {/* Social links */}
                <div className="flex items-center gap-4 mt-6">
                  {author.socialLinks?.map((link, idx) => {
                    const isLinkedIn = link.includes('linkedin');
                    return (
                      <a
                        key={idx}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-subtle text-sm text-text-secondary hover:text-text-primary hover:border-brand-cyan/50 transition-colors"
                      >
                        {isLinkedIn ? <Linkedin size={16} /> : <Github size={16} />}
                        <span>{isLinkedIn ? 'LinkedIn' : 'GitHub'}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-2xl border border-brand-border">
              <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-brand-cyan" />
                Core Technical Disciplines
              </h2>
              <ul className="space-y-3">
                {author.expertise?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-brand-border">
              <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-purple-400" />
                Architectural Governance
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Articles and blueprints authored by {author.name} are reviewed under GemSphere's peer-audited architectural review standards and strict Domain-Driven Design (DDD) guidelines.
              </p>
              <div className="p-4 rounded-xl bg-brand-card/60 border border-brand-border/40 text-xs text-text-tertiary">
                Published under GemSphere Technologies Private Limited Research & Development Division.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default AuthorProfile;
