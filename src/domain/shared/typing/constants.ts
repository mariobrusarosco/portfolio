import { palette } from "../../styling/palette";

export const AppBreakpoints = {
  mobile: "767px",
  tablet: "768px",
  mobileAndTablet: "1279px",
  desktop: "1440px",
  "desktop-large": "1920px",
};

export const AppBreakpointsMediaQueries = {
  mobile: `(max-width: ${AppBreakpoints.mobile})`,
  "mobile-lg": `(min-width: ${AppBreakpoints.mobile})`,
  "mobile-lg-only": `(min-width: ${AppBreakpoints.mobile}) and (max-width: ${AppBreakpoints.tablet})`,
  tablet: `(min-width: ${AppBreakpoints.tablet}) and (max-width: ${AppBreakpoints.desktop})`,
  desktop: `(min-width: ${AppBreakpoints.desktop})`,
  "desktop-large": `(min-width: ${AppBreakpoints["desktop-large"]}px)`,
};

export type PortfolioRoute = {
  path: string;
  label: string;
  primaryColor: string;
  secondaryColor?: string;
};

export const portfolioRouting: PortfolioRoute[] = [
  {
    path: "/",
    label: "Home",
    primaryColor: palette["pink-100"].hex,
    secondaryColor: palette["blue-green-300"].hex,
  },
  {
    path: "/experience",
    label: "Experience",
    primaryColor: palette["pink-500"].hex,
    secondaryColor: palette["blue-green-300"].hex,
  },
  {
    path: "/skills",
    label: "Skills",
    primaryColor: palette["blue-green-300"].hex,
    secondaryColor: palette["blue-green-300"].hex,
  },
  {
    path: "/side-projects",
    label: "Side Projects",
    primaryColor: palette["orange-400"].hex,
    secondaryColor: palette["blue-green-300"].hex,
  },
];
