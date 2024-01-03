import Link from "next/link";
import { portfolioRouting } from "../../typying/constants";

export const MobileHeader = () => {
  return (
    <header className="bg-primary-white/20 tablet:rounded-lg desktop:w-[200px]">
      <ul className="flex justify-around p-4">
        {portfolioRouting.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className="flex flex-col text-primary-white font-light text-sm"
            >
              <div className="relative flex justify-center">
                <div className="w-[1px] h-[43px] bg-light-gray desktop:opacity-0 desktop:absolute" />
                <div className="w-[10px] h-[10px] rounded-full bg-primary-base m-and-t:absolute m-and-t:top-[15px] desktop:w-[20px] desktop:h-[20px]" />
              </div>
              <span className="desktop:absolute desktop:text-lg desktop:translate-y-[10px]  desktop:invisible">
                {route.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
