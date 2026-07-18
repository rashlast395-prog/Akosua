import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function Marquee({ children, className, speed = 32 }: MarqueeProps) {
  const content = (
    <>
      {children}
      {children}
    </>
  );

  return (
    <div className={cn("marquee overflow-hidden", className)}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {content}
      </div>
    </div>
  );
}
