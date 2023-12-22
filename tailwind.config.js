/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
  ],
};
