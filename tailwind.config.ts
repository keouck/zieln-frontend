import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/preline/preline.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#4CAF50", // Vivid Green
        secondary: "#2196F3", // Bright Blue
        tertiary: "#FF9800", // Bright Orange
        neutral: "#FFFFFF", // White
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
