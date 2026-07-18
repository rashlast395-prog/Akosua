"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, projectCategories } from "@/lib/data/projects";
import { Project } from "@/types";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.fromTo(
          card as gsap.TweenTarget,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card as Element,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted, filter]);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
              Portfolio
            </p>
            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              Selected work
            </h2>
          </div>
          <Link
            href="/projects"
            className="reveal text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto"
          >
            All projects →
          </Link>
        </div>

        {/* Filters */}
        <div className="reveal flex flex-wrap gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                filter === cat.value
                  ? "bg-accent text-white border-accent"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="project-card group h-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-all duration-300 hover:shadow-lg"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {project.video && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-accent ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </Link>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        tag === project.categoryLabel
                          ? "bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white hover:text-accent transition-colors"
                >
                  View project
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
