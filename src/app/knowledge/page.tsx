"use client";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
import animations from "@/domain/knowledge/animations";
import { KNOWLEDGE } from "@/domain/knowledge/constants";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { IKnowledge } from "@/domain/knowledge/typing/interfaces-and-enums";
import { cn } from "@/domain/shared/utils/classnames";

export default function KnowledgeRootScreen() {
  const router = useRouter();
  const knowledgeId = useParams()["slug"];
  const activeKnowledge: IKnowledge | undefined = KNOWLEDGE.find(
    (exp) => exp.id === knowledgeId
  );
  // const stringToAnimate = !!selectedSkill ? "selected" : "visible";
  // console.log("stringToAnimate", stringToAnimate);
  // console.log("listOfSkills", animations.listOfSkills);

  return (
    <div className="container x-global-spacing h-full">
      <motion.div
        initial="default"
        variants={animations.knowledgeContainer}
        animate={knowledgeId ? "selected" : "default"}
        className={cn(
          "skill-details-container h-[calc(100dvh-224px)] absolute w-screen left-0 top-[80px] pt-[150px] x-global-spacing lg:pt-[80px] fh:container",
          {
            invisible: !knowledgeId,
          }
        )}
      >
        <div className="skill-details-content h-full py-8  px-6 border border-active-primary scrollable overflow-x-auto scroller lg:border-none lg:py-2 lg:px-2 lg:flex">
          <div className="heading flex justify-between items-center mb-10 lg:min-w-[450px] lg:mb-0  lg:sticky lg:top-0">
            <p className="font-serif text-2xl text-active-primary font-regular lg:text-6xl">
              {activeKnowledge?.label}
            </p>

            <div
              className="flex gap-2 justify-between items-center  cursor-pointer p-4"
              onClick={() => {
                router.push(window.location.pathname);
              }}
            >
              <p className="uppercase text-pink-100 font-sans text-xs">back</p>
              <p>--</p>
            </div>
          </div>

          <div className="flex flex-col gap-x-4 lg:flex-row lg:ml-[100px] fh:flex-col fh:flex-1 fh:items-center justify-center">
            <div className="mb-6 fh:mb-10">
              <p className="topic mb-2 font-serif text-blue-green-300 text-lg fh:text-5xl">
                work experience
              </p>

              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
            </div>

            <div className="mb-6 fh:mb-10">
              <p className="topic topic mb-2 serif text-blue-green-300 text-lg fh:text-5xl">
                work experience
              </p>
              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>

              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light fh:text-3xl">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
