import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal, Section } from "@/components/ui";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — Kumi Design",
    };
  }

  return {
    title: `${project.title} — Kumi Design`,
    description: project.overview,
    openGraph: {
      title: project.title,
      description: project.overview,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="pt-24">
      <article>
        <header className="pb-10 max-w-4xl mx-auto px-6">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-ink-secondary hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to projects
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-ink-muted ml-1">{project.year}</span>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-xl text-ink-secondary leading-relaxed mb-10 max-w-2xl">
              {project.overview}
            </p>
          </Reveal>
          <Reveal delay={4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-border">
              <div>
                <p className="text-xs text-ink-muted uppercase tracking-widest mb-1">
                  Category
                </p>
                <p className="font-medium text-ink text-sm">
                  {project.categoryLabel}
                </p>
              </div>
              <div>
                <p className="text-xs text-ink-muted uppercase tracking-widest mb-1">
                  Role
                </p>
                <p className="font-medium text-ink text-sm">Creative Designer</p>
              </div>
              <div>
                <p className="text-xs text-ink-muted uppercase tracking-widest mb-1">
                  Year
                </p>
                <p className="font-medium text-ink text-sm">{project.year}</p>
              </div>
              <div>
                <p className="text-xs text-ink-muted uppercase tracking-widest mb-1">
                  Deliverables
                </p>
                <p className="font-medium text-ink text-sm">
                  {project.deliverables}
                </p>
              </div>
            </div>
          </Reveal>
        </header>

        <div className="max-w-6xl mx-auto px-6 mb-16">
          <Reveal>
            <div className="relative w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden bg-surface-2">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>

        <Section className="pb-4">
          <div className="prose-cs max-w-3xl mx-auto">
            <Reveal>
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </Reveal>
            <Reveal delay={1}>
              <h2>Objective</h2>
              <p>{project.objective}</p>
            </Reveal>
            <Reveal delay={2}>
              <h2>Tools used</h2>
              <ul>
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={3}>
              <h2>Deliverables</h2>
              <p>{project.deliverables}</p>
            </Reveal>
            <Reveal delay={4}>
              <h2>Outcomes</h2>
              <p>{project.outcomes}</p>
            </Reveal>
          </div>
        </Section>
      </article>

      {relatedProjects.length > 0 && (
        <Section alt>
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-ink mb-8">
              More projects
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProjects.map((related, i) => (
              <Reveal key={related.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <article className="card rounded-2xl overflow-hidden border border-border">
                  <Link
                    href={`/projects/${related.slug}`}
                    className="block relative aspect-[4/3] overflow-hidden bg-surface-2"
                  >
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-5">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                      {related.categoryLabel}
                    </span>
                    <Link href={`/projects/${related.slug}`}>
                      <h3 className="font-display text-base font-bold text-ink mt-2 mb-2 hover:text-accent transition-colors">
                        {related.title}
                      </h3>
                    </Link>
                    <Link
                      href={`/projects/${related.slug}`}
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      Read article →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
