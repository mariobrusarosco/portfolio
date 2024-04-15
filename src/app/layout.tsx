import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/domain/shared/components/app-header/app-header";
import { AppFonts } from "@/domain/styling/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Mario Brusarosco",
  description: "Mario Brusarosco - Front End Developer",
};

const appFonts = clsx(
  AppFonts.josefinSans.variable,
  AppFonts.josefinSlab.variable,
  "antialiased"
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(appFonts);
  return (
    <html lang="en">
      <body className={appFonts}>
        <div className="h-full bg-cover bg-no-repeat bg-main-mobile tablet:bg-main-tablet desktop:bg-main-desktop">
          {children}
        </div>
        <AppHeader />
      </body>
    </html>
  );
}
