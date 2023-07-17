import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Project.css'
import {projectsData} from './../../assets/projectsData'
import ProjectCard from './ProjectCard';

function Project() {
  return (
    <div className='section-container'>
    <Header heading="My Projects" details="Here are cool things I have worked on ,do check them out"></Header>

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

export default Project