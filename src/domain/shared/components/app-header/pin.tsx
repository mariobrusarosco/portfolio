import { motion } from "framer-motion";
import React from "react";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import { circleAnimation, stemAnimation } from "./animations";

export const Pin = () => {
  const { isDesktop } = useScreenDetector();
  const keyToRefreshVariants = String(isDesktop);

  return (
    <div className="relative flex justify-center">
      <Stem
        variants={isDesktop ? stemAnimation : undefined}
        key={keyToRefreshVariants}
      />
      <Circle
        variants={isDesktop ? circleAnimation : undefined}
        key={keyToRefreshVariants}
      />
    </div>
  );
};

const CircleWithMotion = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((_, ref) => (
  <div
    ref={ref}
    className="w-[10px] h-[10px] rounded-full bg-primary-base m-and-t:absolute  m-and-t:top-[15px] desktop:w-[20px] desktop:h-[20px]"
  />
));

CircleWithMotion.displayName = "Circle";
export const Circle = motion(CircleWithMotion);

const StemWithMotion = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{}>
>((_, ref) => (
  <div
    ref={ref}
    className="w-[1px] h-[43px] bg-light-gray desktop:opacity-0 desktop:absolute"
  />
));

StemWithMotion.displayName = "Stem";
export const Stem = motion(StemWithMotion);
