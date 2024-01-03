"use client";
import { AppHeader } from "@/domain/shared/components/app-header/app-header";

export default function TwoSidedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-main bg-no-repeat bg-cover h-full grid pb-[95px] grid-rows-2 tablet:grid-rows-none tablet:grid-cols-2 tablet:pb-0">
      {children}
      <AppHeader />
    </div>
  );
}
