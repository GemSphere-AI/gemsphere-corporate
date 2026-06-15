/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Security from '../../../views/Security';

export async function generateMetadata({ params }) {
  
  return {
    title: 'Enterprise Security — GDPR & Zero-Trust Architecture',
    description: "Learn about GemSphere's military-grade security architecture, GDPR adherence, zero-trust networking, and enterprise data protection measures.",
    alternates: {
            canonical: '/security'
            }
  };
}
export default function Page() {
    return <Security />;
}
