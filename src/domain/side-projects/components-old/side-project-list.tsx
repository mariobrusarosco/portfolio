import { motion } from "framer-motion";
import { sideProjects } from "../constants";
import animations from "@/domain/side-projects/animations";

const { projectsList } = animations;

interface Props {
  onProjectSelection: (index: number) => void;
}

const SideProjectList = (props: Props) => {
  const { onProjectSelection } = props;

  return (
    <motion.ul
      className="flex flex-col gap-y-14 desktop:pt-20 desktop:w-fit desktop:my-0 desktop:mx-auto"
      variants={projectsList.container}
      animate="visible"
      initial="hidden"
    >
      {sideProjects.map((sideProject, key) => (
        <motion.li
          key={sideProject.id}
          onClick={() => onProjectSelection(key)}
          variants={projectsList.item}
        >
          <motion.div
            whileHover="hover"
            className="flex gap-3 items-center cursor-pointer group"
          >
            <div className="relative flex justify-center">
              <div className="relative flex justify-center">
                <motion.div
                  className="w-[1px] h-[43px] bg-light-gray group-hover:bg-light-green"
                  variants={projectsList.stem}
                />
                <motion.div
                  variants={projectsList.circle}
                  className="w-[10px] h-[10px] rounded-full bg-primary-base absolute top-[15px] group-hover:bg-primary-white"
                />
              </div>
            </div>
            <motion.span
              className="text-lg text-primary-white group-hover:text-light-green"
              variants={projectsList.label}
            >
              {sideProject.label}
            </motion.span>
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SideProjectList;
