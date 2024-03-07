/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Inter var", sans-serif'],
    },
    extend: {
      screens: {
        sm: "480px",
      },
      spacing: {
        big: "36rem",
        medium: "24rem",
      },
    },
  },
  plugins: [],
};
