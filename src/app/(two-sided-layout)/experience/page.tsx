"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CarrouselExperience } from "../../../domain/experience/components/carrousel/carrousel-experience";
import { opacity } from "@/domain/experience/components/animations";
import { useState } from "react";
import { ExperienDetail } from "@/domain/experience/components/experience-detail";
import { experiences } from "@/domain/experience/typing/constants";
import { useScreenDetector } from "@/domain/shared/hooks/useScreenDetector";

import { ComponentType } from "react";
import CompanyList from "@/domain/experience/components/company-list";

// const DynamicCompanyList = dynamic<{}>(
//   () =>
//     import("@/domain/experience/components/company-list") as unknown as Promise<
//       ComponentType<{}>
//     >,
//   { ssr: false }
// );

export default function ExperienceScreen() {
  const { isDesktop } = useScreenDetector();
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
  const initialCompany = experiences.length - 1;
  const [selectedCompany, setSelectedCompany] = useState(initialCompany);
  const selectedExperience = experiences[selectedCompany];

  return (
    <>
      <div className="first-section flex flex-col items-center justify-around tablet:h-[400px] tablet:my-auto tablet:mx-0">
        <div className="text-center">
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
            className="text-primary-white text-3xl tablet:text-5xl"
          >
            Experience
          </motion.h2>
        </div>
        <section className="w-full max-w-[270px]">
          {isDesktop ? (
            <CompanyList onCompanySelection={setSelectedCompany} />
          ) : (
            <CarrouselExperience
              initialSlide={initialCompany}
              onSliderChange={setSelectedCompany}
            />
          )}
        </section>
      </div>

      <motion.div
        animate="visible"
        initial="hidden"
        variants={opacity}
        className="second-section bg-primary-base  p-5 flex flex-col gap-y-2 overflow-auto tablet:py-16 tablet:px-7 desktop:pt-[150px] desktop:px-[130px]"
      >
        <ExperienDetail
          experience={selectedExperience}
          key={selectedExperience.companyName}
        />
      </motion.div>
    </>
  );
}
