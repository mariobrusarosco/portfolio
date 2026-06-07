export const PageHeading = ({ title }: { title: string }) => {
	return (
		<div className="fixed top-0 left-1/2 -translate-x-1/2 lg:w-[400px] xl:w-[500px]">
			<h2
				data-ui="page-heading"
				className="w-fit h-fit bg-foreground font-semibold text-[56px] text-background font-display uppercase px-12 py-1 line-height-0.5"
			>
				{title}
			</h2>
		</div>
	);
};
