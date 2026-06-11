/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Industries from '../../views/Industries';

export async function generateMetadata({ params }) {
  
  return {
    title: 'Industry Solutions — Retail, Healthcare, Fintech & More',
    description: 'See how GemSphere Technologies powers digital transformation across Retail, Healthcare, Fintech, Manufacturing, Logistics, Education, and Government sectors.',
    alternates: {
            canonical: '/industries'
            }
  };
}
export default function Page() {
  return <Industries />;
}
