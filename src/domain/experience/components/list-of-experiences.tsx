import { motion } from "framer-motion";
import { revealAndMoveToRight, companyLabel } from "../animations";
import { experiences } from "../constants";

interface Props {
  currentCompanyId: string;
  onSelectingCompany: (id: string) => void;
}
const ListOfExperiences = ({ currentCompanyId, onSelectingCompany }: Props) => {
  return (
    <section className="list-of-experiences w-full lg:mt-24">
      <motion.ul
        className="flex gap-8 pb-4 x-global-spacing justify-start items-start scroller md:gap-4 lg:max-h-[250px] lg:flex-wrap lg:flex-col lg:px-0"
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.05,
              when: "beforeChildren",
            },
            transitionEnd: {
              overflow: "auto",
            },
          },
        }}
        animate="visible"
        initial="hidden"
      >
        {experiences.map((experience) => (
          <motion.li
            key={experience.id}
            onClick={() => onSelectingCompany(experience.id)}
            variants={revealAndMoveToRight}
          >
            {/* IMPORTANT: Framer Motion has a bug with the usage of "whileHover" + variants with "staggerChidlren" To fix that, we need an extra motion.div to handle the "whileHover"*/}
            <motion.div
              className="flex flex-col items-center gap-y-4 cursor-pointer last:pr-4 lg:flex-row lg:gap-x-4 lg:items-center"
              whileHover="hover"
            >
              <div className="w-[6px] h-[6px]">
                <svg viewBox="0 0 6 6" fill="none">
                  <path
                    d="M0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3Z"
                    fill={`${
                      experience.id == currentCompanyId ? "#D60C4E" : "#FFD1CA"
                    }`}
                  />
                </svg>
              </div>

              <motion.span
                variants={companyLabel}
                className={`uppercase font-sans font-semibold text-lg whitespace-nowrap lg:text-sm
                  ${
                    experience.id == currentCompanyId
                      ? "text-pink-500"
                      : "text-pink-100"
                  }
                `}
              >
                {experience.companyName}
              </motion.span>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export { ListOfExperiences };
