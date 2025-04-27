import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        Welcome to Minimalist Muse
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        Exploring ideas through writing, showcasing creative work, and sharing professional experiences. Dive into a space designed for clarity and focus.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/articles">
            Read Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/portfolio">
            View Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
}
