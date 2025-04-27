import Link from "next/link";
import Image from 'next/image';
import { ArrowRight, User, Code, Mail } from "lucide-react"; // Added Mail icon
import ContactForm from "@/components/contact-form"; // Import ContactForm

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
        {/* Using btn and btn-primary classes */}
        <Link href="/articles" className="btn btn-primary btn-lg">
            Read Articles <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
         {/* Using btn and btn-outline classes */}
        <Link href="/portfolio" className="btn btn-outline btn-lg">
            View Portfolio
        </Link>
        {/* Using btn and btn-secondary classes */}
         <Link href="/resume" className="btn btn-secondary btn-lg">
            View Resume
         </Link>
      </div>

      {/* Using separator and separator-horizontal classes */}
      <hr className="separator separator-horizontal my-12 md:my-16 max-w-md" />


      {/* About Me Section */}
      <section className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left mb-16 md:mb-24">
        <div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0">
           {/* Basic div for placeholder with Tailwind classes */}
           <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-full -z-10 border-4 border-white dark:border-card shadow-md">
             <User className="h-16 w-16 text-muted-foreground" />
           </div>
          <Image
            src="/placeholder-dev.png" // Using local placeholder
            alt="Minimalist Muse Developer Portrait"
            width={192} // Added width
            height={192} // Added height
            className="rounded-full border-4 border-white dark:border-card shadow-md z-10 object-cover" // Ensure image is above fallback and has object-fit
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
            {/* Using btn and btn-link classes */}
             <Link href="/resume" className="btn btn-link mt-4 justify-center md:justify-start px-0 text-primary hover:text-primary/80">
                 Learn more about my experience <ArrowRight className="ml-1 h-4 w-4" />
             </Link>
        </div>
      </section>

      {/* Using separator and separator-horizontal classes */}
      <hr className="separator separator-horizontal my-12 md:my-16 max-w-md" />

       {/* Contact Me Section */}
       <section className="w-full max-w-xl text-center">
         <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
           <Mail className="h-7 w-7 text-primary" /> {/* Added icon */}
           Get In Touch
         </h2>
         <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
           Have a question, project idea, or just want to connect? Feel free to send me a message using the form below.
         </p>
         <ContactForm />
       </section>
    </div>
  );
}
