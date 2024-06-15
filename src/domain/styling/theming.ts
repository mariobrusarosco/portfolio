"use client";

import { useParams, usePathname } from "next/navigation";
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
  const domainId = !domainPath ? "/" : `/${domainPath}`;

  useEffect(() => {
    const colors = routeColors[domainId];
    const root = document?.documentElement;
    root.style.setProperty("--active-primary", colors.primaryColor);
    root.style.setProperty("--active-secondary", colors.secondaryColor ?? "");
  }, [paths, domainId]);

  return null;
};
