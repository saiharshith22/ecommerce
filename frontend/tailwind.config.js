// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dmBlack: {
          light: "#1E1E1E",
          // DEFAULT: "#1E1E1E",
          dark: "#121212",
        },
        dmWhite: {
          light: "#E0E0E0",
          dark: "#979797",
        },
        dmPurple: {
          DEFAULT: "#B280EF",
        },
      },
    },
  },
  darkMode: "media",
  plugins: [nextui()],
};
