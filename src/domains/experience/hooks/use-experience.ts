import { getRouteApi } from "@tanstack/react-router";
import { EXPERIENCES } from "../constants";

const routeApi = getRouteApi("/(inner-pages)/experience/");

export const useExperience = () => {
	const experienceId = routeApi.useSearch({
		select: (search) => search.company,
	});
	const selectedExperience = experienceId
		? EXPERIENCES[experienceId]
		: undefined;

	return {
		experience: selectedExperience,
	};
};
