/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "600px",

      md: "900px",

      lg: "1200px",

      xl: "1536px",
    },
  },
  plugins: [],
};
