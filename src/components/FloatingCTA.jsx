"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

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
                    <a
                        href="/contact"
                        className="flex items-center gap-3 bg-brand-cyan text-[#0f172a] shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:bg-white transition-all duration-300 px-6 py-4 rounded-full font-bold"
                    >
                        <MessageSquare size={20} className="fill-current" />
                        <span className="hidden md:block overflow-hidden whitespace-nowrap">
                            Talk to Sales
                        </span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
