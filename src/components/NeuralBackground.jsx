/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useRef, useEffect } from 'react';

/**
 * NeuralBackground — Theme-aware particle canvas with mouse-reactive connections.
 * Dark mode: cyan particles on dark space.
 * Light mode: indigo/violet particles on light gradient mesh.
 */
const NeuralBackground = ({ className = '', particleCount = 80, connectionDistance = 120, mouseInfluence = 150 }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Theme detection
        const getIsDark = () => document.documentElement.classList.contains('dark');

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        resize();
        window.addEventListener('resize', resize);

        // Initialize particles
        const rect = canvas.getBoundingClientRect();
        particlesRef.current = Array.from({ length: particleCount }, () => ({
            x: Math.random() * rect.width,
            y: Math.random() * rect.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
        }));

        const handleMouseMove = (e) => {
            const r = canvas.getBoundingClientRect();
            mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
        };
        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        const animate = () => {
            const r = canvas.getBoundingClientRect();
            const w = r.width;
            const h = r.height;
            ctx.clearRect(0, 0, w, h);

            const isDark = getIsDark();
            const particles = particlesRef.current;
            const mouse = mouseRef.current;

            // ── Theme-aware colors ──
            // Dark: cyan particles | Light: indigo/violet particles
            const particleR = isDark ? 0 : 99;
            const particleG = isDark ? 212 : 102;
            const particleB = isDark ? 255 : 241;

            // Mouse proximity highlight colors
            const mouseHighlightR = isDark ? 0 : 139;
            const mouseHighlightG = isDark ? 212 : 92;
            const mouseHighlightB = isDark ? 255 : 246;

            // Update & draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                if (!prefersReducedMotion) {
                    p.x += p.vx;
                    p.y += p.vy;

                    // Mouse influence — works in BOTH themes
                    const mdx = mouse.x - p.x;
                    const mdy = mouse.y - p.y;
                    const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
                    if (mDist < mouseInfluence) {
                        const force = (mouseInfluence - mDist) / mouseInfluence * 0.015;
                        p.vx += mdx * force;
                        p.vy += mdy * force;
                    }

                    // Damping
                    p.vx *= 0.99;
                    p.vy *= 0.99;

                    // Wrap edges
                    if (p.x < 0) p.x = w;
                    if (p.x > w) p.x = 0;
                    if (p.y < 0) p.y = h;
                    if (p.y > h) p.y = 0;
                }

                // Enhanced opacity near mouse
                let drawOpacity = p.opacity;
                const mdx2 = mouse.x - p.x;
                const mdy2 = mouse.y - p.y;
                const mDist2 = Math.sqrt(mdx2 * mdx2 + mdy2 * mdy2);
                const isNearMouse = mDist2 < mouseInfluence * 1.5;
                
                if (isNearMouse) {
                    drawOpacity = Math.min(1, p.opacity + (1 - mDist2 / (mouseInfluence * 1.5)) * 0.6);
                }

                // Light mode gets higher base opacity for visibility
                const baseOpacityMultiplier = isDark ? 1 : 1.8;
                const finalOpacity = Math.min(1, drawOpacity * baseOpacityMultiplier);

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, isNearMouse ? p.radius * 1.5 : p.radius, 0, Math.PI * 2);

                if (isNearMouse) {
                    ctx.fillStyle = `rgba(${mouseHighlightR}, ${mouseHighlightG}, ${mouseHighlightB}, ${finalOpacity})`;
                } else {
                    ctx.fillStyle = `rgba(${particleR}, ${particleG}, ${particleB}, ${finalOpacity})`;
                }
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        // Enhance connections near mouse
                        let connectionAlpha = (1 - dist / connectionDistance) * 0.15;
                        
                        const midX = (p.x + p2.x) / 2;
                        const midY = (p.y + p2.y) / 2;
                        const midDx = mouse.x - midX;
                        const midDy = mouse.y - midY;
                        const midDist = Math.sqrt(midDx * midDx + midDy * midDy);
                        
                        if (midDist < mouseInfluence * 1.5) {
                            connectionAlpha = (1 - dist / connectionDistance) * 0.4;
                        }

                        // Light mode gets higher connection opacity
                        connectionAlpha *= isDark ? 1 : 2.2;

                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        
                        if (midDist < mouseInfluence) {
                            ctx.strokeStyle = `rgba(${mouseHighlightR}, ${mouseHighlightG}, ${mouseHighlightB}, ${connectionAlpha})`;
                            ctx.lineWidth = 0.8;
                        } else {
                            ctx.strokeStyle = `rgba(${particleR}, ${particleG}, ${particleB}, ${connectionAlpha})`;
                            ctx.lineWidth = 0.5;
                        }
                        ctx.stroke();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [particleCount, connectionDistance, mouseInfluence]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
            style={{ opacity: 0.7, willChange: 'transform, opacity', transform: 'translate3d(0,0,0)' }}
        />
    );
};

export default NeuralBackground;
