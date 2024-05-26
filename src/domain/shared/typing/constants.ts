export const AppBreakpoints = {
  "up-to-sm": "479px",
  sm: "480px",
  "up-to-md": "767px",
  md: "768px",
  "up-to-lg": "1335px",
  lg: "1336px",
  "up-to-xl": "1535px",
  xl: "1536px",
  "up-to-2xl": "1919px",
  fh: "1920px",
};

export const AppBreakpointsMediaQueries = {
  "up-to-sm": `(max-width: ${AppBreakpoints["up-to-md"]})`,
  xs: `(max-width: ${AppBreakpoints.sm})`,
  "up-to-md": `(max-width: ${AppBreakpoints["up-to-md"]})`,
  md: `(min-width: ${AppBreakpoints.md})`,
  "up-to-lg": `(max-width: ${AppBreakpoints["up-to-lg"]})`,
  lg: `(min-width: ${AppBreakpoints.lg})`,
  "up-to-xl": `(max-width: ${AppBreakpoints["up-to-xl"]})`,
  xl: `(min-width: ${AppBreakpoints.xl})`,
};

export type PortfolioRoute = {
  path: string;
  label: string;
};

export const portfolioRouting: PortfolioRoute[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/experience",
    label: "Experience",
  },
  {
    path: "/skills",
    label: "Skills",
  },
  {
    path: "/side-projects",
    label: "Side Projects",
  },
];
