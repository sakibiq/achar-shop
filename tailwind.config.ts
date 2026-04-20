import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyprus — deep teal (primary brand color)
        cyprus: {
          50:  "#e6f2f1",
          100: "#b3d9d6",
          200: "#80c0bb",
          300: "#4da7a1",
          400: "#268e87",
          500: "#004643",  // base cyprus
          600: "#003d3a",
          700: "#003330",
          800: "#002a27",
          900: "#001a18",
        },
        // Milk — warm cream (background color)
        milk: {
          50:  "#ffffff",
          100: "#fff9f2",
          200: "#fff3e6",  // base milk
          300: "#ffe8cc",
          400: "#ffdbb0",
          500: "#ffcb8e",
          600: "#f0a84e",
          700: "#c47d20",
          800: "#8a5510",
          900: "#4a2c05",
        },
        // Accent — warm amber for CTAs and highlights
        accent: {
          50:  "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
        body: ["'Segoe UI'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "cyprus": "0 4px 24px rgba(0,70,67,0.15)",
        "cyprus-lg": "0 8px 40px rgba(0,70,67,0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
