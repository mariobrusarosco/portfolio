import { APP_FONTS } from "./src/domain/styling/fonts";
import { AppBreakpoints } from "./src/domain/shared/typing/constants";

import { Config } from "tailwindcss";
import { palette } from "./src/domain/styling/palette";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        mobile: "0.5rem",
        tablet: "2rem",
        desktop: "3rem",
      },
    },
    screens: {
      // "mobile-only": { max: AppBreakpoints.mobile + "px" },
      // "mobile-lg-only": { max: AppBreakpoints["mobile-lg"] + "px" },
      // "m-and-t": { max: AppBreakpoints.mobileAndTablet + "px" },
      // "mobile-lg": {
      //   min: AppBreakpoints.mobile,
      // },
      sm: { min: AppBreakpoints.sm },
      md: { min: AppBreakpoints.md },
      lg: { min: AppBreakpoints.lg },
      xl: { min: AppBreakpoints.xl },
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
        "pink-100": palette["pink-100"].tailwind,
        "green-600": palette["green-600"].tailwind,
        "orange-400": palette["orange-400"].tailwind,
        "pink-500": palette["pink-500"].tailwind,
        "blue-green-300": palette["blue-green-300"].tailwind,
        "red-700": palette["red-700"].tailwind,
        "blue-800": palette["blue-800"].tailwind,
        "active-primary": "var(--active-primary)",
        "active-secondary": "var(--active-secondary)",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

module.exports = config;
