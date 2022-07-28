// @type {import('tailwindcss').Config}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/hero.jpg')",
      },
    },
    fontFamily: {
      custom: ["ubuntu-mono", "Ubuntu", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
