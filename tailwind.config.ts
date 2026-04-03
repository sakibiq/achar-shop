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
        brand: {
          50:  "#fff8f0",
          100: "#ffecd6",
          200: "#ffd4a8",
          300: "#ffb470",
          400: "#ff8c38",
          500: "#f97316",
          600: "#ea6010",
          700: "#c24b0c",
          800: "#9a3d12",
          900: "#7c3412",
        },
        earth: {
          50:  "#fdf8f3",
          100: "#f5e6d3",
          200: "#e8c9a0",
          300: "#d4a574",
          400: "#b8834e",
          500: "#96652e",
          600: "#7a5126",
          700: "#5d3d1e",
          800: "#3d2810",
          900: "#1e1408",
        },
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "serif"],
        body: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
