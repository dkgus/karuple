/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    //extend: {},
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
  },
  plugins: [ 
    require("daisyui"),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')]
  
};
