/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

/**
 * Centered API Configuration for GemSphere Corporate Website.
 * Use this file to modify base domains, request endpoints, and tenant contexts.
 */

// 1. CONFIGURE BASE API DOMAIN HERE
// Toggle between gemsphere.ai, gemsphere.in, localhost, or environment variables
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://gemsphere.in';

// 2. CONFIGURE DEFAULT TENANT IDENTIFIER HERE
// Specifies which tenant target gets associated with public form leads / requests
export const DEFAULT_TENANT = process.env.NEXT_PUBLIC_TARGET_TENANT || 'system';

// 3. CONFIGURE ENDPOINT PATHS HERE
export const ENDPOINTS = {
    // GET: Retrieves list of testimonials (database records)
    // POST: Submits a new customer testimonial
    testimonials: '/v1/testimonials',

    // POST: Submits a trial / demo booking request (leads)
    demoRequest: '/api/v1/public/leads/demo-request',

    // POST: Tenant trial onboarding/registration request
    trialRegistration: '/identity/auth/discovery/register'
};

/**
 * Utility function to get the absolute URL for any endpoint.
 * @param {keyof typeof ENDPOINTS} name - The name of the endpoint configured above.
 * @returns {string} The fully qualified API URL.
 */
export const getEndpointUrl = (name) => {
    const path = ENDPOINTS[name];
    if (!path) {
        throw new Error(`Endpoint "${name}" is not configured in apiConfig.js`);
    }
    return `${API_BASE_URL}${path}`;
};

// 4. CONFIGURE PLATFORM URLS (DYNAMIC OR STATIC)
export const LOGIN_URL = 'https://gemsphere.in/login';
export const REGISTER_URL = 'https://gemsphere.in/register';
export const WHATSAPP_LINK = 'https://wa.me/917892585801'; // Replace with company's WhatsApp number


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


