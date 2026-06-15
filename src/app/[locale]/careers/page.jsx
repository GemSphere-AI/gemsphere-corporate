/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import Careers from '../../../views/Careers';

export async function generateMetadata({ params }) {
  
  return {
    title: 'Careers — Join Our Global Engineering Team',
    description: 'Explore career opportunities at GemSphere Technologies. Join a team of world-class engineers building the future of enterprise software.',
    alternates: {
            canonical: '/careers'
            }
  };
}
export default function Page() {
  return <Careers />;
}
