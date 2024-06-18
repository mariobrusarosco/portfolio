"use client";
import animations from "@/domain/knowledge/animations";
import { KNOWLEDGE } from "@/domain/knowledge/constants";
import { cn } from "@/domain/shared/utils/classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";

export default function KnowledgeScreen() {
  const knowledgeId = useParams()["slug"];
  const { back } = useRouter();
  const knowledge = KNOWLEDGE.find((k) => k.id === knowledgeId);

  if (!knowledge) return null;

  return (
    // <AnimatePresence>
    //   {isSelected && (
    <motion.div
      className={cn(
        "rounded py-8 px-6 fixed h-screen w-screen grid place-content-center top-0 left-0 min-h-[300px] lg:flex lg:items-center lg:gap-x-24"
      )}
      animate="selected"
      initial="default"
      variants={animations.knowledgeContainer}
    >
      <div className="flex justify-between items-center mb-8 lg:w-[300px] ">
        <h2 className="text-4xl font-josefin text-teal-500">
          {knowledge.label}
        </h2>

        <div
          className="flex gap-1 justify-between items-center  cursor-pointer"
          onClick={back}
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

      <div className="flex flex-col gap-4 lg:gap-x-6 lg:flex-1 lg:flex-row">
        {knowledge.academicExperience?.length && (
          <div className="flex-1">
            <h3 className="text-pink-500 font-semibold text-2xl">
              academic experience
            </h3>
            <p className="text-rose-100">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quasi optio, eos dolor ducimus quos velit! Quidem sequi placeat
              ipsa est. Dicta fugiat, minus voluptate cumque ea sed aperiam eos.
            </p>
          </div>
        )}

        {knowledge.workExperience?.length && (
          <div className="flex-1">
            <h3 className="text-pink-500 font-semibold text-2xl">
              work experience
            </h3>
            <p className="text-rose-100">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              quasi optio, eos dolor ducimus quos velit! Quidem sequi placeat
              ipsa est. Dicta fugiat, minus voluptate cumque ea sed aperiam eos.
            </p>
          </div>
        )}
      </div>
    </motion.div>
    //   )}
    // </AnimatePresence>
  );
}
