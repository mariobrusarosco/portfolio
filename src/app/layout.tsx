import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mario Brusarosco",
  description: "Mario Brusarosco - Front End Developer",
};

//TODO [Project]
// Move this configuration and document it
// Font Settings
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
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
        <div className="bg-main bg-no-repeat bg-cover h-screen w-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
