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
};

export const portfolioRouting: PortfolioRoute[] = [
  {
    path: "/",
    label: "Home",
    primaryColor: "#FFD1CA",
  },
  {
    path: "/experience",
    label: "Experience",
    primaryColor: "#d60c4e",
  },
  {
    path: "/skills",
    label: "Skills",
    primaryColor: "#6A9B96",
  },
  {
    path: "/side-projects",
    label: "Side Projects",
    primaryColor: "#FF6F59",
  },
];
