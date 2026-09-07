/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

import { SITE_CONFIG } from '../config/siteConfig';

export const GA_MEASUREMENT_ID = SITE_CONFIG.analytics.gaMeasurementId;

/**
 * Dispatches custom events to Google Analytics 4 with consent validation.
 */
export function trackEvent(eventName, eventParams = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;

  try {
    const consent = localStorage.getItem('gemsphere-cookie-consent');
    if (consent) {
      const parsed = JSON.parse(consent);
      if (parsed && parsed.analytics === false) return; // User opted out
    }
  } catch (e) {
    // Non-blocking fallback
  }

  window.gtag('event', eventName, {
    send_to: GA_MEASUREMENT_ID,
    timestamp: new Date().toISOString(),
    ...eventParams
  });
}

/**
 * High-value conversion event: Contact form submission
 */
export function trackLeadSubmission({ formName = 'contact_sales', productInterest = 'general' } = {}) {
  trackEvent('generate_lead', {
    event_category: 'engagement',
    event_label: formName,
    product_interest: productInterest
  });
}

/**
 * High-value conversion event: Architecture scoping wizard
 */
export function trackScopingInteraction({ action = 'start', modulesCount = 0 } = {}) {
  trackEvent('scoping_wizard_interaction', {
    event_category: 'architecture_wizard',
    wizard_action: action,
    modules_selected: modulesCount
  });
}

/**
 * Conversion event: ROI Calculator computed
 */
export function trackRoiCalculation({ estimatedSavings = 0, companySize = 'mid-market' } = {}) {
  trackEvent('roi_calculated', {
    event_category: 'conversion_tool',
    savings_tier: estimatedSavings,
    company_size: companySize
  });
}

/**
 * Mobile app event: Google Play Store link/badge clicked
 */
export function trackPlayStoreClick({ moduleName = 'POS' } = {}) {
  trackEvent('playstore_badge_click', {
    event_category: 'mobile_app',
    platform: SITE_CONFIG.mobileApp.platform,
    store: SITE_CONFIG.mobileApp.storeName,
    module_name: moduleName
  });
}

/**
 * Instant engagement event: WhatsApp floating button clicked
 */
export function trackWhatsAppClick({ sourcePage = '' } = {}) {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    page_location: sourcePage || (typeof window !== 'undefined' ? window.location.pathname : '')
  });
}
