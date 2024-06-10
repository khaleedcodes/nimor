/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smallest: "440px",
      },
      colors: {
        primary: "#000",
        secondary: "#0B0B0C",
        "card-text": "hsl(217 19% 35%)",
        "card-bg": "rgb(96,76,199,0.1)",
        "first-accent": "#604cc7",
        "second-accent": "#604cc766",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
