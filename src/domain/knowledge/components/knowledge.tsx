import { useScreenDetector } from "@/domain/shared/hooks/useScreenDetector";
import { motion } from "framer-motion";
import animations from "../animations";
import { cn } from "@/domain/shared/utils/classnames";
import { IKnowledge } from "../typing/interfaces-and-enums";
import { useParams } from "next/navigation";
import { KNOWLEDGE } from "../constants";

const Knowledge = ({ knowledge }: { knowledge: IKnowledge }) => {
  const knowledgeId = useParams()["slug"];
  const activeKnowledge = knowledge.id === knowledgeId;
  const isInSelectionMode = !!activeKnowledge;

  return (
    // <h3 className="uppercase font-sans font-semibold text-pink-100 text-lg">
    <AnimatedLink
      knowledge={knowledge}
      isSelected={activeKnowledge}
      isInSelectionMode={isInSelectionMode}
    />
    // </h3>
  );
};

const AnimatedLink = ({
  isSelected,
  knowledge,
  isInSelectionMode,
}: {
  knowledge: IKnowledge;
  isSelected: boolean;
  isInSelectionMode: boolean;
}) => {
  return (
    <motion.div
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
        initial="hidden"
        animate={isSelected ? "selected" : "default"}
        variants={animations.selectedKnowledgeOuterCircle}
      >
        <motion.div
          className={cn(
            "h-[5px] w-[5px] absolute bg-pink-100 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:h-[10px] md:w-[10px]",
            {
              "bg-blue-green-300": isSelected,
            }
          )}
        >
          <svg viewBox="0 0 7 6" fill="none">
            <rect x="0.5" width="6" height="6" rx="3" stroke="none" />
          </svg>
        </motion.div>
        <div className="w-[20px] md:w-[40px]">
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
        {knowledge.label}
      </motion.span>
    </motion.div>
    // </Link>
  );
};

export { Knowledge };
