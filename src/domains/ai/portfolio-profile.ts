import { EXPERIENCES } from "@/domains/experience/constants";

const experience = Object.values(EXPERIENCES).map((item) => ({
	id: item.id,
	company: item.company,
	role: item.role,
	startDate: item.startDate,
	endDate: item.endDate ?? "Present",
	mode: item.mode,
	location: item.location,
	description: item.description.flat(),
	stack: item.stack,
	tools: item.tools ?? [],
	efforts: item.efforts,
}));

export const PORTFOLIO_PROFILE = {
	name: "Mario Brusarosco",
	title: "Software Developer",
	location: "Sao Paulo, Brazil",
	summary:
		"Software developer with experience in fintechs and startups, mostly building web applications with React, TypeScript, Redux, CSS, and CSS-in-JS. I have worked closely with Product, Design, and leadership teams on product delivery, analytics, conversion reporting, hiring, mentoring, and frontend architecture.",
	workStyle: [
		"I enjoy creating digital products with a strong product mindset.",
		"I have worked closely with designers and product managers in agile routines like planning, retrospectives, and refinement.",
		"I have used analytics tools to build engagement dashboards and conversion reports for product decisions.",
	],
	skills: [
		"React",
		"TypeScript",
		"JavaScript",
		"Redux",
		"React Query",
		"CSS",
		"CSS-in-JS",
		"Tailwind CSS",
		"Testing Library",
		"Jest",
		"Storybook",
		"Webpack",
		"Next.js",
		"Python",
		"FastAPI",
		"PostgreSQL",
	],
	experience,
	projects: [
		{
			name: "Portfolio v2",
			status: "In progress",
			description:
				"This portfolio site. The projects section still needs richer public project details before the AI assistant can answer deeply about individual projects.",
			stack: [
				"React",
				"TypeScript",
				"TanStack Start",
				"TanStack Router",
				"Tailwind CSS",
				"Netlify",
			],
		},
	],
	contact: {
		note: "The current portfolio shows GitHub and LinkedIn icons, but the final URLs are not encoded in the components yet.",
		channels: ["GitHub", "LinkedIn"],
	},
} as const;

export type PortfolioProfile = typeof PORTFOLIO_PROFILE;
