import React from 'react'
import { IconBrandGithub } from "@tabler/icons-react"
import "./ProjectCard.css"
import TechStackLogo from '../../TechStackLogo/techStackLogo'

const ProjectHeader = ({ project }) => {
    return (
        <div className="project-header">
            <div className="left-element">
                <a
                    className='project-title'
                    href={project.websiteLink}
                    target='_blank'
                    >{project.title}
                </a>
            </div>

            <div className="right-element">
                <a
                    className='project-logo'
                    href={project.githubLink}
                    target='_blank'
                ><IconBrandGithub />
                </a>
            </div>
        </div>

    )
}

const ProjectBody = ({ project }) => {
    return (
        <div className="project-body">
            {project.body}
        </div>
    )
}

const ProjectFooter = ({ project }) => {
    return (
        <div className="project-footer">
            <b>Tech Stack:</b> 
            <br />
            {(project.techStack.map((tech) => <TechStackLogo key={tech} logoName={tech}/>))}
        </div>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <div className="project-container">
            <ProjectHeader project={project} />
            <ProjectBody project={project} />
            <ProjectFooter project={project} />
        </div>
    )
}

export default ProjectCard