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
import Link from 'next/link';
import { GLOBAL_ROUTES } from '../utils/apiConfig';


export default function LocalizedLink({ href, children, className, ...props }) {
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
    
    return (
        <Link href={localizedHref} className={className} {...props}>
            {children}
        </Link>
    );
}
