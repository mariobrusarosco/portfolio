import { AppSidebar } from "@/domains/global/components/app-sidebar";

interface MainLayoutProps {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div data-ui="main-layout" className="min-h-screen relative flex">
			<AppSidebar />
			<main className="flex-1">{children}</main>
		</div>
	);
};
