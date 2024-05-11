"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { PortfolioRoute, portfolioRouting } from "../shared/typing/constants";

const routeColors = portfolioRouting.reduce(
  (acc, { path, primaryColor }: PortfolioRoute) => {
    acc[path] = {
      primaryColor,
    };
    return acc;
  },
  {} as Record<string, { primaryColor: string }>
);

export const ThemeSetup = () => {
  const pathname = usePathname();

  useEffect(() => {
    const { primaryColor } = routeColors[pathname];
    const root = document.documentElement;

    root.style.setProperty("--primary-color", primaryColor);
  }, [pathname]);

  return null;
};
