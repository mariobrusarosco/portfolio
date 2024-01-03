export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full tablet:justify-start mobile-lg:pt-[15vh]">
      <div className="max-w-[289px] tablet:max-w-[408px]">
        <h2 className="text-3xl text-primary-base mb-4 font-extralight tablet:text-5xl">
          Mario Brusarosco
        </h2>
        <h3 className="text-2xl text-primary-white ml-auto w-fit font-thin tablet:text-3xl">
          front end developer
        </h3>
      </div>
    </main>
  );
}
