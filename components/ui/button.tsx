import { cn } from "@/lib/utils";
import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: "a";
}

interface NativeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({ as = "a", className, children, ...rest }: ButtonProps) {
  const Tag = as;
  return (
    <Tag
      className={cn("btn inline-flex items-center justify-center gap-2", className)}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </Tag>
  );
}

interface VariantProps {
  children: ReactNode;
  className?: string;
}

export function ButtonPrimary({ children, className, ...rest }: VariantProps & ButtonProps) {
  return (
    <Button className={cn("btn-primary", className)} {...(rest as Record<string, unknown>)}>
      {children}
    </Button>
  );
}

export function ButtonGhost({ children, className, ...rest }: VariantProps & ButtonProps) {
  return (
    <Button className={cn("btn-ghost", className)} {...(rest as Record<string, unknown>)}>
      {children}
    </Button>
  );
}
