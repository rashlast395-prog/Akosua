export const designTokens = {
  colors: {
    accent: "#FF6B2B",
    accentLight: "#FF8F5C",
    accentDark: "#E2551A",
    accentGlow: "rgba(255, 107, 43, 0.35)",
    bg: "var(--bg)",
    bgAlt: "var(--bg-alt)",
    surface: "var(--surface)",
    border: "var(--border)",
    text: "var(--text)",
    textSecondary: "var(--text-secondary)",
    textMuted: "var(--text-muted)",
  },
  typography: {
    display: ["var(--font-display)", "system-ui", "sans-serif"],
    body: ["var(--font-body)", "system-ui", "sans-serif"],
  },
  spacing: {
    section: "clamp(4.5rem, 9vw, 8rem)",
    container: "var(--container)",
    gutter: "1.5rem",
  },
  radii: {
    sm: "0.75rem",
    md: "1.25rem",
    lg: "1.75rem",
    xl: "2.5rem",
    full: "9999px",
  },
  shadows: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
  },
  transitions: {
    smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
    bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
} as const;
