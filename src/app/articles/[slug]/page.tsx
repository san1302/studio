import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Mock data - replace with actual data fetching
const articlesData: { [key: string]: any } = {
  'minimalism-in-design': {
    slug: 'minimalism-in-design',
    title: 'The Power of Minimalism in Design',
    date: new Date(2024, 6, 15),
    tags: ['Design', 'Minimalism', 'UI/UX'],
    content: `
      <p>Minimalism isn't just an aesthetic; it's a principle that prioritizes clarity and usability. By stripping away the non-essential, we allow the core message and functionality to shine through.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Why Less is More</h2>
      <p>Reducing visual clutter leads to:</p>
      <ul class="list-disc list-inside my-4 space-y-2 pl-4">
        <li>Faster loading times</li>
        <li>Easier navigation</li>
        <li>Improved focus on content</li>
        <li>Enhanced accessibility</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Implementing Minimalism</h2>
      <p>Key techniques include:</p>
      <ul class="list-disc list-inside my-4 space-y-2 pl-4">
        <li>Generous use of whitespace</li>
        <li>Limited color palettes</li>
        <li>Simple typography</li>
        <li>Flat design elements</li>
        <li>Purposeful iconography</li>
      </ul>
      <p>Ultimately, minimalism is about intentionality. Every element should serve a purpose, contributing to a seamless and effective user experience.</p>
    `,
  },
  'getting-started-with-nextjs': {
     slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 15',
    date: new Date(2024, 5, 28),
    tags: ['Web Development', 'Next.js', 'React'],
    content: `
      <p>Next.js continues to evolve, making it a powerful framework for building modern web applications. Version 15 introduces several exciting features and improvements.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Setting Up Your Project</h2>
      <p>To create a new Next.js app, simply run:</p>
      <pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code class="font-mono text-sm">npx create-next-app@latest my-minimalist-app</code></pre>
      <p>Follow the prompts to configure your project, including TypeScript support and Tailwind CSS integration.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Key Concepts</h2>
      <p>Understand the basics:</p>
      <ul class="list-disc list-inside my-4 space-y-2 pl-4">
        <li>App Router vs. Pages Router</li>
        <li>Server Components and Client Components</li>
        <li>File-based Routing</li>
        <li>Data Fetching Strategies</li>
      </ul>
      <p>Next.js provides a robust foundation for building performant and scalable applications with an excellent developer experience.</p>
    `,
  },
   'mindful-productivity': {
    slug: 'mindful-productivity',
    title: 'Mindful Productivity: Achieving More with Less Stress',
    date: new Date(2024, 5, 10),
    tags: ['Productivity', 'Mindfulness', 'Well-being'],
    content: `
      <p>In today's fast-paced world, productivity often feels like a relentless race. Mindful productivity offers a different approach – focusing on intention, presence, and sustainable effort.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Core Principles</h2>
      <ul class="list-disc list-inside my-4 space-y-2 pl-4">
        <li><strong>Single-Tasking:</strong> Avoid the myth of multitasking. Focus fully on one task at a time.</li>
        <li><strong>Presence:</strong> Be fully engaged with the task at hand, reducing distractions.</li>
        <li><strong>Intentional Breaks:</strong> Schedule regular breaks to rest and recharge, preventing burnout.</li>
        <li><strong>Prioritization:</strong> Focus on high-impact tasks rather than trying to do everything.</li>
        <li><strong>Self-Compassion:</strong> Acknowledge that perfection isn't possible and treat yourself kindly.</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-6 mb-3">Practical Techniques</h2>
      <p>Try incorporating these habits:</p>
      <ul class="list-disc list-inside my-4 space-y-2 pl-4">
        <li>Time blocking</li>
        <li>The Pomodoro Technique</li>
        <li>Regular mindfulness or meditation practice</li>
        <li>Digital detox periods</li>
        <li>Journaling to clarify thoughts and priorities</li>
      </ul>
      <p>By integrating mindfulness into your workflow, you can enhance focus, reduce stress, and achieve more meaningful results.</p>
    `,
  },
};


// Function to fetch article data (replace with actual API call/DB query)
async function getArticle(slug: string) {
  // Simulate API delay
  // await new Promise(resolve => setTimeout(resolve, 100));
  return articlesData[slug];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticle(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} - Minimalist Muse`,
    description: `Read the article: ${article.title}`, // You might want a more specific excerpt here
  };
}


export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
       <Link href="/articles" className="inline-flex items-center text-sm text-accent hover:underline mb-6 group">
          <ArrowLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </Link>
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-3 leading-tight">{article.title}</h1>
        <p className="text-muted-foreground text-sm mb-3">
          Published on {format(article.date, 'MMMM d, yyyy')}
        </p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </header>
      <Separator className="my-8" />
      <div
        className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-li:marker:text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}

// Generate static paths for known articles
export async function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({
    slug,
  }));
}
