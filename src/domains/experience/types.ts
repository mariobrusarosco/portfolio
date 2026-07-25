import type {
	EXPERIENCE_ASPECTS_LIST,
	EXPERIENCES,
} from "@/domains/experience/constants";

interface USUAL_DAY_EFFORT {
	title: string;
	percentage: number;
}

export interface ExperienceHighlight {
	title: string;
	description: string;
}

export interface Experience {
	id: string;
	startDate: string;
	endDate: string | undefined;
	company: string;
	role: string;
	highlights: ExperienceHighlight[];
	mode: "in person" | "remote";
	location: string;
	efforts: USUAL_DAY_EFFORT[];
	stack: string[];
	tools?: string[];
}

export type ExperienceAspect = (typeof EXPERIENCE_ASPECTS_LIST)[number];
export type CompaniesIds = keyof typeof EXPERIENCES;
