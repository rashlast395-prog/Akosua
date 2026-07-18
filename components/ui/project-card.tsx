import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "default" | "featured";
}

export function ProjectCard({
  project,
  index = 0,
  variant = "default",
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group card card-hover rounded-2xl overflow-hidden",
        variant === "featured" && "md:row-span-2"
      )}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block relative aspect-[4/3] overflow-hidden bg-surface-2"
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
            <Badge
              key={tag}
              accent={tag === project.categoryLabel}
            >
              {tag}
            </Badge>
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          <h3 className="font-display text-lg font-bold text-ink group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-ink-secondary leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink mt-4 group-hover:text-accent transition-colors"
        >
          View project
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
