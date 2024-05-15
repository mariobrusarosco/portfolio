"use client";
import Link from "next/link";
import { portfolioRouting } from "../../typing/constants";
import { motion } from "framer-motion";
import animations from "./animations";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { footerSpecialAnimations } from "@/domain/skills/animations";

const routeToBeIgnore = ["/"];
const footerRoutes = portfolioRouting.filter(
  (route) => !routeToBeIgnore.includes(route.path)
);
const { menu } = animations;

const AppFooter = () => (
  <footer className="fixed flex min-h-[116px] w-screen bottom-0 lg:m-w-[132px]">
    <div className="container y-global-spacing flex-1 py-6 lg:flex lg:justify-start items-center">
      <Menu />
    </div>
  </footer>
);

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const { hasHover } = useScreenDetector();

  const menuStatus = isMenuOpen || !hasHover ? "visible" : "hidden";

  return (
    <>
      <div className="hidden lg:flex lg:items-center">
        <motion.span
          className="font-sans font-semibold text-lg uppercase text-pink-100 cursor-pointer p-4"
          onClick={handleToggleMenu}
          layout="size"
          whileHover="hover"
          initial="default"
          animate={isMenuOpen && "hover"}
          variants={menu.trigger}
        >
          menu
        </motion.span>

        <svg width="2" height="53" viewBox="0 0 2 53" fill="none">
          <motion.path
            d="M1 0V53"
            className="mx-6"
            initial="hidden"
            fill={`var(--active-primary)`}
            animate={menuStatus}
            variants={menu.stem}
          />
        </svg>
      </div>

      <motion.ul
        initial="hidden"
        layout="position"
        animate={menuStatus}
        variants={menu.list}
        custom={menuStatus}
        className="hidden w-full justify-center gap-10 md:justify-around lg:ml-8 lg:justify-start lg:items-center lg:px-4"
      >
        {footerRoutes.map((route) => (
          <AnimatedLink key={route.path} id={route.path} {...route} />
        ))}
      </motion.ul>
    </>
  );
};

const AnimatedLink = (props: { path: string; label: string; id: string }) => {
  const searchParams = useSearchParams();
  const isSkillSelected = !!searchParams.get("skill_id");
  const { path, label, id } = props;
  const { hasHover } = useScreenDetector();

  const itemAnimation = id.includes("skills")
    ? footerSpecialAnimations["skills"]
    : {};

  return (
    <Link href={path}>
      <motion.li
        key={path}
        className="flex justify-center flex-col"
        variants={menu.listItem}
        whileHover="hover"
        initial="default"
      >
        <motion.div className="relative flex flex-col items-center gap-y-1 cursor-pointer">
          <motion.div
            className="h-[10px] w-[10px] absolute bg-primary-color rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-active-primary"
            variants={menu.innerCircle}
          />
          <div className="w-[40px]">
            <motion.svg viewBox="0 0 40 40">
              <motion.path
                d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
                strokeWidth="1"
                fill="transparent"
                stroke={`var(--active-primary)`}
                variants={menu.outerCircle}
              />
            </motion.svg>
          </div>
        </motion.div>

        <motion.span
          className="font-sans font-light text-active-primary w-max lg:absolute lg:text-2xl lg:invisible"
          variants={menu.label}
        >
          {label}
        </motion.span>
      </motion.li>
    </Link>
  );
};

export { AppFooter };
