import { createFileRoute } from "@tanstack/react-router";

import { HomeMainScreen } from "@/domains/home/screens/main";

export const Route = createFileRoute("/")({
	component: HomeMainScreen,
});
