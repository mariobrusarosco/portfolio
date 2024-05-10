"use client";
import {
  animateChildrenInSequence,
  revealAndMoveToRight,
} from "@/domain/experience/animations";
import { screens } from "@/domain/shared/animations";
import { cn } from "@/domain/shared/utils/classnames";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
import {
  skillContainer,
  skillListContainer,
} from "@/domain/skills/components/animations";
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

  console.log(selectedSkill);

  return (
    <div className="h-full grid grid-cols-1 desktop:grid-cols-2 container">
      <motion.div
        className="heading-and-list-section desktop:max-w-[510px]"
        initial="default"
        animate={selectedSkill ? "selected" : "default"}
        variants={skillListContainer}
      >
        <div className="">
          <motion.p
            initial="initial"
            animate="animate"
            variants={screens.heading}
            className="mb-2 w-fit tracking-tighter font-serif font text-blue-green-300 text-2xl tablet:text-3xl desktop:text-4xl"
          >
            <span>these are my</span>
            <span className="desktop:hidden flex h-[1px] bg-blue-green-300" />
          </motion.p>

          <motion.h2
            initial="initial"
            animate="animate"
            variants={screens.heading}
            className="font-sans font-regular text-blue-green-300 text-6xl tablet:text-7xl desktop:text-8xl"
          >
            skills
          </motion.h2>
        </div>

        <section className="mt-16 pr-4 tablet:mt-18 ">
          <motion.ul
            className="flex flex-wrap gap-10 pb-4 justify-center"
            variants={listAnimation}
            animate="visible"
            initial="hidden"
          >
            {skills.map((skill) => (
              <motion.li
                className="min-w-[63px] tablet:min-w-[90px]"
                key={skill.id}
                onClick={() => handleSelectSkill(skill.id)}
              >
                <Skill skill={skill} selectedSkillId={selectedSkill?.id} />
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </motion.div>

      <motion.div
        initial="default"
        variants={skillContainer}
        animate={selectedSkill ? "selected" : "default"}
        className={cn(
          "skill-details absolute left-0 top-0 bg-blue-green-300/10 h-screen w-screen z-10 p-8"
        )}
      >
        <div className="grid grid-cols-1 gap-y-4 text-white pt-20 border border-blue-green-300 w-full my-20">
          <p
            onClick={() => {
              router.push(window.location.pathname);
            }}
          >
            close
          </p>
        </div>
      </motion.div>
    </div>
  );
}
