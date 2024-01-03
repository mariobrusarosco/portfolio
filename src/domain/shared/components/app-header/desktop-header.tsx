import { motion } from "framer-motion";
import Link from "next/link";
import { circleAnimation, labelAnimation, stemAnimation } from "./animations";
import { portfolioRouting } from "../../typying/constants";

interface Props {
  path: string;
  label: string;
}

export const DesktopHeader = () => {
  return (
    <header className="bg-primary-white/20 tablet:rounded-lg desktop:w-[200px]">
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
            variants={stemAnimation}
            className="w-[1px] h-[43px] bg-light-gray desktop:opacity-0 desktop:absolute"
          />
          <motion.div
            variants={circleAnimation}
            className="w-[10px] h-[10px] rounded-full bg-primary-base m-and-t:absolute m-and-t:top-[15px] desktop:w-[20px] desktop:h-[20px]"
          />
        </div>
        <motion.span
          transition={{
            x: 20,
          }}
          variants={labelAnimation}
          className="desktop:absolute desktop:text-lg desktop:translate-y-[10px]  desktop:invisible"
        >
          {label}
        </motion.span>
      </Link>
    </motion.li>
  );
};
