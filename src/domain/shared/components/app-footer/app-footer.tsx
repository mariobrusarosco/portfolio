"use client";
import Link from "next/link";
import { portfolioRouting } from "../../typing/constants";
import { motion } from "framer-motion";
import animations from "./animations";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { footerSpecialAnimations } from "@/domain/skills/animations";

const routeToBeIgnore = ["/"];
const footerRoutes = portfolioRouting.filter(
  (route) => !routeToBeIgnore.includes(route.path)
);
const { menu } = animations;

const AppFooter = () => (
  <footer
    className="fixed flex min-h-[116px] w-screen bottom-0 backdrop-filter 
    backdrop-blur-md desktop:backdrop-filter-none desktop:desktop:m-w-[132px]"
  >
    <div className="container flex-1 py-6 desktop:flex desktop:justify-start items-center">
      <Menu />
    </div>
  </footer>
);

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const { isDesktop } = useScreenDetector();

  const menuStatus = isDesktop && !isMenuOpen ? "hidden" : "visible";

  return (
    <>
      <div className="hidden desktop:flex desktop:items-center">
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
            className="mx-6 stroke-primary-color"
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
        className="hidden w-full justify-center gap-1 desktop:ml-8 desktop:justify-start desktop:items-center desktop:gap-10 desktop:px-4"
      >
        {footerRoutes.map((route) => (
          <AnimatedLink key={route.path} id={route.path} {...route} />
        ))}
      </motion.ul>
    </>
  );
};

const AnimatedLink = (props: { path: string; label: string; id: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isSkillSelected = !!searchParams.get("skill_id");
  const { path, label, id } = props;
  const { hasHover } = useScreenDetector();

  const itemAnimation = id.includes("skills")
    ? footerSpecialAnimations["skills"]
    : {};

  console.log(id, itemAnimation);

  return (
    <motion.li
      key={path}
      className="flex justify-center w-1/4 desktop:w-auto"
      variants={menu.listItem}
    >
      <Link href={path}>
        <motion.div
          className="relative flex flex-col items-center gap-y-1 cursor-pointer"
          whileHover="hover"
          initial="default"
          animate="default"
        >
          <motion.div
            className="parent relative z-60"
            initial="default"
            variants={itemAnimation}
            whileHover="hover"
            layout
            animate={isSkillSelected ? "selected" : "default"}
          >
            <motion.div
              className="h-[10px] w-[10px] absolute bg-primary-color rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              variants={menu.innerCircle}
            />
            <div className="w-[40px]">
              <motion.svg viewBox="0 0 40 40">
                <motion.path
                  d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
                  strokeWidth="1"
                  variants={hasHover ? menu.outerCircle : undefined}
                  fill="transparent"
                  className="stroke-primary-color"
                />
              </motion.svg>
            </div>
          </motion.div>

          <motion.span
            className="font-sans font-light text-primary-color w-max desktop:absolute desktop:text-2xl desktop:invisible"
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
