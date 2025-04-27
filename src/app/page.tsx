import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { ArrowRight, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center py-10 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        Welcome to Minimalist Muse
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        Exploring ideas through writing, showcasing creative work, and sharing professional experiences. Dive into a space designed for clarity and focus.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
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

      <Separator className="my-12 md:my-16 max-w-md" />

      <section className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left">
        <div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0">
          <Image
            src="https://picsum.photos/seed/aboutme/300/300" // Placeholder image
            alt="Minimalist Muse Portrait"
            fill
            sizes="(max-width: 768px) 160px, 192px"
            style={{ objectFit: 'cover' }}
            className="rounded-full border-4 border-card shadow-md"
          />
           {/* Fallback Icon - Consider removing if image always loads */}
           {/* <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-full -z-10">
             <User className="h-16 w-16 text-muted-foreground" />
           </div> */}
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground mb-4 text-base md:text-lg leading-relaxed">
            Hi, I'm Minimalist Muse. I'm a full-stack developer and designer obsessed with crafting clean, functional, and beautiful digital experiences. I believe in the power of simplicity and strive to bring clarity to complex problems through thoughtful design and efficient code.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            This space is where I share my thoughts on technology, design, productivity, and the occasional abstract musing. Explore my articles and portfolio to learn more about my work and perspective.
          </p>
            <Button asChild variant="link" className="mt-4 justify-center md:justify-start px-0 text-accent">
               <Link href="/resume">
                 Learn more about my experience <ArrowRight className="ml-1 h-4 w-4" />
               </Link>
             </Button>
        </div>
      </section>
    </div>
  );
}
