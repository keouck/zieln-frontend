import { Lora } from "next/font/google";
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
      fontFamily: {
        lora: ['Lora', 'serif']
      },
      animation: {
        marquee: "marquee var(--marquee-duration) linear infinite",
      },
      keyframes: {
        marquee: {
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#273469", // Black
        primaryDark: "#1E2749",
        secondary: "#30343F", // White
        light: "#FAFAFF", // Gray
      },
    },
  },
  plugins: [require("preline/plugin")],
};
export default config;
