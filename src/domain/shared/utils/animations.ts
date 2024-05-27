import { TargetAndTransition } from "framer-motion";

export const onlyOnHover = (
  hasHover: boolean | null | undefined,
  animation: any
) => {
  return hasHover ? (animation as TargetAndTransition) : undefined;
};
