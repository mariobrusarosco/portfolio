// "use client";
// import {
//   animateChildrenInSequence,
//   revealAndMoveToRight,
// } from "@/domain/experience/animations";
// import { screens } from "@/domain/shared/animations";
// import { useScreenDetector } from "@/domain/shared/hooks/useScreenDetector";
// import { cn } from "@/domain/shared/utils/classnames";
// import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
// import { skillContainer, skillListContainer } from "@/domain/skills/animations";
// import { Skill } from "@/domain/skills/components/skill";
// import { skills } from "@/domain/skills/constants";
// import { motion } from "framer-motion";
// import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";

// const listAnimation = animateChildrenInSequence(0.05);

// export default function Skills() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const selectedSkill = skills.find((skill) => {
//     return skill.id === searchParams.get("skill_id");
//   });
//   const handleSelectSkill = (skillId: string) => {
//     const selectedSkill = skills.find((skill) => {
//       return skill.id === skillId;
//     });

//     const queryParamsString = updateParamsOnURL({
//       searchParams,
//       queryParams: selectedSkill?.queryParams,
//     });
//     console.log("handleSelectSkill", selectedSkill?.queryParams);

//     router.push(`${window.location.pathname}?${queryParamsString}`);
//   };
//   const { hasHover } = useScreenDetector();

//   console.log({ selectedSkill });

//   return (
//     <div className="h-full grid grid-cols-1 desktop:grid-cols-2 container ">
//       <motion.div
//         className="heading-and-list-section desktop:max-h-[500px] desktop:overflow-auto"
//         initial="default"
//         animate={selectedSkill ? "selected" : "default"}
//         variants={skillListContainer}
//       >
//         <div className="">
//           <motion.p
//             initial="initial"
//             animate="animate"
//             variants={screens.heading}
//             className="mb-2 w-fit tracking-tighter font-serif font text-blue-green-300 text-2xl tablet:text-3xl desktop:text-4xl"
//           >
//             <span>these are my</span>
//             <span className="desktop:hidden flex h-[1px] bg-blue-green-300" />
//           </motion.p>

//           <motion.h2
//             initial="initial"
//             animate="animate"
//             variants={screens.heading}
//             className="font-sans font-regular text-blue-green-300 text-6xl tablet:text-7xl desktop:text-8xl"
//           >
//             skills
//           </motion.h2>
//         </div>

//         <section className="mt-16 pr-4 tablet:mt-18 ">
//           <motion.ul
//             className="flex flex-wrap gap-10 pb-4 justify-center"
//             variants={listAnimation}
//             animate="visible"
//             initial="hidden"
//           >
//             {skills.map((skill) => (
//               <motion.li
//                 className="min-w-[63px] tablet:min-w-[90px]"
//                 key={skill.id}
//                 onClick={() => handleSelectSkill(skill.id)}
//               >
//                 <Skill skill={skill} selectedSkillId={selectedSkill?.id} />
//               </motion.li>
//             ))}
//           </motion.ul>
//         </section>
//       </motion.div>

//       <motion.div
//         initial="default"
//         variants={skillContainer}
//         animate={selectedSkill ? "selected" : "default"}
//         className={cn(
//           "skill-details-overlay absolute w-screen left-0 top-92 h-[calc(100%-96px-116px)] z-50 px-4 desktop:static  desktop:w-full desktop:overflow-auto desktop:h-auto desktop:max-h-[600px] desktop:z-1 bg-blue-green-300/10"
//         )}
//       >
//         <div className="skill-details-content pt-20 px-6 my-20 border border-primary-color flex flex-col w-full overflow-auto desktop:my-0 desktop:px-10 desktop:border-none">
//           <div className="heading flex justify-between items-center mb-16">
//             <p className="font-serif text-2xl text-primary-color font-regular">
//               {selectedSkill?.label}
//             </p>

//             <div className="flex gap-2 justify-between items-center desktop:hidden">
//               <p
//                 className="uppercase text-pink-100 font-sans text-xs cursor-pointer"
//                 onClick={() => {
//                   router.push(window.location.pathname);
//                 }}
//               >
//                 back
//               </p>
//               <p>--</p>
//             </div>
//           </div>

//           <div className="flex flex-col gap-x-4">
//             <div className="mb-6">
//               <p className="topic mb-2 font-serif text-blue-green-300 text-lg">
//                 work experience
//               </p>

//               <p className="topic-explanation font-sans text-2xl text-pink-100 font-light">
//                 I’ve worked with Typescript on React projects for 4+ years
//               </p>
//             </div>

//             <div className="mb-6">
//               <p className="topic topic mb-2 serif text-blue-green-300 text-lg">
//                 work experience
//               </p>

//               <p className="topic-explanation font-sans text-2xl text-pink-100 font-light">
//                 I’ve worked with Typescript on React projects for 4+ years
//               </p>
//             </div>

//             <div className="mb-6">
//               <p className="topic topic mb-2 font-serif text-blue-green-300 text-lg">
//                 work experience
//               </p>

//               <p className="topic-explanation font-sans text-2xl text-pink-100 font-light">
//                 I’ve worked with Typescript on React projects for 4+ years
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container flex flex-col justify-around desktop:justify-center">
      <NameAndFirstName />

      <AboutMe />
    </div>
  );
}

const firstName = "mario".split("");
const lastName = "brusarosco".split("");

const NameAndFirstName = () => {
  return (
    <div className="font-serif max-w-[312px] tablet:max-w-[667px] desktop:mt-[100px] desktop:pb-[10px]">
      <h2 className="font-semibold uppercase text-pink-500 text-6xl tablet:text-[100px]  desktop-large:text-[125px]">
        {firstName.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: index / 10,
              duration: 4,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h2>

      <h3 className="font-thin text-pink-100 text-5xl tablet:text-[100px] text-right -mt-5 tablet:-mt-8 tablet:text-left tablet:pl-[90px] desktop-large:text-[100px] uppercase">
        {lastName.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: index / 10,
              duration: 4,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h3>
    </div>
  );
};

const aboutMeHeading = "about me".split(" ");
const aboutMeText =
  "a front end developer who enjoys creating digital products asdsadasknas djsabjsad asjd sajd sajd sasajd sajd sajd sadsad sahdadjhsa dhj.a kkasjdksadksaj dksajdsakdjsa kdjaskdj askdjsasd asdsads adsad  sadsadsadsaa akdjsakd jsakdj askdjsakdjsa as dsa  dksajdsakdjsa kdjaskdj askdjsasd asdsads adsad  sadsadsadsaa akdjsakd jsakdj askdjsakdjsa as dsa d final".split(
    " "
  );

const AboutMe = () => {
  return (
    <div className="w-full font-sans tablet:text-right desktop:max-w-[680px] desktop:ml-auto desktop-large:max-w-[1080px]">
      <p className="text-3xl font-light text-pink-500 desktop-large:text-5xl">
        {aboutMeHeading.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: index / 10,
              duration: 4,
            }}
          >
            {letter}{" "}
          </motion.span>
        ))}
      </p>

      <p className="text-pink-100 font-thin text-3xl uppercase tablet:text-5xl desktop:text-7xl desktop-large:text-8xl">
        {aboutMeText.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: index / 10,
              duration: 4,
            }}
          >
            {letter}{" "}
          </motion.span>
        ))}
      </p>
    </div>
  );
};
