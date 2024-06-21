import { PulseLoader } from "@/domain/shared/components/pulse-loader";

export default function Loading() {
  return (
    <div className="x-global-spacing py-8 px-10 fixed h-screen w-screen grid place-content-center top-0 left-0 min-h-[300px] lg:flex lg:items-center lg:gap-x-24">
      <PulseLoader />
    </div>
  );
}
