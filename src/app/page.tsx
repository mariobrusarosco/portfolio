"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container h-full flex flex-col justify-around lg:justify-center">
      <NameAndFirstName />

      <AboutMe />
    </div>
  );
}

const firstName = "mario".split("");
const lastName = "brusarosco".split("");

const NameAndFirstName = () => {
  return (
    <div className="font-serif max-w-[312px] md:max-w-[667px] lg:mt-[100px] lg:pb-[10px]">
      <h2 className="font-semibold uppercase text-pink-500 text-6xl md:text-[100px] xl:text-[125px]">
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

      <h3 className="font-thin text-pink-100 text-5xl md:text-[100px] text-right -mt-5 md:-mt-8 md:text-left md:pl-[90px] xl:text-[100px] uppercase">
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
    <div className="w-full font-sans md:text-right lg:max-w-[680px] lg:ml-auto xl:max-w-[1080px]">
      <p className="text-3xl font-light text-pink-500 xl:text-5xl">
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

      <p className="text-pink-100 font-thin text-3xl uppercase md:text-5xl lg:text-7xl xl:text-8xl">
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
