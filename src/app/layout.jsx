/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 */
import '../index.css';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
