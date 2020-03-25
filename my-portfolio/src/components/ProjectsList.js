import React from "react"
import projects from "../data/projects"
import ProjectCard from "./ProjectCard"

const ProjectsList = () => {
    return(
        <div>
            <h2 className="Header text-5">PROJECTS</h2>
           {projects.map(project => <ProjectCard project={project} key={project.id}/>)}
        </div>
    )
}

export default ProjectsList;