"use client";
import { useEffect, useState } from "react";
import { AppBreakpointsMediaQueries } from "../typing/constants";

const identifyDeviceProperties = () => {
  if (typeof window === "undefined")
    return { isMobile: false, isTablet: false, isDesktop: false };

  const isMobile =
    window?.matchMedia(AppBreakpointsMediaQueries.mobile).matches || false;
  const isTablet = window?.matchMedia(AppBreakpointsMediaQueries.tablet)
    .matches;
  const isDesktop =
    window?.matchMedia(AppBreakpointsMediaQueries.desktop).matches || false;
  const hasHover = window.matchMedia("(hover: hover)").matches;

  return { isMobile, isTablet, isDesktop, hasHover };
};

export const useScreenDetector = () => {
  const [deviceProperties, setDeviceProperties] = useState(
    identifyDeviceProperties
  );

  useEffect(() => {
    const handleResize = () => {
      setDeviceProperties(identifyDeviceProperties);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceProperties;
};
