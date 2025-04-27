import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'Articles - Minimalist Muse',
  description: 'Read articles on software development, design, and productivity.',
};

// Mock data - replace with actual data fetching later
const articles = [
  {
    slug: 'minimalism-in-design',
    title: 'The Power of Minimalism in Design',
    date: new Date(2024, 6, 15),
    excerpt: 'Exploring how less can be more in creating impactful user experiences.',
    tags: ['Design', 'Minimalism', 'UI/UX'],
  },
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 15',
    date: new Date(2024, 5, 28),
    excerpt: 'A beginner-friendly guide to setting up your first Next.js application using the App Router.',
    tags: ['Web Development', 'Next.js', 'React', 'TypeScript'], // Added TypeScript
  },
  {
    slug: 'mindful-productivity',
    title: 'Mindful Productivity for Developers', // Updated title
    date: new Date(2024, 5, 10),
    excerpt: 'Techniques for developers to enhance focus, reduce cognitive load, and prevent burnout.', // Updated excerpt
    tags: ['Productivity', 'Mindfulness', 'Well-being', 'Software Development'], // Added Software Development
  },
];

export default function ArticlesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Articles</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.slug} className="flex flex-col hover:shadow-md transition-shadow duration-200 border border-border"> {/* Added border */}
            <CardHeader>
              <CardTitle className="text-xl mb-1">
                <Link href={`/articles/${article.slug}`} className="hover:text-primary transition-colors"> {/* Changed hover:text-accent to hover:text-primary */}
                  {article.title}
                </Link>
              </CardTitle>
              <CardDescription>{format(article.date, 'MMMM d, yyyy')}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={`/articles/${article.slug}`} className="text-sm text-primary font-medium flex items-center group hover:text-primary/80 transition-colors"> {/* Changed text-accent to text-primary */}
                Read More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
