'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, CodeXml } from 'lucide-react'; // Changed Feather to CodeXml
import * as React from 'react';
import { ThemeToggle } from '@/components/theme-toggle'; // Import ThemeToggle

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/articles', label: 'Articles' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/resume', label: 'Resume' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" /> {/* Changed Feather to CodeXml and text-accent to text-primary */}
          <span className="font-bold hidden sm:inline-block">Minimalist Muse</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium flex-grow">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === item.href ? 'text-foreground font-semibold' : 'text-foreground/60' // Adjusted active state style
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
           <ThemeToggle /> {/* Add theme toggle for mobile */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 pt-12">
              <Link href="/" className="flex items-center mb-8 px-6" onClick={closeSheet}>
                 <CodeXml className="h-6 w-6 mr-2 text-primary" /> {/* Changed Feather to CodeXml and text-accent to text-primary */}
                <span className="font-bold">Minimalist Muse</span>
              </Link>
              <nav className="flex flex-col space-y-4 px-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeSheet}
                    className={cn(
                      'text-lg transition-colors hover:text-foreground/80 py-2',
                      pathname === item.href ? 'text-foreground font-semibold' : 'text-foreground/60'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
