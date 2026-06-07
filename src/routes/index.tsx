import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import { HomeMainScreen } from "@/domains/home/screens/main";

export const Route = createFileRoute("/")({
	component: HomeMainScreen,
	validateSearch: z.object({
		"chat-enabled": z.string().optional().catch(undefined),
	}),
});
