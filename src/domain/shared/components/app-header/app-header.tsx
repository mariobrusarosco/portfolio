import Link from "next/link";
import { HeaderLink } from "./header-link";

const linkStructure = [
  { path: "/home", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Side Projects" },
];

const linkStyles =
  "flex flex-col items-center gap-y-[2px] desktop:w-[20px] desktop:h-[20px] h-[64px]";
const labelStyles = "desktop:hidden";

export const AppHeader = () => {
  return (
    <div className="absolute m:w-full tablet:bottom-[50px] tablet:left-[35px] desktop:left-[88px]  tablet:w-[40%]  desktop:bottom-[92px] desktop:flex desktop:items-center desktop:gap-4  bottom-0 left-0">
      <div className="hidden font-light text-neutral-white desktop:flex gap-4">
        <span>menu</span>
        <span className="w-[1px] bg-neutral-white" />
      </div>

      <header className="bg-neutral-white/10 tablet:rounded-lg desktop:w-[162px]">
        <ul className="flex justify-around py-4 text-neutral-white font-light text-sm">
          {linkStructure.map((topic) => {
          return (
              <HeaderLink
                key={topic.path}
                path={topic.path}
                label={topic.label}
              />
            );
          })}
        </ul>
      </header>
    </div>
  );
};
