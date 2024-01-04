import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";

export const AppHeader = () => {
  return (
    <div
      className="fixed w-screen bottom-0 left-0 tablet:bottom-[10vh] tablet:left-[35px] desktop:left-[88px] tablet:w-[40%] desktop:w-[100%]  desktop:bottom-[92px] desktop:flex desktop:items-center desktop:gap-4"
      suppressHydrationWarning
    >
      <div className="hidden font-light text-primary-white desktop:flex gap-4">
        <span>menu</span>
        <span className="w-[1px] bg-primary-white" />
      </div>

      <DesktopHeader />
      <MobileHeader />
    </div>
  );
};
