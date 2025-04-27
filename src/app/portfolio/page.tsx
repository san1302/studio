import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio - Minimalist Muse',
  description: 'A showcase of selected projects.',
};

// Mock data - replace with actual projects
const portfolioItems = [
  {
    id: 1,
    title: 'Minimalist Task Manager',
    description: 'A clean and simple task management web application built with React and Firebase.',
    imageUrl: 'https://picsum.photos/seed/taskmgr/600/400',
    link: '#', // Replace with actual project link
    tags: ['React', 'Firebase', 'Web App', 'Productivity'],
  },
  {
    id: 2,
    title: 'Abstract Generative Art',
    description: 'Exploring algorithms to create unique and abstract visual patterns using p5.js.',
    imageUrl: 'https/picsum.photos/seed/genart/600/400', // Updated URL format
    link: '#', // Replace with actual project link
    tags: ['p5.js', 'Generative Art', 'Creative Coding'],
  },
  {
    id: 3,
    title: 'Personal Blog Platform',
    description: 'The very platform you are on! Built with Next.js for performance and simplicity.',
    imageUrl: 'https://picsum.photos/seed/blogplat/600/400',
    link: '/', // Link to the home page
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Web Development'],
  },
    {
    id: 4,
    title: 'E-commerce UI Kit',
    description: 'A reusable set of UI components designed for minimalist e-commerce sites.',
    imageUrl: 'https://picsum.photos/seed/uikit/600/400',
    link: '#', // Replace with actual project link
    tags: ['UI Design', 'Figma', 'Component Library'],
  },
];


export default function PortfolioPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Portfolio</h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
        Here are some selected projects I've worked on, showcasing my skills in design and development.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-200">
            <div className="relative h-48 w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl mb-1 flex justify-between items-center">
                {item.title}
                {item.link && item.link !== '#' && (
                   <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">View Project</span>
                  </Link>
                )}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
               <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
