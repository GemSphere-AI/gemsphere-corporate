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
import { useParams } from 'next/navigation';

export default function LocalizedLink({ href, children, className, ...props }) {
    const params = useParams();
    const lang = params?.lang || 'en-us';
    
    let localizedHref = href;
    if (typeof href === 'string' && href.startsWith('/')) {
        // Prevent double prefixing if somehow already prefixed
        if (!href.startsWith(`/${lang}`)) {
            // Special case for root
            localizedHref = href === '/' ? `/${lang}` : `/${lang}${href}`;
        }
    }
    
    return (
        <a href={localizedHref} className={className} {...props}>
            {children}
        </a>
    );
}
