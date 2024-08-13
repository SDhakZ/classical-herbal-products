/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        markaziText: ["var(--font-markaziText)", "serif"],
        markPro: ["var(--font-markPro)", "sans-serif"],
      },
      colors: {
        "background-white": "#FAF9F6",
        "background-black": "#121212",
        "black-shade": {
          100: "#6C6C6C",
          200: "#4D4D4D",
          300: "#282828",
          400: "#121212",
        },
        "white-shade": {
          100: "#ffffff",
          200: "#EEEEEE",
          300: "#C0C5C9",
        },
        "primary-green": {
          100: "#A9CF4D",
          200: "#25813B",
          300: "#1A5319",
          400: "#16402D",
          500: "#193028",
        },
        "primary-beige": {
          300: "#AA8B56",
          200: "#E8DFCA",
          100: "#F5EFE6",
        },
      },
    },
  },
  plugins: [],
};
