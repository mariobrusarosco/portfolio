import type { Experience } from "@/domains/experience/types";

export const EXPERIENCES: Experience[] = [
	{
		id: "enext",
		startDate: "JAN 20",
		endDate: "DEC 20",
		company: "Enext",
		role: "Software Developer",
		mode: "in person",
		description:
			"Development of e-commerce stores, landing pages, Email Marketing templates, for the Brazilian market.",
		location: "São Paulo, Brazil",
		efforts: [
			{
				title: "Coding",
				percentage: 90,
			},
			{
				title: "Meetings",
				percentage: 10,
			},
			{
				title: "Other",
				percentage: 5,
			},
		],
		stack: [
			"HTML",
			"CSS",
			"SASS",
			"Grunt",
			"Gulp",
			"jQuery",
			"Invision",
			"Photoshop",

			"Github",
		],
		tools: ["RunRun It"],
	},
	{
		id: "red-ventures",
		startDate: "JUL 23",
		endDate: "DEC 23",
		company: "Red Ventures",
		role: "Software Developer",
		description:
			"Development of Web Applications - SPA, CMS integrations, internal NPM package using responsible for configuration of Front End build tools: Webpack, Migration of React Class Components to React Hooks",
		mode: "in person",
		location: "São Paulo, Brazil",
		efforts: [
			{
				title: "Coding",
				percentage: 60,
			},
			{
				title: "Meeting",
				percentage: 20,
			},
			{
				title: "Other",
				percentage: 20,
			},
		],
		stack: [
			"ES6+",
			"CSS Modules",
			"Webpack",
			"React",
			"Redux",
			"Recompose",
			"Stylus",
			"Circle CI",
		],
		tools: ["Postman", "Invision"],
	},
	{
		id: "origin",
		startDate: "APR 25",
		endDate: "DEC 25",
		company: "Origin",
		role: "Product Engineer",
		mode: "remote",
		description:
			"Product development from the ground up, Front end optimizations: Routing Code Splitting + Brotli Compression, Deliverables Refinement and Prioritization, Hiring Process - Pair interviews,Take-Home Assignments, Front End Assessment Project, Mentoring, Analytics Reports and Funnel,",
		location: "São Paulo, Brazil",
		efforts: [
			{
				title: "Coding",
				percentage: 40,
			},
			{
				title: "Task Definition",
				percentage: 20,
			},
			{
				title: "Meeting",
				percentage: 20,
			},
			{
				title: "Team Meetings",
				percentage: 10,
			},
			{
				title: "Hiring Process",
				percentage: 5,
			},
		],
		stack: [
			"ES6+",
			"Typescript",
			"Styled Components",
			"Webpack",
			"React",
			"Redux",
			"React Query",
			"Jest",
			"Enzime",
			"React Testing Library",
			"Storybook",
			"Github",
		],
		tools: ["Jira", "Figma", "LaunchDarkly", "Storybook", "Heap Analytics"],
	},
	{
		id: "versive",
		startDate: "JAN 26",
		endDate: undefined,
		company: "Versive",
		role: "Software Developer",
		mode: "remote",
		description: "Description 4",
		location: "São Paulo, Brazil",
		efforts: [
			{
				title: "Coding",
				percentage: 60,
			},
			{
				title: "Meeting",
				percentage: 20,
			},
			{
				title: "Other",
				percentage: 20,
			},
		],
		stack: [
			"Next JS",
			"Typescript",
			"Tailwind CSS",
			"Python",
			"FastAPI",
			"PostgreSQL",
			"Github",
		],
		tools: ["Linear", "Notion", "Figma", "Claude Code"],
	},
] satisfies Experience[];
