"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SITE_CONFIG } from '../config/siteConfig';
import { trackWhatsAppClick } from '../utils/analytics';

export default function FloatingWhatsApp() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
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

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="fixed bottom-[7.5rem] right-6 z-[100]"
                    style={{ filter: 'drop-shadow(0 4px 20px rgba(37, 211, 102, 0.35))' }}
                >
                    <motion.a
                        href={SITE_CONFIG.contact.whatsapp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick()}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex items-center gap-2.5 overflow-hidden rounded-2xl no-underline cursor-pointer"
                        style={{
                            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                            padding: '14px 22px',
                            color: '#fff',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            letterSpacing: '0.01em',
                            border: '1px solid rgba(255,255,255,0.2)',
                            boxShadow: isHovered
                                ? '0 8px 32px rgba(37, 211, 102, 0.45), inset 0 1px 0 rgba(255,255,255,0.25)'
                                : '0 4px 16px rgba(37, 211, 102, 0.25), inset 0 1px 0 rgba(255,255,255,0.15)',
                            transition: 'box-shadow 0.3s ease',
                        }}
                    >
                        {/* Animated shine sweep */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={isHovered ? { x: '200%' } : { x: '-100%' }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)',
                                pointerEvents: 'none',
                            }}
                        />

                        {/* Pulse ring behind icon */}
                        <span className="relative flex items-center justify-center" style={{ width: 22, height: 22 }}>
                            <motion.span
                                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.25)',
                                }}
                            />
                            <svg className="relative" style={{ width: 20, height: 20, fill: '#fff' }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.488 4.967 1.49 5.385 0 9.768-4.386 9.77-9.77.002-2.607-1.004-5.059-2.836-6.893-1.83-1.833-4.285-2.842-6.89-2.843-5.39 0-9.774 4.387-9.777 9.774-.002 1.8.482 3.56 1.397 5.107L1.87 22.13l4.777-1.74zM17.13 14.88c-.28-.14-1.654-.816-1.91-.908-.255-.092-.44-.138-.627.142-.186.28-.72.908-.882 1.09-.163.186-.326.208-.606.068-.28-.14-1.18-.435-2.247-1.39-.83-.74-1.39-1.654-1.552-1.93-.163-.28-.018-.43.12-.57.126-.127.28-.326.42-.49.14-.163.186-.28.28-.466.092-.186.046-.35-.023-.49-.07-.14-.627-1.51-.86-2.07-.225-.544-.453-.47-.627-.478-.163-.008-.35-.01-.537-.01-.186 0-.488.07-.743.35-.256.28-.975.952-.975 2.323 0 1.37.994 2.695 1.134 2.88.14.187 1.957 2.99 4.742 4.19.662.285 1.18.455 1.583.583.665.21 1.27.18 1.75.11.533-.08 1.654-.676 1.887-1.33.232-.656.232-1.218.162-1.33-.07-.11-.256-.208-.53-.347z"/>
                            </svg>
                        </span>

                        <span className="hidden md:block relative overflow-hidden whitespace-nowrap">
                            {t('nav.chatWhatsApp', 'Chat on WhatsApp')}
                        </span>
                    </motion.a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
