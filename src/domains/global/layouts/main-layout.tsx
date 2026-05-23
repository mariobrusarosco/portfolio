import Header from "@/domains/global/components/header";

interface MainLayoutProps {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div data-ui="main-layout" className="min-h-screen relative">
			<Header />
			{children}
		</div>
	);
};
