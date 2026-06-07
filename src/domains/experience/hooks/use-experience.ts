import { useEffect } from "react";
import {
	COMPANIES_IDS_LIST,
	EXPERIENCES,
} from "@/domains/experience/constants";
import { Route } from "@/routes/(inner-pages)/experience";

const DEFAULT_EXPERIENCE_ID = COMPANIES_IDS_LIST[0];

export const useExperience = () => {
	const navigate = Route.useNavigate();
	const experienceId = Route.useSearch({
		select: (search) => search.company,
	});
	const selectedExperienceId = experienceId ?? DEFAULT_EXPERIENCE_ID;

	useEffect(() => {
		if (!experienceId) {
			navigate({
				replace: true,
				search: {
					company: DEFAULT_EXPERIENCE_ID,
				},
			});
		}
	}, [experienceId, navigate]);

	return {
		experience: EXPERIENCES[selectedExperienceId],
	};
};
