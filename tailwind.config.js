/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      m: { max: "767px" },
      tablet: { min: "768px" },
      "m-and-t": { max: "1279px" },
      desktop: { min: "1280px" },
    },
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        main: "url('/main-bg.svg')",
      },
      colors: {
        "neutral-white": "#FFF",
        "neutral-black": "#000",
        "primary-base": "#FF6D6D",
        "primary-dark": "#BB2253",
        "secondary-base": "#0D78A0",
        "secondary-dark": "#00112C",
        "light-gray": "#908F8F",
        "light-green": "#5BB494",
      },
    },
  },
  plugins: [],
};
