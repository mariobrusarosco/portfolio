import { motion } from "framer-motion";
import { Divider } from "../divider";
import animations from "@/domain/side-projects/animations";
const { project } = animations;

export const OneWordProject = () => {
  return (
    <div className="grid gap-14">
      <div className="grid gap-3">
        <motion.h2
          className="text-secondary-dark text-3xl font-medium"
          variants={project.headeritem}
        >
          One Word
        </motion.h2>
        <motion.p
          className="text-primary-white font-extralight"
          variants={project.headeritem}
        >
          A game where you have to guess the word based on the definition. The
          game is based on the{" "}
          <strong className="text-secondary-dark">Just One</strong> game Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Quo porro optio ea
          dicta quia vero laborum. Inventore unde atque obcaecati soluta facere
          laborum repellendus expedita minima excepturi, et, facilis quam.{" "}
        </motion.p>
      </div>

      <div className="">
        <motion.h3
          variants={project.headeritem}
          className="text-secondary-dark text-3xl font-light"
        >
          Benefits
        </motion.h3>

        <Divider />

        <motion.div
          className="grid gap-4 pl-5 pt-4 text-primary-white font-extralight"
          variants={project.description}
        >
          <li className="">
            I can have a basic understanding how a Back End structure supports a
            Front End Application.
          </li>
          <li className="">
            I can grasp some ORM concepts and see their benefits in action.
          </li>
          <li className="">
            I can learn and practice Typescript for an ORM (prisma).
          </li>
        </motion.div>
      </div>

      <div className="">
        <motion.h3
          variants={project.headeritem}
          className="text-secondary-dark text-3xl font-light"
        >
          Details
        </motion.h3>

        <Divider />

        <motion.div
          className="grid gap-4 pl-5 pt-4 text-primary-white font-extralight"
          variants={project.description}
        >
          <li className="">
            I can have a basic understanding how a Back End structure supports a
            Front End Application.
          </li>
          <li className="">
            I can grasp some ORM concepts and see their benefits in action.
          </li>
          <li className="">
            I can learn and practice Typescript for an ORM (prisma).
          </li>
        </motion.div>
      </div>

      <div className="">
        <motion.h3
          variants={project.headeritem}
          className="text-secondary-dark text-3xl font-light"
        >
          Getting familiar with...
        </motion.h3>

        <Divider />

        <motion.div
          variants={project.description}
          className="grid gap-4 pl-5 pt-4 text-primary-white font-extralight"
        >
          <li className="">
            I can have a basic understanding how a Back End structure supports a
            Front End Application.
          </li>
          <li className="">
            I can grasp some ORM concepts and see their benefits in action.
          </li>
          <li className="">
            I can learn and practice Typescript for an ORM (prisma).
          </li>
        </motion.div>
      </div>
    </div>
  );
};
