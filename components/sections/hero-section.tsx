"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { ButtonPrimary, ButtonGhost } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const featured = projects.find((p) => p.featured) ?? projects[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-label",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".hero-stats",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1 },
          "-=0.6"
        );
    });

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) {
    return (
      <Section className="pt-24" alt>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-accent tracking-widest uppercase mb-5">
              Available for work
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-ink mb-6">
              Designing Visual Experiences That Inspire and Connect.
            </h1>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="pt-24 overflow-hidden" alt>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <p className="hero-label text-sm font-medium text-accent tracking-widest uppercase mb-5">
              Available for work
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="hero-title font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-ink mb-6">
              Designing Visual Experiences That Inspire and Connect.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="hero-description text-lg md:text-xl text-ink-secondary font-light leading-relaxed max-w-lg mb-10">
              Creative Designer based in{" "}
              <strong className="font-medium text-ink">Accra, Ghana</strong>{" "}
              specializing in Graphic Design, Brand Identity, Motion Graphics,
              Video Editing, Social Media Design and Print Design.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="hero-cta flex flex-wrap gap-4">
              <ButtonPrimary href="#portfolio">
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </ButtonPrimary>
              <ButtonGhost href="#contact">Hire Me</ButtonGhost>
              <ButtonGhost href="#contact">Contact Me</ButtonGhost>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <div className="hero-stats flex gap-8 sm:gap-10 mt-14 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl font-bold text-ink">30+</p>
                <p className="text-xs text-ink-muted mt-1 uppercase tracking-wide">
                  Projects done
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-ink">18+</p>
                <p className="text-xs text-ink-muted mt-1 uppercase tracking-wide">
                  Happy clients
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-ink">4y</p>
                <p className="text-xs text-ink-muted mt-1 uppercase tracking-wide">
                  Years experience
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={3}>
          <div className="hero-image relative">
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-purple-500/10 rounded-[2rem] blur-2xl opacity-70"
              aria-hidden="true"
            />
            <Link
              href={`/projects/${featured.slug}`}
              className="block relative aspect-square max-w-md mx-auto lg:mx-0 rounded-[2rem] shadow-lg overflow-hidden bg-surface-2"
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover"
              />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex items-center gap-3 mt-16 text-ink-muted">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <span className="relative flex h-5 w-5">
          <span className="absolute inline-flex h-full w-full rounded-full border border-ink-muted opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-5 w-5 border border-ink-muted" />
        </span>
      </div>
    </Section>
  );
}
