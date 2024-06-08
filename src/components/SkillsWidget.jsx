import PropTypes from "prop-types";
import { SKILLS } from "@/app/constants";

const SkillsWidget = () => {
  return (
    <section className="flex flex-col p-6 border border-gray-300 rounded-md w-full max-w-lg gap-3 shadow-md">
      <h2 className="flex m-0 text-2xl font-bold text-gray-800">
        <img src="/bolt.svg" alt="Bolt" className="w-5 mr-2"></img>Skills
      </h2>
      <p className="text-base text-gray-500">
        I posess a plethora of skills in various programming languages, development frameworks, and project management.
        Here are my main skills:
      </p>
      <ul className="flex flex-col gap-6 p-0 m-0 list-none">
        {SKILLS.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <img className="w-13 h-13" src={skill.icon} alt={skill.name} />
            <div className="flex-grow flex flex-col gap-1">
              <h3 className="m-0 text-base font-bold text-gray-800">{skill.name}</h3>
              <div className="flex items-center gap-2 h-8 bg-gray-200">
                <div className="h-full bg-teal-500 rounded-md" style={{ width: `${skill.proficiency}%` }}></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    })
  ),
};

SkillsWidget.defaultProps = {
  skills: [],
};

export default SkillsWidget;
