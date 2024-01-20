export default function TwoSidedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="two-sided-layout h-full grid pb-[95px] grid-rows-2 tablet:grid-rows-none tablet:grid-cols-[minmax(0,450px)_1fr] tablet:pb-0">
      {children}
    </div>
  );
}
