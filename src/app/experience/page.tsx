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

  const listAnimation = useMemo(() => animateChildrenInSequence(0.15), []);

  return (
    <div className="h-full grid grid-cols-1 desktop:grid-cols-2 container tablet:content-start">
      <div className="heading-and-list-section pt-12 desktop:pt-2">
        <motion.p
          initial="initial"
          animate="animate"
          variants={screens.heading}
          className="w-fit font-serif text-active-secondary text-2xl tracking-widest tablet:text-3xl desktop:text-4xl"
        >
          <span>these are my</span>
        </motion.p>

        <motion.h2
          initial="initial"
          animate="animate"
          variants={screens.heading}
          className="font-sans font-regular text-pink-500 text-6xl -mt-6 tablet:text-7xl desktop:text-8xl desktop:-mt-8"
        >
          experiences
        </motion.h2>

        <section className="list-of-experiences my-16 max-w-full overflow-auto">
          <motion.ul
            className="flex gap-8 pb-4 desktop:flex-col justify-start items-start tablet:gap-12"
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
                  className="flex flex-col items-center gap-y-4 cursor-pointer last:pr-4 desktop:flex-row desktop:gap-x-4 desktop:items-center"
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
    <div
      ref={ref}
      className="scrollable experience-detail-section pr-4 overflow-x-auto desktop:m-0"
    >
      <ExperienceDetail
        experience={props.selectedExperience}
        key={props.selectedExperience.id}
      />
    </div>
  );
};
