export const Pin = () => {
  return (
    <div className="relative h-full">
      <div className="w-[1px] h-[43px] bg-light-gray desktop:hidden" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10px] desktop:w-[20px] h-[10px] desktop:h-[20px] rounded-full bg-primary-base hover:bg-neutral-white" />
    </div>
  );
};
