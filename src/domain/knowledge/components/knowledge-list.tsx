"use client";
import { motion } from "framer-motion";
import { KNOWLEDGE } from "../constants";
import { KnowledgeListItem } from "./knowledge-list-item";
import animations from "../animations";
import { useRouter } from "next/navigation";
const KnowledgeList = () => {
  const router = useRouter();

  return (
    <div data-ui="knowledge-list" className="h-full">
      <motion.ul
        className="flex flex-wrap gap-8 pb-4 pr-2 justify-center md:gap-14 lg:gap-x-6 lg:gap-y-6 relative h-full"
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
            <KnowledgeListItem knowledge={knowledge} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export { KnowledgeList };
