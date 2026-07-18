import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  accent?: boolean;
  className?: string;
}

export function Badge({ children, accent, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "badge",
        accent && "badge-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
