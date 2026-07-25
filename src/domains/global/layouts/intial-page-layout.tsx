interface IntialPageLayoutProps {
	children: React.ReactNode;
}

export const IntialPageLayout = ({ children }: IntialPageLayoutProps) => {
	return (
		<div data-ui="intial-page-layout" className="min-h-screen relative">
			{children}
		</div>
	);
};
