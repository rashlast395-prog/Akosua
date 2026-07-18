"use client";

import Image from "next/image";
import { testimonials } from "@/lib/data/projects";
import { Section, SectionHeading, Reveal } from "@/components/ui";

export default function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Social proof"
        title="What clients say"
        description="Trusted by brands and founders across Africa and beyond."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.id} delay={((index % 3) + 1) as 1 | 2 | 3}>
            <article
              className={`card rounded-2xl p-7 ${
                index === 1
                  ? "bg-ink text-white border-transparent"
                  : "border-border"
              }`}
            >
              <div
                className="flex gap-0.5 mb-5"
                aria-label={`${testimonial.rating} stars`}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-accent fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p
                className={`text-sm leading-relaxed mb-6 italic ${
                  index === 1 ? "text-zinc-400" : "text-ink-secondary"
                }`}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-surface-2">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p
                    className={`font-medium text-sm ${
                      index === 1 ? "text-white" : "text-ink"
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-xs ${
                      index === 1 ? "text-zinc-500" : "text-ink-muted"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
