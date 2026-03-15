interface USUAL_DAY_EFFORT {
	title: string;
	percentage: number;
}

export interface Experience {
	id: string;
	startDate: string;
	endDate: string | undefined;
	company: string;
	role: string;
	description: string;
	mode: "in person" | "remote";
	location: string;
	efforts: USUAL_DAY_EFFORT[];
	stack: string[];
	tools?: string[];
}
