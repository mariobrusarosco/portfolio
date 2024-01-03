"use client";
import { HeaderLink } from "./header-link";

const portfolioRouting = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Side Projects" },
];

export const AppHeader = () => {
  return (
    <div className="fixed w-screen bottom-0 left-0 tablet:bottom-[10vh] tablet:left-[35px] desktop:left-[88px] tablet:w-[40%] desktop:bottom-[92px] desktop:flex desktop:items-center desktop:gap-4">
      <div className="hidden font-light text-primary-white desktop:flex gap-4">
        <span>menu</span>
        <span className="w-[1px] bg-primary-white" />
      </div>

      <header className="bg-primary-white/20 tablet:rounded-lg desktop:w-[200px]">
        <ul className="flex justify-around p-4">
          {portfolioRouting.map((route) => (
            <HeaderLink
              key={route.path}
              path={route.path}
              label={route.label}
            />
          ))}
        </ul>
      </header>
    </div>
  );
};
