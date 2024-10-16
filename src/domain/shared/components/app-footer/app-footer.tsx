"use client";
import Link from "next/link";
import { portfolioRouting } from "../../typing/constants";
import { TargetAndTransition, motion } from "framer-motion";
import animations from "./animations";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import { useState } from "react";
import { palette } from "@/domain/styling/palette";
import { animateIfHoverEnabled } from "../../utils/animations";

const routeToBeIgnore = ["/"];
const footerRoutes = portfolioRouting.filter(
  (route) => !routeToBeIgnore.includes(route.path)
);
const { menu } = animations;

const AppFooter = () => {
  const { hasHover } = useScreenDetector();

  return (
    <footer className="z-20 relative">
      <div className="x-global-spacing items-center py-6 lg:flex lg:justify-start lg:py-4 xl:py-8">
        <Menu />

        <motion.a
          className="font-sans text-xs uppercase whitespace-nowrap text-pink-100 font-light cursor-pointer hidden ml-auto lg:block"
          initial="hidden"
          animate="default"
          whileHover={animateIfHoverEnabled(
            hasHover,
            animations.textLink.hover
          )}
          href="/resume-mario-brusarosco.pdf"
          variants={animations.textLink}
          download
        >
          get a simpler version
        </motion.a>
      </div>
    </footer>
  );
};

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const { isDesktop } = useScreenDetector();

  const menuStatus = isDesktop && !isMenuOpen ? "hidden" : "visible";

  return (
    <>
      <div className="hidden lg:flex lg:items-center">
        <motion.span
          className="font-sans font-semibold text-sm uppercase text-pink-100 cursor-pointer p-4 pl-0"
          onClick={handleToggleMenu}
          layout="size"
          animate={isMenuOpen ? "hover" : "default"}
          initial="hidden"
          whileHover={menu.trigger.hover as TargetAndTransition}
          variants={menu.trigger}
        >
          menu
        </motion.span>

        <svg width="2" height="53" viewBox="0 0 2 53" fill="none">
          <motion.path
            d="M1 0V53"
            className="mx-6 stroke-pink-100"
            initial="hidden"
            animate={isMenuOpen ? "visible" : "hidden"}
            variants={menu.stem}
          />
        </svg>
      </div>

      <motion.ul
        initial="hidden"
        layout="position"
        animate={menuStatus}
        variants={menu.list}
        className="hidden w-full justify-center gap-10 md:justify-around lg:ml-8 lg:justify-start lg:items-center"
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
  const { hasHover } = useScreenDetector();

  return (
    <motion.li
      key={path}
      className="flex justify-center lg:w-auto"
      variants={menu.listItem}
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
              className="h-[8px] w-[8px] absolute bg-pink-100 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              variants={hasHover ? menu.innerCircle : undefined}
            />
            <div className="w-[30px]">
              <motion.svg viewBox="0 0 40 40">
                <motion.path
                  d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
                  stroke={palette["pink-100"].hex}
                  strokeWidth="1"
                  variants={hasHover ? menu.outerCircle : undefined}
                  fill="transparent"
                />
              </motion.svg>
            </div>
          </div>

          <motion.span
            className="font-sans font-light text-pink-100 w-max lg:absolute lg:text-2xl lg:invisible"
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
