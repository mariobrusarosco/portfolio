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
        "primary-black": "rgb(var(--primary-black) / <alpha-value>)",
        "primary-white": "rgb(var(--primary-white) / <alpha-value>)",
        "primary-base": "rgb(var(--primary-base) / <alpha-value>)",
        "primary-dark": "rgb(var(--primary-dark) / <alpha-value>)",
        "secondary-base": "rgb(var(--secondary-base) / <alpha-value>)",
        "secondary-dark": "rgb(var(--secondary-dark) / <alpha-value>)",
        "light-gray": "rgb(var(--light-gray) / <alpha-value>)",
        "light-green": "rgb(var(--light-green) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
