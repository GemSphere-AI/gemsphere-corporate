/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
"use client";

import React, { forwardRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const LocalizedLink = forwardRef(({ href, children, className, ...props }, ref) => {
    const params = useParams();
    const locale = params?.locale || 'en';

    // Only localize absolute internal paths (starting with / and not external links)
    const isInternal = href && href.startsWith('/') && !href.startsWith('//');
    const localizedHref = isInternal 
        ? (href === '/' ? `/${locale}/` : `/${locale}${href}`) 
        : href;

    return (
        <Link href={localizedHref} className={className} ref={ref} {...props}>
            {children}
        </Link>
    );
});

LocalizedLink.displayName = 'LocalizedLink';

export default LocalizedLink;
