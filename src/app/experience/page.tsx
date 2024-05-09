"use client";
import { motion } from "framer-motion";
import { ExperienceDetail } from "@/domain/experience/components/experience-detail";
import { experiences } from "@/domain/experience/constants";
import { shared } from "@/domain/shared/animations";
import { useRouter, useSearchParams } from "next/navigation";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";
import { Experience } from "@/domain/experience/typing/interfaces-and-enums";
import { useEffect, useRef } from "react";

export default function ExperienceScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const companyId = searchParams.get("id");
  const selectedExperience = experiences.find((experience) => {
    return experience.id === companyId;
  });

  const handleExperienceSelection = (experienceId: string) => {
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
    <div className="h-full flex flex-col justify-start">
      <div className="container">
        <motion.span
          initial="initial"
          animate="animate"
          variants={shared.pageHeading}
          className="font-serif font-semibold text-blue-green-300 text-2xl"
        >
          these are my
        </motion.span>
        <motion.h2
          initial="initial"
          animate="animate"
          variants={shared.pageHeading}
          className="font-sans font-regular text-pink-500 text-6xl -mt-6"
        >
          experiences
        </motion.h2>
      </div>

      <section className="mt-20">
        <ul className="container flex gap-8 max-w-full overflow-x-scroll overflow-y-auto pb-4">
          {experiences.map((experience) => (
            <li
              key={experience.id}
              className="flex flex-col items-center gap-y-4 cursor-pointer"
              onClick={() => handleExperienceSelection(experience.id)}
            >
              <div className="w-[6px] h-[6px]">
                <svg viewBox="0 0 6 6" fill="none">
                  <path
                    d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z"
                    fill={`${
                      experience.id == companyId ? "#D60C4E" : "#FFD1CA"
                    }`}
                  />
                </svg>
              </div>

              <span
                className={`uppercase font-sans font-semibold text-lg whitespace-nowrap
                ${
                  experience.id == companyId ? "text-pink-500" : "text-pink-100"
                }
                `}
              >
                {experience.companyName}
              </span>
            </li>
          ))}
        </ul>

        {/* <div className="hidden desktop:block">
          <CompanyList onCompanySelection={handleExperienceSelection} />
        </div> */}
      </section>

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
    <div ref={ref} className="detail-section container overflow-x-auto pt-16">
      <ExperienceDetail
        experience={props.selectedExperience}
        key={props.selectedExperience.id}
      />
    </div>
  );
};
