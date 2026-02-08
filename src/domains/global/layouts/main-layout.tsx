import Header from "@/domains/global/components/header";
import { Wheel } from "@/domains/global/components/whell";

interface MainLayoutProps {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div data-ui="main-layout" className="min-h-screen relative">
			<Header />
			<div className="pt-20">{children}</div>
		</div>
	);
};
