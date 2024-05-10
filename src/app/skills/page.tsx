"use client";
import {
  animateChildrenInSequence,
  revealAndMoveToRight,
} from "@/domain/experience/animations";
import { screens } from "@/domain/shared/animations";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
import { Skill } from "@/domain/skills/components/skill";
import { skills } from "@/domain/skills/constants";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const listAnimation = animateChildrenInSequence(0.05);

export default function Skills() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSkill = searchParams.get("skill_id");

  const handleSelectSkill = (skillId: string) => {
    console.log("handleSelectSkill", skillId);
  };

  console.log({ currentSkill });

  return (
    <div className="h-full grid grid-cols-1 desktop:grid-cols-2 container">
      <div className="heading-and-list-section">
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

        <section className="mt-16 pr-4 overflow-y-auto max-h-[calc(100dvh-460px)]">
          <motion.ul
            className="flex flex-wrap gap-10 pb-4 desktop:flex-col justify-center"
            variants={listAnimation}
            animate="visible"
            initial="hidden"
          >
            {skills.map((skill) => (
              <motion.li
                key={skill.id}
                onClick={() => handleSelectSkill(skill.id)}
              >
                <Skill skill={skill.label} />
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>

      {/* <div className="skill-details">
        <div className="grid grid-cols-1 gap-y-4">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-blue-green-300 text-2xl">Languages</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                JavaScript
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                TypeScript
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                Python
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                HTML
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                CSS
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <h3 className="text-blue-green-300 text-2xl">Frameworks</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                React
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                Next.js
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                Express
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                Django
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                Tailwind CSS
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <h3 className="text-blue-green-300 text-2xl">Tools</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                Git
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                GitHub
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                VS Code
              </div>
              <div className="bg-blue-green-300 text-white rounded-lg p-2">
                Postman
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
