import { useEffect } from "react";
import { EXPERIENCE_ASPECTS_LIST } from "@/domains/experience/constants";
import type { ExperienceAspect } from "@/domains/experience/types";
import { Route } from "@/routes/(inner-pages)/experience";

const DEFAULT_EXPERIENCE_ASPECT =
	EXPERIENCE_ASPECTS_LIST[0] satisfies ExperienceAspect;

export const useExperienceAspect = () => {
	const navigate = Route.useNavigate();
	const aspectFromSearch = Route.useSearch({
		select: (search) => search.aspect,
	});
	const aspect = aspectFromSearch ?? DEFAULT_EXPERIENCE_ASPECT;

	useEffect(() => {
		if (!aspectFromSearch) {
			navigate({
				replace: true,
				search: {
					aspect: DEFAULT_EXPERIENCE_ASPECT,
				},
			});
		}
	}, [aspectFromSearch, navigate]);

	return {
		aspect,
	};
};
