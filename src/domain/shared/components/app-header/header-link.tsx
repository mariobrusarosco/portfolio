import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { Pin } from "./pin";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import { labelAnimation } from "./animations";

interface Props {
  path: string;
  label: string;
}

export const HeaderLink = (props: Props) => {
  const { path, label } = props;
  const { isDesktop } = useScreenDetector();
  const keyToRefreshVariants = String(isDesktop);

  return (
    <li>
      <Link
        href={path}
        className="flex flex-col text-primary-white font-light text-sm"
      >
        <motion.span whileHover="hover">
          <Pin />
          <motion.span
            transition={{
              x: 20,
            }}
            key={keyToRefreshVariants}
            variants={isDesktop ? labelAnimation : undefined}
            className="desktop:absolute desktop:text-lg desktop:translate-y-[10px]  desktop:invisible"
          >
            {label}
          </motion.span>
        </motion.span>
      </Link>
    </li>
  );
};
