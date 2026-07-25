import type { LucideIcon } from "lucide-react";
import { SKILLS_ASPECTS_LIST } from "@/domains/skills/constants";

export type SkillsAspect = (typeof SKILLS_ASPECTS_LIST)[number];

export interface Skill {
	level: number;
	label: string;
	recentUsage: number;
	icon: LucideIcon;
}

export type SkillsFilters = Record<SkillsAspect, boolean> & {
	mostRecent: boolean;
};
