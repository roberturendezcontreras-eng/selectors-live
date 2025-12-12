'use client';

import './globals.css';

export const metadata = {
  title: 'SELECTORS (LIVE) - DJ Sessions',
  description: 'Electronic music DJ sessions with Spotify integration',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
