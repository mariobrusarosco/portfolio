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

const htmlClasses = clsx(
  APP_FONTS_NEXTJS.josefinSlab.variable,
  APP_FONTS_NEXTJS.josefinSans.variable
);
const tabletOffsets = "";
const desktopOffsets = "";
const bodyClasses = clsx(
  "bg-cover bg-no-repeat bg-fixed bg-main-mobile antialiased flex flex-col",
  tabletOffsets,
  desktopOffsets
);

const mainContainerClasses = clsx(
  "x-global-spacing flex-1  max-h-[calc(100dvh-92px-92px)] overflow-hidden "
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={htmlClasses}>
      <body className={bodyClasses}>
        <ThemeSetup />
        <AppHeader />
        <main className={mainContainerClasses}>{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
