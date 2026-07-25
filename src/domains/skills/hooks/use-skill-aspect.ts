import { useEffect } from "react";
import type { SkillsAspect } from "@/domains/skills/types";
import { Route } from "@/routes/(inner-pages)/skills";
import { SKILLS_ASPECTS_LIST } from "../constants";

const DEFAULT_SKILLS_ASPECT = SKILLS_ASPECTS_LIST[0] satisfies SkillsAspect;

export const useSkillAspect = () => {
	const navigate = Route.useNavigate();
	const aspectFromSearch = Route.useSearch({
		select: (search) => search.aspect,
	});
	const selectedAspect = aspectFromSearch ?? DEFAULT_SKILLS_ASPECT;

	useEffect(() => {
		if (!aspectFromSearch) {
			navigate({
				replace: true,
				search: {
					aspect: DEFAULT_SKILLS_ASPECT,
				},
			});
		}
	}, [aspectFromSearch, navigate]);

	return {
		selectedAspect,
	};
};
