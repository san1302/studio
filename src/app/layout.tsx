import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
// Toaster removed as useToast hook is removed
import { ThemeProvider } from '@/components/theme-provider'; // Import ThemeProvider

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Minimalist Muse - Personal Website',
  description: 'Articles, Portfolio, and Resume of a Minimalist Muse.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning={true}>
      {/* Added suppressHydrationWarning to html tag */}
      <body
        // Use template literals for cleaner class concatenation
        className={`min-h-screen bg-background font-sans antialiased flex flex-col ${geistSans.variable}`}
        suppressHydrationWarning={true} // Keep suppressHydrationWarning on body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow container py-10">
            {children}
          </main>
          <Footer />
          {/* Toaster component removed */}
        </ThemeProvider>
      </body>
    </html>
  );
}
