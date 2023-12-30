export const AppBreakpoints = {
  mobile: 767,
  tablet: 768,
  mobileAndTablet: 1279,
  desktop: 1280,
};

export const AppBreakpointsMediaQueries = {
  mobile: `(max-width: ${AppBreakpoints.mobile}px)`,
  tablet: `(min-width: ${AppBreakpoints.tablet}px) and (max-width: ${AppBreakpoints.desktop}px)`,
  desktop: `(min-width: ${AppBreakpoints.desktop}px)`,
};
