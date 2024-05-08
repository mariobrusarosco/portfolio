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

export const portfolioRouting = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/side-projects", label: "Side Projects" },
];
