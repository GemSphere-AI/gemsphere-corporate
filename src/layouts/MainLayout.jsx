import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { LightGlassmorphicTheme } from '@GemSphere-AI/ui-kit';

const MainLayout = () => {
    return (
        <ThemeProvider theme={LightGlassmorphicTheme}>
            <CssBaseline />
            <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-cyan/20 overflow-x-hidden">
                <Header />
                <main className="relative pt-24">
                    {/* Mesh Gradient Background Layer */}
                    <div className="fixed inset-0 pointer-events-none -z-10 opacity-30">
                        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-brand-cyan/20 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-indigo/20 rounded-full blur-[100px]" />
                    </div>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default MainLayout;
