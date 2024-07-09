import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import "./ProjectList.css"

const projects = [
  {
    title: "Todo",
    websiteLink: "https://abhitodo1.vercel.app/",
    githubLink: "https://github.com/ary57/todo",
    body: "A simple todo web app.",
    techStack: ["Typescript", "Mantine"]
  },
  {
    title: "Password Generator",
    websiteLink: "https://abhi-password-generator.vercel.app/",
    githubLink: "https://github.com/ary57/password-generator",
    body: "A simple password generator.",
    techStack: ["Typescript", "Mantine"]
  }
]


const ProjectList = () => {
  return (

    <div className='projects' id="projects">
      <h1>Projects</h1>
      <div className='project-list'>
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </div>
  )
}

export default ProjectList