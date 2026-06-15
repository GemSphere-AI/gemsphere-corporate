/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import AISolutions from '../../../views/AISolutions';

export async function generateMetadata({ params }) {
  
  return {
    title: 'AI Solutions — Intelligent Automation & Machine Learning',
    description: "Explore GemSphere's enterprise AI capabilities: intelligent automation, predictive analytics, NLP, computer vision, and ML-powered business workflows.",
    alternates: {
            canonical: '/ai-solutions'
            }
  };
}
export default function Page() {
  return <AISolutions />;
}
