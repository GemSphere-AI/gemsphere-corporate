/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

import { getEndpointUrl, DEFAULT_TENANT } from './apiConfig';
import { queueOfflineSubmission } from './offlineSync';

/**
 * Submits a lead to the backend CRM intake API or queues it offline if unreachable.
 * @param {object} payload - The lead attributes (e.g. { email, name, company, source, message })
 * @returns {Promise<{ success: boolean, offline?: boolean, error?: string }>}
 */
export const submitLead = async (payload) => {
    const fullPayload = {
        targetTenant: DEFAULT_TENANT,
        ...payload
    };
    
    try {
        const endpoint = getEndpointUrl('demoRequest');
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fullPayload)
        });
        
        if (response.ok) {
            const result = await response.json().catch(() => ({ success: true }));
            return { success: true, result };
        } else if (response.status >= 500 || response.status === 0) {
            queueOfflineSubmission(endpoint, fullPayload, 'demoRequest');
            return { success: true, offline: true };
        } else {
            const result = await response.json().catch(() => ({}));
            return { success: false, error: result.message || 'Failed to submit' };
        }
    } catch (error) {
        console.warn('Network error. Saving submission offline.', error);
        try {
            queueOfflineSubmission(getEndpointUrl('demoRequest'), fullPayload, 'demoRequest');
        } catch (e) {
            console.error('Failed to queue offline lead', e);
        }
        return { success: true, offline: true };
    }
};
