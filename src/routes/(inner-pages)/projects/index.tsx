import { createFileRoute } from "@tanstack/react-router";

import { ProjectsMainScreen } from "@/domains/projects/screens/main";

export const Route = createFileRoute("/(inner-pages)/projects/")({
	component: ProjectsMainScreen,
});
