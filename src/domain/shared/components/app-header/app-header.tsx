import Link from "next/link";
import { Pin } from "./pin";

// Abstracted styles. Does it make sense to abstract this?
// const mobileStyles = "bottom-0 left-0 flex";
// const tabletStyles =
//   "tablet:w-[400px] tablet:bottom-[50px] tablet:left-[50px] rounded-lg";
// mobileStyles;
// const defaultStyles = "absolute bg-neutral-white/10 w-full";

const CustomLink = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <li>
      <Link className={className} href={href}>
        {children}
      </Link>
    </li>
  );
};

const linkStyles =
  "flex flex-col items-center gap-y-[2px] desktop:w-[20px] desktop:h-[20px]";
const labelStyles = "desktop:hidden";

export const AppHeader = () => {
  return (
    <div className="absolute w-full bottom-0 left-0 tablet:bottom-[50px] tablet:left-[50px] desktop:left-[88px] desktop:bottom-[92px] desktop:flex desktop:items-center desktop:gap-4">
      <div className="hidden font-light text-neutral-white desktop:flex gap-4">
        <span>menu</span>
        <span className="w-[1px] bg-neutral-white" />
      </div>

      <header className="bg-neutral-white/10 tablet:rounded-lg tablet:w-[295px] desktop:w-[162px]">
        <ul className="flex justify-around p-4 text-neutral-white font-light text-sm">
          <CustomLink href={"/"} className={linkStyles}>
            <Pin />
            <span className={labelStyles}>Home</span>
          </CustomLink>
          <CustomLink href={"/experience"} className={linkStyles}>
            <Pin />
            <span className={labelStyles}>Experience</span>
          </CustomLink>
          <CustomLink href={"/skills"} className={linkStyles}>
            <Pin />
            <span className={labelStyles}>Skills</span>
          </CustomLink>
          <CustomLink href={"/projects"} className={linkStyles}>
            <Pin />
            <span className={labelStyles}>Projects</span>
          </CustomLink>
        </ul>
      </header>
    </div>
  );
};
