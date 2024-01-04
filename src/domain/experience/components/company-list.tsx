import { motion } from "framer-motion";
import { experiences } from "../typing/constants";

interface Props {
  onCompanySelection: (index: number) => void;
}

const CompanyList = (props: Props) => {
  const { onCompanySelection } = props;

  return (
    <ul className="flex flex-col gap-y-14 desktop:pt-20 desktop:w-fit desktop:my-0 desktop:mx-auto">
      {experiences.map((experience, key) => (
        <motion.li
          key={experience.companyName}
          onClick={() => onCompanySelection(key)}
          className="flex gap-3 items-center cursor-pointer group"
          whileHover="hover"
          variants={{
            hover: {
              x: -10,
              transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 150,
                dumping: 20,
              },
            },
          }}
        >
          <div className="relative flex justify-center">
            <div className="relative flex justify-center">
              <motion.div
                className="w-[1px] h-[43px] bg-light-gray group-hover:bg-light-green"
                variants={{
                  hover: {
                    transition: {
                      duration: 0.8,
                      type: "spring",
                      stiffness: 50,
                      dumping: 10,
                    },
                    rotate: 180,
                  },
                }}
              />
              <motion.div
                variants={{
                  hover: {
                    scale: 1.5,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      dumping: 20,
                    },
                  },
                }}
                className="w-[10px] h-[10px] rounded-full bg-primary-base absolute top-[15px] group-hover:bg-primary-white"
              />
            </div>
          </div>
          <motion.span
            className="text-2xl text-primary-white group-hover:text-light-green"
            variants={{
              hover: {
                x: 15,
                transition: {
                  type: "spring",
                  stiffness: 150,
                  dumping: 20,
                  from: 0,
                },
              },
            }}
          >
            {experience.companyName}
          </motion.span>
        </motion.li>
      ))}
    </ul>
  );
};

export default CompanyList;
