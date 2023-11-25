import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedContainerThreeLayers } from "./domain/shared/components/animated-container-three-layers";
import { AnimatedContainerTwoLayers } from "./domain/shared/components/animated-container-two-layers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mario Brusarosco",
  description: "Mario Brusarosco - Front End Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedContainerTwoLayers>{children}</AnimatedContainerTwoLayers>
        {/* <AnimatedContainerThreeLayers>{children}</AnimatedContainerThreeLayers> */}
      </body>
    </html>
  );
}
