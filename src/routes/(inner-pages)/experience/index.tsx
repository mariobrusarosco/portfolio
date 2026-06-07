import { createFileRoute, retainSearchParams } from "@tanstack/react-router";
import { z } from "zod";
import {
	COMPANIES_IDS_LIST,
	EXPERIENCE_ASPECTS_LIST,
} from "@/domains/experience/constants";
import { ExperienceMainScreen } from "@/domains/experience/screens/main";

export const Route = createFileRoute("/(inner-pages)/experience/")({
	validateSearch: z.object({
		company: z.enum(COMPANIES_IDS_LIST).optional().catch(undefined),
		aspect: z.enum(EXPERIENCE_ASPECTS_LIST).optional().catch(undefined),
	}),
	search: {
		middlewares: [retainSearchParams(true)],
	},
	component: ExperienceMainScreen,
});
