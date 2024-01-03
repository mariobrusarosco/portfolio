export const AppBreakpoints = {
  mobile: 767,
  "mobile-lg": 768,
  tablet: 1024,
  mobileAndTablet: 1279,
  desktop: 1280,
};

export const AppBreakpointsMediaQueries = {
  mobile: `(max-width: ${AppBreakpoints.mobile}px)`,
  "mobile-lg": `(max-width: ${AppBreakpoints["mobile-lg"]}px)`,
  tablet: `(min-width: ${AppBreakpoints.tablet}px) and (max-width: ${AppBreakpoints.desktop}px)`,
  desktop: `(min-width: ${AppBreakpoints.desktop}px)`,
};
