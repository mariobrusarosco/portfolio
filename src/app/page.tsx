export default function Home() {
  return (
    <main className="h-full flex flex-col items-center justify-center mobile-lg:justify-start mobile-lg:pt-[20vh] tablet:pt-[225px] tablet:pl-[80px]">
      <div className="max-w-[289px] mobile-lg:max-w-[408px] tablet:max-w-none font-serif">
        <h2 className="text-6xl text-primary-base font-bold  uppercase mobile-lg:text-5xl tablet:text-7xl">
          Mario
        </h2>
        <h3 className="text-6xl text-primary-white w-fit font-thin hover:font-sans">
          brusarosco
        </h3>
      </div>
    </main>
  );
}
