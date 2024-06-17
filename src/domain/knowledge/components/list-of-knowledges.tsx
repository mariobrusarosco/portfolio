"use client";
import { motion } from "framer-motion";
import { KNOWLEDGE } from "../constants";
import { Knowledge } from "./knowledge";
import animations from "../animations";
import { useRouter } from "next/navigation";
const ListOfKnowledges = () => {
  const router = useRouter();

  return (
    <section className="list-of-knowledge mt-16">
      <motion.ul
        className="flex flex-wrap gap-8 pb-4 justify-center md:gap-14 lg:gap-x-6 lg:gap-y-6"
        variants={animations.listOfSkills}
        initial="hidden"
        animate="visible"
      >
        {KNOWLEDGE.map((knowledge) => (
          <motion.li
            className="min-w-[30px] md:min-w-[40px] lg:min-w-[80px]"
            key={knowledge.id}
            onClick={() => router.push(`/knowledge/${knowledge.id}`)}
            variants={animations.listItem}
          >
            <Knowledge knowledge={knowledge} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export { ListOfKnowledges };
