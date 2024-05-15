import { palette } from "../../styling/palette";

export const AppBreakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1336px",
  xl: "1536px",
  fh: "1920px",
};

export const AppBreakpointsMediaQueries = {
  md: `(max-width: ${AppBreakpoints.md})`,
  tablet: `(min-width: ${AppBreakpoints.md})`,
  lg: `(min-width: ${AppBreakpoints.lg})`,
  xl: `(min-width: ${AppBreakpoints.xl})`,
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
