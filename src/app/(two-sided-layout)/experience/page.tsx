"use client";
import { motion } from "framer-motion";
import { ExperienceDetail } from "@/domain/experience/components/experience-detail";
import { experiences } from "@/domain/experience/constants";
import CompanyList from "@/domain/experience/components/company-list";
import { shared } from "@/domain/shared/animations";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { mountNextJsQueryParamsString } from "@/domain/shared/utils/url-manipulation";
import { Carrousel } from "@/domain/shared/components/carrousel/carrousel";
import { Experience } from "@/domain/experience/typing/interfaces-and-enums";
import { useEffect, useRef } from "react";

export default function ExperienceScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
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

  const handleExperienceSelection = (index: number) => {
    const queryParams = experiences[index].queryParams;
    const queryParamsString = mountNextJsQueryParamsString(
      searchParams,
      queryParams
    );

    router.push(`${pathname}?${queryParamsString}`);
  };

  const companyId = searchParams.get("id");
  const selectedExperienceIndex = experiences.findIndex(
    (experience) => experience.id === companyId
  );
  const selectedExperience =
    experiences[selectedExperienceIndex] || experiences[0];

  return (
    <>
      <div className="first-section flex flex-col items-center justify-around tablet:h-[400px] tablet:my-auto tablet:mx-0 desktop:h-full desktop:justify-start desktop:pt-24">
        <div className="text-center">
          <motion.h2
            initial="initial"
            animate="animate"
            variants={shared.pageHeading}
            className="text-primary-white text-3xl tablet:text-4xl"
          >
            Experience
          </motion.h2>
        </div>

        <section className="w-full max-w-[270px]">
          <div className="desktop:hidden">
            <Carrousel
              initialSlide={selectedExperienceIndex}
              list={experiences}
              ComponentForSlide={(props: Experience) => (
                <span className="text-primary-white">{props?.companyName}</span>
              )}
              onSliderChange={handleExperienceSelection}
            />
          </div>

          <div className="hidden desktop:block">
            <CompanyList onCompanySelection={handleExperienceSelection} />
          </div>
        </section>
      </div>

      <DetailSection selectedExperience={selectedExperience} />
    </>
  );
}

const DetailSection = (props: { selectedExperience: Experience }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref?.current?.scroll({ top: 0 });
  }, [props.selectedExperience]);

  return (
    <div
      ref={ref}
      className="second-section bg-primary-base  p-5 flex flex-col gap-y-2 overflow-auto tablet:py-16 tablet:px-7 desktop:pt-[150px] desktop:px-[130px]"
    >
      <ExperienceDetail
        experience={props.selectedExperience}
        key={props.selectedExperience.id}
      />
    </div>
  );
};
