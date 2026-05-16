/*
 * Copyright © 2025 GemSphere Technologies Private Limited.
 * All rights reserved.
 */

import { initI18n } from '@gemsphere/i18n';
import en from './locales/en/common.json';

/**
 * Initialize i18n for the Corporate product.
 * Starts with English only; add more imports as translations are provided.
 */
const i18n = initI18n({
    defaultNS: 'common',
    resources: {
        en: { common: en },
    },
});

export default i18n;
