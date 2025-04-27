import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio - Minimalist Muse',
  description: 'A showcase of selected software development projects.',
};

// Mock data - Replace with actual projects
const portfolioItems = [
  {
    id: 1,
    title: 'Full-Stack E-commerce Platform',
    description: 'Scalable online store built with Next.js, TypeScript, PostgreSQL, and deployed on Vercel.',
    imageUrl: 'https://picsum.photos/seed/ecommerce/600/400',
    link: '#', // Replace with actual project link or GitHub repo
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Full-Stack'],
  },
  {
    id: 2,
    title: 'Real-time Collaboration Tool',
    description: 'A web application enabling users to collaborate on documents in real-time using WebSockets and React.',
    imageUrl: 'https://picsum.photos/seed/collabtool/600/400',
    link: '#', // Replace with actual project link or GitHub repo
    tags: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Real-time'],
  },
  {
    id: 3,
    title: 'Component Library Showcase',
    description: 'A Storybook site documenting a custom React component library built for reusability.',
    imageUrl: 'https://picsum.photos/seed/storybook/600/400',
    link: '#', // Replace with actual project link or GitHub repo
    tags: ['React', 'Storybook', 'UI/UX', 'Component Library', 'Frontend'],
  },
    {
    id: 4,
    title: 'Serverless API Backend',
    description: 'A RESTful API built with AWS Lambda, API Gateway, and DynamoDB for a mobile application.',
    imageUrl: 'https://picsum.photos/seed/serverless/600/400',
    link: '#', // Replace with actual project link or GitHub repo
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Serverless', 'Backend'],
  },
];


export default function PortfolioPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Portfolio</h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
        Here are some selected software development projects I've worked on, showcasing my skills across the stack.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-200 border border-border"> {/* Added border */}
            <div className="relative h-48 w-full">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
                priority={item.id <= 2} // Prioritize loading images for the first few items
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl mb-1 flex justify-between items-center">
                {item.title}
                {item.link && item.link !== '#' && (
                   <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity"> {/* Changed text-accent to text-primary */}
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
                   <Badge key={tag} variant="secondary" className="text-xs"> {/* Used Badge component */}
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
