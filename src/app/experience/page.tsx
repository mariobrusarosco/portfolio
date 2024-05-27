"use client";
import { Company } from "@/domain/experience/components/company";
import { experiences } from "@/domain/experience/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { updateParamsOnURL } from "@/domain/shared/utils/url-manipulation";

import { Heading } from "@/domain/experience/components/heading";
import { ListOfExperiences } from "@/domain/experience/components/list-of-experiences";

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
    <div className="h-full grid grid-cols-1 lg:grid-cols-2 md:content-start lg:container lg:x-global-spacing lg:pt-5">
      <div className="column-wrapper">
        <Heading />

        <ListOfExperiences
          onSelectingCompany={handleSelectCompany}
          currentCompanyId={currentCompanyId}
        />
      </div>

      <Company experience={selectedExperience} />
    </div>
  );
}
