"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { WHATSAPP_LINK } from '../utils/apiConfig';

export default function FloatingWhatsApp() {
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
                    className="fixed bottom-28 right-8 z-[100] group"
                >
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:bg-white hover:text-emerald-600 transition-all duration-300 px-6 py-4 rounded-full font-bold cursor-pointer decoration-none"
                    >
                        {/* Custom high-res SVG for WhatsApp */}
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.729-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.488 4.967 1.49 5.385 0 9.768-4.386 9.77-9.77.002-2.607-1.004-5.059-2.836-6.893-1.83-1.833-4.285-2.842-6.89-2.843-5.39 0-9.774 4.387-9.777 9.774-.002 1.8.482 3.56 1.397 5.107L1.87 22.13l4.777-1.74zM17.13 14.88c-.28-.14-1.654-.816-1.91-.908-.255-.092-.44-.138-.627.142-.186.28-.72.908-.882 1.09-.163.186-.326.208-.606.068-.28-.14-1.18-.435-2.247-1.39-.83-.74-1.39-1.654-1.552-1.93-.163-.28-.018-.43.12-.57.126-.127.28-.326.42-.49.14-.163.186-.28.28-.466.092-.186.046-.35-.023-.49-.07-.14-.627-1.51-.86-2.07-.225-.544-.453-.47-.627-.478-.163-.008-.35-.01-.537-.01-.186 0-.488.07-.743.35-.256.28-.975.952-.975 2.323 0 1.37.994 2.695 1.134 2.88.14.187 1.957 2.99 4.742 4.19.662.285 1.18.455 1.583.583.665.21 1.27.18 1.75.11.533-.08 1.654-.676 1.887-1.33.232-.656.232-1.218.162-1.33-.07-.11-.256-.208-.53-.347z"/>
                        </svg>
                        <span className="hidden md:block overflow-hidden whitespace-nowrap">
                            {t('nav.chatWhatsApp', 'Chat on WhatsApp')}
                        </span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
