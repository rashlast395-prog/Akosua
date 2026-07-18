import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found — Kumi Design",
    };
  }

  return {
    title: `${post.title} — Kumi Design`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24">
      <article>
        <header className="pt-12 pb-10 max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 py-6 border-t border-b border-zinc-100 dark:border-zinc-900">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-zinc-200 dark:bg-zinc-700">
              <Image
                src="/images/work-8.png"
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">
                {post.author}
              </p>
              <p className="text-xs text-zinc-500">Creative Designer</p>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 mb-12">
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-16 prose-cs">
          <p>
            This is a placeholder for the full article content. In a real
            implementation, this would be fetched from a CMS or markdown file.
          </p>
        </div>
      </article>
    </div>
  );
}
