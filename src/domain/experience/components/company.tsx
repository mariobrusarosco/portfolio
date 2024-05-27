import { useRef, useEffect } from "react";
import { IExperience } from "../typing/interfaces-and-enums";
import { Experience } from "./experience";

const Company = ({ experience }: { experience: IExperience | undefined }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    debugger;
    ref?.current?.scroll({ top: 0 });
  }, [experience]);

  if (!experience) return null;

  return (
    <section
      ref={ref}
      className="company container scrollable mt-12 overflow-x-auto lg:m-0 scroller"
    >
      <Experience experience={experience} key={experience.id} />
    </section>
  );
};

export { Company };
