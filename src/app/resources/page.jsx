/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Resources from '../../views/Resources';

export async function generateMetadata({ params }) {
  
  return {
    title: 'Enterprise Knowledge Hub — Resources & Whitepapers',
    description: 'Explore the GemSphere resource library featuring enterprise AI deployment checklists, cloud migration blueprints, and integration guides.',
    alternates: {
            canonical: '/resources'
            }
  };
}
export default function Page() {
  return <Resources />;
}
