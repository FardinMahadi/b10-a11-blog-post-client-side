/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          light: "#F8FAFC",
          dark: "#0D1321",
          secondary: {
            light: "#E2E8F0",
            dark: "#1E293B",
          },
        },
        text: {
          light: "#475569",
          dark: "#E2E8F0",
          secondary: {
            light: "#1E293B",
            dark: "#94A3B8",
          },
        },
        primary: {
          light: "#2563EB",
          dark: "#60A5FA",
        },
        secondary: {
          light: "#64748B",
          dark: "#A0AEC0", // Adjusted for better contrast
        },
        accent: {
          light: "#14B8A6", // Teal for Highlights (Good)
          dark: "#06B6D4", // More vibrant cyan for a glowing effect
        },
      },

      fontFamily: {
        title: ["Rubik Mono One", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        code: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [require("daisyui"), flowbite],
};
