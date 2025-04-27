import { Code2 } from 'lucide-react'; // Changed Feather to Code2

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-20 md:flex-row md:py-0">
        <div className="flex items-center gap-4 px-8 md:px-0">
          <Code2 className="h-5 w-5 text-muted-foreground" /> {/* Changed Feather to Code2 */}
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by Sanchit Agarwal. &copy; {currentYear}
          </p>
        </div>
        {/* Add social links or other footer content here if needed */}
      </div>
    </footer>
  );
}
