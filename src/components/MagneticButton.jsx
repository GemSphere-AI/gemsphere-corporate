/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { GLOBAL_ROUTES } from '../utils/apiConfig';


const MagneticButton = ({ children, className = '', onClick, href, as = 'button', strength = 0.3, ...props }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const params = useParams();
    const lang = params?.lang || 'en-us';

    let localizedHref = href;
    if (typeof href === 'string' && href.startsWith('/')) {
        const globalRoutes = GLOBAL_ROUTES;
        const isGlobal = globalRoutes.some(route => href.startsWith(route));
        if (!isGlobal && !href.startsWith(`/${lang}`)) {
            localizedHref = href === '/' ? `/${lang}` : `/${lang}${href}`;
        }
    }

    const handleMouseMove = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const MotionTag = href ? motion(Link) : motion.button;

    return (
        <MotionTag
            ref={ref}
            href={localizedHref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
            className={className}
            {...props}
        >
            {children}
        </MotionTag>
    );
};

export default MagneticButton;

