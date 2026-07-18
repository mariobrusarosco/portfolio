import type { SKILLS_ASPECTS_LIST } from "@/domains/skills/constants";

export interface Skill {
	level: number;
	label: string;
	recent_usage: number;
}

export type SkillsAspect = (typeof SKILLS_ASPECTS_LIST)[number];
