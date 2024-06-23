import { PulseLoader } from "@/domain/shared/components/pulse-loader";

export default function Loading() {
  return (
    <div
      data-ui="experience-id-loading"
      className="flex flex-col pt-12 pr-4 overflow-auto lg:flex-1 lg:pt-0 lg:flex-row lg:gap-x-20"
    >
      <PulseLoader />
    </div>
  );
}
