import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Hightlights } from "@/domains/experience/components/highlights";
import {
	Stack,
	Tools,
} from "@/domains/experience/components/stack-and-product";
import { UsualDay } from "@/domains/experience/components/usual-day";
import { ExperienceWheel } from "@/domains/experience/components/whell";
import type { Experience } from "@/domains/experience/types";

interface ExperienceDynamicDisplayProps {
	selectedExperience?: Experience;
}

const routeApi = getRouteApi("/(inner-pages)/experience/");
const _DEFAULT_ASPECT = "summary";
const ASPECT_ORDER = ["summary", "usual-day", "stack_and_tools"];

export const ExperienceDynamicDisplay = ({
	selectedExperience,
}: ExperienceDynamicDisplayProps) => {
	const navigate = useNavigate();
	const initialIndexFromURL = routeApi.useSearch({
		select: (search) => ASPECT_ORDER.indexOf(search.aspect ?? _DEFAULT_ASPECT),
	});
	const [index, setIndex] = useState(initialIndexFromURL);
	const aspect = ASPECT_ORDER[index];
	const hasNext = index < ASPECT_ORDER.length - 1;
	const hasPrevious = index > 0;

	useEffect(() => {
		navigate({
			search: {
				company: selectedExperience?.id,
				aspect: aspect,
			},
		});
	}, [navigate, selectedExperience?.id, aspect]);

	return (
		<div className="flex flex-col gap-7 p-6">
			<h2 className="text-background font-display font-semibold uppercase text-2xl">
				what have i accomplished...
			</h2>
			{selectedExperience ? (
				<div className="grid relative">
					<div className="flex flex-col gap-1 items-center absolute -left-20 top-10 cursor-pointer">
						<ExperienceWheel className="w-5.5 h-5.5" />
						<p className="text-background font-body font-bold uppercase text-xs">
							back
						</p>
					</div>

					{hasPrevious && (
						<div
							className="flex flex-col gap-1 items-center absolute -right-20 top-10 cursor-pointer"
							onClick={() => setIndex((prev) => prev)}
						>
							<ExperienceWheel className="w-5.5 h-5.5" />
							<p className="text-background font-body font-bold uppercase text-xs">
								prev
							</p>
						</div>
					)}

					{aspect === "summary" && (
						<Hightlights description={selectedExperience.description} />
					)}
					{aspect === "usual-day" && (
						<UsualDay efforts={selectedExperience.efforts} />
					)}
					{aspect === "stack_and_tools" && (
						<>
							<Stack stack={selectedExperience.stack} />
							<Tools tools={selectedExperience.tools} />
						</>
					)}

					{hasNext && (
						<div
							className="flex flex-col gap-1 items-center absolute -right-20 top-10 cursor-pointer"
							onClick={() => setIndex((prev) => prev + 1)}
						>
							<ExperienceWheel className="w-5.5 h-5.5" />
							<p className="text-background font-body font-bold uppercase text-xs">
								next
							</p>
						</div>
					)}
				</div>
			) : (
				<p className="text-background font-body text-4xl grid place-content-center items-center">
					Select an experience on the timeline
				</p>
			)}
		</div>
	);
};

const _NextButton = () => {};
