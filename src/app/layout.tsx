import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/domain/shared/components/app-header/app-header";
import clsx from "clsx";
import { APP_FONTS_NEXTJS } from "@/domain/styling/nextjs";
import { AppFooter } from "@/domain/shared/components/app-footer/app-footer";

export const metadata: Metadata = {
  title: "Mario Brusarosco",
  description: "Mario Brusarosco - Front End Developer",
};

const bodyClasses = clsx(
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
        <AppHeader />
        <div className="h-full bg-cover bg-no-repeat bg-main-mobile tablet:bg-main-tablet desktop:bg-main-desktop">
          <main className="h-full pt-[120px] pb-[116px] ">{children}</main>
        </div>
        <AppFooter />
      </body>
    </html>
  );
}
