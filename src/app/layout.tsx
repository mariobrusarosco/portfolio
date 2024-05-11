import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/domain/shared/components/app-header/app-header";
import clsx from "clsx";
import { APP_FONTS_NEXTJS } from "@/domain/styling/nextjs";
import { AppFooter } from "@/domain/shared/components/app-footer/app-footer";
import { useEffect } from "react";
import { ThemeSetup } from "@/domain/styling/theming";

export const metadata: Metadata = {
  title: "Mario Brusarosco",
  description: "Mario Brusarosco - Front End Developer",
};

const bodyClasses = clsx(
  "bg-center bg-no-repeat bg-cover bg-fixed bg-main-mobile tablet:bg-main-tablet desktop:bg-main-desktop",
  "antialiased",
  APP_FONTS_NEXTJS.josefinSlab.variable,
  APP_FONTS_NEXTJS.josefinSans.variable
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bodyClasses}>
        <ThemeSetup />
        <AppHeader />
        <main className="h-full pt-[120px] pb-[116px] tablet:pt-[156px] tablet:pb-[156px] desktop:pt-[180px]">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
