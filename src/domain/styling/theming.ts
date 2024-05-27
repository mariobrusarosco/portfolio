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
  const pathname = usePathname();

  useEffect(() => {
    const { primaryColor, secondaryColor } = routeColors[pathname];

    const root = document?.documentElement;

    root.style.setProperty("--active-primary", primaryColor);
    root.style.setProperty("--active-secondary", secondaryColor ?? "");
  }, [pathname]);

  return null;
};
