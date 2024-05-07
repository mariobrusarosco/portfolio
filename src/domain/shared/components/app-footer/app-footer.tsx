"use client";
import Link from "next/link";
import { portfolioRouting } from "../../typing/constants";
import { motion } from "framer-motion";
import animations from "./animations";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import { transform } from "next/dist/build/swc";
import { useState } from "react";

const routeToBeIgnore = ["/"];
const footerRoutes = portfolioRouting.filter(
  (route) => !routeToBeIgnore.includes(route.path)
);
const { menu } = animations;

const AppFooter = () => (
  <footer className="fixed w-screen bottom-0 bg-white/5 p-6 desktop:px-16 desktop:py-12 desktop:flex desktop:justify-start desktop:gap-x-2 desktop:my-6 desktop:bg-transparent m-w-[132px]">
    <Menu />
  </footer>
);

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <div className="hidden font-light desktop:flex desktop:items-center desktop:gap-10">
        <motion.span
          className="font-sans font-semibold text-lg uppercase text-pink-100 cursor-pointer p-4"
          onClick={handleToggleMenu}
          layout="size"
          whileHover="hover"
          variants={menu.trigger}
        >
          menu
        </motion.span>
      </div>

      {/* <motion.div
        className="hidden w-[1px] h-[53px] mx-6 bg-pink-100"
        variants={menu.stem}
      /> */}

      <motion.ul
        // initial={false ? "hidden" : "visible"}
        // layout="position"
        // animate={isMenuOpen ? "visible" : "hidden"}
        // variants={menu.list}
        className="w-full flex justify-center gap-7 desktop:justify-start desktop:items-center desktop:gap-10"
      >
        {footerRoutes.map((route) => (
          <AnimatedLink key={route.path} {...route} />
        ))}
      </motion.ul>
    </>
  );
};

const AnimatedLink = (props: { path: string; label: string }) => {
  const { path, label } = props;
  const { hasHover, isDesktop } = useScreenDetector();

  return (
    <motion.li
      key={path}
      className="flex"
      // variants={menu.listItem}
    >
      <Link href={path}>
        <motion.div
          className="relative flex flex-col items-center gap-y-1 cursor-pointer"
          whileHover="hover"
          initial="default"
          animate="default"
        >
          <div className="relative">
            <motion.div
              className="h-[10px] w-[10px] absolute bg-pink-100 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              // variants={hasHover ? menu.innerCircle : undefined}
            />
            <motion.svg width="40" height="40" viewBox="0 0 40 40">
              <motion.path
                d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
                stroke="#FFD1CA"
                stroke-width="1"
                // variants={hasHover ? menu.outerCircle : undefined}
                fill="transparent"
                className="origin-center"
              />
            </motion.svg>
          </div>

          <motion.span
            // initial={isDesktop ? "hidden" : "visible"}
            className="font-sans font-light text-pink-100 w-max desktop:absolute desktop:text-2xl desktop:invisible"
            variants={hasHover ? menu.label : undefined}
          >
            {label}
          </motion.span>
        </motion.div>
      </Link>
    </motion.li>
  );
};

export { AppFooter };
