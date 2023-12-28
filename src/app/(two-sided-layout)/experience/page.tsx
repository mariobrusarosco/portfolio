"use client";
import { motion } from "framer-motion";
import { CarrouselExperience } from "../../../domain/experience/components/carrousel-experience";
import { opacity } from "@/domain/experience/components/animations";
import { useState } from "react";
import { ExperienDetail } from "@/domain/experience/components/experience-detail";
import { experiences } from "@/domain/experience/typing/constants";

// export const list = {
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const item: Variants = {
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       bounce: 0.25,
//       damping: 15,
//       stiffness: 200,
//       restDelta: 0.05,
//     },
//   },
//   hidden: { opacity: 0, x: -25 },
// };

// export const listOfParagraph: Variants = {
//   visible: {
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.5,
//       when: "beforeChildren",
//     },
//   },
// };

// export const paragraph: Variants = {
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       // duration: 150,
//       type: "spring",
//       damping: 10,
//       stiffness: 200,
//       // restSpeed: 100,
//     },
//     // transition: { duration: 15.1, type: "spring", damping: 20, stiffness: 200 },
//   },

//   hidden: { opacity: 0, y: 10 },
// };

export default function ExperienceScreen() {
  // TODO - Fix this
  // const scrollElementRef = useRef(null);
  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check if the scroll position is greater than 0
  //     setScrolled(scrollElementRef.current.scrollTop > 0);
  //   };

  //   // Attach the scroll event listener when the component mounts
  //   scrollElementRef.current.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     scrollElementRef.current.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const { experiences } = useExperience();
  const initialSlide = experiences.length - 1;
  const [selectedExperienceIndex, setSelectedExperienceIndex] =
    useState(initialSlide);
  const selectedExperience = experiences[selectedExperienceIndex];

  return (
    <>
      <div className="first-section m:w-screen">
        <div className="pt-[76px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
                stiffness: 150,
              },
            }}
            className="text-4xl font"
          >
            Experience
          </motion.h2>
        </div>
        <div className="pt-[110px] w-full max-w-[270px] mx-auto">
          <CarrouselExperience
            onSliderChange={setSelectedExperienceIndex}
            initialSlide={initialSlide}
          />
        </div>
      </div>

      <motion.div
        animate="visible"
        initial="hidden"
        variants={opacity}
        className="bg-primary-base flex-grow p-5 flex flex-col gap-y-2 overflow-auto"
      >
        <ExperienDetail
          experience={selectedExperience}
          key={selectedExperience.companyName}
        />
        {/* <motion.div animate="visible" initial="hidden" variants={list}> */}
        {/* <motion.p
            className="text-2xl font-medium text-secondary-dark"
            variants={item}
          >
            {selectedExperience.companyName}
          </motion.p> */}
        {/* <motion.p
            className="text-sm font-normal text-neutral-white"
            variants={item}
          >
            {new Date(selectedExperience.startDate).getFullYear()} - Present
          </motion.p> */}
        {/* <motion.p
            className="text-lg font-normal text-secondary-dark"
            variants={item}
          >
            front end engineer
          </motion.p> */}
        {/* </motion.div> */}
        {/* 
        <motion.div
          className="mt-3 flex flex-col gap-3"
          // variants={listOfParagraph}
          // animate="visible"
          // initial="hidden"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <Reveal key={i} iterator={i}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              molestias, distinctio quisquam consequuntur minima suscipit
              accusamus
            </Reveal>
          ))}
        </motion.div> */}
      </motion.div>
    </>
  );
}
