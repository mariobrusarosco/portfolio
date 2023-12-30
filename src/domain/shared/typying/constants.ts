export const AppBreakpoints = {
  mobile: 767,
  tablet: 768,
  desktop: 1024,
};

export const AppBreakpointsMediaQueries = {
  mobile: `(max-width: ${AppBreakpoints.mobile}px)`,
  tablet: `(min-width: ${AppBreakpoints.tablet}px) and (max-width: ${AppBreakpoints.desktop}px)`,
  desktop: `(min-width: ${AppBreakpoints.desktop}px)`,
};
