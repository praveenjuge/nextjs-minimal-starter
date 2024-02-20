import { GeistSans } from 'geist/font/sans';
import type { Metadata, Viewport } from 'next';
import 'tailwindcss/tailwind.css';

export const viewport: Viewport = { themeColor: '#000000' };

export const metadata: Metadata = {
  title: 'TODO',
  description: 'TODO'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} bg-white text-slate-900 antialiased [font-family:var(--font-geist-sans)] [font-synthesis:none] [text-rendering:optimizeLegibility] [touch-action:manipulation]`}
    >
      <body>{children}</body>
    </html>
  );
}
