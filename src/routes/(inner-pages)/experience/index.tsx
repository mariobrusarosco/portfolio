import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ExperienceMainScreen } from "@/domains/experience/screens/main";

export const Route = createFileRoute("/(inner-pages)/experience/")({
	validateSearch: z.object({
		company: z.string().optional(),
		aspect: z.enum(["summary", "usual-day", "stack_and_tools"]).optional(),
	}),
	component: ExperienceMainScreen,
});
