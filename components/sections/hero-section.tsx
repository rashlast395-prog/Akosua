"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { designTokens } from "@/lib/design-tokens";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

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
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent tracking-widest uppercase mb-5">
                Available for work
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
                Designing Visual Experiences That Inspire and Connect.
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background effects */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/20 blur-[100px] pointer-events-none opacity-55"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none opacity-55"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="hero-label text-sm font-medium text-accent tracking-widest uppercase mb-5">
              Available for work
            </p>
            <h1 className="hero-title font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
              Designing Visual Experiences That Inspire and Connect.
            </h1>
            <p className="hero-description text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-lg mb-10">
              Creative Designer based in{" "}
              <strong className="font-medium text-zinc-700 dark:text-zinc-300">
                Accra, Ghana
              </strong>{" "}
              specializing in Graphic Design, Brand Identity, Motion Graphics,
              Video Editing, Social Media Design and Print Design.
            </p>
            <div className="hero-cta flex flex-wrap gap-4">
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm"
              >
                Hire Me
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm"
              >
                Contact Me
              </Link>
            </div>
            <div className="hero-stats flex gap-8 sm:gap-10 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">
              <div>
                <p className="font-display text-3xl font-bold text-zinc-900 dark:text-white">
                  30+
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wide">
                  Projects done
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-zinc-900 dark:text-white">
                  18+
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wide">
                  Happy clients
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-zinc-900 dark:text-white">
                  4y
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wide">
                  Years experience
                </p>
              </div>
            </div>
          </div>

          <div className="hero-image relative">
            <div
              className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-purple-500/10 rounded-[2rem] blur-2xl opacity-70"
              aria-hidden="true"
            />
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-[2rem] shadow-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <Image
                src="/images/work-8.png"
                alt="Kumi Ebenezer Tenkorang — Creative Designer"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex items-center gap-3 mt-16 text-zinc-400">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <span className="relative flex h-5 w-5">
            <span className="absolute inline-flex h-full w-full rounded-full border border-zinc-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-5 w-5 border border-zinc-400" />
          </span>
        </div>
      </div>
    </section>
  );
}
