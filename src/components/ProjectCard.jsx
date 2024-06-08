"use client";
import PropTypes from "prop-types";

const ProjectCard = ({ company, description, logo, link }) => {
  return (
    <div className="flex flex-col p-6 max-w-md">
      <div className="flex items-center">
        <img src={logo} alt={company} className="w-16 h-16 rounded-full justify-center align-middle" />
        <h2 className="text-xl font-bold ml-4">{company}</h2>
      </div>
      <p className="text-zinc-600 text-sm mt-4">{description}</p>
      <a href={link} target="_blank" rel="noreferrer" className="flex items-center mt-4 text-black hover:text-teal-500">
        <img src="link.svg" alt="link" className="w-4 h-4 mr-2" />
        {link}
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

ProjectCard.defaultProps = {
  link: "#",
};

export default ProjectCard;
