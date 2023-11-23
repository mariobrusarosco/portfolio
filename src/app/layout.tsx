import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedContainer } from "./animatied-container";
import { AnimatePresence } from "framer-motion";
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
        <AnimatedContainer>{children}</AnimatedContainer>
      </body>
    </html>
  );
}
