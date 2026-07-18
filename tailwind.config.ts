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
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        accent: "#FF6B2B",
        "accent-light": "#FF8F5C",
        surface: "var(--surface)",
      },
      keyframes: {
        "loader-fill": {
          to: { width: "100%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(1.5deg)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(14px) rotate(-1deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
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
        "float-reverse": "float-reverse 10s ease-in-out infinite",
        shimmer: "shimmer 1.8s linear infinite",
        grain: "grain 8s steps(10) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
