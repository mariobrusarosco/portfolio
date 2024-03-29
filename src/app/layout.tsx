import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/domain/shared/components/app-header/app-header";

export const metadata: Metadata = {
  title: "Mario Brusarosco",
  description: "Mario Brusarosco - Front End Developer",
};

//TODO [Project]
// Move this configuration and document it
// Font Settings
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat antialiased`}>
        <div className="bg-main bg-no-repeat bg-cover h-full">{children}</div>
        <AppHeader />
      </body>
    </html>
  );
}
