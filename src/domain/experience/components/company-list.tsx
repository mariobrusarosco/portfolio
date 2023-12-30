import { experiences } from "../typing/constants";

interface Props {
  onCompanySelection: (index: number) => void;
}

const CompanyList = (props: Props) => {
  const { onCompanySelection } = props;

  return (
    <ul>
      {experiences.map((experience, key) => (
        <li
          key={experience.companyName}
          onClick={() => onCompanySelection(key)}
        >
          {experience.companyName}
        </li>
      ))}
    </ul>
  );
};

export default CompanyList;
