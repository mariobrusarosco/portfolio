import { createFileRoute, retainSearchParams } from "@tanstack/react-router";
import z from "zod";
import { SKILLS_ASPECTS_LIST } from "@/domains/skills/constants";
import { SkillsMainScreen } from "@/domains/skills/screens/main";

export const Route = createFileRoute("/(inner-pages)/skills/")({
	validateSearch: z.object({
		aspect: z.enum(SKILLS_ASPECTS_LIST).optional().catch(undefined),
	}),
	search: {
		middlewares: [retainSearchParams(true)],
	},
	component: SkillsMainScreen,
});
