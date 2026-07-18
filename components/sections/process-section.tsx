"use client";

import { Section, SectionHeading, Reveal } from "@/components/ui";

const steps = [
  { id: 1, title: "Discover", description: "Understand client goals, audience and requirements through a focused discovery session." },
  { id: 2, title: "Research", description: "Research the audience, market and inspiration to inform a strategic creative direction." },
  { id: 3, title: "Develop Concepts", description: "Sketch and explore multiple concepts, then refine the strongest direction into real design." },
  { id: 4, title: "Design & Refine", description: "Craft the final visuals with attention to detail, then polish typography, color and layout." },
  { id: 5, title: "Present for Feedback", description: "Present the work, gather clear feedback and align on revisions before final delivery." },
  { id: 6, title: "Deliver Final Files", description: "Prepare and deliver final production-ready files, including source files and optimized exports." },
];

export default function ProcessSection() {
  return (
    <Section id="process" alt>
      <SectionHeading
        eyebrow="How I work"
        title="Design Process"
        description="A structured process to move from idea to polished, production-ready design."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <Reveal key={step.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
            <article className="card card-hover rounded-2xl p-8">
              <div className="w-11 h-11 bg-accent text-white font-display text-lg font-bold rounded-full flex items-center justify-center mb-5">
                {step.id}
              </div>
              <h3 className="font-display text-xl font-bold text-ink mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed">
                {step.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
