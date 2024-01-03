import React from 'react'
import './Education.css'


export default function ProjectCard({ projectName, projectDescription}) {
    return (
        <div>
            <div className="project-card">
                <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">
                {projectDescription}
                </p>
                </div>
            </div>
        </div>
    )
}
