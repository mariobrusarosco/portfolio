import { Wheel } from "@/domains/experience/components/whell";
import { cn } from "@/lib/utils";

interface DotConnectorProps {
	className?: string;
}

export const DotConnector = ({ className }: DotConnectorProps) => {
	return (
		<div
			aria-hidden="true"
			data-ui="dot-connector"
			className={cn("flex w-[75px] items-center gap-2", className)}
		>
			<ConnectorLine />
			<Wheel className="h-5 w-5 shrink-0" colors={["#254441"]} />
			<ConnectorLine />
		</div>
	);
};

const ConnectorLine = () => (
	<svg
		aria-hidden="true"
		className="h-px min-w-0 flex-1 overflow-visible"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="0"
			y1="0.5"
			x2="100%"
			y2="0.5"
			strokeDasharray="4px 4px"
			className="stroke-background"
		/>
	</svg>
);
