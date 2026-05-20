import React, { useRef, useEffect, useState } from 'react';

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

            const particles = particlesRef.current;
            const mouse = mouseRef.current;

            // Update & draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                if (!prefersReducedMotion) {
                    p.x += p.vx;
                    p.y += p.vy;

                    // Mouse influence
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

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
                ctx.fill();

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDistance) {
                        const alpha = (1 - dist / connectionDistance) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
                        ctx.lineWidth = 0.5;
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
            style={{ opacity: 0.6 }}
        />
    );
};

export default NeuralBackground;
