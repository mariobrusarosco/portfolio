import { Josefin_Sans, Josefin_Slab } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-josefin-sans",
});

const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-josefin-slab",
});

export const APP_FONTS_NEXTJS = {
  josefinSlab,
  josefinSans,
};
