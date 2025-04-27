import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { ArrowRight, User, Code } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center py-10 md:py-20">
       <Code className="h-12 w-12 text-primary mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        Minimalist Muse // Developer
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        Crafting clean code and intuitive designs. Exploring ideas through writing, showcasing creative work, and sharing professional experiences in software development.
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
         <Button asChild variant="secondary" size="lg">
          <Link href="/resume">
            View Resume
          </Link>
        </Button>
      </div>

      <Separator className="my-12 md:my-16 max-w-md" />

      <section className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left">
        <div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0">
           {/* Fallback div will show if Image component fails to load or src is missing */}
           <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-full -z-10 border-4 border-card shadow-md">
             <User className="h-16 w-16 text-muted-foreground" />
           </div>
          <Image
            // Consider using a real image URL or keeping the placeholder
            src="/placeholder-dev.png" // Using local placeholder
            alt="Minimalist Muse Developer Portrait"
            fill
            sizes="(max-width: 768px) 160px, 192px"
            style={{ objectFit: 'cover' }}
            className="rounded-full border-4 border-card shadow-md z-10" // Ensure image is above fallback
            // onError removed as it's not allowed in Server Components
            // onError={(e) => {
            //    (e.target as HTMLImageElement).style.display = 'none';
            // }}
          />
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground mb-4 text-base md:text-lg leading-relaxed">
            Hi, I'm Minimalist Muse. I'm a full-stack developer obsessed with crafting clean, efficient, and user-centric digital experiences. I thrive on solving complex problems with elegant code and thoughtful design, bridging the gap between technical implementation and user needs.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            This space is where I share insights on technology, software architecture, development best practices, and the occasional productivity hack. Explore my articles and portfolio to see my work and perspective.
          </p>
            <Button asChild variant="link" className="mt-4 justify-center md:justify-start px-0 text-primary hover:text-primary/80">
               <Link href="/resume">
                 Learn more about my experience <ArrowRight className="ml-1 h-4 w-4" />
               </Link>
             </Button>
        </div>
      </section>
    </div>
  );
}
