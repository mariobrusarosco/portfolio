import { motion } from "framer-motion";
import { experiences } from "../constants";
import animations from "@/domain/experience/animations";

const { companyList } = animations;

interface Props {
  onCompanySelection: (index: number) => void;
}

const CompanyList = (props: Props) => {
  const { onCompanySelection } = props;

  return (
    <motion.ul
      className="flex flex-col gap-y-14 desktop:pt-20 desktop:w-fit desktop:my-0 desktop:mx-auto"
      variants={companyList.circle}
      animate="visible"
      initial="hidden"
    >
      {experiences.map((experience, key) => (
        <motion.li
          key={experience.companyName}
          onClick={() => onCompanySelection(key)}
          variants={companyList.circle}
        >
          {/* IMPORTANT: Framer Motion has a bug with the usage of "whileHover" + variants with "staggerChidlren" 
           To fix that, we need an extra motion.div to handle the "whileHover"*/}
          <motion.div
            whileHover="hover"
            className="flex gap-3 items-center cursor-pointer group"
          >
            <div className="relative flex justify-center">
              <div className="relative flex justify-center">
                <motion.div
                  className="w-[1px] h-[43px] bg-light-gray group-hover:bg-light-green"
                  variants={companyList.circle}
                />
                <motion.div
                  variants={companyList.circle}
                  className="w-[10px] h-[10px] rounded-full bg-primary-base absolute top-[15px] group-hover:bg-primary-white"
                />
              </div>
            </div>
            <motion.span
              className="text-lg text-primary-white group-hover:text-light-green"
              variants={companyList.circle}
            >
              {experience.companyName}
            </motion.span>
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default CompanyList;
