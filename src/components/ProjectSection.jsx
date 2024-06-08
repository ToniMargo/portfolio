import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/app/constants";

const ProjectSection = () => {
  return (
    <section id="project-section">
      <div className="md:p-6 md:grid md:grid-cols-3 gap-4">
        {PROJECTS.map((projects, index) => (
          <ProjectCard key={index} {...projects} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
