import clsx from "clsx";

const CircleAndDot = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      stroke="none"
      {...props}
    >
      <rect x="0.5" y="0.5" width="25" height="25" rx="12.5" fill="none" />
      <rect stroke="none" x="9.5" y="10" width="6" height="6" rx="3" />
    </svg>
  );
};

export { CircleAndDot };
