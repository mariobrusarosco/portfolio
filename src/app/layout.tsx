import type { Metadata } from "next";
import { Quicksand } from "next/font/google"
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
const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-quicksand" });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable}`}>
        <AnimatedContainerTwoLayers>{children}</AnimatedContainerTwoLayers>
        {/* <AnimatedContainerThreeLayers>{children}</AnimatedContainerThreeLayers> */}
      </body>
    </html>
  );
}
