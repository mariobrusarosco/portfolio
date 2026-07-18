import type { Skill } from "@/domains/skills/types";

export const SKILLS_ASPECTS_LIST = [
	"front-end",
	"back-end",
	"product",
	"tools",
] as const;

export const SKILLS = {
	"front-end": [
		{ level: 1, label: "lint", recent_usage: 0.5 },
		{ level: 1, label: "build", recent_usage: 0.4 },
		{ level: 2, label: "html", recent_usage: 0.9 },
		{ level: 2, label: "css", recent_usage: 0.9 },
		{ level: 2, label: "auth", recent_usage: 0.9 },
		{ level: 3, label: "api", recent_usage: 0.8 },
		{ level: 3, label: "next", recent_usage: 0.7 },
		{ level: 3, label: "typescript", recent_usage: 0.8 },
		{ level: 4, label: "ci/cd", recent_usage: 0.8 },
		{ level: 5, label: "hosting", recent_usage: 0.8 },
	],
	"back-end": [
		{ level: 1, label: "lint", recent_usage: 0.5 },
		{ level: 1, label: "build", recent_usage: 0.4 },
		{ level: 1, label: "node", recent_usage: 0.9 },
		{ level: 1, label: "express", recent_usage: 0.9 },
		{ level: 2, label: "routing", recent_usage: 0.6 },
		{ level: 2, label: "auth", recent_usage: 0.9 },
		{ level: 3, label: "django", recent_usage: 0.5 },
		{ level: 3, label: "mongodb", recent_usage: 0.7 },
		{ level: 3, label: "postgresql", recent_usage: 0.8 },
		{ level: 4, label: "ci/cd", recent_usage: 0.8 },
		{ level: 5, label: "hosting", recent_usage: 0.8 },
	],
	product: [
		{ level: 1, label: "figma", recent_usage: 0.9 },
		{ level: 1, label: "sketch", recent_usage: 0.6 },
		{ level: 1, label: "adobe", recent_usage: 0.6 },
		{ level: 1, label: "balsamiq", recent_usage: 0.3 },
	],
	tools: [
		{ level: 1, label: "git", recent_usage: 0.9 },
		{ level: 1, label: "docker", recent_usage: 0.5 },
		{ level: 1, label: "kubernetes", recent_usage: 0.2 },
		{ level: 1, label: "aws", recent_usage: 0.6 },
		{ level: 1, label: "gcp", recent_usage: 0.3 },
	],
} satisfies Record<string, Skill[]>;
