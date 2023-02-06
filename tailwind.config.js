// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["var(--font-space-mono)", ...fontFamily.mono],
      },
      colors: {
        "dark-blue": {
          50: "#0550a2",
          100: "#054892",
          200: "#044082",
          300: "#043871",
          400: "#033061",
          500: "#032851",
          600: "#022041",
          700: "#011831",
          800: "#011020",
          900: "#000810",
          1000: "#000000",
        },
        "light-blue": {
          50: "#0550a2",
          100: "#1e62ab",
          200: "#3773b5",
          300: "#5085be",
          400: "#6996c7",
          500: "#82a8d1",
          600: "#9bb9da",
          700: "#b4cbe3",
          800: "#cddcec",
          900: "#e6eef6",
          1000: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
