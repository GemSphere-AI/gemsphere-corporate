"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { triggerTeamsChat } from '../utils/apiConfig';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);
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
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    className="fixed bottom-8 right-8 z-[100] group"
                >
                    <button
                        onClick={triggerTeamsChat}
                        className="flex items-center gap-3 bg-brand-cyan text-[#0f172a] shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:bg-white transition-all duration-300 px-6 py-4 rounded-full font-bold cursor-pointer"
                    >
                        <MessageSquare size={20} className="fill-current" />
                        <span className="hidden md:block overflow-hidden whitespace-nowrap">
                            {t('nav.contactSales', 'Talk to Teams')}
                        </span>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
