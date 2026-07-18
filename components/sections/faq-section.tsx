"use client";

import { useState } from "react";
import { faq } from "@/lib/data/faq";
import { Section, SectionHeading, Reveal } from "@/components/ui";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  return (
    <Section id="faq" alt>
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions"
        description="Quick answers to help you decide if we&apos;re a good fit."
        align="center"
      />
      <div className="max-w-3xl mx-auto">
        {faq.map((item, i) => (
          <Reveal key={item.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
            <FAQItem item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FAQItem({ item }: { item: { question: string; answer: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-bold text-lg text-ink group-hover:text-accent transition-colors pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-ink-muted shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-ink-secondary leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}
