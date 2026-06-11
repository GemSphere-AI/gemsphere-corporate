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
import Link from 'next/link';


export default function LocalizedLink({ href, children, className, ...props }) {
    return (
        <Link href={href} className={className} {...props}>
            {children}
        </Link>
    );
}
