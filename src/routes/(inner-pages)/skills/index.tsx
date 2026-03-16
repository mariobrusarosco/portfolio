import { createFileRoute } from "@tanstack/react-router";
import { SkillsMainScreen } from "@/domains/skills/screens/main";

export const Route = createFileRoute("/(inner-pages)/skills/")({
	component: SkillsMainScreen,
});
