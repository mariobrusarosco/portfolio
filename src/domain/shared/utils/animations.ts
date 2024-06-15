import { TargetAndTransition } from "framer-motion";

export const animateIfHoverExists = (
  hasHover: boolean | null | undefined,
  animation: any
) => {
  return hasHover ? (animation as TargetAndTransition) : undefined;
};
