import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Premium World Map with actual continent outlines, animated connections,
 * pulsing hub nodes, and region stat badges.
 * Uses simplified Natural Earth projection paths for recognizable geography.
 */
const WorldMap = ({ className = '' }) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const check = () => setIsDark(document.documentElement.classList.contains('dark'));
        check();
        const obs = new MutationObserver(check);
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => obs.disconnect();
    }, []);

    const pal = {
        land: isDark ? 'rgba(0, 212, 255, 0.12)' : 'rgba(99, 102, 241, 0.12)',
        landStroke: isDark ? 'rgba(0, 212, 255, 0.3)' : 'rgba(99, 102, 241, 0.3)',
        grid: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(15, 23, 42, 0.06)',
        conn: isDark ? 'rgba(0, 212, 255, 0.3)' : 'rgba(99, 102, 241, 0.35)',
        dot: isDark ? '#00d4ff' : '#6366f1',
        pulse: isDark ? 'rgba(0, 212, 255, 0.4)' : 'rgba(99, 102, 241, 0.35)',
        label: isDark ? 'text-cyan-300/70' : 'text-indigo-500/80',
        badge: isDark ? 'bg-gray-900/80 border-cyan-500/30 text-cyan-400' : 'bg-white/90 border-indigo-200 text-indigo-600',
    };

    // Simplified but RECOGNIZABLE continent paths (equirectangular, viewBox 0 0 1000 500)
    const continents = [
        // North America
        { d: 'M55,115 L75,100 L95,95 L120,80 L155,72 L185,68 L210,72 L230,78 L250,90 L260,100 L268,115 L270,130 L265,148 L255,160 L248,175 L240,180 L225,185 L218,195 L205,205 L195,215 L185,218 L172,225 L160,232 L148,238 L140,242 L132,248 L125,240 L120,232 L115,228 L105,222 L98,215 L90,205 L82,192 L75,178 L68,165 L60,150 L55,138 Z' },
        // South America
        { d: 'M195,275 L210,268 L225,265 L238,270 L248,278 L258,290 L265,305 L270,320 L272,338 L270,355 L265,370 L258,382 L250,392 L240,400 L228,408 L218,412 L208,408 L198,398 L192,385 L188,372 L185,358 L182,342 L180,325 L182,310 L185,298 L190,285 Z' },
        // Europe
        { d: 'M440,72 L455,68 L472,65 L488,68 L505,72 L518,78 L528,85 L535,95 L538,105 L535,115 L528,122 L518,128 L510,135 L500,140 L488,142 L478,145 L468,148 L458,145 L448,140 L440,132 L435,122 L432,112 L430,102 L432,90 L435,80 Z' },
        // Africa
        { d: 'M445,165 L460,158 L478,155 L495,158 L510,165 L522,175 L530,188 L535,202 L538,218 L538,235 L535,252 L530,268 L522,282 L512,295 L500,305 L488,312 L475,315 L462,312 L450,305 L440,295 L432,282 L428,268 L425,252 L425,235 L428,218 L432,202 L438,188 L442,175 Z' },
        // Asia (main mass)
        { d: 'M540,55 L565,48 L595,42 L628,40 L660,42 L690,48 L718,55 L742,65 L762,78 L778,92 L788,108 L792,125 L788,142 L780,158 L768,172 L752,182 L735,188 L718,192 L698,195 L678,195 L658,192 L640,188 L622,182 L605,175 L590,165 L578,155 L565,142 L555,128 L548,115 L542,100 L540,85 L538,70 Z' },
        // India / South Asia
        { d: 'M620,195 L638,192 L655,195 L668,202 L678,212 L685,225 L688,240 L685,255 L678,265 L668,272 L655,278 L640,278 L628,272 L618,265 L612,255 L608,240 L610,225 L615,212 Z' },
        // Southeast Asia / Indonesia
        { d: 'M700,200 L720,198 L740,202 L755,210 L765,222 L770,235 L768,248 L760,258 L748,265 L735,268 L720,268 L708,262 L698,252 L692,240 L690,228 L692,215 L695,205 Z' },
        // Australia
        { d: 'M740,320 L762,312 L785,310 L808,315 L825,325 L835,340 L838,358 L832,375 L820,388 L805,395 L788,398 L770,395 L755,388 L742,375 L735,360 L732,345 L735,330 Z' },
        // Greenland
        { d: 'M265,42 L285,38 L305,40 L318,48 L325,60 L322,72 L312,82 L298,85 L282,82 L270,75 L262,65 L260,52 Z' },
        // UK / Ireland
        { d: 'M425,82 L432,78 L440,80 L445,88 L442,96 L435,100 L428,98 L424,92 Z' },
        // Japan
        { d: 'M795,100 L802,95 L810,98 L815,108 L812,120 L805,128 L798,125 L792,118 L790,108 Z' },
    ];

    const regions = [
        { id: 'na', name: 'AMERICAS', x: 17, y: 33, stat: '45+', label: 'Countries' },
        { id: 'eu', name: 'EUROPE', x: 48, y: 20, stat: '38+', label: 'Countries' },
        { id: 'af', name: 'AFRICA', x: 48, y: 50, stat: '24+', label: 'Countries' },
        { id: 'me', name: 'MIDDLE EAST', x: 57, y: 36, stat: 'HQ', label: 'Dubai' },
        { id: 'sa', name: 'SOUTH ASIA', x: 65, y: 46, stat: '28+', label: 'Countries' },
        { id: 'ap', name: 'ASIA PACIFIC', x: 79, y: 30, stat: '35+', label: 'Countries' },
    ];

    const connections = [
        [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [0, 5], [3, 2], [0, 3],
    ].map(([a, b]) => ({ from: regions[a], to: regions[b] }));

    return (
        <div className={`relative w-full ${className}`}>
            <svg viewBox="0 0 1000 500" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <radialGradient id="hubGlow">
                        <stop offset="0%" stopColor={pal.dot} stopOpacity="0.35" />
                        <stop offset="100%" stopColor={pal.dot} stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Latitude / Longitude grid */}
                {Array.from({ length: 21 }, (_, i) => (
                    <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" stroke={pal.grid} strokeWidth="0.5" />
                ))}
                {Array.from({ length: 11 }, (_, i) => (
                    <line key={`h${i}`} x1="0" y1={i * 50} x2="1000" y2={i * 50} stroke={pal.grid} strokeWidth="0.5" />
                ))}
                {/* Equator */}
                <line x1="0" y1="250" x2="1000" y2="250" stroke={pal.landStroke} strokeWidth="0.5" strokeDasharray="8 4" opacity="0.3" />

                {/* Continents */}
                {continents.map((c, i) => (
                    <motion.path
                        key={i}
                        d={c.d}
                        fill={pal.land}
                        stroke={pal.landStroke}
                        strokeWidth="1"
                        strokeLinejoin="round"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08 }}
                    />
                ))}

                {/* Connection arcs */}
                {connections.map((c, i) => {
                    const x1 = c.from.x * 10, y1 = c.from.y * 5;
                    const x2 = c.to.x * 10, y2 = c.to.y * 5;
                    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.15;
                    return (
                        <g key={`c${i}`}>
                            <motion.path
                                d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
                                fill="none"
                                stroke={pal.conn}
                                strokeWidth="1"
                                strokeDasharray="6 4"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5 + i * 0.12 }}
                            />
                            {/* Traveling dot */}
                            <motion.circle
                                r="3"
                                fill={pal.dot}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.8 + i * 0.1 }}
                            >
                                <animateMotion
                                    dur={`${4 + i * 0.6}s`}
                                    repeatCount="indefinite"
                                    path={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
                                />
                            </motion.circle>
                        </g>
                    );
                })}

                {/* Hub nodes */}
                {regions.map((r, i) => {
                    const cx = r.x * 10, cy = r.y * 5;
                    return (
                        <g key={r.id}>
                            <circle cx={cx} cy={cy} r="20" fill="url(#hubGlow)" />
                            <motion.circle
                                cx={cx} cy={cy} r="12"
                                fill="none" stroke={pal.pulse} strokeWidth="1"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                                style={{ transformOrigin: `${cx}px ${cy}px` }}
                            />
                            <motion.circle
                                cx={cx} cy={cy} r="6"
                                fill={pal.dot}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', stiffness: 200, delay: 0.3 + i * 0.1 }}
                            />
                            <circle cx={cx} cy={cy} r="2.5" fill="white" opacity="0.8" />
                        </g>
                    );
                })}
            </svg>

            {/* Labels */}
            {regions.map((r, i) => (
                <motion.div
                    key={`lbl-${r.id}`}
                    className="absolute pointer-events-none flex flex-col items-center gap-0.5"
                    style={{ left: `${r.x}%`, top: `${r.y + 8}%`, transform: 'translateX(-50%)' }}
                    initial={{ opacity: 0, y: 4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 + i * 0.1 }}
                >
                    <span className={`text-[7px] md:text-[9px] font-extrabold tracking-[0.15em] whitespace-nowrap ${pal.label}`}>
                        {r.name}
                    </span>
                    <span className={`text-[6px] md:text-[8px] font-bold px-2 py-0.5 rounded-full border backdrop-blur-sm whitespace-nowrap ${pal.badge}`}>
                        {r.stat} {r.label}
                    </span>
                </motion.div>
            ))}

            {/* HQ Marker */}
            <motion.div
                className="absolute pointer-events-none"
                style={{ left: '57%', top: '28%', transform: 'translateX(-50%)' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2, type: 'spring' }}
            >
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border backdrop-blur-md text-[7px] md:text-[9px] font-bold ${pal.badge}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Global HQ — Dubai
                </div>
            </motion.div>
        </div>
    );
};

export default WorldMap;
