import React from 'react'
import './ProjectCard.css'

const ProjectCard = ( { project }) => {
  return (
    <div className="project-card">
        <div className="project-info">
            <label className="project-title">{project.title}</label>
            <div className="project-links">
                {project.demo && (
                <a className="project-link" href={project.demo}>
                    <div className="link-button">
                    <i class="fi fi-rr-globe"></i>Demo
                    </div>
                    </a>
                )}
            </div>
            <p className="project-about">{project.about}</p>
            <div className="project-tags">{project.tags.map((tag) => {
                return (
                    <label className="project-tag">{tag}</label>
                )
            })}</div>
            </div>
        <img src={project.image} className="project-photo" alt="Project Image"/>

    </div>
  )
}

export default ProjectCard