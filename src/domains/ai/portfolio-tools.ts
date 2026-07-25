import { toolDefinition } from "@tanstack/ai";
import { z } from "zod";

import { PORTFOLIO_PROFILE } from "@/domains/ai/portfolio-profile";

const experienceSchema = z.object({
	id: z.string(),
	company: z.string(),
	role: z.string(),
	startDate: z.string(),
	endDate: z.string(),
	mode: z.string(),
	location: z.string(),
	highlights: z.array(
		z.object({
			title: z.string(),
			description: z.string(),
		}),
	),
	stack: z.array(z.string()),
	tools: z.array(z.string()),
	efforts: z.array(
		z.object({
			title: z.string(),
			percentage: z.number(),
		}),
	),
});

const projectSchema = z.object({
	name: z.string(),
	status: z.string(),
	description: z.string(),
	stack: z.array(z.string()),
});

export const getProfileToolDef = toolDefinition({
	name: "getProfile",
	description: "Get Mario's high-level portfolio profile and work style.",
	inputSchema: z.object({}),
	outputSchema: z.object({
		name: z.string(),
		title: z.string(),
		location: z.string(),
		summary: z.string(),
		workStyle: z.array(z.string()),
	}),
});

export const getExperienceToolDef = toolDefinition({
	name: "getExperience",
	description:
		"Get Mario's career experience, including companies, roles, dates, work mode, highlights, stack, tools, and effort split.",
	inputSchema: z.object({}),
	outputSchema: z.array(experienceSchema),
});

export const getSkillsToolDef = toolDefinition({
	name: "getSkills",
	description: "Get Mario's current listed technical skills.",
	inputSchema: z.object({}),
	outputSchema: z.array(z.string()),
});

export const getProjectsToolDef = toolDefinition({
	name: "getProjects",
	description:
		"Get Mario's listed projects. Use this to answer project questions, while being honest when project details are still thin.",
	inputSchema: z.object({}),
	outputSchema: z.array(projectSchema),
});

export const getContactLinksToolDef = toolDefinition({
	name: "getContactLinks",
	description:
		"Get the contact channels currently represented in the portfolio.",
	inputSchema: z.object({}),
	outputSchema: z.object({
		note: z.string(),
		channels: z.array(z.string()),
	}),
});

export const searchPortfolioToolDef = toolDefinition({
	name: "searchPortfolio",
	description:
		"Search Mario's curated portfolio profile, skills, projects, and experience for a visitor's keyword or question.",
	inputSchema: z.object({
		query: z.string().describe("The visitor's search query"),
	}),
	outputSchema: z.object({
		matches: z.array(
			z.object({
				section: z.string(),
				title: z.string(),
				snippet: z.string(),
			}),
		),
	}),
});

export const getProfile = getProfileToolDef.server(() => ({
	name: PORTFOLIO_PROFILE.name,
	title: PORTFOLIO_PROFILE.title,
	location: PORTFOLIO_PROFILE.location,
	summary: PORTFOLIO_PROFILE.summary,
	workStyle: [...PORTFOLIO_PROFILE.workStyle],
}));

export const getExperience = getExperienceToolDef.server(() =>
	PORTFOLIO_PROFILE.experience.map((item) => ({
		...item,
		highlights: item.highlights.map((highlight) => ({ ...highlight })),
		stack: [...item.stack],
		tools: [...item.tools],
		efforts: item.efforts.map((effort) => ({ ...effort })),
	})),
);

export const getSkills = getSkillsToolDef.server(() => [
	...PORTFOLIO_PROFILE.skills,
]);

export const getProjects = getProjectsToolDef.server(() =>
	PORTFOLIO_PROFILE.projects.map((project) => ({
		...project,
		stack: [...project.stack],
	})),
);

export const getContactLinks = getContactLinksToolDef.server(() => ({
	note: PORTFOLIO_PROFILE.contact.note,
	channels: [...PORTFOLIO_PROFILE.contact.channels],
}));

export const searchPortfolio = searchPortfolioToolDef.server(({ query }) => {
	const normalizedQuery = query.trim().toLowerCase();

	if (!normalizedQuery) {
		return { matches: [] };
	}

	const matches: Array<{ section: string; title: string; snippet: string }> =
		[];

	if (
		PORTFOLIO_PROFILE.summary.toLowerCase().includes(normalizedQuery) ||
		PORTFOLIO_PROFILE.workStyle.some((item) =>
			item.toLowerCase().includes(normalizedQuery),
		)
	) {
		matches.push({
			section: "profile",
			title: `${PORTFOLIO_PROFILE.name} - ${PORTFOLIO_PROFILE.title}`,
			snippet: PORTFOLIO_PROFILE.summary,
		});
	}

	for (const skill of PORTFOLIO_PROFILE.skills) {
		if (skill.toLowerCase().includes(normalizedQuery)) {
			matches.push({
				section: "skills",
				title: skill,
				snippet: `${skill} is listed in Mario's technical skills.`,
			});
		}
	}

	for (const item of PORTFOLIO_PROFILE.experience) {
		const haystack = [
			item.company,
			item.role,
			item.location,
			...item.highlights.flatMap((highlight) => [
				highlight.title,
				highlight.description,
			]),
			...item.stack,
			...item.tools,
		]
			.join(" ")
			.toLowerCase();

		if (haystack.includes(normalizedQuery)) {
			matches.push({
				section: "experience",
				title: `${item.role} at ${item.company}`,
				snippet: item.highlights
					.map((highlight) => highlight.description)
					.join(" "),
			});
		}
	}

	for (const project of PORTFOLIO_PROFILE.projects) {
		const haystack = [
			project.name,
			project.status,
			project.description,
			...project.stack,
		]
			.join(" ")
			.toLowerCase();

		if (haystack.includes(normalizedQuery)) {
			matches.push({
				section: "projects",
				title: project.name,
				snippet: project.description,
			});
		}
	}

	return { matches: matches.slice(0, 8) };
});

export const portfolioTools = [
	getProfile,
	getExperience,
	getSkills,
	getProjects,
	getContactLinks,
	searchPortfolio,
];
