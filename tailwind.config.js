/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        "smallest" : "440px"
      },
      colors: {
        secondary: "#0f172a",
        "first-accent": "#604cc7",
        "second-accent": "#44327b",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
