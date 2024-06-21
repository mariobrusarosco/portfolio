const CircleAndDot = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" {...props}>
      <rect
        x="0.5"
        y="0.5"
        width="25"
        height="25"
        rx="12.5"
        className={`stroke-${props.color ?? "pink-100"}`}
      />
      <rect
        x="9.5"
        y="10"
        width="6"
        height="6"
        rx="3"
        className={`fill-${props.color ?? "pink-100"}`}
      />
    </svg>
  );
};

CircleAndDot.displayName = "CircleAndDot";

export { CircleAndDot };
