import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Rocket, Sun, Moon } from 'lucide-react';
import { AppLauncher } from '@gemsphere/ui-kit';

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
        { name: 'Services', href: '/services' },
        { name: 'Products', href: '/products' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'About', href: '/about' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/70 backdrop-blur-2xl border-b border-slate-200 shadow-xl shadow-slate-200/20' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group">
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
                        <a href="/contact" className="px-6 py-2.5 bg-brand-cyan text-white font-black rounded-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-brand-cyan/20 whitespace-nowrap">
                            Book a Demo
                        </a>
                        <AppLauncher />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <AppLauncher />
                    <button 
                        className="text-slate-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-brand-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-fade-in">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-lg font-bold">{link.name}</a>
                    ))}
                    <a href="/contact" className="btn-primary w-full text-center">Book a Demo</a>
                </div>
            )}
        </header>
    );
};

export default Header;
