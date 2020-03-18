import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card-space">
      <h1>{project.title}</h1>
      <video className="video-size" controls>
        <source src={project.demo} type="video/mp4" />
      </video>
      <div className="card-width">
        <h1>{project.description}</h1>
        <h1>{project.languages}</h1>
        <h1>{project.inspiration}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;