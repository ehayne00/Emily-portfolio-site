import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card-space">
      <p className="text-3 about-me-padding project-title">
        <u>{project.title}</u> - {project.date}
      </p>

      <iframe
      className="video-size"
        title={project.title}
        src={project.demo}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="card-width text-1">
        <p className="project-text">DESCRIPTION: {project.description}</p>
        <p className="project-text">
          LANGUAGES/TECHNOLOGIES: {project.languages}
        </p>
        <p className="project-text">INSPIRATION: {project.inspiration}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
