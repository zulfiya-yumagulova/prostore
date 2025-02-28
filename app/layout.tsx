import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { APP_DESCRIPTION, APP_NAME, APP_SERVER_URL } from '@/lib/constans';
import '../assets/styles/glabal.css';
// import '@/assets/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Prostore `,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(APP_SERVER_URL),
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
