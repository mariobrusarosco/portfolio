import { useScreenDetector } from "@/domain/shared/hooks/useScreenDetector";
import {
  AnimatePresence,
  motion,
  useAnimate,
  useWillChange,
} from "framer-motion";
import animations from "../animations";
import { cn } from "@/domain/shared/utils/classnames";
import { SideProject } from "../typing/interfaces-and-enums";
import { useProjectAnimation } from "../useProjectAnimation";
import { useRef } from "react";

const Project = ({
  project,
  selectedProjectId,
}: {
  project: SideProject;
  selectedProjectId: string | undefined;
}) => {
  const isSelected = project.id === selectedProjectId;
  const isInSelectionMode = !!selectedProjectId;

  // console.log("rendering project", { ref });
  const { scope, handleAnimation } = useProjectAnimation(isSelected, ref);

  return (
    <div
      className={cn("flex flex-col items-center gap-y-2 cursor-pointer", {
        "opacity-5 invisible": isInSelectionMode && !isSelected,
      })}
    >
      <div ref={scope} className="relative w-[30px]" onClick={handleAnimation}>
        <motion.span
          variants={animations.innerCircle}
          animate={isSelected ? "test" : "default"}
          style={{ x: "-50%", y: "-50%" }}
          // initial="default"
          className={cn(
            "inner-circle absolute h-[8px] w-[8px] bg-pink-100 rounded-full left-1/2 top-1/2 md:h-[10px] md:w-[10px]",
            {
              "bg-orange-400": isSelected,
            }
          )}
        >
          <svg viewBox="0 0 7 6" fill="none">
            <rect x="0.5" width="6" height="6" rx="3" stroke="none" />
          </svg>
        </motion.span>

        <motion.svg viewBox="0 0 40 40">
          <motion.path
            className={cn("outer-circle", {
              "stroke-orange-400 opacity-5 lg:opacity-100": isSelected,
            })}
            d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
            strokeWidth="1"
            fill="transparent"
            stroke="#FFF"
            strokeDasharray="0 1"
            initial={"default"}
            animate={isInSelectionMode ? undefined : "default"}
            variants={animations.outerCircle}
          />
        </motion.svg>
      </div>

      <motion.p
        animate={isInSelectionMode ? "undefined" : "default"}
        className={cn(
          "text-pink-100 font-semibold uppercase text-lg font-sans",
          {
            "text-orange-400 opacity-5 lg:opacity-100": isSelected,
          }
        )}
      >
        {project.label}
      </motion.p>
    </div>
  );
};

export { Project };
