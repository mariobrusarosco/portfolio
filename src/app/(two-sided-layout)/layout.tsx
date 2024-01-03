"use client";
import { AppHeader } from "@/domain/shared/components/app-header/app-header";

export default function TwoSidedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-main bg-no-repeat bg-cover h-full m:pb-[95px] m:grid m:grid-rows-2 desktop:grid-cols-2">
      {children}
      <AppHeader />
    </div>
  );
}
