import React from 'react'
import './Projects.css'
import { ProjectData } from '../../data/ProjectData'
import ProjectCard from './ProjectCard'

function Projects() {
  const data = ProjectData
  return (
    <div className="projects">
      <label className="projects-title">My projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />
        })}
      </div>
    </div>
  )
}

export default Projects