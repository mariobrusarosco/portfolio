export const EXPERIENCES = [
	{
		startDate: "JAN 20",
		endDate: "2020-01-01",
		company: "Company 1",
		role: "Role 1",
		description: "Description 1",
	},
	{
		startDate: "JUL 23",
		endDate: "2020-01-01",
		company: "Company 2",
		role: "Role 2",
		description: "Description 2",
	},
	{
		startDate: "APR 25",
		endDate: undefined,
		company: "Company 3",
		role: "Role 3",
		description: "Description 3",
	},
] satisfies {
	startDate: string;
	endDate: string | undefined;
	company: string;
	role: string;
	description: string;
}[];
