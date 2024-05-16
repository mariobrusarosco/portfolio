"use client";
import Link from "next/link";
import { portfolioRouting } from "../../typing/constants";
import { motion } from "framer-motion";
import animations from "./animations";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import { useState } from "react";

const routeToBeIgnore = ["/"];
const footerRoutes = portfolioRouting.filter(
  (route) => !routeToBeIgnore.includes(route.path)
);
const { menu } = animations;

const AppFooter = () => (
  <footer className="fixed flex min-h-[116px] w-screen bottom-0 lg:m-w-[132px]">
    <div className="container x-global-spacing flex-1 py-6 lg:flex lg:justify-start items-center">
      <Menu />
    </div>
  </footer>
);

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const { isDesktop } = useScreenDetector();

  const menuStatus = isDesktop && !isMenuOpen ? "hidden" : "visible";

  return (
    <>
      <div className="hidden lg:flex lg:items-center">
        <motion.span
          className="font-sans font-semibold text-lg uppercase text-pink-100 cursor-pointer p-4"
          onClick={handleToggleMenu}
          layout="size"
          whileHover="hover"
          animate={isMenuOpen && "hover"}
          variants={menu.trigger}
        >
          menu
        </motion.span>

        <svg width="2" height="53" viewBox="0 0 2 53" fill="none">
          <motion.path
            d="M1 0V53"
            className="mx-6 stroke-active-primary"
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
        className="hidden w-full justify-center gap-10 md:justify-around lg:ml-8 lg:justify-start lg:items-center lg:px-4"
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
              className="h-[10px] w-[10px] absolute bg-active-primary rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              variants={hasHover ? menu.innerCircle : undefined}
            />
            <div className="w-[40px]">
              <motion.svg viewBox="0 0 40 40">
                <motion.path
                  d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
                  stroke="var(--active-primary)"
                  stroke-width="1"
                  variants={hasHover ? menu.outerCircle : undefined}
                  fill="transparent"
                />
              </motion.svg>
            </div>
          </div>

          <motion.span
            className="font-sans font-light text-active-primary w-max lg:absolute lg:text-2xl lg:invisible"
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
