"use client";
import Link from "next/link";
import { portfolioRouting } from "../../typing/constants";
import { motion } from "framer-motion";
import animations from "./animations";
import { useScreenDetector } from "../../hooks/useScreenDetector";
import { transform } from "next/dist/build/swc";

const routeToBeIgnore = ["/"];
const footerRoutes = portfolioRouting.filter(
  (route) => !routeToBeIgnore.includes(route.path)
);
const { menu } = animations;

const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const listItem = {
  visible: {
    opacity: 1,
    // transition: {
    //   staggerChildren: 1,
    // },
  },
  hidden: {
    opacity: 0,
  },
};

const AppFooter = () => {
  return (
    <footer className="fixed w-screen bottom-0 bg-white/5 p-6 desktop:px-16 desktop:py-12 desktop:flex desktop:justify-center desktop:gap-x-2 desktop:bg-transparent">
      <div className="hidden font-light desktop:flex desktop:items-center desktop:gap-10">
        <span className="font-sans font-semibold text-lg uppercase text-pink-100">
          menu
        </span>
        <span className="w-[1px] h-[53px]  bg-pink-100" />
      </div>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={list}
        className="w-full flex justify-center gap-10 desktop:justify-start desktop:pl-6 desktop:items-center"
      >
        {footerRoutes.map((route) => (
          <AnimatedLink key={route.path} {...route} />
        ))}
      </motion.ul>
    </footer>
  );
};

const AnimatedLink = (props: { path: string; label: string }) => {
  const { path, label } = props;
  const { hasHover } = useScreenDetector();

  return (
    <motion.li key={path} className="flex">
      <Link href={path} className="flex flex-col justify-between items-center">
        <motion.div
          whileHover="hover"
          initial="default"
          animate="default"
          className="relative"
        >
          <motion.div
            className="h-[8px] w-[8px] absolute origin-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full bg-pink-100"
            variants={menu.innerCircle}
          />
          <motion.svg width="40" height="40" viewBox="0 0 40 40">
            <motion.path
              d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
              stroke="#FFD1CA"
              stroke-width="2"
              fill={"transparent"}
              variants={outlineVariants}
              className="origin-center"
            />
          </motion.svg>

          <motion.span
            className="font-sans font-light text-2xl text-pink-100 
            desktop:absolute
            w-max
            destop:opacity-0 desktop:invisible
            "
            variants={hasHover ? menu.label : undefined}
          >
            {label}
          </motion.span>
        </motion.div>
      </Link>
    </motion.li>
  );
};

const textVariants = {
  default: {
    color: "grey",
    fontSize: "1em",
    x: 0,
  },
  hover: {
    color: "#eaeef5",
    fontSize: "1.2em",
    x: 20,
    transition: {
      duration: 0.3,
    },
  },
};

const outlineVariants = {
  default: {
    strokeWidth: 1,
    pathLength: 1,
    stroke: "grey",
    rotate: 120,
    transformOrigin: "center",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    strokeWidth: 1,
    pathLength: 0.85,
    rotate: 120,
    stroke: "#BF4D00",
    transformOrigin: "center",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// const AnimatedLink = (props: { path: string; label: string }) => {
//   const { path, label } = props;
//   const { hasHover } = useScreenDetector();

//   return (
//     <motion.li key={path} className="flex">
//       <Link href={path} className="flex flex-col justify-between items-center">
//         <motion.div whileHover={"hover"} initial="default" animate="default">
//           <motion.span
//             className="font-sans font-light text-2xl text-pink-100"
//             variants={textVariants}
//           >
//             {label}
//           </motion.span>

//           <motion.svg viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg">
//             <motion.path
//               strokeDasharray="0 1"
//               variants={outlineVariants}
//               strokeWidth="1"
//               fill="none"
//               stroke="grey"
//               d="M 0, 0 H 100 V 20 H 0 Z"
//             />
//           </motion.svg>

//           <motion.svg
//             width="2"
//             height="53"
//             viewBox="0 0 2 53"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <motion.path
//               variants={outlineVariants}
//               d="M1 0V53"
//               stroke="#FFD1CA"
//             />
//           </motion.svg>

//           <motion.svg
//             width="40"
//             height="40"
//             viewBox="0 0 40 40"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <motion.path
//               variants={outlineVariants}
//               d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
//               stroke="#FFD1CA"
//               stroke-width="2"
//             />
//           </motion.svg>
//         </motion.div>
//       </Link>
//     </motion.li>
//   );
// };

export { AppFooter };

{
  /* <motion.svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="transparent"
            className="rotate-[120deg]"
          >
            <motion.path
              d="M1 20C1 9.50659 9.50659 1 20 1C30.4934 1 39 9.50659 39 20C39 30.4934 30.4934 39 20 39C9.50659 39 1 30.4934 1 20Z"
              stroke="#FFD1CA"
              stroke-width="2"
              initial="initial"
              variants={menu.circle}
              whileHover={{ pathLength: 0.85, strokeDasharray: 50 }}
            />
            <motion.div
              className="h-[8px] w-[8px] rounded-full bg-pink-100"
              variants={desktopFooter.stem}
            /> */
}

{
  /* <motion.circle
              cx="20"
              cy="20"
              r="20"
              stroke="#FFD1CA"
              initial="eita"
              variants={desktopFooter.circle}
              whileHover={{ pathLength: 0.85, rotate: -60 }}
            /> */
}
{
  /* </motion.svg> */
}

{
  /* <motion.div
          className="h-[36px] w-[36px] bg-white-100 rounded-full border border-pink-100 flex items-center justify-center"
          variants={hasHover ? desktopFooter.circle : undefined}
        >
          <motion.div
            className="h-[8px] w-[8px] rounded-full bg-pink-100"
            variants={hasHover ? desktopFooter.stem : undefined}
          />
        </motion.div> */
}
