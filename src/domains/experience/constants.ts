export const EXPERIENCES = [
	{
		id: "enext",
		startDate: "JAN 20",
		endDate: "DEC 20",
		company: "Enext",
		role: "Software Developer",
		mode: "in person",
		description: "Description 1",
		location: "São Paulo, Brazil",
	},
	{
		id: "red-ventures",
		startDate: "JUL 23",
		endDate: "DEC 23",
		company: "Red Ventures",
		role: "Software Developer",
		description: "Description 2",
		mode: "in person",
		location: "São Paulo, Brazil",
	},
	{	
		id: "origin",
		startDate: "APR 25",
		endDate: "DEC 25",
		company: "Origin",
		role: "Product Engineer",
		mode: "remote",
		description: "Description 3",
		location: "São Paulo, Brazil",
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
	},
] satisfies {
	id: string;
	startDate: string;
	endDate: string | undefined;
	company: string;
	role: string;
	description: string;
	mode: "in person" | "remote";
	location: string;
}[];
