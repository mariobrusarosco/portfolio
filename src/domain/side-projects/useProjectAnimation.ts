import { useAnimate } from "framer-motion";
import { MutableRefObject, useEffect } from "react";

const useProjectAnimation = (
  isSelected: boolean,
  ref: MutableRefObject<{
    wasAnimated: boolean;
  }>
) => {
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
        opacity: 0.009,
        zIndex: -1,
      },
      { type: "spring", bounce: 0 }
    );

  const handleAnimation = async () => {
    console.log("handleAnimation before if", { ref });
    debugger;
    if (ref.current?.wasAnimated) {
      console.log("skiping");
      // scaleInnerCircleUp();
      // fadeInnerCircleOut();
      const anim = animate([
        [
          ".inner-circle",
          { scale: 100 },
          {
            type: "spring",
            // stiffness: 300,
            // damping: 12,
            duration: 5,
          },
        ],
        [
          ".inner-circle",
          { opacity: 0.009, zIndex: -1 },
          { type: "spring", bounce: 0 },
        ],
      ]);
      anim.complete();
    } else {
      console.log("handleAnimation inside else", { ref });
      await moveInnerCircleToLeft();
      crackOuterCircle(0.9);
      await moveInnerCircleToMiddle();

      await moveInnerCircleToLeft();
      crackOuterCircle(0.8);
      await moveInnerCircleToMiddle();

      await breakOuterCircle();
      crackOuterCircle(1);
      await scaleInnerCircleUp();
      await fadeInnerCircleOut();

      ref.current.wasAnimated = true;
    }
  };

  useEffect(() => {
    if (!isSelected) return;

    handleAnimation();
  }, [isSelected]);

  return { scope, handleAnimation };
};

export { useProjectAnimation };
