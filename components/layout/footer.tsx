import Link from "next/link";
import { Twitter, Linkedin, Instagram, Dribbble } from "lucide-react";

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://dribbble.com", label: "Dribbble", icon: Dribbble },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="mx-auto max-w-container px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className="text-ink">Kumi</span>
            <span className="text-accent">Design</span>
          </Link>
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Kumi Ebenezer Tenkorang. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-5 text-ink-muted">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
