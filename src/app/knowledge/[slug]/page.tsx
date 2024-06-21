"use client";
import animations from "@/domain/knowledge/animations";
import { KNOWLEDGE } from "@/domain/knowledge/constants";
import { CircleAndDot } from "@/domain/shared/components/circle-and-dots";
import { cn } from "@/domain/shared/utils/classnames";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";

export default function KnowledgeScreen() {
  const knowledgeId = useParams()["slug"];
  const { back } = useRouter();
  const knowledge = KNOWLEDGE.find((k) => k.id === knowledgeId);

  if (!knowledge) return null;

  return (
    <motion.div
      className={cn(
        "x-global-spacing absolute h-screen w-screen top-[150px] left-0 lg:flex lg:items-center lg:gap-x-24"
      )}
      animate="selected"
      initial="default"
      variants={animations.knowledgeContainer}
    >
      <div className="flex justify-between items-center mb-14 lg:w-[300px]">
        <h2 className="text-5xl font-thin text-blue-green-300 lowercase">
          {knowledge.label}
        </h2>

        <div
          className="flex gap-1 justify-between items-center  cursor-pointer"
          onClick={back}
        >
          <p className="uppercase text-pink-100 text-xs font-light">back</p>
          <div className="w-6 h-6 border border-blue-green-300 p-2 rounded-full">
            <svg
              viewBox="0 0 7 7"
              className="stroke-blue-green-300"
              fill="none"
              strokeWidth="0.5"
            >
              <path d="M3.68555 1L1.43555 3.5M7 3.5H1.43555M1.43555 3.5L3.68555 6.5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-10 lg:gap-x-6 lg:flex-1 lg:flex-row">
        {knowledge?.workExperience ? (
          <>
            <h3 className="text-blue-green-300 font-light text-xl">
              work experience
            </h3>
            <ul className="flex gap-x-6  gap-y-2 flex-wrap ">
              {knowledge.workExperience.map((exp) => (
                <li
                  key={exp}
                  className="text-pink-100 font-light text-lg flex items-center gap-x-2"
                >
                  <CircleAndDot color="pink-500" className="w-4 h-4" />
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      {knowledge?.academicExperience ? (
        <>
          <h3 className="text-blue-green-300 font-light text-xl">
            academic experience
          </h3>
          <ul className="flex gap-2 flex-wrap">
            {knowledge.academicExperience.map((exp) => (
              <li
                key={exp}
                className="text-pink-100 font-light text-lg flex items-center gap-x-2"
              >
                <CircleAndDot color="pink-800" className="w-4 h-4" />
                <span>{exp}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </motion.div>
  );
}
