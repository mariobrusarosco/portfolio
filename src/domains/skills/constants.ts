import {
	Atom,
	ChartNoAxesCombined,
	ChevronsLeftRightEllipsis,
	ClipboardList,
	Component,
	Cpu,
	Database,
	DraftingCompass,
	FingerprintPattern,
	Flag,
	Gauge,
	LineSquiggle,
	Orbit,
	PencilRuler,
	ScanSearch,
	Signpost,
	SplinePointer,
	TypeOutline,
	Warehouse,
	Workflow,
	Wrench,
} from "lucide-react";
import type { Skill, SkillsAspect } from "@/domains/skills/types";

export const SKILLS_ASPECTS_LIST = [
	"front-end",
	"back-end",
	"product",
] as const;

export const SKILLS = {
	"front-end": [
		{ level: 1, label: "lint", recentUsage: 0.4, icon: ScanSearch },
		{ level: 2, label: "react", recentUsage: 1, icon: Atom },
		{ level: 2, label: "typescript", recentUsage: 1, icon: TypeOutline },
		{ level: 2, label: "styling", recentUsage: 1, icon: PencilRuler },
		{
			level: 2,
			label: "analytics",
			recentUsage: 0.3,
			icon: ChartNoAxesCombined,
		},
		{ level: 2, label: "feature flags", recentUsage: 0.3, icon: Flag },
		{ level: 2, label: "auth", recentUsage: 0.4, icon: FingerprintPattern },
		{
			level: 3,
			label: "state management",
			recentUsage: 0.8,
			icon: Orbit,
		},
		{
			level: 3,
			label: "api consumption",
			recentUsage: 0.9,
			icon: ChevronsLeftRightEllipsis,
		},

		{ level: 4, label: "build process", recentUsage: 0.4, icon: Wrench },
		{ level: 4, label: "ci/cd", recentUsage: 0.5, icon: Workflow },
		{ level: 5, label: "hosting", recentUsage: 0.7, icon: Warehouse },
	],
	"back-end": [
		{ level: 1, label: "lint [Node]", recentUsage: 0.5, icon: ScanSearch },
		{ level: 2, label: "node", recentUsage: 0.9, icon: SplinePointer },
		{ level: 2, label: "python", recentUsage: 0.5, icon: LineSquiggle },
		{ level: 3, label: "express", recentUsage: 0.9, icon: Signpost },
		{ level: 3, label: "fast api", recentUsage: 0.5, icon: Gauge },
		{ level: 4, label: "postgresql", recentUsage: 0.8, icon: Database },
		{ level: 4, label: "ORM", recentUsage: 0.4, icon: Component },
		{ level: 5, label: "ci/cd", recentUsage: 0.8, icon: Workflow },
		{ level: 6, label: "hosting", recentUsage: 0.8, icon: Warehouse },
	],
	product: [
		{ level: 1, label: "spec defination", recentUsage: 1, icon: Cpu },
		{ level: 1, label: "task creation", recentUsage: 1, icon: ClipboardList },
		{ level: 1, label: "prototype", recentUsage: 1, icon: DraftingCompass },
	],
} satisfies Record<string, Skill[]>;

export const SKILLS_PRESENTATION_CONFIG = {
	"front-end": {
		iconVariant: "background" as const,
	},
	"back-end": {
		iconVariant: "surface" as const,
	},
	product: {
		iconVariant: "background" as const,
	},
} satisfies Record<
	SkillsAspect,
	{ iconVariant: "primary" | "background" | "surface" | "secondary" }
>;
