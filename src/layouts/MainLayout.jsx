import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { LightGlassmorphicTheme } from '@GemSphere-AI/ui-kit';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
    const location = useLocation();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
    
    // Custom cursor glow follower
    useEffect(() => {
        const updateCursor = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateCursor);
        return () => window.removeEventListener('mousemove', updateCursor);
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <ThemeProvider theme={LightGlassmorphicTheme}>
            <CssBaseline />
            
            {/* Custom Cursor Glow (only visible on desktop) */}
            <div 
                className="pointer-events-none fixed inset-0 z-50 mix-blend-screen hidden lg:block"
                style={{
                    background: `radial-gradient(600px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(0,212,255,0.06), transparent 40%)`
                }}
            />

            {/* Top Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-indigo z-[100] origin-left"
                style={{ scaleX }}
            />

            <div className="flex flex-col min-h-screen relative overflow-hidden bg-brand-dark">
                
                {/* Global Background Ambient Layers */}
                <div className="fixed inset-0 pointer-events-none z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-indigo/10 rounded-full blur-[150px] animate-pulse-glow" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand-cyan/5 rounded-full blur-[150px]" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
                </div>

                <Header />

                {/* Page Transitions Wrapper */}
                <main className="flex-grow relative z-10 pt-[100px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>

                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default MainLayout;
