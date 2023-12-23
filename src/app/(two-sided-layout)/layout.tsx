"use client";
import { AppHeader } from "@/domain/shared/components/app-header/app-header";

export default function TwoSidedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen m:pb-[96px] tablet:0 text-neutral-white grid m:grid-rows-2 tablet:grid-cols-2">
      {children}
      <AppHeader />
    </div>
  );
}
