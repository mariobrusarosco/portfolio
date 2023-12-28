import { motion } from "framer-motion";
import Link from "next/link";
import { Pin } from "./pin";

interface Props {
  path: string;
  label: string;
}
export const HeaderLink = (props: Props) => {
  const { path, label } = props;

  return (
    <motion.li className="">
      <Link href={path} className=" flex flex-col">
        <Pin />
        <span>{label}</span>
      </Link>
    </motion.li>
  );
};

// Abstracted styles. Does it make sense to abstract this?
// const mobileStyles = "bottom-0 left-0 flex";
// const tabletStyles =
//   "tablet:w-[400px] tablet:bottom-[50px] tablet:left-[50px] rounded-lg";
// mobileStyles;
// const defaultStyles = "absolute bg-neutral-white/10 w-full";

// const CustomLink = ({
//     children,
//     className,
//     href,
//   }: {
//     children: React.ReactNode;
//     className?: string;
//     href: string;
//   }) => {
//     return (
//       <motion.li>
//         <Link className={className} href={href}>
//           {children}
//         </Link>
//       </motion.li>
//     );
//   };
