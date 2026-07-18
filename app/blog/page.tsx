import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Section, SectionHeading, Reveal, Badge } from "@/components/ui";

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
      <Section alt>
        <SectionHeading
          eyebrow="Writing"
          title="The Blog"
          description="Thoughts on design, frontend, and the realities of freelancing. No fluff."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Reveal
              key={post.id}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <article
                className={`card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-md ${
                  index === 0 ? "md:col-span-3 md:grid-cols-2 md:grid" : ""
                }`}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className={`block relative overflow-hidden bg-surface-2 ${
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
                    <Badge accent>{post.category}</Badge>
                    <span className="text-xs text-ink-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="text-xs text-ink-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-display text-lg md:text-xl font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent transition-colors"
                  >
                    Read article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
