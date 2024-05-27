import { screens } from "@/domain/shared/animations";
import { motion } from "framer-motion";

const Heading = () => {
  return (
    <section className="heading mt-4 mb-12 lg:col-span-2 lg:pt-2 x-global-spacing lg:px-0 lg:mt-0">
      <motion.p
        initial="initial"
        animate="animate"
        variants={screens.heading}
        className="w-fit font-serif text-active-secondary text-2xl  md:text-3xl"
      >
        <span>these are my</span>
      </motion.p>

      <motion.h2
        initial="initial"
        animate="animate"
        variants={screens.heading}
        className="font-sans font-regular text-active-primary text-6xl -mt-6 md:text-7xl lg:-mt-6 lg:text-6xl"
      >
        experiences
      </motion.h2>
    </section>
  );
};

export { Heading };
