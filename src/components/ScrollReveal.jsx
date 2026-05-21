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

const directionVariants = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
    scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
};

const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
    threshold = 0.15,
    stagger = false,
    staggerDelay = 0.1,
}) => {
    const variants = directionVariants[direction] || directionVariants.up;

    if (stagger) {
        return (
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once, amount: threshold }}
                transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
                className={className}
            >
                {React.Children.map(children, (child) => (
                    <motion.div
                        variants={variants}
                        transition={{
                            duration,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        {child}
                    </motion.div>
                ))}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
            variants={variants}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
