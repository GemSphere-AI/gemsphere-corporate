"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { triggerTeamsChat } from '../utils/apiConfig';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const { t } = useTranslation();

    // Show after scrolling down 300px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleOnClick = (e) => {
        e.preventDefault();
        setIsConnecting(true);

        const sdk = window.Microsoft?.Omnichannel?.LiveChatWidget?.SDK;
        if (sdk && typeof sdk.startChat === 'function') {
            try {
                sdk.startChat();
                setIsConnecting(false);
            } catch (err) {
                console.error("Teams SDK startChat failed:", err);
                setIsConnecting(false);
            }
        } else {
            const btn = document.querySelector('.chatclient-button');
            if (btn) {
                btn.click();
                setIsConnecting(false);
            } else {
                // Poll for SDK or button loading
                let attempts = 0;
                const interval = setInterval(() => {
                    attempts++;
                    const currentSdk = window.Microsoft?.Omnichannel?.LiveChatWidget?.SDK;
                    const currentBtn = document.querySelector('.chatclient-button');

                    if (currentSdk && typeof currentSdk.startChat === 'function') {
                        clearInterval(interval);
                        setIsConnecting(false);
                        try {
                            currentSdk.startChat();
                        } catch (err) {
                            console.error(err);
                        }
                    } else if (currentBtn) {
                        clearInterval(interval);
                        setIsConnecting(false);
                        currentBtn.click();
                    } else if (attempts >= 15) { // 3 seconds
                        clearInterval(interval);
                        setIsConnecting(false);
                        window.location.href = '/contact/';
                    }
                }, 200);
            }
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                    className="fixed bottom-6 right-6 z-[100]"
                    style={{ filter: isConnecting ? 'none' : 'drop-shadow(0 4px 20px rgba(0, 180, 230, 0.35))' }}
                >
                    <motion.button
                        onClick={handleOnClick}
                        onMouseEnter={() => !isConnecting && setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        disabled={isConnecting}
                        whileHover={isConnecting ? {} : { scale: 1.05 }}
                        whileTap={isConnecting ? {} : { scale: 0.95 }}
                        className="relative flex items-center gap-2.5 overflow-hidden rounded-2xl border-none"
                        style={{
                            background: isConnecting 
                                ? 'linear-gradient(135deg, #475569 0%, #334155 100%)' 
                                : 'linear-gradient(135deg, #00d4ff 0%, #0098b8 50%, #006d8a 100%)',
                            padding: '14px 22px',
                            color: isConnecting ? '#cbd5e1' : '#0f172a',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            letterSpacing: '0.01em',
                            border: '1px solid rgba(255,255,255,0.3)',
                            cursor: isConnecting ? 'not-allowed' : 'pointer',
                            opacity: isConnecting ? 0.9 : 1,
                            boxShadow: isHovered && !isConnecting
                                ? '0 8px 32px rgba(0, 212, 255, 0.45), inset 0 1px 0 rgba(255,255,255,0.35)'
                                : '0 4px 16px rgba(0, 212, 255, 0.2), inset 0 1px 0 rgba(255,255,255,0.2)',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        {/* Animated shine sweep */}
                        {!isConnecting && (
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={isHovered ? { x: '200%' } : { x: '-100%' }}
                                transition={{ duration: 0.6, ease: 'easeInOut' }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                    pointerEvents: 'none',
                                }}
                            />
                        )}

                        {/* Subtle breathing glow behind the icon */}
                        <span className="relative flex items-center justify-center" style={{ width: 22, height: 22 }}>
                            {isConnecting ? (
                                <Loader2 size={18} className="relative animate-spin" />
                            ) : (
                                <>
                                    <motion.span
                                        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                        style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '50%',
                                            background: 'rgba(15, 23, 42, 0.15)',
                                        }}
                                    />
                                    <MessageSquare size={18} className="relative fill-current" />
                                </>
                            )}
                        </span>

                        <span className="hidden md:block relative overflow-hidden whitespace-nowrap">
                            {isConnecting ? 'Initializing Chat...' : t('nav.contactSales', 'Talk to Teams')}
                        </span>
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
