import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light, corporate palette
        bg: "#FFFFFF",
        mist: "#F4F7FB", // alternating section background
        line: "#E5EAF1", // hairlines / borders
        "line-soft": "#EEF2F7",
        ink: "#0F1E33", // headings — near-black navy
        body: "#46566D", // paragraph text
        muted: "#6B7A91",
        "muted-2": "#93A1B5",
        brand: "#1C50D8", // primary blue
        "brand-deep": "#1740AE",
        "brand-soft": "#EAF1FE", // tint backgrounds
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 30, 51, 0.04), 0 8px 24px -12px rgba(15, 30, 51, 0.12)",
        "card-hover":
          "0 2px 4px rgba(15, 30, 51, 0.05), 0 18px 40px -16px rgba(28, 80, 216, 0.22)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.08)" },
        },
        "draw-x": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
        glow: "glow-pulse 7s ease-in-out infinite",
        "draw-x": "draw-x 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both",
      },
    },
  },
  plugins: [],
};

export default config;
