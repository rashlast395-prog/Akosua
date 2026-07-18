"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".skill-tag").forEach((tag, i) => {
        gsap.fromTo(
          tag as gsap.TweenTarget,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            delay: i * 0.03,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: tag as Element,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-zinc-50/60 dark:bg-zinc-900/40"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <Image
                src="/images/work-8.png"
                alt="Kumi Ebenezer Tenkorang"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
              About me
            </p>
            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight mb-6">
              A bit about who I am
            </h2>
            <p className="reveal text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
              Hello! I&apos;m Kumi Ebenezer Tenkorang, a passionate Creative Designer
              dedicated to transforming ideas into compelling visual experiences.
              My work spans branding, graphic design, motion graphics and video
              editing.
            </p>
            <p className="reveal text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
              I strive to deliver designs that are memorable, functional and
              visually engaging. Based in Accra, Ghana, I help brands tell
              compelling stories through graphic design, motion graphics, video
              editing and brand identity.
            </p>
            <div className="reveal">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
                Skills
              </p>
              <div className="flex flex-wrap gap-2" role="list">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
