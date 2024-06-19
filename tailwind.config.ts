import { APP_FONTS } from "./src/domain/styling/fonts";
import { AppBreakpoints } from "./src/domain/shared/typing/constants";

import { Config } from "tailwindcss";
import { palette } from "./src/domain/styling/palette";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: { min: AppBreakpoints.sm },
      md: { min: AppBreakpoints.md },
      lg: { min: AppBreakpoints.lg },
      xl: { min: AppBreakpoints.xl },
      fh: { min: AppBreakpoints.fh },
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
        "main-desktop-large": "url('/main-bg-desktop-large.jpg')",
        "main-full-hd": "url('/main-bg-full-hd.jpg')",
      },
      colors: {
        "pink-100": palette["pink-100"].hex,
        "green-600": palette["green-600"].hex,
        "orange-400": palette["orange-400"].hex,
        "pink-500": palette["pink-500"].hex,
        "blue-green-300": palette["blue-green-300"].hex,
        "red-700": palette["red-700"].hex,
        "blue-800": palette["blue-800"].hex,
        // Dynamic colors
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
