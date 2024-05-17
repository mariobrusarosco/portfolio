"use client";
import { animateChildrenInSequence } from "@/domain/experience/animations";
import { screens } from "@/domain/shared/animations";

import { useScreenDetector } from "@/domain/shared/hooks/useScreenDetector";
import { cn } from "@/domain/shared/utils/classnames";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
import animations from "@/domain/skills/animations";
import { Skill } from "@/domain/skills/components/skill";
import { skills } from "@/domain/skills/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Skills() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSkill = skills.find((skill) => {
    return skill.id === searchParams.get("skill_id");
  });
  const handleSelectSkill = (skillId: string) => {
    const selectedSkill = skills.find((skill) => {
      return skill.id === skillId;
    });

    const queryParamsString = updateParamsOnURL({
      searchParams,
      queryParams: selectedSkill?.queryParams,
    });

    router.push(`${window.location.pathname}?${queryParamsString}`);
  };
  // const { hasHover } = useScreenDetector();

  const stringToAnimate = !!selectedSkill ? "selected" : "visible";
  // console.log("stringToAnimate", stringToAnimate);
  // console.log("listOfSkills", animations.listOfSkills);

  return (
    <div className="overflow-hidden container x-global-spacing h-full grid grid-cols-1 lg:grid-cols-2 md:content-start fh:relative">
      <div className="column-wrapper lg:col-span-2 fh:col-span-1">
        <section className="heading-and-list-section pt-12 md:pt-4 lg:col-span-2 lg:pt-2">
          <motion.p
            initial="initial"
            animate="animate"
            variants={screens.heading}
            className="w-fit font-serif text-active-secondary text-2xl tracking-widest ml-4 md:text-3xl lg:text-4xl "
          >
            <span>this is my</span>
          </motion.p>

          <motion.h2
            initial="initial"
            animate="animate"
            variants={screens.heading}
            className="font-sans font-regular text-active-primary text-6xl -mt-6 md:text-7xl lg:text-8xl"
          >
            knowledge
          </motion.h2>
        </section>

        <section className="list-of-knowledge mt-16">
          <motion.ul
            className="flex flex-wrap gap-8 pb-4 justify-center md:gap-14 lg:gap-x-6 lg:gap-y-6"
            variants={animations.listOfSkills}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill) => (
              <motion.li
                className="min-w-[30px] md:min-w-[40px] lg:min-w-[80px]"
                key={skill.id}
                onClick={() => handleSelectSkill(skill.id)}
                variants={animations.listItem}
              >
                <Skill skill={skill} selectedSkillId={selectedSkill?.id} />
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>

      {/* <AnimatePresence>
        {selectedSkill && ( */}
      <motion.div
        initial="default"
        variants={animations.skillContainer}
        animate={selectedSkill ? "selected" : "default"}
        className={cn(
          "skill-details-overlay h-full absolute w-screen left-0 top-0 pt-[150px] x-global-spacing lg:pt-[80px] fh:container",
          {
            invisible: !selectedSkill,
          }
        )}
      >
        <div className="skill-details-content h-full py-8 px-6 border border-active-primary scrollable overflow-x-auto lg:border-none lg:py-2 lg:px-2 lg:flex">
          <div className="heading flex justify-between items-center mb-10 lg:min-w-[450px] lg:mb-0  lg:sticky lg:top-0">
            <p className="font-serif text-2xl text-active-primary font-regular lg:text-6xl">
              {selectedSkill?.label}
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
      {/* )} */}
      {/* </AnimatePresence> */}
    </div>
  );
}
