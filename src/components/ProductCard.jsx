/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ icon: Icon, title, description, modules, delay = 0, onClick, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            onClick={onClick}
            className={`group relative glass-card rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-brand-cyan/20 ${className}`}
        >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-cyan/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
                {/* Icon */}
                {Icon && (
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-cyan/15 transition-all duration-300">
                        <Icon className="text-brand-cyan" size={24} />
                    </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold font-display mb-3 text-text-primary group-hover:text-brand-cyan transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                {description && (
                    <p className="text-sm text-text-tertiary leading-relaxed mb-4">
                        {description}
                    </p>
                )}

                {/* Module tags */}
                {modules && modules.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                        {modules.slice(0, 4).map((mod, i) => (
                            <span
                                key={i}
                                className="px-2.5 py-1 text-[11px] font-medium rounded-md glass-subtle text-text-tertiary border border-brand-border"
                            >
                                {mod}
                            </span>
                        ))}
                        {modules.length > 4 && (
                            <span className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-brand-cyan/10 text-brand-cyan">
                                +{modules.length - 4} more
                            </span>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProductCard;
