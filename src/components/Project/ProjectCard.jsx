import React from 'react'
import './Project.css'
import github from './../../assets/gh.png'


export default function ProjectCard({ projectName, projectDescription, imageUrl, videoUrl, projectUrl }) {
    return (
        <div>
            <div className="project-card">
                <div className="image-container">
                    <a href={projectUrl} className="project-external-link">
                    <img src={imageUrl}   alt="project" className='project-image' />
                    </a>
                </div>

                <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">
                {projectDescription}
                </p>
                <a href={videoUrl} className='project-gt-link'>
                <img src={github} alt="social" />
                </a>
                </div>
            </div>
        </div>
    )
}
