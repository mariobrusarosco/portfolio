import type { CompaniesIds, Experience } from "@/domains/experience/types";

export const EXPERIENCES = {
	enext: {
		id: "enext",
		startDate: "JUL 16",
		endDate: "SEP 17",
		company: "Enext",
		role: "Software Developer",
		mode: "in person",
		highlights: [
			{
				title: "Email Marketing",
				description:
					"Created Email Marketing templates dispatched for multiple customers, improving open, clicks and purchase reccurence rates.",
			},
			{
				title: "E-commerce development",
				description:
					"Development of e-commerce stores for fashion brands, on their first online presence. Contributed to increase company portfolio.",
			},
			{
				title: "Ongoing Support",
				description:
					"Assistance and support for FNAC (Brazil) online store. Responsible for optmization on checkout and cart sections, leading to increased conversion rate.",
			},
		],
		location: "São Paulo, Brazil",
		efforts: [
			{
				title: "Coding",
				percentage: 80,
			},
			{
				title: "Meetings",
				percentage: 20,
			},
		],
		stack: ["HTML", "CSS", "SASS", "Grunt", "Gulp", "jQuery", "VTEX"],
		tools: ["RunRun It", "Invision", "Photoshop", "Github"],
	},
	"red-ventures": {
		id: "red-ventures",
		startDate: "OCT 17",
		endDate: "NOV 19",
		company: "Red Ventures",
		role: "Software Developer",
		highlights: [
			{
				title: "CMS Integration with a SPA",
				description:
					"Worked on a comparison tool for credit card terminals where small businesses could buy the most appropriate product considering price and type of business, which led to a 20% gain in organic users and a profitable product after six months.",
			},
			{
				title: "Internal NPM Package",
				description:
					"Creation of a private NPM package that abstracted a comparison tool, to be used by multiple projects, improving engineers' daily experience by making it faster to install and to choose different tool versions.",
			},
			{
				title: "React modernization",
				description:
					"Migration of React Class Components to React Hooks, to support future needs such as server components and better code splitting, also enabling the creation of more modular and maintainable code.",
			},
			{
				title: "Developer Experience",
				description:
					"Wrote an RFS to implement CSS Modules instead of vanilla CSS; preventing visual bugs caused by CSS conflicts of reusable components shared by multiple teams.",
			},
		],
		mode: "in person",
		location: "São Paulo, Brazil",
		efforts: [
			{
				title: "Coding",
				percentage: 40,
			},
			{
				title: "Agile Processes",
				percentage: 40,
			},
			{
				title: "Meetings",
				percentage: 20,
			},
		],
		stack: [
			"React",
			"ES6+",
			"CSS Modules",
			"Webpack",
			"Redux",
			"Recompose",
			"Stylus",
			"Circle CI",
			"Jenkins",
		],
		tools: ["Postman", "JIRA", "Confluence", "Optimizely", "Sketch"],
	},
	origin: {
		id: "origin",
		startDate: "DEC 19",
		endDate: "FEB 24",
		company: "Origin",
		role: "Product Engineer",
		mode: "remote",
		highlights: [
			{
				title: "Webpack Code Splitting + Brotli Compression",
				description:
					"Webpack Code Splitting + Brotli Compression on all Front End assets, hosted on AWS S3 and Cloudfront. This led to a 40% reduction in bundle size and a 20% faster initial load time.",
			},
			{
				title: "Analytics",
				description:
					"I've integrated Heap's SDK on the platform, documented and defined a consistent event structure. As a complement, I created multiple dashboards and funnels to support the Product Team in tracking KPIs.",
			},

			{
				title: "Hiring and Mentoring",
				description:
					"I've created a take-home assignment (Design Included) and a pair interview process to support the Hiring Process. I also onboarded and mentored junior developers in React on how to break down a feature into small deliverables.",
			},
			{
				title: "Design System Components",
				description:
					"I've contributed to evolving the Design System, creating modular components using Styled Components and Storybook. This led to a more consistent user interface and a faster development process.",
			},
		],
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
				title: "Mentoring",
				percentage: 15,
			},
			{
				title: "Hiring Process",
				percentage: 15,
			},
			{
				title: "Meetings",
				percentage: 10,
			},
		],
		stack: [
			"React",
			"Typescript",
			"Webpack",
			"Redux",
			"React Query",
			"Styled Components",
			"MUI",
			"Storybook",
			"Jest",
			"Enzyme",
			"React Testing Library",
		],
		tools: [
			"Jira",
			"Figma",
			"LaunchDarkly",
			"Storybook",
			"Heap Analytics",
			"Sentry",
		],
	},
	versive: {
		id: "versive",
		startDate: "JAN 25",
		endDate: undefined,
		company: "Versive",
		role: "Software Developer",
		mode: "remote",
		highlights: [
			{
				title: "Spec Definition and Implementation",
				description:
					"I've been working as a Product Engineer, defining the specs of End to End features, hanlding implementation for front-end, back-end and integration with 3rd party tools",
			},
			{
				title: "Thirdy Party Integration",
				description:
					"I've developed multiple feature with Third Party tools, such as Virtual Browsers - Hyperbeam, Email Management - Postmark, Video API - MUX",
			},
		],
		location: "São Paulo, Brazil",
		efforts: [
			{
				title: "Coding",
				percentage: 75,
			},
			{
				title: "Spec Definitions",
				percentage: 20,
			},
			{
				title: "Meeting",
				percentage: 5,
			},
		],
		stack: [
			"Next JS",
			"Typescript",
			"Tailwind CSS",
			"Shadcn UI",
			"Python",
			"FastAPI",
			"PostgreSQL",
			"Github Actions",
		],
		tools: ["Linear", "Notion", "Figma", "Claude Code", "Posthog"],
	},
} satisfies Record<string, Experience>;

export const COMPANIES_IDS_LIST = Object.keys(EXPERIENCES) as CompaniesIds[];
export const EXPERIENCE_ASPECTS_LIST = [
	"usual-day",
	"accomplished",
	"using",
] as const;
