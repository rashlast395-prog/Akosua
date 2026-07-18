import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
  containerClassName?: string;
}

export function Section({
  children,
  className,
  id,
  alt,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section", alt && "section-alt", className)}
    >
      <div className={cn("container-cs", containerClassName)}>{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className={cn("eyebrow", align === "center" && "mx-auto")}>
        {eyebrow}
      </span>
      <h2 className="section-title mt-4">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-ink-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
