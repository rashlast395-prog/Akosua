import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#FF6B2B",
          light: "#FF8F5C",
          dark: "#E2551A",
        },
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        ink: {
          DEFAULT: "var(--text)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
      },
      maxWidth: {
        container: "76rem",
      },
      borderRadius: {
        sm: "0.75rem",
        md: "1.25rem",
        lg: "1.75rem",
        xl: "2.5rem",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        glow: "0 8px 30px var(--accent-glow)",
      },
      keyframes: {
        "loader-fill": { to: { width: "100%" } },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(1.5deg)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "30%": { transform: "translate(3%, 2%)" },
          "50%": { transform: "translate(-1%, 3%)" },
          "70%": { transform: "translate(2%, -2%)" },
          "90%": { transform: "translate(-3%, 1%)" },
        },
      },
      animation: {
        "loader-fill": "loader-fill 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        marquee: "marquee 32s linear infinite",
        float: "float 8s ease-in-out infinite",
        grain: "grain 8s steps(10) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
