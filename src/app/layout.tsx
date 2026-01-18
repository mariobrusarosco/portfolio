import "./globals.css";
import type { Metadata } from "next";
import { AppHeader } from "@/domain/shared/components/app-header/app-header";
import clsx from "clsx";
import { APP_FONTS_NEXTJS } from "@/domain/styling/nextjs";
import { AppFooter } from "@/domain/shared/components/app-footer/app-footer";

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
      <body className="antialiased flex flex-col justify-between">
        <AppHeader />
        <main className="x-global-spacing flex-1 z-10 relative h-[calc(100vh-var(--header-height)-var(--footer-height))]">
          {children}
        </main>
        <AppFooter />
      </body>
    </html>
  );
}
