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
import ar from './locales/ar/common.json';
import ptBr from './locales/pt-br/common.json';

/**
 * Initialize i18n for the Corporate product across all 7 global enterprise locales.
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
        'ja-jp': { common: ja },
        ar: { common: ar },
        'ar-ae': { common: ar },
        'ar-sa': { common: ar },
        'pt-br': { common: ptBr },
        pt: { common: ptBr }
    },
});

export default i18n;
