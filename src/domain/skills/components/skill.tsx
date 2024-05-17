import { useScreenDetector } from "@/domain/shared/hooks/useScreenDetector";
import { motion } from "framer-motion";
import animations, { selectedKnowledgeOuterCircle } from "../animations";
import { cn } from "@/domain/shared/utils/classnames";
import { SkillProps } from "../typing/interfaces-and-enums";
const { menu } = animations;

const Skill = ({
  skill,
  selectedSkillId,
}: {
  skill: SkillProps;
  selectedSkillId: string | undefined;
}) => {
  const isSelected = skill.id === selectedSkillId;
  const isInSelectionMode = !!selectedSkillId;

  return (
    // <h3 className="uppercase font-sans font-semibold text-pink-100 text-lg">
    <AnimatedLink
      skill={skill}
      isSelected={isSelected}
      isInSelectionMode={isInSelectionMode}
    />
    // </h3>
  );
};

const AnimatedLink = ({
  isSelected,
  skill,
  isInSelectionMode,
}: {
  skill: SkillProps;
  isSelected: boolean;
  isInSelectionMode: boolean;
}) => {
  const { hasHover } = useScreenDetector();

  console.log("isInSelectionMode", isInSelectionMode);

  return (
    // <Link href={path}>
    <motion.div
      // className=""
      whileHover="hover"
      initial="default"
      animate="default"
      className={cn(
        "relative flex flex-col items-center gap-y-1 cursor-pointer",
        {
          "opacity-0": isInSelectionMode && !isSelected,
        }
      )}
    >
      <motion.div
        className="relative"
        // initial="default"
        animate={isSelected ? "selected" : "default"}
        variants={selectedKnowledgeOuterCircle}
        // animate={{
        //   scale: [1, 2, 5, 10, 15],
        //   opacity: [1, 0.5, 0.2, 0.1, 0],
        //   transition: {
        //     type: "easeInOut",
        //     duration: 1.5,
        //     // delay: 0.5,
        //     times: [0, 0.2, 0.3, 0.5, 1],
        //   },
        // }}
      >
        <motion.div
          className={cn(
            "h-[5px] w-[5px] absolute bg-pink-100 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            {
              "bg-blue-green-300": isSelected,
            }
          )}
          // animate={isSelected ? "selected" : "default"}
          // variants={selectedKnowledgeOuterCircle}
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
        </motion.div>
        <div className="w-[20px]">
          <svg viewBox="0 0 40 40">
            <path
              d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
              strokeWidth="1"
              fill="transparent"
              className={cn({
                "stroke-blue-green-300": isSelected,
                "stroke-pink-100": !isSelected,
              })}
            />
          </svg>
        </div>
      </motion.div>

      <motion.span
        className={cn("font-sans font-light text-sm", {
          "opacity-5": isInSelectionMode,
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
