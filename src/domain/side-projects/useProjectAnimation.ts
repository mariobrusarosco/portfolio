import { AnimationPlaybackControls, useAnimate } from "framer-motion";

const useProjectAnimation = (isSelected: boolean) => {
  const [scope, animate] = useAnimate();

  const handleAnimation = async () => {
    console.log(scope);
    const sequence = [];
    await animate(
      ".inner-circle",
      { x: -15 },
      { type: "spring", duration: 0.02 }
    );
    animate("path", { pathLength: 0.9 }, { duration: 0.5 });

    await animate(".inner-circle", { x: "-50%" }, { type: "spring" });
    await animate(
      ".inner-circle",
      { x: -15 },
      { type: "spring", duration: 0.02 }
    );
    animate("path", { pathLength: 0.8 }, { duration: 0.5 });
    await animate(".inner-circle", { x: "-50%" }, { type: "spring" });
    await animate(
      ".inner-circle",
      { x: -25 },
      { type: "spring", stiffness: 200 }
    );
    await animate(
      ".inner-circle",
      {
        scale: 100,
      },
      { type: "spring", stiffness: 300, damping: 12 }
    );
    await animate(
      ".inner-circle",
      {
        opacity: 0.01,
      },
      { type: "spring", bounce: 0 }
    );
  };

  return { scope, handleAnimation };
};

export { useProjectAnimation };
