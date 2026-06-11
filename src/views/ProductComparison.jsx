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
import LocalizedLink from '../components/LocalizedLink';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  Database, 
  Key, 
  Settings, 
  Activity,
  FileText,
  Copy,
  Check
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import Breadcrumbs from '../components/Breadcrumbs';
import TrustBadges from '../components/TrustBadges';
import { COMPETITORS_MAP, PRODUCTS_MAP, getSEOContent } from '../data/seoRegistry';

export default function ProductComparison({ competitorKey }) {
  const compInfo = COMPETITORS_MAP[competitorKey];
  if (!compInfo) return null;

  const productInfo = PRODUCTS_MAP[compInfo.product];
  const seoContent = getSEOContent(`gemsphere-vs-${competitorKey}`);

  // Wizard state for Custom Integration Scoping Spec
  const [isolation, setIsolation] = useState('single-tenant');
  const [customSchema, setCustomSchema] = useState('yes');
  const [workflows, setWorkflows] = useState('advanced');
  const [authProvider, setAuthProvider] = useState('okta');
  const [throughput, setThroughput] = useState('high');

  // Interactive Modal state
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const breadcrumbItems = [
    { name: 'Products', url: '/products' },
    { name: productInfo ? productInfo.name : 'Platform', url: productInfo ? `/products/${compInfo.product}` : '/products' },
    { name: `GemSphere vs ${compInfo.name}`, url: `/compare/gemsphere-vs-${competitorKey}` }
  ];

  // Helper to compile the scoping spec text
  const getCompiledSpec = () => {
    return {
      "Target Architecture": "GemSphere Composable Cluster vs " + compInfo.name,
      "Base Product Module": productInfo ? productInfo.name : "Custom Enterprise Backend",
      "Deployment Model": isolation === 'single-tenant' ? "Single-Tenant Private VPC" : (isolation === 'logical' ? "Logical Schema Isolation" : "Multi-Region Dedicated Cluster"),
      "Database Customization": customSchema === 'yes' ? "Dynamic schema extensions enabled (Custom tables & fields)" : "Standard system schemas",
      "Workflow Engine": workflows === 'advanced' ? "Event-driven custom rules & third-party webhook relays" : "Standard API pipelines",
      "SSO & IAM Integration": authProvider === 'okta' ? "Okta / Auth0 (OpenID Connect)" : (authProvider === 'entra' ? "Microsoft Entra ID (SAML/SSO)" : "Bespoke OAuth2 Server Gateway"),
      "Traffic & Performance Tier": throughput === 'high' ? "High performance tier (>50k requests/min, Dedicated node scaling)" : "Standard enterprise tier"
    };
  };

  const handleCopySpec = () => {
    const spec = getCompiledSpec();
    const text = Object.entries(spec).map(([key, val]) => `${key}: ${val}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-brand-dark transition-colors duration-300">
      

      {/* Floating mesh accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[100px] animate-float"
             style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)' }} />
        <div className="absolute top-[20%] -right-[10%] w-[45%] h-[45%] rounded-full opacity-15 blur-[120px]"
             style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.3) 0%, rgba(99,102,241,0.15) 50%, transparent 70%)', animation: 'float 10s ease-in-out infinite reverse' }} />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 uppercase tracking-widest">
                Technical Battlecard
              </span>
              <span className="text-text-muted text-sm font-semibold">
                Enterprise Assessment
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight text-text-primary mb-8 max-w-4xl leading-tight">
              {seoContent.h1}
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mb-10">
              {seoContent.description} See why CTOs and Enterprise Architects bypass rigid SaaS models and standard limitations in favor of our composable, single-tenant engineering framework.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('scoping-spec-tool');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary flex items-center justify-center cursor-pointer"
              >
                Configure System Spec <ArrowRight size={18} className="ml-2" />
              </button>
              <LocalizedLink href="/demo" className="glass-subtle text-text-primary px-6 py-3 rounded-xl font-bold hover:bg-brand-border/50 dark:hover:bg-brand-border/30 border border-brand-border/40 transition-colors flex items-center">
                Schedule Architecture Review
              </LocalizedLink>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <TrustBadges />

      {/* Side-by-Side Comparison Table Section */}
      <section className="py-24 bg-brand-dark/20 border-y border-brand-border">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal>
            <SectionHeading 
              align="center"
              badge="Architectural Comparison"
              title="Feature & Infrastructure Breakdown"
              subtitle="Review the core technical differences between GemSphere's composable deployment and monolithic platforms."
            />
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <div className="block lg:hidden text-center text-xs font-semibold tracking-wider text-brand-cyan/80 uppercase mb-3 animate-pulse">
              ← Swipe horizontally to view full specs →
            </div>
            <div className="overflow-x-auto rounded-3xl border border-brand-border/60 bg-brand-dark/50 backdrop-blur-xl">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-brand-border bg-brand-border/20">
                    <th className="p-6 font-bold text-text-primary">Architectural Axis</th>
                    <th className="p-6 font-bold text-brand-cyan bg-brand-cyan/5 border-x border-brand-border/60 w-5/12">GemSphere Composable Stack</th>
                    <th className="p-6 font-bold text-text-secondary w-4/12">{compInfo.name} Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/40">
                  <tr>
                    <td className="p-6 font-bold text-text-primary flex items-center gap-3">
                      <Database size={18} className="text-brand-cyan" /> Data Isolation & Security
                    </td>
                    <td className="p-6 text-text-secondary bg-brand-cyan/5 border-x border-brand-border/60">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-brand-cyan shrink-0 mt-1" />
                        <div>
                          <strong className="text-text-primary block mb-1">Physical Single-Tenant VPC</strong>
                          Dedicated database clusters, private VPC endpoints, complete encryption keys ownership, absolute zero cross-tenant leak risk.
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-text-muted">
                      <div className="flex items-start gap-2">
                        <XCircle size={16} className="text-brand-indigo shrink-0 mt-1" />
                        <div>
                          <strong className="text-text-secondary block mb-1">Multi-tenant Shared DB</strong>
                          Logically-partitioned database tables. Shared tenant environment introducing cryptographic and data visibility vulnerabilities.
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-text-primary flex items-center gap-3">
                      <Settings size={18} className="text-brand-cyan" /> Custom Code & Workflows
                    </td>
                    <td className="p-6 text-text-secondary bg-brand-cyan/5 border-x border-brand-border/60">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-brand-cyan shrink-0 mt-1" />
                        <div>
                          <strong className="text-text-primary block mb-1">Unlimited Custom Engine Logic</strong>
                          Bespoke business rules executed in sandboxed runner contexts. Mutate database schemas, add custom entities, and write raw node hooks.
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-text-muted">
                      <div className="flex items-start gap-2">
                        <XCircle size={16} className="text-brand-indigo shrink-0 mt-1" />
                        <div>
                          <strong className="text-text-secondary block mb-1">Rigid Extension Limits</strong>
                          Customizations Capped by proprietary languages (e.g. Apex, SuiteScript). Heavy developer certification requirements.
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-text-primary flex items-center gap-3">
                      <ShieldCheck size={18} className="text-brand-cyan" /> White-Labeling & Portals
                    </td>
                    <td className="p-6 text-text-secondary bg-brand-cyan/5 border-x border-brand-border/60">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-brand-cyan shrink-0 mt-1" />
                        <div>
                          <strong className="text-text-primary block mb-1">100% Brand Customization</strong>
                          Completely remove GemSphere signatures. Custom domains, layouts, UI styling, and guest customer-facing dashboards.
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-text-muted">
                      <div className="flex items-start gap-2">
                        <XCircle size={16} className="text-brand-indigo shrink-0 mt-1" />
                        <div>
                          <strong className="text-text-secondary block mb-1">Rigid System Branding</strong>
                          Mandatory competitor logos or footer backlinks. Tailored dashboard styling is heavily restricted.
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-bold text-text-primary flex items-center gap-3">
                      <Activity size={18} className="text-brand-cyan" /> API Throttle Limits
                    </td>
                    <td className="p-6 text-text-secondary bg-brand-cyan/5 border-x border-brand-border/60">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-brand-cyan shrink-0 mt-1" />
                        <div>
                          <strong className="text-text-primary block mb-1">Dedicated Auto-Scaling Ingress</strong>
                          Configure custom rate limit policies. Scale cluster instances dynamically to handle peak transaction events.
                        </div>
                      </div>
                    </td>
                    <td className="p-6 text-text-muted">
                      <div className="flex items-start gap-2">
                        <XCircle size={16} className="text-brand-indigo shrink-0 mt-1" />
                        <div>
                          <strong className="text-text-secondary block mb-1">Shared Gateway Throttle Caps</strong>
                          Strict daily or hourly API call limits. High overage fees for high-frequency synchronization nodes.
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scoping Spec Tool Section */}
      <section id="scoping-spec-tool" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollReveal>
            <SectionHeading 
              align="center"
              badge="Custom Spec Tool"
              title="Technical Integration Scoping Configurator"
              subtitle="Select your preferred deployment parameters to generate a custom system specification blueprint."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
            {/* Left side: Interactive Configurator Controls */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Option 1: Data Isolation */}
              <ScrollReveal className="glass-card p-8 border-brand-border/50">
                <h3 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
                  <Database size={20} className="text-brand-cyan" /> Data Isolation Level
                </h3>
                <p className="text-sm text-text-secondary mb-6">Define the separation constraints for your application storage nodes.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    onClick={() => setIsolation('single-tenant')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isolation === 'single-tenant' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary shadow-lg shadow-brand-cyan/5' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">Single-Tenant VPC</span>
                    <span className="text-xs text-text-muted">Separate physical DB nodes, complete isolation.</span>
                  </button>
                  <button 
                    onClick={() => setIsolation('logical')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isolation === 'logical' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary shadow-lg shadow-brand-cyan/5' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">Logical Isolation</span>
                    <span className="text-xs text-text-muted">Separate schemas, shared compute engine.</span>
                  </button>
                  <button 
                    onClick={() => setIsolation('multi-region')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isolation === 'multi-region' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary shadow-lg shadow-brand-cyan/5' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">Dedicated Cluster</span>
                    <span className="text-xs text-text-muted">Multi-region active-active cluster nodes.</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* Option 2: Custom Schema */}
              <ScrollReveal className="glass-card p-8 border-brand-border/50">
                <h3 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
                  <Settings size={20} className="text-brand-cyan" /> Database Customization
                </h3>
                <p className="text-sm text-text-secondary mb-6">Do you need to create custom entities or extend standard tables?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setCustomSchema('yes')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      customSchema === 'yes' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary shadow-lg shadow-brand-cyan/5' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">Dynamic Extensions Enabled</span>
                    <span className="text-xs text-text-muted">Mutate structures dynamically, declare arbitrary object schemas.</span>
                  </button>
                  <button 
                    onClick={() => setCustomSchema('no')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      customSchema === 'no' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary shadow-lg shadow-brand-cyan/5' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">Standard Schema Only</span>
                    <span className="text-xs text-text-muted">Consume standard tables and REST model profiles.</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* Option 3: Workflow Trigger Engine */}
              <ScrollReveal className="glass-card p-8 border-brand-border/50">
                <h3 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
                  <Zap size={20} className="text-brand-cyan" /> Custom Workflows Engine
                </h3>
                <p className="text-sm text-text-secondary mb-6">Choose execution complexity for data hooks and webhook integrations.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setWorkflows('advanced')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      workflows === 'advanced' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary shadow-lg shadow-brand-cyan/5' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">Event-Driven Hook Engine</span>
                    <span className="text-xs text-text-muted">Deploy sandboxed JS hooks, async queue relays, webhook triggers.</span>
                  </button>
                  <button 
                    onClick={() => setWorkflows('basic')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      workflows === 'basic' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary shadow-lg shadow-brand-cyan/5' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">Synchronous Pipeline</span>
                    <span className="text-xs text-text-muted">Standard API request-response payload processing.</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* Option 4: IAM & SSO Providers */}
              <ScrollReveal className="glass-card p-8 border-brand-border/50">
                <h3 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
                  <Key size={20} className="text-brand-cyan" /> SSO & Identity Providers
                </h3>
                <p className="text-sm text-text-secondary mb-6">Select your company's identity provider requirements.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    onClick={() => setAuthProvider('okta')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      authProvider === 'okta' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">Okta / Auth0</span>
                    <span className="text-xs text-text-muted">OIDC protocol mapping.</span>
                  </button>
                  <button 
                    onClick={() => setAuthProvider('entra')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      authProvider === 'entra' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">Microsoft Entra</span>
                    <span className="text-xs text-text-muted">SAML & corporate SSO.</span>
                  </button>
                  <button 
                    onClick={() => setAuthProvider('custom')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      authProvider === 'custom' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">OAuth2 Custom</span>
                    <span className="text-xs text-text-muted">Bespoke identity token parsing.</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* Option 5: Throughput Tier */}
              <ScrollReveal className="glass-card p-8 border-brand-border/50">
                <h3 className="text-xl font-bold mb-4 text-text-primary flex items-center gap-2">
                  <Activity size={20} className="text-brand-cyan" /> Traffic & Throughput Tier
                </h3>
                <p className="text-sm text-text-secondary mb-6">Select transaction capacity requirements for auto-scaling thresholds.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setThroughput('high')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      throughput === 'high' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary shadow-lg shadow-brand-cyan/5' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">High Scale Scaling</span>
                    <span className="text-xs text-text-muted">&gt;50,000 requests/minute, multi-zone replica sets.</span>
                  </button>
                  <button 
                    onClick={() => setThroughput('standard')}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      throughput === 'standard' 
                        ? 'bg-brand-cyan/10 border-brand-cyan text-text-primary shadow-lg shadow-brand-cyan/5' 
                        : 'border-brand-border/40 hover:border-brand-border bg-brand-dark/40 text-text-secondary'
                    }`}
                  >
                    <span className="block font-bold text-sm mb-1">Standard Enterprise</span>
                    <span className="text-xs text-text-muted">&lt;10,000 requests/minute, dual redundancy nodes.</span>
                  </button>
                </div>
              </ScrollReveal>

            </div>

            {/* Right side: Live System Specification Blueprint Summary */}
            <div className="lg:col-span-5 relative sticky top-32">
              <ScrollReveal delay={0.1}>
                <div className="glass-heavy p-8 border-brand-cyan/20 rounded-[32px] shadow-2xl relative">
                  <div className="absolute top-4 right-4 flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-brand-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan"></span>
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-text-primary flex items-center gap-2">
                    <FileText size={22} className="text-brand-cyan" /> Spec Blueprint
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    {Object.entries(getCompiledSpec()).map(([title, val]) => (
                      <div key={title} className="pb-3 border-b border-brand-border/40 text-left">
                        <span className="text-xs text-text-muted block font-semibold uppercase tracking-wider">{title}</span>
                        <span className="text-sm font-bold text-text-secondary">{val}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-text-muted mb-8 text-center">
                    No licensing multipliers or pricing tiers. Specifications are used to assemble private sandbox containers.
                  </p>

                  <div className="space-y-3">
                    <button 
                      onClick={() => setShowModal(true)}
                      className="btn-primary w-full flex items-center justify-center py-4 font-bold cursor-pointer"
                    >
                      Export System Spec Config
                    </button>
                    <button 
                      onClick={handleCopySpec}
                      className="w-full glass-subtle border border-brand-border/40 text-text-primary px-6 py-3 rounded-xl font-bold hover:bg-brand-border/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check size={18} className="text-brand-cyan" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={18} /> Copy Spec to Clipboard
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison FAQ Section */}
      {seoContent.faqs && seoContent.faqs.length > 0 && (
        <section className="py-24 bg-brand-dark/20 border-t border-brand-border">
          <div className="container mx-auto px-6 max-w-4xl">
            <ScrollReveal>
              <SectionHeading 
                align="center"
                badge="FAQs"
                title="Technical FAQ"
                subtitle={`Specific comparisons regarding migrating and operational setups for GemSphere vs ${compInfo.name}.`}
              />
            </ScrollReveal>

            <div className="space-y-4 mt-12">
              {seoContent.faqs.map((faq, idx) => {
                const isOpen = activeFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="glass-card border-brand-border/50 overflow-hidden transition-all duration-300 hover:border-brand-cyan/30"
                  >
                    <button
                      onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-brand-border/20 transition-colors"
                    >
                      <span className="font-bold text-text-primary text-lg">{faq.q || faq.question}</span>
                      <span className={`text-brand-cyan transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                      </span>
                    </button>
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 border-t border-brand-border/30' : 'max-h-0'}`}
                    >
                      <div className="px-6 py-5 text-text-secondary leading-relaxed bg-brand-dark/20">
                        {faq.a || faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Integration Blueprint Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-brand-dark/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-heavy p-8 max-w-2xl w-full border border-brand-cyan/30 rounded-[32px] text-center relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <h3 className="text-3xl font-black mb-4 text-text-primary">System Specification Configured</h3>
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              Your architectural config blueprint is ready for deployment scoping. Copy the configuration payload below to share with your engineering squad or solution architect.
            </p>
            
            <pre className="text-left bg-brand-dark/80 p-5 rounded-2xl border border-brand-border/60 text-brand-cyan text-xs font-mono overflow-x-auto mb-6 max-h-60 whitespace-pre-wrap">
              {JSON.stringify(getCompiledSpec(), null, 2)}
            </pre>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleCopySpec}
                className="btn-primary flex items-center justify-center gap-2"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />} Copy Config
              </button>
              <LocalizedLink 
                href="/demo"
                className="glass-subtle border border-brand-border/40 text-text-primary px-6 py-3 rounded-xl font-bold hover:bg-brand-border/50 transition-colors flex items-center justify-center"
              >
                Book Scoping Call
              </LocalizedLink>
              <button 
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-xl font-bold text-text-muted hover:text-text-primary transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
