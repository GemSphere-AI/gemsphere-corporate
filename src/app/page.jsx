/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 */
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        let detectedLang = 'en';
        if (typeof localStorage !== 'undefined') {
            const saved = localStorage.getItem('gemsphere-preferred-language');
            if (saved) {
                detectedLang = saved;
            } else if (typeof navigator !== 'undefined') {
                const browserLang = navigator.language.split('-')[0];
                const supported = ['en', 'de', 'fr', 'es', 'ja'];
                if (supported.includes(browserLang)) {
                    detectedLang = browserLang;
                }
            }
        }
        router.replace(`/${detectedLang}/`);
    }, [router]);

    return null;
}
