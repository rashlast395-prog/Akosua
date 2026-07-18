"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, projectCategories } from "@/lib/data/projects";
import { Section, SectionHeading, Reveal } from "@/components/ui";
import { ProjectCard } from "@/components/ui/project-card";

export default function PortfolioSection() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="portfolio">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work"
          description="A curated selection of recent projects across brand, motion and print."
          className="!mb-0"
        />
        <Reveal>
          <Link
            href="/projects"
            className="reveal text-sm font-medium text-ink-secondary hover:text-accent transition-colors self-start sm:self-auto nl"
          >
            All projects →
          </Link>
        </Reveal>
      </div>

      {/* Filters */}
      <Reveal>
        <div className="reveal flex flex-wrap gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                filter === cat.value
                  ? "bg-accent text-white border-accent"
                  : "bg-surface border-border text-ink-secondary hover:border-accent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <Reveal key={project.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
            <ProjectCard
              project={project}
              index={i}
              variant={project.featured ? "featured" : "default"}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
