"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote:
      "Kumi built our full brand identity from scratch — logo, palette, guidelines — and it completely transformed how customers see us. Thoughtful, strategic and a joy to work with.",
    name: "Ama Owusu",
    role: "Founder, Bloom Naturals",
    avatar: "https://i.pravatar.cc/80?img=11",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Working with Kumi is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined. Our best creative hire of the year.",
    name: "Kwame Mensah",
    role: "Marketing Lead, Pulse",
    avatar: "https://i.pravatar.cc/80?img=52",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "We had a tight deadline for our product launch video. Kumi turned it around with motion graphics and edits that looked premium. Zero hand-holding needed.",
    name: "Esi Baffoe",
    role: "Creative Director, Aurora Studio",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
        gsap.fromTo(
          card as gsap.TweenTarget,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.1,
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
      id="testimonials"
      ref={sectionRef}
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Social proof
          </p>
          <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
            What clients say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card rounded-2xl p-7 border transition-all duration-300 hover:shadow-lg ${
                index === 1
                  ? "bg-zinc-900 dark:bg-zinc-800 border-zinc-800"
                  : "bg-zinc-50 dark:bg-zinc-900 border-zinc-100 dark:border-zinc-800"
              }`}
            >
              <div className="flex gap-0.5 mb-5" aria-label={`${testimonial.rating} stars`}>
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
                  index === 1
                    ? "text-zinc-400"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-zinc-200 dark:bg-zinc-700">
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
                      index === 1
                        ? "text-white"
                        : "text-zinc-900 dark:text-white"
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    className={`text-xs ${
                      index === 1
                        ? "text-zinc-500"
                        : "text-zinc-500"
                    }`}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
