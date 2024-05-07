import { APP_FONTS } from "./src/domain/styling/fonts";
import { AppBreakpoints } from "./src/domain/shared/typing/constants";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      "mobile-only": { max: AppBreakpoints.mobile + "px" },
      // "mobile-lg-only": { max: AppBreakpoints["mobile-lg"] + "px" },
      // "m-and-t": { max: AppBreakpoints.mobileAndTablet + "px" },
      "mobile-lg": {
        min: AppBreakpoints.mobile + "px",
      },
      tablet: { min: AppBreakpoints.tablet + "px" },
      desktop: { min: AppBreakpoints.desktop + "px" },
    },
    extend: {
      fontFamily: {
        sans: [`var(${APP_FONTS.josefinSans.variable})`, "sans-serif"],
        serif: [`var(${APP_FONTS.josefinSlab.variable})`, "serif"],
      },
      backgroundImage: {
        "main-mobile": "url('/main-bg-mobile.jpg')",
        "main-tablet": "url('/main-bg-tablet.jpg')",
        "main-desktop": "url('/main-bg-desktop.jpg')",
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

        "pink-100": "rgb(var(--pink-100) / <alpha-value>)",
        "green-600": "rgb(var(--green-600) / <alpha-value>)",
        "orange-400": "rgb(var(--orange-400) / <alpha-value>)",
        "pink-500": "rgb(var(--pink-500) / <alpha-value>)",
        "blue-green-300": "rgb(var(--blue-green-300) / <alpha-value>)",
        "red-700": "rgb(var(--red-700) / <alpha-value>)",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
