import Link from "next/link";
import { portfolioRouting } from "../../typing/constants";

const routeToBeIgnore = ["/"];
const footerRoutes = portfolioRouting.filter(
  (route) => !routeToBeIgnore.includes(route.path)
);

const AppFooter = () => {
  return (
    <footer className="fixed w-screen bottom-0 py-6 px-4 flex gap-x-4 bg-white">
      <div className="hidden font-light text-primary-white desktop:flex gap-4">
        <span>menu</span>
        <span className="w-[1px] bg-primary-white" />
      </div>

      <ul className="w-full flex justify-around text-black">
        {footerRoutes.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className="flex flex-col items-center gap-y-2"
            >
              <span>|</span>
              <span className="font-sans font-light text-sm">
                {route.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export { AppFooter };
