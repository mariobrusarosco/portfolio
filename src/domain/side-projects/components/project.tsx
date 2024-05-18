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

const useProjectAnimation = (isSelected: boolean) => {
  const [scope, animate] = useAnimate();

  const handleAnimation = async () => {
    console.log(scope);
    const sequence = [];
    await animate(
      ".inner-circle",
      { x: -15 },
      { type: "spring", duration: 0.02 }
    );
    animate("path", { pathLength: 0.9 }, { duration: 0.5 });

    await animate(".inner-circle", { x: "-50%" }, { type: "spring" });
    await animate(
      ".inner-circle",
      { x: -15 },
      { type: "spring", duration: 0.02 }
    );
    animate("path", { pathLength: 0.8 }, { duration: 0.5 });
    await animate(".inner-circle", { x: "-50%" }, { type: "spring" });
    await animate(
      ".inner-circle",
      { x: -25 },
      { type: "spring", stiffness: 200 }
    );
    // await animate(
    //   ".inner-circle",
    //   {
    //     // width: "100vw",
    //     // height: "100vh",
    //     // scale: 200,
    //     // position: "fixed",
    //     // left: 0,
    //     // top: 0,
    //     // x: 0,
    //     // y: 0,
    //   },
    //   { type: "spring", stiffness: 100 }
    // );
  };

  return { scope, handleAnimation };
};

const Project = ({
  project,
  selectedProjectId,
}: {
  project: SideProject;
  selectedProjectId: string | undefined;
}) => {
  const isSelected = project.id === selectedProjectId;
  const isInSelectionMode = !!selectedProjectId;
  const [scope, animate] = useAnimate();

  const handleAnimation = async () => {
    console.log(scope);
    const sequence = [];
    await animate(
      ".inner-circle",
      { x: -15 },
      { type: "spring", duration: 0.02 }
    );
    animate("path", { pathLength: 0.9 }, { duration: 0.5 });

    await animate(".inner-circle", { x: "-50%" }, { type: "spring" });
    await animate(
      ".inner-circle",
      { x: -15 },
      { type: "spring", duration: 0.02 }
    );
    animate("path", { pathLength: 0.8 }, { duration: 0.5 });

    await animate(".inner-circle", { x: "-50%" }, { type: "spring" });
    await animate(
      ".inner-circle",
      { x: -25 },
      { type: "spring", stiffness: 200 }
    );
    await animate(
      ".inner-circle",
      {
        scale: 100,
      },
      { type: "spring", stiffness: 300, damping: 10 }
    );
    await animate(
      ".inner-circle",
      {
        opacity: 0.01,
      },
      { type: "spring", bounce: 0 }
    );
  };

  return (
    <div>
      <div
        ref={scope}
        className="cursor-pointer relative w-[30px]"
        onClick={handleAnimation}
      >
        <motion.div
          variants={animations.innerCircle}
          animate={isSelected ? undefined : "default"}
          style={{ x: "-50%", y: "-50%" }}
          className={cn(
            "inner-circle absolute h-[8px] w-[8px] bg-pink-100 rounded-full left-1/2 top-1/2 md:h-[10px] md:w-[10px]",
            {
              "bg-blue-green-300": isSelected,
            }
          )}
          // variants={animations.innerCircle}
          // animate={isSelected ? "selected" : "default"}
        >
          <svg viewBox="0 0 7 6" fill="none">
            <rect
              x="0.5"
              width="6"
              height="6"
              rx="3"
              stroke="none"
              className="abslute"
            />
          </svg>
        </motion.div>

        <motion.svg viewBox="0 0 40 40">
          <motion.path
            className="outer-circle"
            d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
            strokeWidth="1"
            fill="transparent"
            stroke="#FFF"
            strokeDasharray="0 1"
            initial={"default"}
            animate={isSelected ? undefined : "default"}
            variants={animations.outerCircle}
          />
          {console.log(project.label, "-----", !isSelected)}
        </motion.svg>
      </div>
    </div>
  );
};

export { Project };
