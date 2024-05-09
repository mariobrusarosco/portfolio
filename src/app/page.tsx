"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container h-full flex flex-col justify-around desktop:justify-center">
      <NameAndFirstName />

      <AboutMe />
    </div>
  );
}

const firstName = "mario".split("");
const lastName = "brusarosco".split("");

const NameAndFirstName = () => {
  return (
    <div className=" font-serif max-w-[312px] tablet:max-w-[667px] desktop:mt-[100px] desktop:pb-[10px]">
      <h2 className="font-semibold uppercase text-pink-500 text-6xl tablet:text-[100px]  desktop-large:text-[125px]">
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

      <h3 className="font-thin text-pink-100 text-6xl tablet:text-[100px] text-right -mt-5 tablet:-mt-8 tablet:text-left tablet:pl-[90px] desktop-large:text-[100px] uppercase">
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
    <div className="w-full font-sans tablet:text-right desktop:max-w-[680px] desktop:ml-auto desktop-large:max-w-[1080px]">
      <p className="text-3xl font-light text-pink-500 desktop-large:text-5xl">
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

      <p className="text-pink-100 font-thin text-3xl uppercase tablet:text-5xl desktop:text-7xl desktop-large:text-8xl">
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
