import Image from "next/image";

export default function UnderConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="under-construction-layout bg-main bg-no-repeat bg-cover h-full tablet:pb-0">
      {children}

      <div className="flex-grow p-5 flex flex-col items-center gap-y-2 overflow-auto">
        <p className="text-2xl font-medium text-primary-base">
          Under Construction
        </p>
        <div className="mt-10 flex flex-col gap-3">
          <Image src="/mario.jpeg" alt="me" width="200" height="200" />
        </div>
      </div>
    </div>
  );
}
