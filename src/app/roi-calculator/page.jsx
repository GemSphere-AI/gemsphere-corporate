/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import RoiCalculator from '../../views/RoiCalculator';

export async function generateMetadata({ params }) {
  
  return {
    title: 'Enterprise ROI Calculator — Measure Cost Savings',
    description: 'Use the interactive GemSphere ROI Calculator to estimate licensing cost reductions, manual hour savings, and total return on investment.',
    alternates: {
            canonical: '/roi-calculator'
            }
  };
}
export default function Page() {
  return <RoiCalculator />;
}
