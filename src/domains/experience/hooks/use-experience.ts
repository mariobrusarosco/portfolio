import { useState } from "react";
import { EXPERIENCES } from "@/domains/experience/constants";

const firstExperience = EXPERIENCES[0];

export const useExperience = () => {
	const [selectedExperience, setSelectedExperience] = useState<typeof firstExperience>(firstExperience);

    const handleSelectExperience = (experience: typeof firstExperience) => {
        setSelectedExperience(experience);
    }

    return {
        selectedExperience,
        handleSelectExperience,
    }
}
