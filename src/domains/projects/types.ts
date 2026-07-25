export interface Project {
	id: string;
	name: string;
	accent: "primary" | "background" | "surface";
	intro: string[];
	links: {
		demo?: string;
		design?: string;
		code?: string;
	};
}
