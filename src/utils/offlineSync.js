/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

// LocalStorage keys
const OFFLINE_QUEUE_KEY = 'gemsphere_offline_queue';

/**
 * Saves a request to the offline queue
 * @param {string} endpointUrl - Fully qualified URL
 * @param {object} payload - JSON payload
 * @param {string} type - 'demoRequest' | 'testimonial'
 */
export const queueOfflineSubmission = (endpointUrl, payload, type) => {
    try {
        const stored = localStorage.getItem(OFFLINE_QUEUE_KEY);
        const queue = stored ? JSON.parse(stored) : [];
        
        // Add to queue with unique ID and timestamp
        queue.push({
            id: Math.random().toString(36).substring(2, 9),
            url: endpointUrl,
            payload,
            type,
            timestamp: Date.now(),
            attempts: 0
        });
        
        localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(queue));
        console.info(`Saved submission of type "${type}" offline.`);
    } catch (e) {
        console.error('Failed to save offline submission:', e);
    }
};

/**
 * Attempts to sync all queued offline submissions to the backend
 */
export const syncOfflineSubmissions = async () => {
    if (typeof window === 'undefined' || !navigator.onLine) {
        return;
    }
    
    const stored = localStorage.getItem(OFFLINE_QUEUE_KEY);
    if (!stored) return;
    
    let queue = [];
    try {
        queue = JSON.parse(stored);
    } catch (e) {
        return;
    }
    
    if (queue.length === 0) return;
    
    console.info(`Attempting to sync ${queue.length} offline submission(s)...`);
    
    const remainingQueue = [];
    for (const item of queue) {
        try {
            const res = await fetch(item.url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(item.payload)
            });
            
            if (res.ok) {
                console.info(`Successfully synced offline submission:`, item.id);
            } else if (res.status >= 500 || res.status === 0) {
                // Keep in queue if server is still down
                item.attempts += 1;
                if (item.attempts < 10) { // Max retry count
                    remainingQueue.push(item);
                }
            } else {
                // Discard if it's a 4xx Bad Request or other client error (to prevent infinite loops on malformed requests)
                console.warn(`Discarding invalid offline submission ${item.id} with status ${res.status}`);
            }
        } catch (err) {
            // Keep in queue if network request throws exception (e.g. still offline)
            item.attempts += 1;
            if (item.attempts < 10) {
                remainingQueue.push(item);
            }
        }
    }
    
    if (remainingQueue.length > 0) {
        localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(remainingQueue));
    } else {
        localStorage.removeItem(OFFLINE_QUEUE_KEY);
    }
};
