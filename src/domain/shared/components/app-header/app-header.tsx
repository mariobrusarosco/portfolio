"use client";
import { TargetAndTransition, Variants, motion } from "framer-motion";
import Link from "next/link";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import animations from "./animations";
import { animateIfHoverEnabled } from "../../utils/animations";

const AppHeader = () => {
  const { hasHover } = useScreenDetector();

  return (
    <header className="w-screen z-20 relative">
      <div className="x-global-spacing flex justify-between items-center py-8  fh:py-10">
        <Link className="block" href="/">
          <motion.span
            className="block uppercase font-sans text-sm text-pink-100  cursor-pointer"
            initial="hidden"
            animate="default"
            whileHover={animateIfHoverEnabled(
              hasHover,
              animations.textLink.hover
            )}
            variants={animations.textLink}
          >
            home
          </motion.span>
        </Link>

        <div className="flex gap-x-4 items-center">
          <motion.a
            className="block font-sans text-sm text-pink-100 font-light cursor-pointer lg:hidden"
            initial="hidden"
            animate="default"
            whileHover={animateIfHoverEnabled(
              hasHover,
              animations.textLink.hover
            )}
            href="/resume-mario-brusarosco.pdf"
            variants={animations.textLink}
            download
          >
            get a simpler version
          </motion.a>

          <a
            className="w-4 cursor-pointer"
            href="https://www.linkedin.com/in/mariobrusarosco/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <motion.svg
              viewBox="0 0 25 25"
              whileHover={animations.socialItem.hover as TargetAndTransition}
              variants={animations.socialItem}
              initial="hidden"
              animate="default"
              className="fill-pink-100 block"
            >
              <path
                d="M22.25 0C22.9793 0 23.6788 0.289731 24.1945 0.805456C24.7103 1.32118 25 2.02065 25 2.75V22C25 22.7293 24.7103 23.4288 24.1945 23.9445C23.6788 24.4603 22.9793 24.75 22.25 24.75H3C2.27065 24.75 1.57118 24.4603 1.05546 23.9445C0.539731 23.4288 0.25 22.7293 0.25 22V2.75C0.25 2.02065 0.539731 1.32118 1.05546 0.805456C1.57118 0.289731 2.27065 0 3 0H22.25ZM21.5625 21.3125V14.025C21.5625 12.8362 21.0902 11.696 20.2496 10.8554C19.409 10.0148 18.2688 9.5425 17.08 9.5425C15.9113 9.5425 14.55 10.2575 13.89 11.33V9.80375H10.0538V21.3125H13.89V14.5337C13.89 13.475 14.7425 12.6088 15.8013 12.6088C16.3118 12.6088 16.8014 12.8116 17.1624 13.1726C17.5234 13.5336 17.7262 14.0232 17.7262 14.5337V21.3125H21.5625ZM5.585 7.645C6.19765 7.645 6.78521 7.40163 7.21842 6.96842C7.65163 6.53521 7.895 5.94765 7.895 5.335C7.895 4.05625 6.86375 3.01125 5.585 3.01125C4.9687 3.01125 4.37765 3.25607 3.94186 3.69186C3.50607 4.12765 3.26125 4.7187 3.26125 5.335C3.26125 6.61375 4.30625 7.645 5.585 7.645ZM7.49625 21.3125V9.80375H3.6875V21.3125H7.49625Z"
                fill="inherit"
              />
            </motion.svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export { AppHeader };
