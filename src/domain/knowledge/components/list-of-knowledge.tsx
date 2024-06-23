"use client";
import { motion } from "framer-motion";
import { KNOWLEDGE } from "../constants";
import { KnowledgeListItem } from "./knowledge-list-item";
import animations from "../animations";
import { useParams } from "next/navigation";
import { cn } from "@/domain/shared/utils/classnames";

const ListOfKnowledge = () => {
  const knowledgeId = useParams()["slug"];

  return (
    <div data-ui="knowledge-list" className="overflow-hidden h-full">
      <motion.ul
        className={cn(
          "flex flex-wrap gap-x-3 gap-y-12 pb-4 pr-4 justify-center relative h-full text-center content-start lg:gap-y-6 xl:content-center overflow-x-hidden",
          {
            "overflow-y-auto": knowledgeId,
          }
        )}
        variants={animations.listOfSkills}
        initial="hidden"
        animate="visible"
      >
        {KNOWLEDGE.map((knowledge) => (
          <KnowledgeListItem key={knowledge.id} knowledge={knowledge} />
        ))}
      </motion.ul>
    </div>
  );
};

export { ListOfKnowledge };
