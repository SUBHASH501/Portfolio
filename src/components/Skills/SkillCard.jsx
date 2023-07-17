import React from 'react'
import './Skills.css'

export default function SkillCard({skillName,skillUrl}) {
  return (
    <div className='skill'>
      <img src={skillUrl} alt="skill" />
      <p>{skillName}</p>
    </div>
  )
}
