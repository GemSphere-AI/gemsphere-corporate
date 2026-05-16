import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Rocket, Sun, Moon } from 'lucide-react';
import { AppLauncher, getAbsoluteUrl } from '@GemSphere-AI/ui-kit';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        
        // Check initial theme
        if (document.documentElement.classList.contains('dark')) {
            setDarkMode(true);
        }
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    };

    const navLinks = [
        { name: 'Services', href: getAbsoluteUrl('/services') },
        { name: 'Industries', href: getAbsoluteUrl('/industries') },
        { name: 'Products', href: getAbsoluteUrl('/products') },
        { name: 'Case Studies', href: getAbsoluteUrl('/case-studies') },
        { name: 'About', href: getAbsoluteUrl('/about') },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/70 backdrop-blur-2xl border-b border-slate-200 shadow-xl shadow-slate-200/20' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href={getAbsoluteUrl('/')} className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-brand-cyan rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-brand-cyan/20">
                        <Rocket className="text-white fill-current" size={24} />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-slate-900">GemSphere</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-8 mr-4">
                         {navLinks.map((link) => (
                              <a 
                                  key={link.name} 
                                  href={link.href} 
                                  className="text-sm font-bold text-slate-600 hover:text-brand-cyan transition-colors"
                              >
                                  {link.name}
                              </a>
                         ))}
                    </nav>
                    
                    <div className="flex items-center gap-4">
                        <a 
                            href={getAbsoluteUrl('/login')} 
                            className="text-sm font-bold text-slate-600 hover:text-brand-cyan transition-colors whitespace-nowrap hidden lg:block"
                        >
                            Sign In
                        </a>
                        <a 
                            href={getAbsoluteUrl('/register')} 
                            className="text-sm font-bold text-slate-600 hover:text-brand-cyan transition-colors whitespace-nowrap hidden lg:block"
                        >
                            Join Ecosystem
                        </a>
                        <div className="h-6 w-px bg-slate-200 mx-2 hidden lg:block" />
                        <a href={getAbsoluteUrl('/contact')} className="px-6 py-2.5 bg-brand-cyan text-white font-black rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-cyan/20 whitespace-nowrap">
                            Book a Demo
                        </a>
                        <AppLauncher />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <AppLauncher />
                    <button 
                        className="p-2 text-slate-900 bg-slate-100 rounded-lg"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 p-8 flex flex-col gap-6 md:hidden animate-fade-in shadow-2xl">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-xl font-bold text-slate-900 border-b border-slate-50 pb-2">{link.name}</a>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-slate-100">
                        <div className="flex gap-4">
                            <a href={getAbsoluteUrl('/login')} className="flex-1 py-4 text-center border-2 border-slate-100 text-slate-600 font-bold rounded-xl">Sign In</a>
                            <a href={getAbsoluteUrl('/register')} className="flex-1 py-4 text-center border-2 border-slate-100 text-slate-600 font-bold rounded-xl">Join</a>
                        </div>
                        <a href={getAbsoluteUrl('/contact')} className="w-full text-center py-5 bg-brand-cyan text-white rounded-2xl font-black shadow-lg shadow-brand-cyan/30">Book a Demo</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
