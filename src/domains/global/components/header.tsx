export default function Header() {
	return (
		<header className="p-12 px-10 flex items-center justify-end gap-10 text-background">
			<h1 className="ml-4 text-xl font-bold uppercase">mario brusarosco</h1>
			<ul data-ui="social" className="flex items-center gap-4">
				<li>LinkedIn</li>
				<li>GitHub</li>
			</ul>
		</header>
	);
}
