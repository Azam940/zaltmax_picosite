/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: "1440px",
      lg: "1090px",
      md: "760px",
      sm: "460px",
      xs: "340px",
    },
    extend: {},
  },
  plugins: [],
};
