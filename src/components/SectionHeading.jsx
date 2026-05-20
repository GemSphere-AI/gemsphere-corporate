import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ badge, title, titleHighlight, subtitle, align = 'center', className = '' }) => {
    return (
        <div className={`${align === 'center' ? 'text-center' : 'text-left'} mb-16 md:mb-20 ${className}`}>
            {badge && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/8 border border-brand-cyan/15 text-brand-cyan text-xs font-semibold uppercase tracking-[0.2em] mb-6"
                >
                    {badge}
                </motion.div>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6 text-text-primary leading-[1.1]"
            >
                {title}{' '}
                {titleHighlight && (
                    <span className="text-gradient-animated">{titleHighlight}</span>
                )}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`text-lg md:text-xl text-text-tertiary font-medium leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionHeading;
