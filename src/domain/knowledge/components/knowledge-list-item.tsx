"use client";
import { motion, AnimatePresence } from "framer-motion";
import animations from "../animations";
import { cn } from "@/domain/shared/utils/classnames";
import { IKnowledge } from "../typing/interfaces-and-enums";
import { useParams } from "next/navigation";

const KnowledgeListItem = ({ knowledge }: { knowledge: IKnowledge }) => {
  const knowledgeId = useParams()["slug"];
  const isSelected = knowledge.id === knowledgeId;
  const isInSelectionMode = !!knowledgeId;

  return (
    <>
      <motion.div
        data-ui="knowledge-list-item"
        className={cn(
          "relative flex flex-col items-center gap-y-1 cursor-pointer group",
          {
            "opacity-0 invisible": isInSelectionMode && !isSelected,
            "cursor-auto": isSelected,
          }
        )}
      >
        <motion.div
          className="relative"
          initial="default"
          animate={isSelected ? "selected" : "default"}
          variants={animations.selectedKnowledgeOuterCircle}
        >
          <motion.div
            className={cn(
              "h-[6px] w-[6px] absolute bg-pink-100 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:h-[10px] md:w-[10px] group-hover:bg-blue-green-300 transition-colors",
              {
                "bg-teal-500": isSelected,
              }
            )}
          >
            <svg viewBox="0 0 7 6" fill="none">
              <rect x="0.5" width="6" height="6" rx="3" stroke="none" />
            </svg>
          </motion.div>

          <div className="w-[28px] md:w-[40px]">
            <svg viewBox="0 0 40 40">
              <path
                d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
                strokeWidth="1"
                fill="transparent"
                className={cn(
                  "stroke-pink-100 group-hover:stroke-blue-green-300 transition-colors",
                  { "stroke-teal-500": isSelected }
                )}
              />
            </svg>
          </div>
        </motion.div>

        <motion.span
          className={cn(
            "font-light text-lg text-pink-100 group-hover:text-blue-green-300 ",
            {
              "opacity-0": isSelected,
            }
          )}
        >
          {knowledge.label}
        </motion.span>
      </motion.div>
    </>
  );
};

export { KnowledgeListItem };
