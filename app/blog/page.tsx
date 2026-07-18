import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Why I ditched heavy CSS frameworks for Tailwind — and what changed",
    slug: "why-i-ditched-heavy-css-frameworks-for-tailwind",
    excerpt:
      "After years of fighting specificity wars and unused kilobytes, here's what finally convinced me to make the switch.",
    content: "",
    category: "Design",
    tags: ["Tailwind", "CSS", "Frontend"],
    date: "March 8, 2025",
    readTime: "7 min read",
    author: "Kumi Ebenezer Tenkorang",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
  },
  {
    id: 2,
    title: "Building a design system from scratch in a weekend",
    slug: "building-a-design-system-from-scratch",
    excerpt:
      "Tokens, components, docs — the exact process I follow to spin up a coherent design system in 48 hours.",
    content: "",
    category: "Dev",
    tags: ["Design Systems", "React", "UI"],
    date: "Feb 21, 2025",
    readTime: "5 min read",
    author: "Kumi Ebenezer Tenkorang",
    image: "https://images.unsplash.com/photo-1581291518633-83b4eb1d83e?w=700&q=80",
  },
  {
    id: 3,
    title: "5 lessons from my first year of full-time freelancing",
    slug: "5-lessons-from-my-first-year-of-full-time-freelancing",
    excerpt:
      "Contracts, pricing, scope creep, burnout — the things nobody tells you before you go solo.",
    content: "",
    category: "Freelance",
    tags: ["Freelancing", "Business", "Career"],
    date: "Jan 14, 2025",
    readTime: "6 min read",
    author: "Kumi Ebenezer Tenkorang",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80",
  },
];

export const metadata: Metadata = {
  title: "Blog — Kumi Design",
  description:
    "Thoughts on UI/UX design, frontend development, and the realities of full-time freelancing.",
};

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="pb-16 relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Writing
          </p>
          <h1 className="reveal font-display text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
            The Blog
          </h1>
          <p className="reveal text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
            Thoughts on UI/UX design, frontend development, and the realities of
            full-time freelancing. No fluff.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className={`reveal group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-all duration-300 hover:shadow-lg ${
                  index === 0 ? "md:col-span-3 md:grid-cols-2 md:grid" : ""
                }`}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className={`block relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 ${
                    index === 0 ? "md:h-full min-h-[300px]" : "h-44"
                  }`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className={`p-6 ${index === 0 ? "md:p-12 md:flex md:flex-col md:justify-center" : ""}`}>
                  <div className="flex items-center gap-3 mb-3">
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
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-display text-lg md:text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white hover:text-accent transition-colors"
                  >
                    Read article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
