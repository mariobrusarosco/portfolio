"use client";

import { usePathname } from "next/navigation";
import { use, useEffect } from "react";
import { PortfolioRoute, portfolioRouting } from "../shared/typing/constants";
import { palette } from "./palette";

const routeColors = portfolioRouting.reduce(
  (acc, { path, primaryColor, secondaryColor }: PortfolioRoute) => {
    acc[path] = {
      primaryColor,
      secondaryColor,
    };
    return acc;
  },
  {} as Record<string, { primaryColor: string; secondaryColor?: string }>
);

export const ThemeSetup = () => {
  const root = document.documentElement;
  const pathname = usePathname();

  useEffect(() => {
    const { primaryColor, secondaryColor } = routeColors[pathname];

    root.style.setProperty("--active-primary", primaryColor);
    root.style.setProperty("--active-secondary", secondaryColor);
  }, [pathname]);

  useEffect(() => {
    // TODO Conside setting these CSS Vars as a build process, where a css file will be created with the colors
    Object.entries(palette).forEach(([key, { rgb }]) => {
      root.style.setProperty(`--${key}`, rgb);
    });
  }, []);

  return null;
};
