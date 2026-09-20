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
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Smartphone, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  HardDrive, 
  ExternalLink,
  Cpu
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function AppDownloadModal({ app, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    deviceModel: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!app) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Please provide your name and work email.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await fetch('/api/v1/public/leads/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || 'Enterprise Client',
          jobTitle: 'App User / Device Admin',
          interestedService: `${app.appName} Enterprise Distribution & APK Sideload`,
          message: `Prospect requested APK/Install for ${app.appName} on device: ${formData.deviceModel || 'General Android Device'}`
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting APK request:', err);
      setError('Connection issue. Please try again or message our team directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-700/80 overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #090e1a 0%, #0d1527 100%)',
              color: '#f8fafc'
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 border border-cyan-400/40 text-cyan-300">
                {app.platform} • {app.category}
              </span>
              <span className="text-xs text-slate-400">• {app.version}</span>
            </div>

            <h3 className="text-xl font-extrabold text-white mb-1.5 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>{app.appName}</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              {app.tagline}
            </p>

            {submitted ? (
              <div className="py-8 flex flex-col items-center text-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3 animate-bounce" />
                <h4 className="text-base font-bold text-white mb-1">APK Link & Setup Guide Sent!</h4>
                <p className="text-xs text-slate-300 max-w-sm mb-4">
                  We've sent the direct signed APK download link, device compatibility notes, and setup credentials to <strong className="text-cyan-300">{formData.email}</strong>.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Store and Sideload Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={app.playStoreUrl || app.developerUrl || SITE_CONFIG.brand.googlePlayDevUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 font-bold text-xs transition-all no-underline cursor-pointer group shadow-sm"
                  >
                    <HardDrive className="w-4 h-4 shrink-0" />
                    <span>Google Play Store</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href={SITE_CONFIG.contact.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 font-bold text-xs transition-all no-underline cursor-pointer group shadow-sm"
                  >
                    <Download className="w-4 h-4 shrink-0" />
                    <span>Instant WhatsApp Setup</span>
                  </a>
                </div>

                {/* Sideload & Enterprise MDM Notice */}
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-slate-200 mb-1">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Certified Enterprise Hardware:</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
                    {app.supportedDevices}
                  </p>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Need the raw APK file for custom MDM deployment, Sunmi OS sideload, or offline terminal staging? Fill in your details below to receive the secure download build immediately:
                  </p>
                </div>

                {/* Request Direct APK Form */}
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  {error && (
                    <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Work Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="tel"
                      placeholder="Contact / WhatsApp No."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                    <input
                      type="text"
                      placeholder="Hardware Model (e.g. Sunmi V2, Zebra TC52)"
                      value={formData.deviceModel}
                      onChange={(e) => setFormData({ ...formData, deviceModel: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Send Me Enterprise Signed APK & Setup Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-800 text-[10.5px] text-slate-400">
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                GemSphere MDM & SHA-256 Verified
              </span>
              <span>Size: {app.fileSize}</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
