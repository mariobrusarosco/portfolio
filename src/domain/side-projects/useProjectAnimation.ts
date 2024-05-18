import {
  AnimationPlaybackControls,
  AnimationSequence,
  useAnimate,
} from "framer-motion";

const useProjectAnimation = (isSelected: boolean) => {
  const [scope, animate] = useAnimate();

  const moveInnerCircleToLeft = async () => {
    await animate(
      ".inner-circle",
      { x: -15 },
      { type: "spring", duration: 0.02 }
    );
  };

  const crackOuterCircle = async (crack: number) =>
    animate("path", { pathLength: crack }, { duration: 0.5 });

  const centerInnerCircle = async () =>
    await animate(".inner-circle", { x: "-50%" }, { type: "spring" });

  const scaleInnerCircleUp = async () =>
    await animate(
      ".inner-circle",
      {
        scale: 100,
      },
      { type: "spring", stiffness: 300, damping: 12 }
    );
  const breakOuterCircle = async () =>
    await animate(
      ".inner-circle",
      { x: -25 },
      { type: "spring", stiffness: 200 }
    );

  const fadeInnerCircleOut = async () =>
    await animate(
      ".inner-circle",
      {
        opacity: 0.01,
      },
      { type: "spring", bounce: 0 }
    );

  const handleAnimation = async () => {
    await moveInnerCircleToLeft();
    crackOuterCircle(0.9);
    await centerInnerCircle();

    await moveInnerCircleToLeft();
    crackOuterCircle(0.8);
    await centerInnerCircle();

    await breakOuterCircle();

    await scaleInnerCircleUp();

    await fadeInnerCircleOut();
  };

  return { scope, handleAnimation };
};

export { useProjectAnimation };
