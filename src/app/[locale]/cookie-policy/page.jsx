/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import CookiePolicy from '../../../views/CookiePolicy';

export async function generateMetadata({ params }) {
  
  return {
    title: 'Cookie Policy',
    description: 'GemSphere Technologies Cookie Policy — understand how we use cookies and similar tracking technologies on our website.',
    alternates: {
            canonical: '/cookie-policy'
            }
  };
}
export default function Page() {
  return <CookiePolicy />;
}
