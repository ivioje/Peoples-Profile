/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#334257",
        secondary: "#F4F6F6",
        dimWhite: '#F6F5F5',
        lightGray: '#E6E6E6'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        firaSans: ['Fira Sans Condensed', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        garamond: ['EB Garamond', 'serif']
      },
      shadow: {
        'mid': '0px 6px 2px #548CA8',
        'dark': '0px 3px 5px 1px rgba(66,66,66,0.75)'
      },
      textColor: {
        text_color: 'rgba(0, 0, 0, 0.85);'
      }
    },
    screens: {
      ss: "350px",
      xs: "500px",
      sm: "769px",
      md: "980px",
      ex: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};