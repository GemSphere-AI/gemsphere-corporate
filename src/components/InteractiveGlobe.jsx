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

const InteractiveGlobe = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            {/* Ambient Atmosphere Glow */}
            <div className="absolute inset-0 bg-brand-cyan/5 rounded-full blur-[100px] animate-pulse" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]"
            >
                {/* 3D Sphere Container */}
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                        <radialGradient id="sphereGradient" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.2)" />
                            <stop offset="100%" stopColor="rgba(79, 70, 229, 0.05)" />
                        </radialGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Outer Atmosphere Ring */}
                    <circle 
                        cx="50" cy="50" r="49" 
                        fill="none" 
                        stroke="rgba(0, 212, 255, 0.1)" 
                        strokeWidth="0.2" 
                    />

                    {/* Main Sphere Body */}
                    <circle cx="50" cy="50" r="48" fill="url(#sphereGradient)" />

                    {/* Rotating Grids (Longitude) */}
                    <motion.g
                        animate={{ rotateY: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: '50% 50%', transformStyle: 'preserve-3d' }}
                    >
                        {[0, 30, 60, 90, 120, 150].map((angle, i) => (
                            <ellipse 
                                key={i}
                                cx="50" cy="50" 
                                rx={Math.abs(48 * Math.cos(angle * Math.PI / 180))} 
                                ry="48" 
                                fill="none" 
                                stroke="rgba(79, 70, 229, 0.2)" 
                                strokeWidth="0.1" 
                            />
                        ))}
                    </motion.g>

                    {/* Rotating Grids (Latitude) */}
                    {[15, 30, 45, 60, 75].map((h, i) => {
                        const r = 48 * Math.cos((90 - h) * Math.PI / 180);
                        return (
                            <g key={i}>
                                <circle cx="50" cy={50 - h * 0.5} r={r} fill="none" stroke="rgba(79, 70, 229, 0.1)" strokeWidth="0.1" />
                                <circle cx="50" cy={50 + h * 0.5} r={r} fill="none" stroke="rgba(79, 70, 229, 0.1)" strokeWidth="0.1" />
                            </g>
                        );
                    })}

                    {/* Pulsing "Gem" Nodes (Strategic Global Points) */}
                    {[
                        { x: 30, y: 40, d: 0 },
                        { x: 70, y: 35, d: 0.5 },
                        { x: 50, y: 65, d: 1 },
                        { x: 20, y: 60, d: 1.5 },
                        { x: 80, y: 55, d: 2 },
                        { x: 45, y: 25, d: 2.5 }
                    ].map((pt, i) => (
                        <motion.g key={i}>
                            <motion.circle
                                cx={pt.x} cy={pt.y} r="0.8"
                                fill="#00d4ff"
                                filter="url(#glow)"
                                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                                transition={{ duration: 3, delay: pt.d, repeat: Infinity }}
                            />
                            <circle cx={pt.x} cy={pt.y} r="3" fill="rgba(0, 212, 255, 0.05)" />
                        </motion.g>
                    ))}
                </svg>

                {/* Floating Labels / Tech Data Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-center"
                    >
                        <div className="text-[10px] md:text-xs font-black tracking-[10px] text-brand-cyan mb-2">
                            Global Core
                        </div>
                        <div className="text-2xl md:text-4xl font-black text-slate-900/10">
                            GEMSPHERE
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default InteractiveGlobe;
