import { useAnimate } from "framer-motion";
import { useEffect } from "react";

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

  const moveInnerCircleToMiddle = async () =>
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
        opacity: 0.1,
        zIndex: -1,
      },
      { type: "spring", bounce: 0 }
    );

  const fadeLabelAndOuterCircle = async () => {
    animate(
      ".project-label",
      {
        opacity: 0.009,
      },
      { type: "spring" }
    );
    animate(
      ".outer-circle",
      {
        opacity: 0.009,
      },
      { type: "spring" }
    );
  };

  const handleAnimation = async () => {
    await moveInnerCircleToLeft();
    crackOuterCircle(0.9);
    await moveInnerCircleToMiddle();

    await moveInnerCircleToLeft();
    crackOuterCircle(0.8);
    await moveInnerCircleToMiddle();

    await breakOuterCircle();
    crackOuterCircle(1);
    fadeLabelAndOuterCircle();

    await scaleInnerCircleUp();
    await fadeInnerCircleOut();
  };

  useEffect(() => {
    console.log("somethings changed!", { isSelected });

    if (!isSelected) return;

    handleAnimation();
  }, [isSelected]);

  return { scope, handleAnimation };
};

export { useProjectAnimation };
