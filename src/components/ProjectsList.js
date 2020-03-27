import React from "react"
import projects from "../data/projects"
import ProjectCard from "./ProjectCard"
import underline from '../media/floral.svg'

const ProjectsList = () => {
    return(
        <div className="text-backing2">
            <h2 className="Header text-5">PROJECTS</h2>
           {projects.map(project => <ProjectCard project={project} key={project.id}/>)}
           <div className="end-div2">
              <p className="text-3 end-size2">THE END</p>
              <img className="underline-size2" alt="oh no!" src={underline} />
            </div>
        </div>
    )
}

export default ProjectsList;