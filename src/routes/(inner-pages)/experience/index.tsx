import { createFileRoute } from "@tanstack/react-router";
import { ExperienceMainScreen } from "@/domains/experience/screens/main";

export const Route = createFileRoute("/(inner-pages)/experience/")({
	component: ExperienceMainScreen,
});
