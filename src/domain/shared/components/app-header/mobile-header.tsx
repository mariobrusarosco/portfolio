import Link from "next/link";
import { portfolioRouting } from "../../typying/constants";

export const MobileHeader = () => {
  return (
    <header className="bg-primary-white/20 tablet:rounded-lg">
      <ul className="flex justify-around p-4">
        {portfolioRouting.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className="flex flex-col text-primary-white font-light text-sm"
            >
              <div className="relative flex justify-center">
                <div className="w-[1px] h-[43px] bg-light-gray" />
                <div className="w-[10px] h-[10px] rounded-full bg-primary-base absolute top-[15px]" />
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
