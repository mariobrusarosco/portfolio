"use client";
import { animateChildrenInSequence } from "@/domain/experience/animations";
import { screens } from "@/domain/shared/animations";

import { useScreenDetector } from "@/domain/shared/hooks/useScreenDetector";
import { cn } from "@/domain/shared/utils/classnames";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
import { skillContainer, skillListContainer } from "@/domain/skills/animations";
import { Skill } from "@/domain/skills/components/skill";
import { skills } from "@/domain/skills/constants";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const listAnimation = animateChildrenInSequence(0.05);

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
    console.log("handleSelectSkill", selectedSkill?.queryParams);

    router.push(`${window.location.pathname}?${queryParamsString}`);
  };
  const { hasHover } = useScreenDetector();

  return (
    <div className="container x-global-spacing h-full grid grid-cols-1 lg:grid-cols-2 md:content-start">
      <div className="column-wrapper">
        <section className="heading-and-list-section x-global-spacing pt-12 md:pt-4 lg:col-span-2 lg:pt-2">
          <motion.p
            initial="initial"
            animate="animate"
            variants={screens.heading}
            className="w-fit font-serif text-active-secondary text-2xl tracking-widest md:text-3xl lg:text-4xl lg:ml-8"
          >
            <span>this is my</span>
          </motion.p>

          <motion.h2
            initial="initial"
            animate="animate"
            variants={screens.heading}
            className="font-sans font-regular text-active-primary text-6xl -mt-6 md:text-7xl lg:text-8xl lg:-mt-7"
          >
            knowledge
          </motion.h2>
        </section>

        <section className="list-of-knowledge mt-16">
          <motion.ul
            className="flex flex-wrap gap-8 pb-4 justify-center"
            variants={listAnimation}
            animate="visible"
            initial="hidden"
          >
            {skills.map((skill) => (
              <motion.li
                className="min-w-[30px] md:min-w-[40px]"
                key={skill.id}
                onClick={() => handleSelectSkill(skill.id)}
              >
                <Skill skill={skill} selectedSkillId={selectedSkill?.id} />
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>

      <motion.div
        initial="default"
        variants={skillContainer}
        animate={selectedSkill ? "selected" : "default"}
        className={cn(
          "skill-details-overlay absolute w-screen left-0 top-92 h-[calc(100%-96px-116px)] z-50 px-4 lg:static  lg:w-full lg:overflow-auto lg:h-auto lg:max-h-[600px] lg:z-1 bg-blue-green-300/10"
        )}
      >
        <div className="skill-details-content pt-20 px-6 my-20 border border-primary-color flex flex-col w-full overflow-auto lg:my-0 lg:px-10 lg:border-none">
          <div className="heading flex justify-between items-center mb-16">
            <p className="font-serif text-2xl text-primary-color font-regular">
              {selectedSkill?.label}
            </p>

            <div className="flex gap-2 justify-between items-center lg:hidden">
              <p
                className="uppercase text-pink-100 font-sans text-xs cursor-pointer"
                onClick={() => {
                  router.push(window.location.pathname);
                }}
              >
                back
              </p>
              <p>--</p>
            </div>
          </div>

          <div className="flex flex-col gap-x-4">
            <div className="mb-6">
              <p className="topic mb-2 font-serif text-blue-green-300 text-lg">
                work experience
              </p>

              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
            </div>

            <div className="mb-6">
              <p className="topic topic mb-2 serif text-blue-green-300 text-lg">
                work experience
              </p>

              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
            </div>

            <div className="mb-6">
              <p className="topic topic mb-2 font-serif text-blue-green-300 text-lg">
                work experience
              </p>

              <p className="topic-explanation font-sans text-2xl text-pink-100 font-light">
                I’ve worked with Typescript on React projects for 4+ years
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
