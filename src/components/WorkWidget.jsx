import PropTypes from "prop-types";
import { EXPERIENCES } from "@/app/constants";

const WorkWidget = () => {
  return (
    <section className="flex flex-col p-6 border border-gray-300 rounded-md shadow-md w-full max-w-lg gap-3">
      <h2 className="flex items-center m-0 text-2xl font-bold text-gray-800">
        <img src="suitcase.svg" alt="Suitcase" className="mr-2" />
        Experience
      </h2>
      <p className="text-base text-gray-500">Crafting Solutions, Driving Innovation</p>
      <ul className="flex flex-col gap-6 p-0 m-0 list-none">
        {EXPERIENCES.map((experience, index) => (
          <li key={index} className="flex gap-4 items-start">
            <img className="object-contain w-12 h-12" src={experience.logo} alt={experience.organization} />
            <div className="flex-grow flex flex-col gap-1">
              <h3 className="m-0 text-base font-bold text-gray-800">{experience.organization}</h3>
              <div className="flex flex-col gap-1">
                <p className="text-base text-gray-500">{experience.jobTitle}</p>
                <span className="text-sm text-gray-500">
                  {experience.startYear} - {experience.endYear || "Present"}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number || null,
    })
  ),
};

WorkWidget.defaultProps = {
  experiences: [],
};

export default WorkWidget;
