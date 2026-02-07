import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MainLayout } from "@/domains/global/layouts/main-layout";

export const Route = createFileRoute("/(inner-pages)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<MainLayout>
			<Outlet />
		</MainLayout>
	);
}
