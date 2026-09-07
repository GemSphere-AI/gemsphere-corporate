/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

import { SITE_CONFIG } from '../config/siteConfig';

/**
 * Centered API & External Navigation Configuration.
 * Sourced directly from unified master configuration (SITE_CONFIG).
 */

// 1. BASE API DOMAIN & CONTEXTS
export const API_BASE_URL = SITE_CONFIG.api.baseUrl;
export const DEFAULT_TENANT = SITE_CONFIG.api.defaultTenant;

// 2. CONFIGURE ENDPOINT PATHS HERE
export const ENDPOINTS = SITE_CONFIG.api.endpoints;

/**
 * Utility function to get the absolute URL for any endpoint.
 * @param {keyof typeof ENDPOINTS} name - The name of the endpoint configured above.
 * @returns {string} The fully qualified API URL.
 */
export const getEndpointUrl = (name) => {
    const path = ENDPOINTS[name];
    if (!path) {
        throw new Error(`Endpoint "${name}" is not configured in siteConfig.js`);
    }
    return `${API_BASE_URL}${path}`;
};

// 3. CONFIGURE PLATFORM & PORTAL URLS
export const LOGIN_URL = SITE_CONFIG.portal.loginUrl;
export const REGISTER_URL = SITE_CONFIG.portal.registerUrl;
export const WHATSAPP_LINK = SITE_CONFIG.contact.whatsapp.link;

export const GLOBAL_ROUTES = [
    '/login',
    '/register',
    '/super-admin',
    '/forgot-password',
    '/reset-password',
    '/onboarding',
    '/retail',
    '/crm',
    '/marketing',
    '/booking'
];

/**
 * Programmatically triggers the Microsoft Customer Connect Teams chat widget
 */
export const triggerTeamsChat = (e) => {
    if (e && typeof e.preventDefault === 'function') {
        e.preventDefault();
    }
    if (typeof window !== 'undefined') {
        // 1. Try Microsoft Omnichannel Live Chat SDK
        const sdk = window.Microsoft?.Omnichannel?.LiveChatWidget?.SDK;
        if (sdk && typeof sdk.startChat === 'function') {
            try {
                sdk.startChat();
                return;
            } catch (err) {
                console.error("SDK startChat failed, falling back:", err);
            }
        }

        // 2. Try default chatclient-button click
        const btn = document.querySelector('.chatclient-button');
        if (btn) {
            btn.click();
            return;
        }

        // 3. If neither is available, poll for either SDK or button initialization
        if (!window.__teamsChatLoading) {
            window.__teamsChatLoading = true;
            let attempts = 0;
            const interval = setInterval(() => {
                attempts++;
                const currentSdk = window.Microsoft?.Omnichannel?.LiveChatWidget?.SDK;
                const currentBtn = document.querySelector('.chatclient-button');

                if (currentSdk && typeof currentSdk.startChat === 'function') {
                    clearInterval(interval);
                    window.__teamsChatLoading = false;
                    try {
                        currentSdk.startChat();
                    } catch (err) {
                        console.error(err);
                    }
                } else if (currentBtn) {
                    clearInterval(interval);
                    window.__teamsChatLoading = false;
                    currentBtn.click();
                } else if (attempts >= 15) { // 3 seconds
                    clearInterval(interval);
                    window.__teamsChatLoading = false;
                    window.location.href = '/contact/';
                }
            }, 200);
        }
    }
};
