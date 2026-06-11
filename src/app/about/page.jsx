/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import About from '../../views/About';

export async function generateMetadata({ params }) {
  
  return {
    title: 'About Us — Our Mission & Vision',
    description: 'Learn about GemSphere Technologies — a global AI-powered enterprise software company founded to engineer intelligent digital enterprises across 170+ countries.',
    alternates: {
            canonical: '/about'
            }
  };
}
export default function Page() {
  return <About />;
}
