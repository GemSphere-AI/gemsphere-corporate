/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { LightGlassmorphicTheme, PlatformHeader, PlatformFooter } from '@GemSphere-AI/ui-kit';
import TrustBadges from '../components/TrustBadges';


const MainLayout = ({ children }) => {
    const pathname = usePathname();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
    const [isDark, setIsDark] = useState(false);
    
    // Custom cursor glow follower
    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateCursor);
        return () => window.removeEventListener('mousemove', updateCursor);
    }, []);

    // Theme detection for cursor glow
    useEffect(() => {
        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
        check();
        const obs = new MutationObserver(check);
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => obs.disconnect();
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // Construct Nav Items for the shared PlatformHeader
    const navItems = (
        <>
            <Button component="a" href="/solutions" sx={{ color: 'text.secondary', fontWeight: 600 }}>Solutions</Button>
            <Button component="a" href="/services" sx={{ color: 'text.secondary', fontWeight: 600 }}>Services</Button>
            <Button component="a" href="/industries" sx={{ color: 'text.secondary', fontWeight: 600 }}>Industries</Button>
            <Button component="a" href="/about" sx={{ color: 'text.secondary', fontWeight: 600 }}>Company</Button>
        </>
    );

    const actionItems = (
        <>
            <Button component="a" href="/login" sx={{ color: 'text.secondary', fontWeight: 700 }}>Sign In</Button>
            <Button component="a" href="/contact" variant="contained" sx={{ borderRadius: '10px', fontWeight: 800, ml: 1 }}>Talk to Sales</Button>
        </>
    );

    return (
        <ThemeProvider theme={LightGlassmorphicTheme}>
            <CssBaseline />
            
            {/* Ambient Background Base */}
            <div className="fixed inset-0 bg-brand-light dark:bg-[#06080F] transition-colors duration-500 -z-50" />

            {/* Dynamic Cursor Glow (only visible on dark mode) */}
            <div 
                className="fixed w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-500 blur-[120px] -z-40 mix-blend-screen"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, rgba(99, 102, 241, 0.05) 40%, transparent 70%)',
                    left: cursorPos.x - 300,
                    top: cursorPos.y - 300,
                    opacity: isDark ? 1 : 0
                }}
            />

            {/* Global Top Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-indigo to-brand-magenta transform-origin-0 z-[100]"
                style={{ scaleX }}
            />

            <div className="flex flex-col min-h-screen relative overflow-hidden bg-transparent">
                <PlatformHeader 
                    tenantName="GemSphere" 
                    navItems={navItems}
                    actionItems={actionItems}
                />

                {/* Page Transitions Wrapper */}
                <main className="flex-grow relative z-10 pt-[100px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>

                <TrustBadges />
                <PlatformFooter tenantName="GemSphere" />
            </div>
        </ThemeProvider>
    );
};

export default MainLayout;
