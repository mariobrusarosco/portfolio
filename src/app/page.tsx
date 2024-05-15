"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container y-global-spacing h-full flex flex-col justify-around lg:h-full">
      <NameAndFirstName />

      <AboutMe />
    </div>
  );
}

const firstName = "mario".split("");
const lastName = "brusarosco".split("");

const NameAndFirstName = () => {
  return (
    <div className="font-serif max-w-[312px] md:max-w-[667px]">
      <h2 className="font-semibold uppercase text-pink-500 text-6xl md:text-7xl">
        {firstName.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: index / 10,
              duration: 4,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h2>

      <h3 className="font-thin text-pink-100 text-5xl md:text-6xl text-right -mt-5 md:-mt-5 md:text-left md:pl-16 xl:text-[100px] uppercase">
        {lastName.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: index / 10,
              duration: 4,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h3>
    </div>
  );
};

const aboutMeHeading = "about me".split(" ");
const aboutMeText =
  "a front end developer who enjoys creating digital products".split(" ");

const AboutMe = () => {
  return (
    <div className="w-full font-sans md:text-right md:ml-auto md:max-w-[610px] lg:ml-auto xl:max-w-[1080px]">
      <p className="text-3xl font-light text-pink-500">
        {aboutMeHeading.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: index / 10,
              duration: 4,
            }}
          >
            {letter}{" "}
          </motion.span>
        ))}
      </p>

      <p className="text-pink-100 font-thin text-3xl uppercase md:text-4xl">
        {aboutMeText.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: index / 10,
              duration: 4,
            }}
          >
            {letter}{" "}
          </motion.span>
        ))}
      </p>
    </div>
  );
};
