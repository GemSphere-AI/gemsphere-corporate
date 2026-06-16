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
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
