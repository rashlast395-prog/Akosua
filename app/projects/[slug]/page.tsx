import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";
import { Project } from "@/types";

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
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8"
          >
            ← Back to projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-zinc-400 ml-1">{project.year}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            {project.overview}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-zinc-100 dark:border-zinc-900">
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                Category
              </p>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">
                {project.categoryLabel}
              </p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                Role
              </p>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">
                Creative Designer
              </p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                Year
              </p>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">
                {project.year}
              </p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                Deliverables
              </p>
              <p className="font-medium text-zinc-900 dark:text-white text-sm">
                {project.deliverables}
              </p>
            </div>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="relative w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
          <h2>Overview</h2>
          <p>{project.overview}</p>
          <h2>Objective</h2>
          <p>{project.objective}</p>
          <h2>Tools used</h2>
          <ul>
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          <h2>Deliverables</h2>
          <p>{project.deliverables}</p>
          <h2>Outcomes</h2>
          <p>{project.outcomes}</p>
        </div>
      </article>

      {relatedProjects.length > 0 && (
        <section className="bg-zinc-50/60 dark:bg-zinc-900/50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-zinc-900 dark:text-white mb-8">
              More projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((related) => (
                <article
                  key={related.id}
                  className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors"
                >
                  <Link
                    href={`/projects/${related.slug}`}
                    className="block relative aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-800"
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
                      <h3 className="font-display text-base font-bold text-zinc-900 dark:text-white mt-2 mb-2 hover:text-accent transition-colors">
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
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
