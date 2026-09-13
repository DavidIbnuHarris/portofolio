import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#0B0E14", // deep navy-black — the "terminal" background
          surface: "#12161F", // panel/card surface, one step up from base
          raised: "#181D29",  // hovered / raised surface
          border: "#232A38",
        },
        ink: {
          DEFAULT: "#EDEAE3", // warm off-white, primary text
          muted: "#8B93A6",   // slate, secondary text
          faint: "#5C6478",   // tertiary / disabled text
        },
        amber: {
          DEFAULT: "#E8A33D", // primary accent — warm terminal amber
          bright: "#F6B95C",
          dim: "#B87F2B",
        },
        teal: {
          DEFAULT: "#4FD1C5", // secondary accent — "success" / links
          dim: "#3AA79D",
        },
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(237,234,227,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,234,227,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        marquee: "marquee 28s linear infinite",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
