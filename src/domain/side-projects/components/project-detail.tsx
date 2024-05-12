import { motion } from "framer-motion";
import { SideProject } from "../typing/interfaces-and-enums";
import animations, {
  revealAndMoveToRight,
} from "@/domain/experience/animations";

export const ProjectDetail = ({ project }: { project: SideProject }) => {
  const Comp = project.Component;

  return (
    <>
      <motion.div
        animate="visible"
        initial="hidden"
        variants={revealAndMoveToRight}
      >
        <Comp />
      </motion.div>
    </>
  );
};
