import { useId } from "react";
import { cn } from "@/lib/utils";

interface ProjectHexagonProps {
	children: React.ReactNode;
	className?: string;
}

export const ProjectHexagon = ({
	children,
	className,
}: ProjectHexagonProps) => {
	const clipPathId = useId();

	return (
		<>
			<svg aria-hidden="true" className="absolute h-0 w-0">
				<defs>
					<clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
						<path d="M.453 .0107C.4809-.0036.5153-.0036.5432.0107L.9511.2195C.9791.2338.9962.2602.9962.2888V.7064C.9962.735.9791.7614.9511.7757L.5432.9845C.5153.9988.4809.9988.453.9845L.0451.7757C.0172.7614 0 .735 0 .7064V.2888C0 .2602.0172.2338.0451.2195Z" />
					</clipPath>
				</defs>
			</svg>

			<span
				className={cn("grid place-items-center", className)}
				style={{ clipPath: `url(#${clipPathId})` }}
			>
				{children}
			</span>
		</>
	);
};
