/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        seaweed: {
          50: "#f1f7ee",
          100: "#e1eed9",
          200: "#c6dfb7",
          300: "#a2c98d",
          400: "#82b368",
          500: "#63984a",
          600: "#4c7838",
          700: "#3c5d2e",
          800: "#324b29",
          900: "#2d4126",
          950: "#1a2b15",
        },
      },
    },
  },
  plugins: [],
};
