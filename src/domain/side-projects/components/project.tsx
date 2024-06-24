import { motion } from "framer-motion";
import animations from "../animations";
import { cn } from "@/domain/shared/utils/classnames";
import { ISideProject } from "../typing/interfaces-and-enums";
import { useProjectAnimation } from "../useProjectAnimation";
import { useParams, useRouter } from "next/navigation";

const Project = ({ project }: { project: ISideProject }) => {
  const proejctId = useParams()["slug"];
  const isSelected = project.id === proejctId;
  const isInSelectionMode = !!proejctId;
  const router = useRouter();
  const { scope } = useProjectAnimation(isSelected);

  return (
    <li
      data-ui="project-list-item"
      ref={scope}
      className={cn("flex flex-col items-center gap-y-2 cursor-pointer", {
        "opacity-5 invisible": isInSelectionMode && !isSelected,
      })}
      onClick={() => router.push(`/side-projects/${project.id}`)}
    >
      <div className="relative w-[30px]">
        <motion.div
          variants={animations.innerCircle}
          animate={isSelected ? undefined : "default"}
          style={{ x: "-50%", y: "-50%" }}
          initial="default"
          className={cn(
            "inner-circle absolute h-[8px] w-[8px] bg-pink-100 rounded-full left-1/2 top-1/2 md:h-[8px] md:w-[8px]",
            {
              "bg-orange-400": isSelected,
            }
          )}
        >
          <svg viewBox="0 0 7 6" fill="none">
            <rect x="0.5" width="6" height="6" rx="3" stroke="none" />
          </svg>
        </motion.div>

        <motion.svg viewBox="0 0 40 40">
          <motion.path
            className={cn("outer-circle", {
              "stroke-orange-400": isSelected,
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
        animate={isInSelectionMode ? undefined : "default"}
        className={cn(
          "project-label text-pink-100 font-light lowercase text-lg font-sans",
          {
            "text-orange-400": isSelected,
          }
        )}
        variants={animations.label}
      >
        {project.label}
      </motion.p>
    </li>
  );
};

export { Project };
