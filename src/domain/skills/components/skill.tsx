import { useScreenDetector } from "@/domain/shared/hooks/useScreenDetector";
import { motion } from "framer-motion";
import Link from "next/link";
import animations from "../animations";
import { ReactNode } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Skill } from "../typing/interfaces-and-enums";
import { cn } from "@/domain/shared/utils/classnames";
const { menu } = animations;

const Skill = ({
  skill,
  selectedSkillId,
}: {
  skill: Skill;
  selectedSkillId: string;
}) => {
  const isSelected = skill.id === selectedSkillId;

  return (
    <h3 className="uppercase font-sans font-semibold text-pink-100 text-lg">
      <AnimatedLink skill={skill} isSelected={isSelected} />
    </h3>
  );
};

const AnimatedLink = ({
  isSelected,
  skill,
}: {
  skill: Skill;
  isSelected: boolean;
}) => {
  const { hasHover } = useScreenDetector();

  return (
    // <Link href={path}>
    <motion.div
      className="relative flex flex-col items-center gap-y-1 cursor-pointer"
      whileHover="hover"
      initial="default"
      animate="default"
    >
      <div className="relative">
        <div
          className={cn(
            "h-[10px] w-[10px] absolute bg-pink-100 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            {
              "bg-blue-green-300": isSelected,
            }
          )}
          // variants={hasHover ? menu.innerCircle : undefined}
        >
          <svg viewBox="0 0 7 6" fill="none">
            <rect
              x="0.5"
              width="6"
              height="6"
              rx="3"
              stroke="none"
              // className={cn("", {
              //   "fill-blue-green-300": isSelected,
              // })}
            />
          </svg>
        </div>
        <div className="w-[40px]">
          <motion.svg viewBox="0 0 40 40">
            <motion.path
              d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
              strokeWidth="1"
              variants={hasHover ? menu.outerCircle : undefined}
              fill="transparent"
              className={cn({
                "stroke-blue-green-300": isSelected,
                "stroke-pink-100": !isSelected,
              })}
            />
          </motion.svg>
        </div>
      </div>

      <motion.span
        className={cn("font-sans font-light", {
          "text-blue-green-300": isSelected,
          "text-pink-100": !isSelected,
        })}
      >
        {skill.label}
      </motion.span>
    </motion.div>
    // </Link>
  );
};

export { Skill };
