"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, title: "Discover", description: "Understand client goals, audience and requirements through a focused discovery session." },
  { id: 2, title: "Research", description: "Research the audience, market and inspiration to inform a strategic creative direction." },
  { id: 3, title: "Develop Concepts", description: "Sketch and explore multiple concepts, then refine the strongest direction into real design." },
  { id: 4, title: "Design & Refine", description: "Craft the final visuals with attention to detail, then polish typography, color and layout." },
  { id: 5, title: "Present for Feedback", description: "Present the work, gather clear feedback and align on revisions before final delivery." },
  { id: 6, title: "Deliver Final Files", description: "Prepare and deliver final production-ready files, including source files and optimized exports." },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".process-card").forEach((card, i) => {
        gsap.fromTo(
          card as gsap.TweenTarget,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.08,
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
  }, [mounted]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 bg-zinc-50/60 dark:bg-zinc-900/40"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            How I work
          </p>
          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            Design Process
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="process-card bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-11 h-11 bg-accent text-white font-display text-lg font-bold rounded-full flex items-center justify-center mb-5">
                {step.id}
              </div>
              <h3 className="font-display text-xl font-bold text-zinc-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
