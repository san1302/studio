import Link from "next/link";
import Image from "next/image";
import { ArrowRight, User, Code, Mail } from "lucide-react"; // Added Mail icon
import ContactForm from "@/components/contact-form"; // Import ContactForm

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center py-10 md:py-20">
      <Code className="h-12 w-12 text-primary mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        Sanchit Agarwal
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-8">
        Crafting clean code and intuitive designs. Exploring ideas through
        writing, showcasing creative work, and sharing professional experiences
        in software development.
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

      {/* About Me Section (updated with LinkedIn style) */}
      <section className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left mb-16 md:mb-24">
        <div className="w-40 h-40 md:w-48 md:h-48 relative flex-shrink-0">
          {/* Logo image instead of placeholder */}
          <Image
            src="/images/logo-sanchit-verse.png"
            alt="Sanchit Agarwal Logo"
            width={430}
            height={200}
          />
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg font-semibold mb-1">
            Sanchit Agarwal &mdash; Software Engineer | Ex-Amazon | AB InBev
          </p>
          <p className="text-muted-foreground mb-4 text-base md:text-lg leading-relaxed">
            Full-stack developer with a proven track record in building scalable
            platforms, leading design systems, and automating business processes
            for global organizations. Experienced in React, Node.js, AWS, and
            cloud-native architectures. Passionate about clean code, tech
            mentorship, and delivering impactful solutions that drive business
            value.
          </p>
          <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
            <span className="badge">React</span>
            <span className="badge">Node.js</span>
            <span className="badge">MongoDB</span>
            <span className="badge">SQL</span>
            <span className="badge">AWS</span>
            <span className="badge">C++</span>
          </div>
          <a
            href="https://www.linkedin.com/in/sanchitagarwal0332/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-2 w-fit mx-auto md:mx-0"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>

      {/* Using separator and separator-horizontal classes */}
      <hr className="separator separator-horizontal my-12 md:my-16 max-w-md" />

      {/* Contact Me Section */}
      <section className="w-full max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          <Mail className="h-7 w-7 text-primary" />
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-8 text-base md:text-lg leading-relaxed">
          Have a question, project idea, or just want to connect? Feel free to
          send me a message using the form below.
        </p>
        <ContactForm />
      </section>
    </div>
  );
}
