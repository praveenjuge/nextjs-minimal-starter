import type { Metadata } from 'next';
import 'tailwindcss/tailwind.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
