"use client";
import { useScreenDetector } from "@/domain/shared/hooks/useScreenDetector";
import { motion, AnimatePresence } from "framer-motion";
import animations from "../animations";
import { cn } from "@/domain/shared/utils/classnames";
import { IKnowledge } from "../typing/interfaces-and-enums";
import { useParams, useRouter } from "next/navigation";
import { KNOWLEDGE } from "../constants";

const KnowledgeListItem = ({ knowledge }: { knowledge: IKnowledge }) => {
  const router = useRouter();
  const knowledgeId = useParams()["slug"];
  const isSelected = knowledge.id === knowledgeId;
  const isInSelectionMode = !!knowledgeId;

  return (
    <>
      <motion.div
        whileHover="hover"
        initial="default"
        animate="default"
        className={cn(
          "relative flex flex-col items-center gap-y-1 cursor-pointer",
          {
            "opacity-0 invisible": isInSelectionMode && !isSelected,
          }
        )}
      >
        <motion.div
          className="relative"
          initial="hidden"
          animate={isSelected ? "selected" : "default"}
          variants={animations.selectedKnowledgeOuterCircle}
        >
          <motion.div
            className={cn(
              "h-[5px] w-[5px] absolute bg-pink-100 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:h-[10px] md:w-[10px]",
              {
                "bg-blue-green-300": isSelected,
              }
            )}
          >
            <svg viewBox="0 0 7 6" fill="none">
              <rect x="0.5" width="6" height="6" rx="3" stroke="none" />
            </svg>
          </motion.div>
          <div className="w-[20px] md:w-[40px]">
            <svg viewBox="0 0 40 40">
              <path
                d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
                strokeWidth="1"
                fill="transparent"
                className={cn({
                  "stroke-blue-green-300": isSelected,
                  "stroke-pink-100": !isSelected,
                })}
              />
            </svg>
          </div>
        </motion.div>

        <motion.span
          className={cn("font-light text-sm", {
            // "opacity-5": isInSelectionMode,
            "opacity-0": isSelected,
            "text-pink-100": !isSelected,
          })}
        >
          {knowledge.label}
        </motion.span>
      </motion.div>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            className="rounded py-8 px-6 absolute top-0 left-0 min-h-[300px]"
            animate={isSelected ? "selected" : "default"}
            initial="default"
            variants={animations.knowledgeContainer}
          >
            <div className="flex justify-between mb-8">
              <h2 className="text-3xl font-josefin text-teal-500">
                {knowledge.label}
              </h2>

              <div
                className="flex gap-1 justify-between items-center  cursor-pointer"
                onClick={() => {
                  router.back();
                  // router.push(`/knowledge/dsadsadsadsa`);
                }}
              >
                <p className="uppercase text-pink-100 text-xs">back</p>
                <div className="w-5 h-5 border border-teal-500 p-1 rounded-full">
                  <svg
                    viewBox="0 0 7 7"
                    className="stroke-active-primary"
                    fill="none"
                    strokeWidth="0.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.68555 1L1.43555 3.5M7 3.5H1.43555M1.43555 3.5L3.68555 6.5" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <span onClick={() => router.push("/experience")}>Dashboar</span>
              <p className="text-rose-100">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt quasi optio, eos dolor ducimus quos velit! Quidem sequi
                placeat ipsa est. Dicta fugiat, minus voluptate cumque ea sed
                aperiam eos.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { KnowledgeListItem };
