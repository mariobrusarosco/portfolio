import "./globals.css";
import type { Metadata } from "next";
import { AppHeader } from "@/domain/shared/components/app-header/app-header";
import clsx from "clsx";
import { APP_FONTS_NEXTJS } from "@/domain/styling/nextjs";
import { AppFooter } from "@/domain/shared/components/app-footer/app-footer";
import { ThemeSetup } from "@/domain/styling/theming";

export const metadata: Metadata = {
  title: "Mario Brusarosco",
  description: "Mario Brusarosco - Front End Developer",
};

const tabletOffsets = "tablet:pt-[156px] tablet:pb-[156px]";
const desktopOffsets = "desktop:pt-[180px]";
const bodyClasses = clsx(
  "bg-cover bg-no-repeat bg-fixed bg-main-mobile antialiased",
  tabletOffsets,
  desktopOffsets,
  APP_FONTS_NEXTJS.josefinSlab.variable,
  APP_FONTS_NEXTJS.josefinSans.variable
);

const mainContainerClasses = clsx(
  "fixed h-full w-full pt-[76px] pb-[116px] md:pt-[92px] overflow-hidden"
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
        <main className={mainContainerClasses}>{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
