/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 */

import { initI18n } from '@GemSphere-AI/i18n';
import en from './locales/en/common.json';
import de from './locales/de/common.json';

/**
 * Initialize i18n for the Corporate product.
 */
const i18n = initI18n({
    defaultNS: 'common',
    resources: {
        en: { common: en },
        'en-us': { common: en },
        'en-gb': { common: en },
        'en-ae': { common: en },
        'en-in': { common: en },
        de: { common: de },
        'de-de': { common: de },
    },
});

export default i18n;
