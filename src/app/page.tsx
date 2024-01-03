export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center mobile-lg:justify-start mobile-lg:pt-[20vh] tablet:pt-[225px] tablet:pl-[80px]">
      <div className="max-w-[289px] mobile-lg:max-w-[408px] tablet:max-w-none">
        <h2 className="text-3xl text-primary-base mb-4 font-extralight mobile-lg:text-5xl   tablet:text-8xl">
          Mario Brusarosco
        </h2>
        <h3 className="text-2xl text-primary-white ml-auto w-fit font-thin tablet:text-3xl">
          front end developer
        </h3>
      </div>
    </main>
  );
}
