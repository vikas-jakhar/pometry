/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'production',
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
        'custom-sm': "22px",
        'custom-xl': "32px",
        'custom-2xl': "38px",
        'custom-3xl': "64px",
      },
      colors: {
        darkRed: "#9D2035",
        offBlack: "#111111",
        lightGray: "#1111111A",
        offGray: "#8E8E8E",
        offWhite: "#0000001A",
        lightBlue: "#4BB4F5",
      },
      backgroundImage: {
        'hero': "url(./assets/image/webp/hero-bg.webp)",
        'darkRed-gradient': "linear-gradient(96.09deg, #E31930 0%, #F3576E 100%)",
        'lightRed-gradient': "linear-gradient(96.09deg, rgba(227, 25, 48, 0.05) 0%, rgba(243, 87, 110, 0.05) 100%)",
      },
      boxShadow: {
        '3xl': "0px 0px 5px",
        '4xl': "0px 0px 45.57px 0px #0000001A",
        '5xl': "0px 0px 12px 0px #0000001F",
        '6xl': "0px 0px 24px 0px #0000001F",
      }
    },
  },
  plugins: [],
}