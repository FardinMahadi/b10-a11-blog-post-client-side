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
          light: "#FFFFFF",
          dark: "#111827", // Darker gray for better contrast
          secondary: {
            light: "#F3F4F6",
            dark: "#1F2937",
          },
        },
        text: {
          light: "#374151", // Darker for better readability
          dark: "#F9FAFB",
          secondary: {
            light: "#4B5563",
            dark: "#D1D5DB",
          },
        },
        primary: {
          light: "#3B82F6", // Bright blue
          dark: "#60A5FA",
        },
        secondary: {
          light: "#6B7280",
          dark: "#9CA3AF",
        },
        accent: {
          light: "#10B981", // Emerald
          dark: "#34D399", // Lighter emerald for dark mode
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
