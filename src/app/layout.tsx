import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";
import { AnimatedContainerThreeLayers } from "./domain/shared/components/animated-container-three-layers";
import { AnimatedContainerTwoLayers } from "./domain/shared/components/animated-container-two-layers";

export const metadata: Metadata = {
  title: "Mario Brusarosco",
  description: "Mario Brusarosco - Front End Developer",
};

//TODO [Project]
// Move this configuration and document it
// Font Settings
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "400", "700"], variable: "--font-montserrat" });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat`}>
        <div className="bg-main bg-no-repeat bg-cover">
          {children}
        </div>
      </body>
    </html>
  );
}
