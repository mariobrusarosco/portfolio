import { Link } from "@tanstack/react-router";
import { useLayoutEffect, useRef, useState } from "react";
import { Wheel } from "@/domains/experience/components/whell";
import { EXPERIENCES } from "@/domains/experience/constants";
import type { CompaniesIds, Experience } from "@/domains/experience/types";
import { cn } from "@/lib/utils";

export const CareerTimeline = ({
	selectedExperience,
}: {
	selectedExperience?: Experience;
}) => {
	const activeExperienceRef = useRef<HTMLAnchorElement>(null);
	const [wheelTop, setWheelTop] = useState(6);

	useLayoutEffect(() => {
		const selectedExperienceId = selectedExperience?.id;

		if (!selectedExperienceId || !activeExperienceRef.current) return;

		setWheelTop(() => calculateWheelTop(activeExperienceRef.current!));
	}, [selectedExperience?.id]);

	return (
		<div data-ui="experience-timeline" className="w-[280px] relative h-fit">
			<Wheel
				className={cn(
					"w-7 h-7 absolute left-[88px] transition-all duration-300 ease-in-out",
					{
						"opacity-0": !activeExperienceRef.current,
					},
				)}
				style={{ top: wheelTop }}
				hideCenterDot
			/>

			<ul
				data-ui="experience-timeline-list"
				className="flex flex-col justify-between gap-8 pl-8 "
			>
				{Object.values(EXPERIENCES).map((experience) => {
					const isSelected = selectedExperience?.id === experience.id;

					return (
						<Link
							key={experience.id}
							data-ui="experience-timeline-item"
							className="flex  gap-2 items-center group "
							to="/experience"
							search={{ company: experience.id as CompaniesIds }}
							ref={isSelected ? activeExperienceRef : undefined}
						>
							<p
								data-ui="experience-timeline-item-date"
								className={cn(
									"text-uppercase font-display text-background w-11 opacity-0 group-hover:opacity-100 transition-opacity",
									{
										"opacity-100 font-bold": isSelected,
									},
								)}
							>
								{experience.startDate}
							</p>
							<div
								data-ui="experience-timeline-item-dot"
								className="w-[5px] h-[5px] rounded-full bg-background mx-4"
							/>
							<p
								data-ui="experience-timeline-item-company"
								className={cn(
									"text-lg uppercase font-display text-background opacity-0 group-hover:opacity-100 transition-opacity",
									{
										"opacity-100 font-bold": isSelected,
									},
								)}
							>
								{experience.company}
							</p>
						</Link>
					);
				})}
			</ul>

			<span
				data-ui="timeline-line"
				className="absolute top-[15px] left-[102px] w-[1px] h-[calc(100%-30px)] bg-background/40"
			/>
		</div>
	);
};

const calculateWheelTop = (node: HTMLAnchorElement) => {
	return node.offsetTop;
};
