import { motion } from "framer-motion";

const Circle = () => {
  return (
    <motion.div
      className="w-[20px] h-[10px] bg-primary-base absolute"
      animate={{
        scale: [1, 1.3, 1],
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 10,
          stiffness: 150,
        },
      }}
    />
  );
};

const Stem = () => {
  return <motion.div className="w-[1px] h-full bg-light-gray" />;
};

const testWrapperVarians = {
  animate: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 10,
      stiffness: 150,
    },
  },
};

export const Pin = () => {
  return (
    <motion.div
      className="relative h-[43px] flex justify-center bg-green-800"
      whileHover={{
        backgroundColor: "red",
        transition: { duration: 0.5 },
      }}
      // variants={testWrapperVarians}
    >
      <motion.div
        className="w-[20px] h-[10px] bg-primary-base"
        whileHover={{
          scale: 1.5,
          transition: { duration: 0.5 },
        }}
      />

      <Stem />
    </motion.div>
  );
};

// export const Pin = () => {
//   return (
//     <motion.div className="relative flex-grow ">
//       <motion.div
//         // variants={circle}
//         className="w-[1px] h-full bg-light-gray desktop:hidden"
//       />
//       <motion.div
//         className="absolute top-1/2 left-1/2 w-[10px] desktop:w-[20px] h-[10px] desktop:h-[20px] rounded-full bg-primary-base hover:bg-neutral-white"
//         variants={circle}
//         // whileHover={{ scale: 1.3 }}
//         // initial={{ x: "-50%", y: "-50%" }}
//         // transition={{
//         //   duration: 0.1,
//         //   type: "spring",
//         //   damping: 10,
//         //   stiffness: 300,
//         // }}
//       />
//     </motion.div>
//   );
// };
