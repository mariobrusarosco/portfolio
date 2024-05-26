"use client";
import { motion } from "framer-motion";
import { ExperienceDetail } from "@/domain/experience/components/experience-detail";
import { experiences } from "@/domain/experience/constants";
import { screens } from "@/domain/shared/animations";
import { useRouter, useSearchParams } from "next/navigation";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
import { Experience } from "@/domain/experience/typing/interfaces-and-enums";
import { useEffect, useMemo, useRef } from "react";
import {
  animateChildrenInSequence,
  revealAndMoveToRight,
  companyLabel,
} from "@/domain/experience/animations";

const listAnimation = animateChildrenInSequence(0.15);

export default function ExperienceScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCompanyId = searchParams.get("id") ?? experiences[0].id;
  const selectedExperience = experiences.find((experience) => {
    return experience.id === currentCompanyId;
  });

  const handleSelectCompany = (experienceId: string) => {
    const selectedExperience = experiences.find((experience) => {
      return experience.id === experienceId;
    });

    const queryParamsString = updateParamsOnURL({
      searchParams,
      queryParams: selectedExperience?.queryParams,
    });

    router.push(`${window.location.pathname}?${queryParamsString}`);
  };

  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2 md:content-start lg:container lg:x-global-spacing">
      <div className="column-wrapper">
        <section className="heading-and-list-section  pt-12 md:pt-4 lg:col-span-2 lg:pt-2 x-global-spacing lg:px-0">
          <motion.p
            initial="initial"
            animate="animate"
            variants={screens.heading}
            className="w-fit font-serif text-active-secondary text-2xl  md:text-3xl"
          >
            <span>these are my</span>
          </motion.p>

          <motion.h2
            initial="initial"
            animate="animate"
            variants={screens.heading}
            className="font-sans font-regular text-active-primary text-6xl -mt-6 md:text-7xl lg:-mt-6"
          >
            experiences
          </motion.h2>
        </section>

        <section className="list-of-experiences mt-14 w-full overflow-auto lg:mt-12">
          <motion.ul
            className="flex gap-8 pb-4 x-global-spacing justify-start items-start md:gap-4 lg:max-h-[250px] lg:flex-wrap lg:flex-col lg:px-0"
            variants={listAnimation}
            animate="visible"
            initial="hidden"
          >
            {experiences.map((experience) => (
              <motion.li
                key={experience.id}
                onClick={() => handleSelectCompany(experience.id)}
                variants={revealAndMoveToRight}
              >
                {/* IMPORTANT: Framer Motion has a bug with the usage of "whileHover" + variants with "staggerChidlren" To fix that, we need an extra motion.div to handle the "whileHover"*/}
                <motion.div
                  className="flex flex-col items-center gap-y-4 cursor-pointer last:pr-4 lg:flex-row lg:gap-x-4 lg:items-center"
                  whileHover="hover"
                >
                  <div className="w-[6px] h-[6px]">
                    <svg viewBox="0 0 6 6" fill="none">
                      <path
                        d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z"
                        fill={`${
                          experience.id == currentCompanyId
                            ? "#D60C4E"
                            : "#FFD1CA"
                        }`}
                      />
                    </svg>
                  </div>

                  <motion.span
                    variants={companyLabel}
                    className={`uppercase font-sans font-semibold text-lg whitespace-nowrap
                  ${
                    experience.id == currentCompanyId
                      ? "text-pink-500"
                      : "text-pink-100"
                  }
                `}
                  >
                    {experience.companyName}
                  </motion.span>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>

      <DetailSection selectedExperience={selectedExperience} />
    </div>
  );
}

const DetailSection = (props: {
  selectedExperience: Experience | undefined;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref?.current?.scroll({ top: 0 });
  }, [props.selectedExperience]);

  if (!props.selectedExperience) return null;

  return (
    <section
      ref={ref}
      className="experience-detail-section container x-global-spacing scrollable pr-4 mt-14 overflow-x-auto lg:m-0 "
    >
      <ExperienceDetail
        experience={props.selectedExperience}
        key={props.selectedExperience.id}
      />
    </section>
  );
};
