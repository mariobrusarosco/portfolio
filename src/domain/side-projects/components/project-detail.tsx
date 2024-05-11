import { motion } from "framer-motion";
import { SideProject } from "../typing/interfaces-and-enums";
import animations from "@/domain/experience/animations";
const { company } = animations;

export const ProjectDetail = ({ project }: { project: SideProject }) => {
  const Comp = project.Component;

  return (
    <>
      <motion.div
        animate="visible"
        initial="hidden"
        variants={company.headeritem}
      >
        <Comp />
      </motion.div>
    </>
  );
};
