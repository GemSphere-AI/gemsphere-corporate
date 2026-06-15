/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 */

import { initI18n } from '@GemSphere-AI/i18n';
import en from './locales/en/common.json';
import de from './locales/de/common.json';
import fr from './locales/fr/common.json';
import es from './locales/es/common.json';
import ja from './locales/ja/common.json';

/**
 * Initialize i18n for the Corporate product.
 */
const i18n = initI18n({
    defaultNS: 'common',
    resources: {
        en: { common: en },
        'en-us': { common: en },
        de: { common: de },
        'de-de': { common: de },
        fr: { common: fr },
        'fr-fr': { common: fr },
        es: { common: es },
        'es-es': { common: es },
        ja: { common: ja },
        'ja-jp': { common: ja }
    },
});

export default i18n;
