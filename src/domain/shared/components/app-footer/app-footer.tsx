"use client";
import Link from "next/link";
import { portfolioRouting } from "../../typing/constants";
import { motion } from "framer-motion";
import animations from "./animations";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import { transform } from "next/dist/build/swc";

const routeToBeIgnore = ["/"];
const footerRoutes = portfolioRouting.filter(
  (route) => !routeToBeIgnore.includes(route.path)
);
const { menu } = animations;

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const listItem = {
  visible: {
    opacity: 1,
    // transition: {
    //   staggerChildren: 1,
    // },
  },
  hidden: {
    opacity: 0,
  },
};

const AppFooter = () => {
  return (
    <footer className="fixed w-screen bottom-0 bg-white/5 p-6 desktop:px-16 desktop:py-12 desktop:flex desktop:justify-center desktop:gap-x-2 desktop:my-6 desktop:bg-transparent">
      <div className="hidden font-light desktop:flex desktop:items-center desktop:gap-10">
        <span className="font-sans font-semibold text-lg uppercase text-pink-100">
          menu
        </span>
        <span className="w-[1px] h-[53px]  bg-pink-100" />
      </div>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="w-full flex justify-center gap-10 desktop:justify-start desktop:pl-6 desktop:items-center"
      >
        {footerRoutes.map((route) => (
          <AnimatedLink key={route.path} {...route} />
        ))}
      </motion.ul>
    </footer>
  );
};

const AnimatedLink = (props: { path: string; label: string }) => {
  const { path, label } = props;
  const { hasHover } = useScreenDetector();

  return (
    <motion.li key={path} className="flex" variants={listItem}>
      <Link href={path}>
        <motion.div
          className="relative flex flex-col justify-between items-center gap-y-1"
          whileHover="hover"
          initial="default"
          animate="default"
        >
          <motion.div
            className="h-[10px] w-[10px] absolute origin-center -translate-x-1/2 -translate-y-10 top-[20px] left-1/2 rounded-full bg-pink-100"
            variants={menu.innerCircle}
          />
          <motion.svg width="40" height="40" viewBox="0 0 40 40">
            <motion.path
              d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
              stroke="#FFD1CA"
              stroke-width="2"
              variants={menu.outerCircle}
              fill="transparent"
              className="origin-center"
            />
          </motion.svg>

          <motion.span
            className="font-sans font-light  text-pink-100 
            desktop:absolute
            desktop:text-2xl
            desktop:w-max destop:opacity-0 desktop:invisible"
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
