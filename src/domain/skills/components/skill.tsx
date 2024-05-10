import { useScreenDetector } from "@/domain/shared/hooks/useScreenDetector";
import { motion } from "framer-motion";
import Link from "next/link";
import animations from "./animations";
const { menu } = animations;

type SkillProps = {
  skill: string;
};

const Skill = ({ skill }: { skill: string }) => {
  return (
    <h3 className="uppercase font-sans font-semibold text-pink-100 text-lg">
      <AnimatedLink path={skill} label={skill}>
        {skill}
      </AnimatedLink>
    </h3>
  );
};

const AnimatedLink = (props: { path: string; label: string }) => {
  const { path, label } = props;
  const { hasHover } = useScreenDetector();

  return (
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
            variants={hasHover ? menu.innerCircle : undefined}
          />
          <div className="w-[40px]">
            <motion.svg viewBox="0 0 40 40">
              <motion.path
                d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
                stroke="#FFD1CA"
                strokeWidth="1"
                variants={hasHover ? menu.outerCircle : undefined}
                fill="transparent"
              />
            </motion.svg>
          </div>
        </div>

        <motion.span className="font-sans font-light text-pink-100">
          {label}
        </motion.span>
      </motion.div>
    </Link>
  );
};

export { Skill };
