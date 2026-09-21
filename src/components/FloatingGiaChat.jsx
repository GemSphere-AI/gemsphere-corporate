/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  Sparkles, 
  UserCheck, 
  RotateCcw, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Building2,
  MessageCircle,
  ExternalLink,
  User,
  Mail,
  Phone
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const QUICK_PROMPTS = [
  "🏢 What is GemSphere?",
  "📦 Supply Chain & WMS",
  "💳 Unified Retail & POS",
  "📊 Schedule Enterprise Demo",
  "💬 Chat on WhatsApp"
];

export default function FloatingGiaChat() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [visitorIdentified, setVisitorIdentified] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Synchronize with corporate site theme (light vs dark mode)
  useEffect(() => {
    const updateTheme = () => {
      if (typeof document !== 'undefined') {
        setIsDark(document.documentElement.classList.contains('dark'));
      }
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('storage', updateTheme);
    return () => {
      observer.disconnect();
      window.removeEventListener('storage', updateTheme);
    };
  }, []);
  
  // Unique visitor session id for multi-turn cognitive context retention
  const [sessionId] = useState(() => {
    if (typeof window !== 'undefined') {
      let saved = sessionStorage.getItem('gemsphere_gia_session_id');
      if (!saved) {
        saved = 'gia-vis-' + Math.random().toString(36).substring(2, 9) + '-' + Date.now();
        sessionStorage.setItem('gemsphere_gia_session_id', saved);
      }
      return saved;
    }
    return 'gia-vis-' + Date.now();
  });

  // Quick intro form state
  const [introName, setIntroName] = useState('');
  const [introEmail, setIntroEmail] = useState('');
  const [introPhone, setIntroPhone] = useState('');
  const [introCompany, setIntroCompany] = useState('');

  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'gia',
      text: "Hello! 👋 I'm **GIA** (GemSphere Intelligence Assistant), your enterprise solutions advisor.\n\nWelcome to GemSphere! To help tailor our solutions to your business and connect you with our solutions specialists, **may I please have your full name, work email, and mobile contact number?**\n\nI can answer questions across our 50+ enterprise modules, share architectural blueprints, or help schedule a consultation call with our team.",
      timestamp: Date.now()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  
  // Full Lead Inquiry Form state
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    interestedService: 'GemSphere Enterprise Architecture & Solutions',
    message: ''
  });
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryError, setInquiryError] = useState('');

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Broadcast GIA chat open/close state to hide overlapping elements like FloatingWhatsApp
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('gia:state', { detail: { isOpen } }));
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      if (!showInquiryForm && visitorIdentified) {
        inputRef.current?.focus();
      }
    }
  }, [isOpen, messages, isLoading, showInquiryForm, visitorIdentified]);

  // Helper to log lead data to CRM
  const syncLeadToCrm = async (name, email, phone, company, currentConversation, note) => {
    if (!email && !name && !phone) return;
    try {
      await fetch('/api/v1/public/leads/gia-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'Website Visitor',
          email: email || '',
          phone: phone || '',
          company: company || 'Enterprise Prospect',
          jobTitle: 'Prospect',
          interestedService: 'GemSphere Enterprise Solutions',
          message: note || 'Lead captured via GIA interactive chat session',
          conversation: currentConversation.map((m) => ({
            sender: m.sender,
            text: m.text,
            timestamp: m.timestamp
          }))
        })
      });
    } catch (e) {
      console.warn('CRM sync background error:', e);
    }
  };

  const handleIntroSubmit = async (e) => {
    e.preventDefault();
    if (!introName.trim() || !introEmail.trim() || !introPhone.trim()) return;

    const name = introName.trim();
    const email = introEmail.trim();
    const phone = introPhone.trim();
    const company = introCompany.trim();

    setVisitorIdentified(true);
    setInquiryData((prev) => ({
      ...prev,
      name,
      email,
      phone,
      company: company || prev.company
    }));

    const userIntroMsg = {
      id: `user-intro-${Date.now()}`,
      sender: 'user',
      text: `Hi GIA, I'm ${name}${company ? ` from ${company}` : ''} (Email: ${email}, Phone: ${phone}).`,
      timestamp: Date.now()
    };

    const giaWelcomeMsg = {
      id: `gia-welcome-${Date.now()}`,
      sender: 'gia',
      text: `Wonderful to meet you, **${name}**! 🎉 I've noted your contact details for our enterprise solutions team.\n\nHow can I assist your business today? Would you like an overview of **Unified Retail & Smart POS**, **Supply Chain & WMS**, or should we **schedule a discovery call / demo** with our solutions architect?`,
      timestamp: Date.now() + 200
    };

    const newMessages = [...messages, userIntroMsg, giaWelcomeMsg];
    setMessages(newMessages);

    // Sync to CRM immediately
    syncLeadToCrm(name, email, phone, company, newMessages, 'Visitor introduced themselves via GIA quick intro card');
  };

  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    // Detect if user typed email, phone, or name directly in chat message
    const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    const phoneMatch = text.match(/(?:\+?\d{1,4}[-.\s]?)?\(?\d{2,4}\)?[-.\s]?\d{3,4}[-.\s]?\d{3,5}/);
    const nameMatch = text.match(/(?:my name is|i am|i'm|name:\s*)([A-Z][a-zA-Z\s]{1,30})/i);
    
    let updatedName = inquiryData.name;
    let updatedEmail = inquiryData.email;
    let updatedPhone = inquiryData.phone;

    if (nameMatch && !inquiryData.name) {
      updatedName = nameMatch[1].trim();
      setInquiryData((prev) => ({ ...prev, name: updatedName }));
    }
    if (emailMatch && !inquiryData.email) {
      updatedEmail = emailMatch[0];
      setInquiryData((prev) => ({ ...prev, email: emailMatch[0] }));
      setVisitorIdentified(true);
    }
    if (phoneMatch && !inquiryData.phone) {
      updatedPhone = phoneMatch[0];
      setInquiryData((prev) => ({ ...prev, phone: phoneMatch[0] }));
    }

    // Direct WhatsApp quick action trigger
    if (text === "💬 Chat on WhatsApp" || text === "💬 Message on WhatsApp" || text.toLowerCase() === "whatsapp") {
      const userMessage = {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: text,
        timestamp: Date.now()
      };
      setMessages((prev) => [...prev, userMessage]);
      setInputText('');

      const waMessage = {
        id: `gia-wa-${Date.now()}`,
        sender: 'gia',
        text: `Connecting you to our **WhatsApp Enterprise Advisory**! 🟢\n\nYou can chat directly with our solutions advisory team at **${SITE_CONFIG.contact.phoneDisplay}**.\n\n[Click here to open WhatsApp](${SITE_CONFIG.contact.whatsapp.link})`,
        timestamp: Date.now()
      };
      setMessages((prev) => [...prev, waMessage]);

      if (typeof window !== 'undefined') {
        window.open(SITE_CONFIG.contact.whatsapp.link, '_blank', 'noopener,noreferrer');
      }
      return;
    }

    // High-intent demo or call scheduling trigger
    const lowerText = text.toLowerCase();
    const isScheduleIntent = lowerText.includes('schedule') || lowerText.includes('demo') || lowerText.includes('call') || lowerText.includes('consultation');

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: Date.now()
    };

    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/v1/gemsphere-ai/public/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          sessionId: sessionId
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const giaResponse = data.response || "I apologize, but I couldn't process your request right now. Please try again or reach out to our team.";

      const giaMessage = {
        id: `gia-${Date.now()}`,
        sender: 'gia',
        text: giaResponse,
        timestamp: Date.now()
      };

      const finalMessages = [...currentMessages, giaMessage];
      setMessages(finalMessages);

      // If contact info is known, sync to CRM asynchronously
      if (updatedEmail || updatedPhone || updatedName) {
        syncLeadToCrm(
          updatedName,
          updatedEmail,
          updatedPhone,
          inquiryData.company,
          finalMessages,
          isScheduleIntent ? 'Prospect requested enterprise call / demo scheduling' : 'Ongoing GIA conversation'
        );
      }
    } catch (err) {
      console.error('GIA chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `gia-err-${Date.now()}`,
          sender: 'gia',
          text: "I encountered a momentary connectivity issue. You can click **'Connect'** above or chat directly with us on [WhatsApp](" + SITE_CONFIG.contact.whatsapp.link + ") to have an enterprise advisor assist you.",
          timestamp: Date.now()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.email) {
      setInquiryError('Please provide your name and work email.');
      return;
    }

    setIsSubmittingInquiry(true);
    setInquiryError('');

    try {
      const payload = {
        name: inquiryData.name,
        email: inquiryData.email,
        phone: inquiryData.phone,
        company: inquiryData.company,
        jobTitle: inquiryData.jobTitle,
        interestedService: inquiryData.interestedService,
        message: inquiryData.message,
        conversation: messages.map((m) => ({
          sender: m.sender,
          text: m.text,
          timestamp: m.timestamp
        }))
      };

      const res = await fetch('/api/v1/public/leads/gia-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error('Failed to record inquiry');
      }

      setInquirySubmitted(true);
      setVisitorIdentified(true);

      // Add acknowledgment message into chat
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: `gia-inquiry-ack-${Date.now()}`,
            sender: 'gia',
            text: `Thank you, **${inquiryData.name}**! 🎉 Your consultation request and complete conversation transcript have been routed to our enterprise team. We will reach out to **${inquiryData.email}** shortly.`,
            timestamp: Date.now()
          }
        ]);
        setShowInquiryForm(false);
        setInquirySubmitted(false);
      }, 1600);
    } catch (err) {
      console.error('Error submitting GIA inquiry:', err);
      setInquiryError('Unable to record inquiry right now. Please try again or reach out directly.');
    } finally {
      setIsSubmittingInquiry(false);
    }
  };

  const resetChat = () => {
    setVisitorIdentified(false);
    setMessages([
      {
        id: 'welcome',
        sender: 'gia',
        text: "Hello! 👋 I'm **GIA** (GemSphere Intelligence Assistant), your enterprise cognitive advisor.\n\nWelcome to GemSphere! To help tailor our solutions to your business, **may I know your full name and work email?**",
        timestamp: Date.now()
      }
    ]);
  };

  // Helper to format markdown with links, bold, and bullet points
  const renderFormattedText = (text, isUser = false) => {
    if (!text) return null;
    const paragraphs = text.split('\n\n');
    return paragraphs.map((para, pIdx) => {
      const lines = para.split('\n');
      return (
        <p
          key={pIdx}
          className="mb-2.5 last:mb-0 leading-relaxed text-[13.5px]"
        >
          {lines.map((line, lIdx) => {
            const isBullet = line.trim().startsWith('* ') || line.trim().startsWith('- ');
            const cleanLine = isBullet ? line.trim().substring(2) : line;

            // Simple bold parsing
            const parts = cleanLine.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
            const renderedParts = parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong
                    key={i}
                    className="font-bold"
                  >
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
              if (linkMatch) {
                return (
                  <a
                    key={i}
                    href={linkMatch[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-semibold inline-flex items-center gap-0.5 ml-1"
                  >
                    {linkMatch[1]}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                );
              }
              return part;
            });

            if (isBullet) {
              return (
                <span key={lIdx} className="flex items-start gap-1.5 ml-2 mt-1">
                  <span className="text-xs mt-1 text-cyan-500">
                    •
                  </span>
                  <span>{renderedParts}</span>
                </span>
              );
            }

            return (
              <span key={lIdx}>
                {renderedParts}
                {lIdx < lines.length - 1 && <br />}
              </span>
            );
          })}
        </p>
      );
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Floating Trigger Button (when chat is closed) */}
      <div className="fixed bottom-6 right-6 z-[95] flex items-center">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsOpen(true)}
              className={`relative group flex items-center gap-3 p-1.5 pr-4 rounded-full shadow-2xl transition-all duration-300 cursor-pointer ${
                isDark
                  ? 'border border-cyan-400/50'
                  : 'border border-slate-200/90 hover:border-cyan-500/50'
              }`}
              style={{
                background: isDark
                  ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.98) 100%)',
                boxShadow: isDark
                  ? '0 8px 32px rgba(6, 182, 212, 0.35), 0 0 20px rgba(168, 85, 247, 0.25)'
                  : '0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 10px rgba(6, 182, 212, 0.2)'
              }}
              aria-label="Chat with GIA"
            >
              {/* Pulsing Avatar Container */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                <img
                  src="/assets/gia-avatar.jpg"
                  alt="GIA AI Assistant"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.retried) {
                      e.currentTarget.dataset.retried = 'true';
                      e.currentTarget.src = '/gia-avatar.jpg';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Online pulse indicator */}
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                </span>
              </div>

              {/* Text Label */}
              <div className="flex flex-col text-left">
                <span className={`text-sm font-extrabold tracking-wide ${isDark ? 'text-white' : 'text-slate-900'}`}>GIA</span>
                <span className={`text-[11px] font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {isHovered ? "Ask Enterprise Advisor" : "GemSphere Intelligence"}
                </span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive GIA Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="gia-window fixed bottom-6 right-6 z-[9999] w-[94vw] sm:w-[430px] h-[650px] max-h-[89vh] flex flex-col rounded-3xl overflow-hidden border shadow-2xl transition-colors duration-300"
          >
            {/* Header */}
            <div className="gia-header relative px-4 py-3 border-b flex items-center justify-between transition-colors">
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)] shrink-0">
                  <img
                    src="/assets/gia-avatar.jpg"
                    alt="GIA"
                    onError={(e) => {
                      if (!e.currentTarget.dataset.retried) {
                        e.currentTarget.dataset.retried = 'true';
                        e.currentTarget.src = '/gia-avatar.jpg';
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
                </div>
                <div className="min-w-0">
                  <h3 className="gia-header-title text-sm sm:text-base font-extrabold tracking-wide leading-tight">GIA</h3>
                  <p className="gia-header-subtitle text-[11px] flex items-center gap-1.5 font-medium whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    GemSphere Intelligence
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                {/* Connect / Inquire Lead Form */}
                <button
                  onClick={() => setShowInquiryForm(!showInquiryForm)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-sm ${
                    showInquiryForm
                      ? 'bg-cyan-500 text-white border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent hover:from-cyan-400 hover:to-blue-500 hover:shadow-md'
                  }`}
                  title="Request Enterprise Consultation"
                >
                  <UserCheck className="w-3.5 h-3.5 text-white" />
                  <span>Connect</span>
                </button>

                {/* Restart Chat */}
                <button
                  onClick={resetChat}
                  className={`p-1.5 sm:p-2 rounded-xl transition-colors cursor-pointer ${
                    isDark ? 'hover:bg-slate-800/80 text-slate-400 hover:text-white' : 'hover:bg-slate-200/80 text-slate-500 hover:text-slate-900'
                  }`}
                  title="Restart Conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Close Chat */}
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-1.5 sm:p-2 rounded-xl transition-colors cursor-pointer ${
                    isDark ? 'hover:bg-slate-800/80 text-slate-400 hover:text-white' : 'hover:bg-slate-200/80 text-slate-500 hover:text-slate-900'
                  }`}
                  title="Close GIA"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Inquiry Form Modal / Drawer */}
            <AnimatePresence>
              {showInquiryForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="gia-drawer border-b px-5 py-4 overflow-y-auto max-h-[390px] transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-cyan-500" />
                      <h4 className="gia-drawer-title text-sm font-bold">Enterprise Consultation Request</h4>
                    </div>
                    <button
                      onClick={() => setShowInquiryForm(false)}
                      className={`cursor-pointer ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="gia-drawer-text text-xs mb-3.5 leading-relaxed">
                    Your conversation transcript with GIA will be included so our solutions architects have full context.
                  </p>

                  {inquirySubmitted ? (
                    <div className="py-6 flex flex-col items-center text-center">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500 mb-2 animate-bounce" />
                      <h5 className="gia-drawer-title text-sm font-bold">Inquiry Received!</h5>
                      <p className="gia-drawer-text text-xs mt-1">
                        GIA has transferred your request to our enterprise architecture team.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleInquirySubmit} className="space-y-2.5">
                      {inquiryError && (
                        <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-medium">
                          {inquiryError}
                        </div>
                      )}
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={inquiryData.name}
                          onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                          className="gia-field w-full px-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Work Email *"
                          value={inquiryData.email}
                          onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                          className="gia-field w-full px-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={inquiryData.company}
                          onChange={(e) => setInquiryData({ ...inquiryData, company: e.target.value })}
                          className="gia-field w-full px-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={inquiryData.phone}
                          onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                          className="gia-field w-full px-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Job Title (e.g. CTO, VP Operations)"
                        value={inquiryData.jobTitle}
                        onChange={(e) => setInquiryData({ ...inquiryData, jobTitle: e.target.value })}
                        className="gia-field w-full px-3 py-2 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                      />
                      <textarea
                        rows={2}
                        placeholder="Specific requirements or questions for our specialists..."
                        value={inquiryData.message}
                        onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                        className="gia-field w-full px-3 py-2 text-xs rounded-xl border resize-none focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                      />
                      <button
                        type="submit"
                        disabled={isSubmittingInquiry}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 ${
                          isDark
                            ? 'text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300'
                            : 'text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500'
                        }`}
                      >
                        {isSubmittingInquiry ? (
                          <>Connecting to CRM...</>
                        ) : (
                          <>
                            <span>Submit Enterprise Inquiry</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quick Prompt Chips */}
            <div className="gia-chip-bar px-4 py-2 border-b flex gap-2 overflow-x-auto no-scrollbar transition-colors">
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="gia-chip whitespace-nowrap px-3 py-1 rounded-full text-[11.5px] font-semibold transition-all shrink-0 disabled:opacity-50 cursor-pointer shadow-xs border"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div className="gia-body flex-1 p-4 overflow-y-auto space-y-4 transition-colors">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  {msg.sender === 'gia' ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-400/60 shrink-0 shadow-sm">
                      <img
                        src="/assets/gia-avatar.jpg"
                        alt="GIA"
                        onError={(e) => {
                          if (!e.currentTarget.dataset.retried) {
                            e.currentTarget.dataset.retried = 'true';
                            e.currentTarget.src = '/gia-avatar.jpg';
                          }
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 border border-white/20 shrink-0 flex items-center justify-center text-xs font-bold text-white shadow-sm">
                      U
                    </div>
                  )}

                  <div
                    className={`max-w-[84%] px-4 py-3 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'gia-bubble-user rounded-tr-none shadow-md'
                        : 'gia-bubble-bot border rounded-tl-none shadow-md'
                    }`}
                  >
                    {renderFormattedText(msg.text, msg.sender === 'user')}
                    <span
                      className={`block text-[10px] text-right mt-1.5 font-medium ${
                        msg.sender === 'user' ? 'gia-time-user' : 'gia-time-bot'
                      }`}
                    >
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Inline Quick Intro Card for seamless contact discovery */}
              {!visitorIdentified && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="gia-card p-3.5 rounded-2xl border shadow-xl ml-10 mb-2 transition-colors"
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    <span className="gia-card-title text-[12px] font-bold">
                      Quick Intro & Enterprise Consultation Request
                    </span>
                  </div>
                  <p className="gia-card-text text-[11px] mb-2.5 leading-relaxed">
                    Share your contact details so our enterprise architects can prepare custom blueprints or schedule a demo:
                  </p>
                  <form onSubmit={handleIntroSubmit} className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="Full Name *"
                          value={introName}
                          onChange={(e) => setIntroName(e.target.value)}
                          className="gia-field w-full px-3 py-1.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          placeholder="Work Email *"
                          value={introEmail}
                          onChange={(e) => setIntroEmail(e.target.value)}
                          className="gia-field w-full px-3 py-1.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        required
                        placeholder="Mobile / Contact No. *"
                        value={introPhone}
                        onChange={(e) => setIntroPhone(e.target.value)}
                        className="gia-field w-full px-3 py-1.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                      />
                      <input
                        type="text"
                        placeholder="Company (Optional)"
                        value={introCompany}
                        onChange={(e) => setIntroCompany(e.target.value)}
                        className="gia-field w-full px-3 py-1.5 text-xs rounded-xl border focus:outline-none focus:ring-1 focus:ring-cyan-500 font-medium"
                      />
                    </div>
                    <button
                      type="submit"
                      className={`w-full py-2 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-md flex items-center justify-center gap-1.5 ${
                        isDark
                          ? 'text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300'
                          : 'text-white bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500'
                      }`}
                    >
                      <span>Connect & Schedule Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-400/60 shrink-0">
                    <img
                      src="/assets/gia-avatar.jpg"
                      alt="GIA"
                      onError={(e) => {
                        if (!e.currentTarget.dataset.retried) {
                          e.currentTarget.dataset.retried = 'true';
                          e.currentTarget.src = '/gia-avatar.jpg';
                        }
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="gia-bubble-bot px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 border shadow-sm">
                    <span className="text-xs font-semibold mr-1 text-cyan-600 dark:text-cyan-400">GIA is analyzing</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Form with centralized theme styling */}
            <div className="gia-footer p-3 border-t transition-colors">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask GIA about GemSphere products & solutions..."
                  disabled={isLoading}
                  className="gia-field flex-1 px-4 py-2.5 text-xs sm:text-[13px] rounded-2xl border focus:outline-none focus:ring-1 focus:ring-cyan-500 disabled:opacity-50 transition-all font-medium shadow-xs"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isLoading}
                  className={`p-2.5 rounded-2xl font-bold disabled:opacity-40 transition-all cursor-pointer shadow-md shrink-0 ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950'
                      : 'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white'
                  }`}
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="flex items-center justify-between mt-2 px-1 text-[10.5px]">
                <span className="gia-footer-text flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                  GemSphere Enterprise Security
                </span>
                <a
                  href={SITE_CONFIG.contact.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline flex items-center gap-1 font-semibold ${
                    isDark ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'
                  }`}
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
