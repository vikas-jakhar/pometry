/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1180px",
        }
      },
      fontSize: {
        'custom-xl': "32px",
        'custom-2xl': "38px",
        'custom-2xl': "64px",
      },
      colors: {
        darkRed: "#9D2035",
        offBlack: "#111111",
      },
      backgroundImage: {
        'darkRed-gradient': "linear-gradient(96.09deg, #E31930 0%, #F3576E 100%)"
      }
    },
  },
  plugins: [],
}