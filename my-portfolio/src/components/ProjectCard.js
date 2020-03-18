import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card-space">
      <h1 className="text-3"><u>{project.title}</u> - {project.date}</h1>
      <video className="video-size" controls>
        <source src={project.demo} type="video/mp4" />
      </video>
      <div className="card-width text-1">
        <h1>DESCRIPTION: {project.description}</h1>
        <h1>LANGUAGES/TECHNOLOGIES: {project.languages}</h1>
        <h1>INSPIRATION: {project.inspiration}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;