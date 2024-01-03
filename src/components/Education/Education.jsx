import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Education.css'
import {projectsData} from './../../assets/projectsData'
import ProjectCard from './EducationCard';

function Education() {
  return (
    <div className='section-container'>
    <Header heading="My Education"></Header>
    <div className="education-card">
        <div className="project-details-container">
        <h2 className="project-heading">Lovely Professional University</h2>
        <p className="project-details">Computer Science and Engineering</p>
        <p className="project-details">CGPA : 8.25</p>
        </div>
    </div>
   
    <Header heading="My Experience"></Header>
    <div className="project-card-container">
    {
      projectsData.map(({projectName, projectDescription, imageUrl, videoUrl, projectUrl })=>{
        return <ProjectCard projectName={projectName} projectDescription={projectDescription} imageUrl={imageUrl} videoUrl={videoUrl} projectUrl={projectUrl} ></ProjectCard>
      })
    }
    </div>

    <Footer phrase="Check out " link="my skills!" toaddress="/skills"></Footer>
    </div>
  )
}

export default Education