"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const socialItemHover = {
  fill: "#D60C4E",
  scale: 1.2,
  transition: {
    type: "spring",
    stiffness: 200,
    damping: 10,
    fill: {
      duration: 0.1,
    },
  },
};

const AppHeader = () => {
  return (
    <header className="w-screen position fixed top-0 left-0 ">
      <div className="container flex justify-between items-center py-16">
        <motion.span
          className="uppercase font-sans text-pink-100 font-semibold cursor-pointer text-lg"
          whileHover={{
            color: "#D60C4E",
            letterSpacing: "0.4em",
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 10,
            },
          }}
        >
          <Link href="./">home</Link>
        </motion.span>

        <div className="flex gap-x-6 items-center">
          <div className="w-6 cursor-pointer">
            <motion.svg
              viewBox="0 0 24 24"
              fill="#FFD1CA"
              whileHover={socialItemHover}
            >
              <path
                d="M18.9014 0H22.5816L14.5415 10.1662L24 24H16.5941L10.7935 15.6098L4.15631 24H0.473926L9.07356 13.1262L0 0H7.59394L12.8372 7.66892L18.9014 0ZM17.6098 21.5631H19.649L6.48589 2.30892H4.29759L17.6098 21.5631Z"
                fill="inherit"
              />
            </motion.svg>
          </div>

          <div className="w-6 cursor-pointer">
            <motion.svg
              fill="#FFD1CA"
              viewBox="0 0 25 25"
              whileHover={socialItemHover}
            >
              <path
                d="M22.25 0C22.9793 0 23.6788 0.289731 24.1945 0.805456C24.7103 1.32118 25 2.02065 25 2.75V22C25 22.7293 24.7103 23.4288 24.1945 23.9445C23.6788 24.4603 22.9793 24.75 22.25 24.75H3C2.27065 24.75 1.57118 24.4603 1.05546 23.9445C0.539731 23.4288 0.25 22.7293 0.25 22V2.75C0.25 2.02065 0.539731 1.32118 1.05546 0.805456C1.57118 0.289731 2.27065 0 3 0H22.25ZM21.5625 21.3125V14.025C21.5625 12.8362 21.0902 11.696 20.2496 10.8554C19.409 10.0148 18.2688 9.5425 17.08 9.5425C15.9113 9.5425 14.55 10.2575 13.89 11.33V9.80375H10.0538V21.3125H13.89V14.5337C13.89 13.475 14.7425 12.6088 15.8013 12.6088C16.3118 12.6088 16.8014 12.8116 17.1624 13.1726C17.5234 13.5336 17.7262 14.0232 17.7262 14.5337V21.3125H21.5625ZM5.585 7.645C6.19765 7.645 6.78521 7.40163 7.21842 6.96842C7.65163 6.53521 7.895 5.94765 7.895 5.335C7.895 4.05625 6.86375 3.01125 5.585 3.01125C4.9687 3.01125 4.37765 3.25607 3.94186 3.69186C3.50607 4.12765 3.26125 4.7187 3.26125 5.335C3.26125 6.61375 4.30625 7.645 5.585 7.645ZM7.49625 21.3125V9.80375H3.6875V21.3125H7.49625Z"
                fill="inherit"
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export { AppHeader };
