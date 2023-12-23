import { motion } from "framer-motion";

export const Pin = () => {
  return (
    <div className="relative flex-grow ">
      <div className="w-[1px] h-full bg-light-gray desktop:hidden" />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[10px] desktop:w-[20px] h-[10px] desktop:h-[20px] rounded-full bg-primary-base hover:bg-neutral-white"
        whileHover={{ scale: 1.3 }}
        initial={{ x: "-50%", y: "-50%" }}
        transition={{
          duration: 0.1,
          type: "spring",
          damping: 10,
          stiffness: 300,
        }}
      />
    </div>
  );
};
