/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import DeleteAccount from '../../../views/DeleteAccount';
import { getCanonicalAndHreflang } from '../../../utils/seoHelpers';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const { canonical, languages } = getCanonicalAndHreflang('/delete-account', locale);
  return {
    title: 'Account Deletion Request | GemSphere Technologies',
    description: 'Request permanent deletion of your account and associated personal data in compliance with Google Play Store data safety policies.',
    alternates: {
      canonical,
      languages
    }
  };
}

export default function Page() {
  return <DeleteAccount />;
}
