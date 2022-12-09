/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#334257",
        secondary: "#F4F6F6",
        dimWhite: '#F6F5F5'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        firaSans: ['Fira Sans Condensed', 'sans-serif']
      },
      dropShadow: {
        'mid': '0px 6px 2px #548CA8'
      },
      textColor: {
        text_color: 'rgba(0, 0, 0, 0.85);'
      }
    },
    screens: {
      xs: "480px",
      ss: "350px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};