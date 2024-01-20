"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioRouting } from "../../typing/constants";
import animations from "./animations";

const { desktopHeader } = animations;

interface Props {
  path: string;
  label: string;
}

export const DesktopHeader = () => {
  return (
    <header className="hidden bg-primary-white/20 rounded-lg desktop:w-[200px] desktop:block">
      <ul className="flex justify-around p-4">
        {portfolioRouting.map((route) => (
          <AnimatedLink
            path={route.path}
            label={route.label}
            key={route.path}
          />
        ))}
      </ul>
    </header>
  );
};

export const AnimatedLink = (props: Props) => {
  const { path, label } = props;

  return (
    <motion.li whileHover="hover">
      <Link
        href={path}
        className="flex flex-col text-primary-white font-light text-sm"
      >
        <div className="relative flex justify-center">
          <motion.div
            variants={desktopHeader.stem}
            className="w-[1px] h-[43px] bg-light-gray desktop:opacity-0 desktop:absolute"
          />
          <motion.div
            variants={desktopHeader.circle}
            className="w-[10px] h-[10px] rounded-full bg-primary-base m-and-t:absolute m-and-t:top-[15px] desktop:w-[20px] desktop:h-[20px]"
          />
        </div>
        <motion.span
          transition={{
            x: 20,
          }}
          variants={desktopHeader.label}
          className="desktop:absolute desktop:text-lg desktop:translate-y-[10px]  desktop:invisible"
        >
          {label}
        </motion.span>
      </Link>
    </motion.li>
  );
};
