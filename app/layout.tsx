import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../assets/styles/glabal.css';
// import '@/assets/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Prostore',
  description: 'A modern ecomerce app built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>{children}</body>
    </html>
  );
}
