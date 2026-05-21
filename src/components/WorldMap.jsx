/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium World Map Ã¢â‚¬â€ Uses high-fidelity external SVG for recognizable geography.
 * Theme-aware with animated data-flow connections, pulsing hubs, and floating labels.
 */

// Ã¢â€â‚¬Ã¢â€â‚¬ Hub Regions mapped to the 784x458 grid Ã¢â€â‚¬Ã¢â€â‚¬
const HUBS = [
    { id: 'na', name: 'AMERICAS', cx: 160, cy: 130, stat: '45+', label: 'Countries', color: '#00d4ff' },
    { id: 'eu', name: 'EUROPE', cx: 400, cy: 110, stat: '38+', label: 'Countries', color: '#6366f1' },
    { id: 'me', name: 'MIDDLE EAST', cx: 490, cy: 190, stat: '12+', label: 'Countries', color: '#10b981' },
    { id: 'af', name: 'AFRICA', cx: 420, cy: 260, stat: '24+', label: 'Countries', color: '#f59e0b' },
    { id: 'sa', name: 'SOUTH ASIA', cx: 580, cy: 220, stat: 'HQ', label: 'Bangalore', color: '#8b5cf6' },
    { id: 'ap', name: 'ASIA PACIFIC', cx: 670, cy: 180, stat: '35+', label: 'Countries', color: '#f43f5e' },
];

const CONNECTIONS = [
    [0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [0, 5], [1, 3], [0, 3], [1, 5], [3, 4],
];

const WorldMap = ({ className = '' }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
        check();
        const obs = new MutationObserver(check);
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => obs.disconnect();
    }, []);

    // Theme palette
    const p = {
        grid: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15,23,42,0.04)',
        conn: isDark ? 'rgba(0,212,255,0.25)' : 'rgba(99,102,241,0.2)',
        hubGlow: isDark ? 'rgba(0,212,255,0.3)' : 'rgba(99,102,241,0.2)',
        travelDot: isDark ? '#00d4ff' : '#6366f1',
    };

    // Generate curved path between two hubs
    const arcPath = (from, to) => {
        const dx = to.cx - from.cx;
                const mx = (from.cx + to.cx) / 2;
        const my = (from.cy + to.cy) / 2 - Math.abs(dx) * 0.18;
        return `M${from.cx},${from.cy} Q${mx},${my} ${to.cx},${to.cy}`;
    };

    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            <div className="relative w-full aspect-[784/458] max-w-5xl mx-auto">

                {/* Ã¢â€â‚¬Ã¢â€â‚¬ HIGH FIDELITY MAP MASK Ã¢â€â‚¬Ã¢â€â‚¬ */}
                <div
                    className="absolute inset-0 transition-colors duration-700 ease-in-out"
                    style={{
                        backgroundColor: isDark ? '#0f2942' : '#dbeafe', // Dark blue vs Light blue landmass
                        maskImage: "url('/world-map.svg')",
                        WebkitMaskImage: "url('/world-map.svg')",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                        opacity: isDark ? 0.8 : 0.9
                    }}
                />

                {/* Ã¢â€â‚¬Ã¢â€â‚¬ OVERLAY SVG FOR HUBS & CONNECTIONS Ã¢â€â‚¬Ã¢â€â‚¬ */}
                <svg
                    viewBox="0 0 784 458"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        {/* Dot filter for glow */}
                        <filter id="wm-glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Grid lines */}
                    {Array.from({ length: 16 }, (_, i) => (
                        <line key={`gv${i}`} x1={i * 50 + 17} y1="0" x2={i * 50 + 17} y2="458" stroke={p.grid} strokeWidth="0.5" />
                    ))}
                    {Array.from({ length: 10 }, (_, i) => (
                        <line key={`gh${i}`} x1="0" y1={i * 50 + 4} x2="784" y2={i * 50 + 4} stroke={p.grid} strokeWidth="0.5" />
                    ))}

                    {/* Equator line */}
                    <line x1="0" y1="280" x2="784" y2="280" stroke={p.grid} strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />

                    {/* Ã¢â€â‚¬Ã¢â€â‚¬ CONNECTION ARCS Ã¢â€â‚¬Ã¢â€â‚¬ */}
                    {CONNECTIONS.map(([a, b], i) => {
                        const from = HUBS[a], to = HUBS[b];
                        const path = arcPath(from, to);
                        return (
                            <g key={`conn-${i}`}>
                                <motion.path
                                    d={path}
                                    fill="none"
                                    stroke={p.conn}
                                    strokeWidth="1"
                                    strokeDasharray="4 3"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                                />
                                {/* Traveling data dot */}
                                <circle r="2" fill={p.travelDot} filter="url(#wm-glow)" opacity="0.9">
                                    <animateMotion dur={`${4 + i * 0.6}s`} repeatCount="indefinite" path={path} />
                                </circle>
                                <circle r="1" fill="#fff" opacity="0.9">
                                    <animateMotion dur={`${4 + i * 0.6}s`} repeatCount="indefinite" path={path} />
                                </circle>
                            </g>
                        );
                    })}

                    {/* Ã¢â€â‚¬Ã¢â€â‚¬ HUB NODES Ã¢â€â‚¬Ã¢â€â‚¬ */}
                    {HUBS.map((hub, i) => (
                        <g key={hub.id}>
                            {/* Pulse ring 1 */}
                            <motion.circle
                                cx={hub.cx} cy={hub.cy} r="12"
                                fill="none" stroke={p.hubGlow} strokeWidth="1"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 3.5, delay: i * 0.6, repeat: Infinity, ease: 'easeOut' }}
                                style={{ transformOrigin: `${hub.cx}px ${hub.cy}px` }}
                            />
                            {/* Center dot */}
                            <motion.circle
                                cx={hub.cx} cy={hub.cy} r="4"
                                fill={hub.color}
                                filter="url(#wm-glow)"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', stiffness: 200, delay: 0.3 + i * 0.1 }}
                            />
                            <circle cx={hub.cx} cy={hub.cy} r="1.5" fill="white" opacity="0.9" />
                        </g>
                    ))}
                </svg>

                {/* Ã¢â€â‚¬Ã¢â€â‚¬ FLOATING LABELS (HTML overlay for crisp text) Ã¢â€â‚¬Ã¢â€â‚¬ */}
                {HUBS.map((hub, i) => {
                    const leftPct = (hub.cx / 784) * 100;
                    const topPct = ((hub.cy + 22) / 458) * 100;
                    return (
                        <motion.div
                            key={`lbl-${hub.id}`}
                            className="absolute pointer-events-none flex flex-col items-center gap-1"
                            style={{ left: `${leftPct}%`, top: `${topPct}%`, transform: 'translateX(-50%)' }}
                            initial={{ opacity: 0, y: 6 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                        >
                            <span
                                className="text-[9px] md:text-[12px] font-black tracking-[0.12em] whitespace-nowrap"
                                style={{
                                    color: isDark ? '#e2e8f0' : '#1e293b',
                                    textShadow: isDark ? '0 1px 4px rgba(0,0,0,0.8)' : '0 1px 3px rgba(255,255,255,0.9)'
                                }}
                            >
                                {hub.name}
                            </span>
                            <span
                                className="text-[8px] md:text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg"
                                style={{
                                    backgroundColor: hub.color,
                                    color: '#ffffff',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                                    boxShadow: `0 2px 8px ${hub.color}66`
                                }}
                            >
                                {hub.stat} {hub.label}
                            </span>
                        </motion.div>
                    );
                })}

                {/* Ã¢â€â‚¬Ã¢â€â‚¬ HQ MARKER Ã¢â€â‚¬Ã¢â€â‚¬ */}
                <motion.div
                    className="absolute pointer-events-none"
                    style={{
                        left: `${(580 / 784) * 100}%`,
                        top: `${(195 / 458) * 100}%`,
                        transform: 'translateX(-50%)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, type: 'spring', stiffness: 150 }}
                >
                    <div
                        className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[9px] md:text-[12px] font-bold shadow-xl"
                        style={{
                            backgroundColor: '#10b981',
                            color: '#ffffff',
                            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                            boxShadow: '0 4px 14px rgba(16,185,129,0.5)'
                        }}
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        Global HQ Bangalore
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WorldMap;
