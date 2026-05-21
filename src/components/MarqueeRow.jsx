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

const MarqueeRow = ({ children, speed = 40, reverse = false, pauseOnHover = true, className = '' }) => {
    const duration = `${speed}s`;

    return (
        <div
            className={`overflow-hidden relative ${className}`}
            style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}
        >
            <div
                className={`flex gap-8 w-max ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
                style={{
                    animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${duration} linear infinite`,
                }}
            >
                {/* Duplicate content for seamless loop */}
                <div className="flex gap-8 shrink-0 items-center">
                    {children}
                </div>
                <div className="flex gap-8 shrink-0 items-center" aria-hidden="true">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MarqueeRow;
