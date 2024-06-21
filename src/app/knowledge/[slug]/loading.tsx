import { PulseLoader } from "@/domain/shared/components/pulse-loader";

export default function Loading() {
  return (
    <div
      data-ui="knowledge-slug-loading"
      className="x-global-spacing absolute h-screen w-screen left-0 lg:flex lg:items-center lg:gap-x-24"
    >
      <PulseLoader />
    </div>
  );
}
