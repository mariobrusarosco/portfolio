"use client";
import { useEffect, useState } from "react";
import { AppBreakpointsMediaQueries } from "../typying/constants";

const identifyDeviceByViewport = () => {
  if (typeof window === "undefined")
    return { isMobile: false, isTablet: false, isDesktop: false };

  const isMobile =
    window?.matchMedia(AppBreakpointsMediaQueries.mobile).matches || false;
  const isTablet = window?.matchMedia(AppBreakpointsMediaQueries.tablet)
    .matches;
  const isDesktop =
    window?.matchMedia(AppBreakpointsMediaQueries.desktop).matches || false;

  return { isMobile, isTablet, isDesktop };
};

export const useScreenDetector = () => {
  const [conditions, setConditions] = useState(identifyDeviceByViewport);

  useEffect(() => {
    const handleResize = () => {
      setConditions(identifyDeviceByViewport);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return conditions;
};
