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
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
