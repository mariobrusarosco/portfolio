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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={htmlClasses}>
      <body className="bg-cover bg-no-repeat bg-fixed bg-main-mobile antialiased flex flex-col justify-between md:bg-main-tablet lg:bg-main-desktop xl:bg-main-desktop-large fh:bg-main-full-hd overflow-hidden">
        <ThemeSetup />
        <AppHeader />
        <main className="x-global-spacing flex-1 z-10 relative h-[calc(100vh-var(--header-height)-var(--footer-height))]">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
