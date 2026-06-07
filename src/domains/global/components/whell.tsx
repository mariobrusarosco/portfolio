import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface WheelProps {
	colors?: [string, string, string, string];
}

export const Wheel = ({
	colors = ["#254441", "#5B98A5", "#6A9B96", "#35626B"],
}: WheelProps) => {
	// Injected dependencies
	const navigate = useNavigate();
	// Internal state
	const [hoveredSection, setHoveredSection] = useState<string | null>(null);
	// Derived state

	// Handlers
	const handleWhellHover = (part: string) => {
		setHoveredSection(part);
	};

	const handleWhellLeave = () => {
		setHoveredSection(null);
	};

	return (
		<div
			data-ui="global-wheel"
			className="grid place-items-center w-[125px] relative"
		>
			<svg
				data-ui="wheel"
				viewBox="0 0 138 136"
				fill="none"
				aria-label="Wheel"
				className={cn(
					"w-full h-full origin-center transition-colors duration-300",
				)}
			>
				<title>Wheel</title>

				<path
					d="M69 0C30.8464 0.268824 0 31.2801 0 69.4971C0 69.6639 0.00175476 69.8305 0.00292969 69.9971H25C25 45.6965 44.6995 25.9971 69 25.9971V0Z"
					fill={colors[1]}
					className="origin-center transition-colors duration-300 cursor-pointer pointer-events-auto"
					onMouseEnter={() => handleWhellHover("projects")}
					onMouseLeave={handleWhellLeave}
					onClick={() => navigate({ to: "/projects" })}
				/>
				<path
					d="M69 0C107.154 0.268824 138 31.2801 138 69.4971C138 69.6639 137.998 69.8305 137.997 69.9971H113C113 45.6965 93.3005 25.9971 69 25.9971V0Z"
					fill={colors[0]}
					className="origin-center transition-colors duration-300 cursor-pointer pointer-events-auto"
					onMouseEnter={() => handleWhellHover("experience")}
					onMouseLeave={handleWhellLeave}
					onClick={() => navigate({ to: "/experience" })}
				/>
				<path
					d="M69 135.997C107.154 135.728 138 104.717 138 66.5C138 66.3332 137.998 66.1665 137.997 66H113C113 90.3005 93.3005 110 69 110V135.997Z"
					fill={colors[2]}
					className="origin-center transition-colors duration-300 cursor-pointer pointer-events-auto"
					onMouseEnter={() => handleWhellHover("skills")}
					onMouseLeave={handleWhellLeave}
					onClick={() => navigate({ to: "/skills" })}
				/>
				<path
					d="M69 135.997C30.8464 135.728 0 104.717 0 66.5C0 66.3332 0.00175476 66.1665 0.00292969 66H25C25 90.3005 44.6995 110 69 110V135.997Z"
					fill={colors[3]}
					className="origin-center transition-colors duration-300 cursor-pointer pointer-events-auto"
					onMouseEnter={() => handleWhellHover("about")}
					onMouseLeave={handleWhellLeave}
					onClick={() => navigate({ to: "/about" })}
				/>
			</svg>

			{/* <span className="absolute left-[30px] -top-[30px]">home</span>
			<span className="absolute left-[100px]">experience</span>
			<span className="absolute top-[95px]">projects</span>
			<span className="absolute left-[-40px]">skills</span> */}

			<div
				onClick={() => navigate({ to: "/" })}
				className="top-[-40px] absolute cursor-pointer z-10 font-semibold uppercase font-display text-background"
			>
				home
			</div>

			<div className="absolute cursor-pointer z-10 font-semibold uppercase font-display text-background">
				{hoveredSection}
			</div>
		</div>
	);
};
