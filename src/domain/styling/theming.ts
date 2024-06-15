"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { PortfolioRoute, portfolioRouting } from "../shared/typing/constants";

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
  const paths = usePathname().split("/");
  const domainPath = paths[1];
  const domainIdOrRootPath = !domainPath ? "/" : `/${domainPath}`;

  useEffect(() => {
    const dynamicColors = routeColors[domainIdOrRootPath];
    const root = document?.documentElement;
    root.style.setProperty("--active-primary", dynamicColors.primaryColor);
    root.style.setProperty(
      "--active-secondary",
      dynamicColors.secondaryColor ?? ""
    );
  }, [paths, domainIdOrRootPath]);

  return null;
};
