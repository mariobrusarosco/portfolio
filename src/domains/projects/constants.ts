import type { Project } from "@/domains/projects/types";

export const PROJECTS = [
	{
		id: "portfolio",
		name: "Portfolio",
		accent: "background",
		intro: [
			"This portfolio brings my experience, skills, and selected work into one focused, interactive space.",
			"It is built with React, TypeScript, TanStack Start, TanStack Router, and Tailwind CSS.",
		],
		links: {
			demo: "https://mario.productions",
			code: "https://github.com/mariobrusarosco/portfolio",
			design:
				"https://www.figma.com/proto/KZ4tq3xzzz2CvWwijUZoRy/Side-Projects?node-id=4555-45507&t=Vhu9YRnOs7YZW5L9-1",
		},
	},
	{
		id: "world-cup-almanac",
		name: "World Cup Almanac",
		accent: "background",
		links: {
			demo: "https://wc-almanac.netlify.app/",
			code: "https://github.com/mariobrusarosco/wc-almanac",
			design:
				"https://www.figma.com/proto/KZ4tq3xzzz2CvWwijUZoRy/Side-Projects?node-id=4147-16403&t=Vhu9YRnOs7YZW5L9-1",
		},
		intro: [
			"A side project dedicated to exploring World Cup information through a focused visual experience.",
			"It uses React, TanStack Router, React Query, and a dedicated public API to present structured football data in a focused, editorial format",
		],
	},
	{
		id: "football-platform-api",
		name: "Football Platform API",
		accent: "background",
		links: {
			code: "https://github.com/mariobrusarosco/football-platform-api",
			design: "",
		},
		intro: [
			"Football Platform API is the data backbone behind World Cup Almanac, providing structured information about tournaments, teams, and football history.",
			"It is designed to support the Almanac today and serve as the foundation for future football products.",
			"It uses Node, Drizzle as ORM, PostgreSQL with Supabase, and Express for routing.",
		],
	},
] satisfies Project[];
