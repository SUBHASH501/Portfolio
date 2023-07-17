import React from 'react'
import './Skills.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import skillsVector from './../../assets/skills_vector.png'
import { skillList } from '../../assets/skillsData';
import SkillCard from './SkillCard';

function Skills() {
  return (
    <div className='section-container'>
      <Header heading="My Skills" details="Passionate about new technologies .I keep exploring stuff Here's the tach stack I've worked with" />
      <div className="skill-card-container">
      {
        skillList.map(({skillName,skillUrl})=>{
          return (<SkillCard skillName={skillName} skillUrl={skillUrl}/>)
        })

      }
      </div>
      <Footer phrase="Get In " link="touch." toaddress="/contact" />
      <div className="skills-vector-frame">
        <img src={skillsVector} alt="skills" className="skills-vector" />
      </div>
    </div>
  )
}

export default Skills