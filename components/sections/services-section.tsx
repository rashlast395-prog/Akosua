"use client";

import { services } from "@/lib/data/projects";
import { Section, SectionHeading, Reveal } from "@/components/ui";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Stamp,
  Clapperboard,
  Video,
  Share2,
  Printer,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z":
    Palette,
  "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01":
    Stamp,
  "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z":
    Clapperboard,
  "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z":
    Video,
  "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z":
    Share2,
  "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9a2 2 0 00-2 2v1m-4 9v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2z":
    Printer,
};

export default function ServicesSection() {
  return (
    <Section id="services" alt>
      <SectionHeading
        eyebrow="What I do"
        title="Services"
        description="End-to-end creative services to help your brand stand out and connect."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] ?? Palette;
          return (
            <Reveal key={service.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article className="card card-hover rounded-2xl p-8">
                <div className="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-zinc-800 rounded-xl mb-6 group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {service.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
