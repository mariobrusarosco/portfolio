"use client";
import { motion } from "framer-motion";
import { KNOWLEDGE } from "../constants";
import { KnowledgeListItem } from "./knowledge-list-item";
import animations from "../animations";
import { useParams, useRouter } from "next/navigation";
import { cn } from "@/domain/shared/utils/classnames";
const ListOfKnowledge = () => {
  const router = useRouter();
  const knowledgeId = useParams()["slug"];

  return (
    <div data-ui="knowledge-list" className="overflow-hidden h-full">
      <motion.ul
        className={cn(
          "flex flex-wrap gap-8 pb-4 pr-4 justify-center md:gap-14 lg:gap-x-6 lg:gap-y-6 relative h-full",
          {
            "overflow-auto": !knowledgeId,
          }
        )}
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

export { ListOfKnowledge };
