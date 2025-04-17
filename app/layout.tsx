import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { APP_DESCRIPTION, APP_NAME, APP_SERVER_URL } from '@/lib/constans';
import { Toaster } from '@/components/ui/toaster';
import '../assets/styles/glabal.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: `%s | Prostore`,
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
