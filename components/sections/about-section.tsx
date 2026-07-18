"use client";

import Image from "next/image";
import { Section, SectionHeading, Reveal } from "@/components/ui";
import { Badge } from "@/components/ui/badge";
import { tools } from "@/lib/data/tools";

const skills = [
  "Graphic Design",
  "Branding",
  "Typography",
  "Layout Design",
  "Motion Graphics",
  "Animation",
  "Video Editing",
  "Social Media Design",
  "Print Design",
  "Creativity",
  "Communication",
  "Problem Solving",
  "Time Management",
];

export default function AboutSection() {
  return (
    <Section id="about" alt>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="order-2 md:order-1">
            <div className="relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden bg-surface-2">
              <Image
                src="/images/work-8.png"
                alt="Kumi Ebenezer Tenkorang"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <SectionHeading
              eyebrow="About me"
              title="A bit about who I am"
              description="Creative designer based in Accra, Ghana — turning ideas into visual stories that resonate."
            />
          </Reveal>

          <Reveal delay={1}>
            <p className="text-ink-secondary leading-relaxed mb-4">
              Hello! I&apos;m Kumi Ebenezer Tenkorang, a passionate Creative Designer
              dedicated to transforming ideas into compelling visual experiences.
              My work spans branding, graphic design, motion graphics and video
              editing. Every project is approached with creativity, strategic
              thinking and attention to detail so that businesses and individuals
              can communicate their message effectively.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-ink-secondary leading-relaxed mb-8">
              I strive to deliver designs that are memorable, functional and
              visually engaging. Based in Accra, Ghana, I help brands tell
              compelling stories through graphic design, motion graphics, video
              editing and brand identity.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mb-10">
              <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-3">
                Skills
              </p>
              <div className="flex flex-wrap gap-2" role="list">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-surface border border-border text-ink-secondary px-3.5 py-1.5 rounded-full hover:border-accent transition-colors"
                    role="listitem"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div>
              <p className="text-xs font-medium text-ink-muted uppercase tracking-widest mb-4">
                Tools I use
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.id}
                    className="card rounded-xl p-5 text-center"
                  >
                    <p className="font-display font-bold text-base text-ink mb-1">
                      {tool.name}
                    </p>
                    <p className="text-xs text-accent font-medium mb-2">
                      {tool.level}
                    </p>
                    <p className="text-xs text-ink-muted">{tool.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
