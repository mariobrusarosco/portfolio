import { Josefin_Sans, Josefin_Slab } from "next/font/google";

// NextJS Configuration
const josefinSlabNextJSConfig = Josefin_Slab({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-josefin-slab",
});

const josefinSansNextJSConfig = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-josefin-sans",
});

export const AppFonts = {
  josefinSlab: josefinSlabNextJSConfig,
  josefinSans: josefinSansNextJSConfig,
};
