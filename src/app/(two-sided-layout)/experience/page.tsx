"use client";

import { useRef, useState } from "react";

import { AppHeader } from "@/domain/shared/components/app-header/app-header";
import { motion } from "framer-motion";
import { opacity } from "../../../domain/experience/components/animations";
import { CarrouselExperience } from "../../../domain/experience/components/carrousel-experience";

export default function ExperienceScreen() {
  const scrollElementRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

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

  // const temp = scrolled ? "bg-primary-base" : "bg-primary-dark";

  return (
    <>
      <div className="first-section m:w-screen">
        <div className="pt-[76px] text-center">
          <h2
            // initial={{ opacity: 0, y: -10 }}
            // animate={{
            //   opacity: 1,
            //   y: 0,
            //   transition: {
            //     duration: 0.5,
            //     type: "spring",
            //     damping: 10,
            //     stiffness: 150,
            //   },
            // }}
            className="text-4xl font"
          >
            Experience
          </h2>
        </div>
        <div className="pt-[110px] w-full max-w-[270px] mx-auto">
          <CarrouselExperience />
        </div>
      </div>

      <motion.div
        animate="visible"
        initial="hidden"
        className="bg-primary-base flex-grow p-5 flex flex-col gap-y-2 overflow-auto"
      >
        <p className="text-2xl font-medium text-secondary-dark">Red Ventures</p>
        <p className="text-sm font-normal text-neutral-white">2019 - Present</p>
        <p className="text-lg font-normal text-secondary-dark">
          front end engineer
        </p>

        <div className="mt-2 flex flex-col gap-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            molestias, distinctio quisquam consequuntur minima suscipit
            accusamus
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            molestias, distinctio quisquam consequuntur minima suscipit
            accusamus
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
            molestias, distinctio quisquam consequuntur minima suscipit
            accusamus
          </p>
        </div>
      </motion.div>
    </>
  );
}
