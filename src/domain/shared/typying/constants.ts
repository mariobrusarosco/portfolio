export const AppBreakpoints = {
  mobile: 767,
  tablet: 1024,
  mobileAndTablet: 1279,
  desktop: 1367,
};

export const AppBreakpointsMediaQueries = {
  mobile: `(max-width: ${AppBreakpoints.mobile}px)`,
  "mobile-lg": `(min-width: ${AppBreakpoints.mobile}px)`,
  "mobile-lg-only": `(min-width: ${AppBreakpoints.mobile}px) and (max-width: ${AppBreakpoints.tablet}px)`,
  tablet: `(min-width: ${AppBreakpoints.tablet}px) and (max-width: ${AppBreakpoints.desktop}px)`,
  desktop: `(min-width: ${AppBreakpoints.desktop}px)`,
};

export const portfolioRouting = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Side Projects" },
];
