import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Minimalist Muse - Personal Website',
  description: 'Articles, Portfolio, and Resume of a Minimalist Muse.',
  // Removed favicon link as it's not generated
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning={true}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col',
          geistSans.variable
        )}
      >
        <Header />
        <main className="flex-grow container py-10">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
