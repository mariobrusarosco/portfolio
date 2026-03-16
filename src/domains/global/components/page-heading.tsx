export const PageHeading = ({ title }: { title: string }) => {
	return (
		<div className="lg:w-[400px] xl:w-[500px]">
			<h2
				data-ui="page-heading"
				className="w-fit h-fit bg-foreground font-semibold lg:text-7xl text-background font-display uppercase py-6 pl-6 pr-20 line-height-0.5"
			>
				{title}
			</h2>
		</div>
	);
};
