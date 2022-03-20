import React from 'react'
import './Skills.css'
import { SkillsData } from '../../data/SkillsData'
import SkillCard from './SkillCard'

function Skills() {
  const data = SkillsData

  return (
    <div className="skills">
      <label className="section-title">Skills</label>
      <div className="skills-text">I am a lifelong learner. I learn something new every time. This list of skills will definitely be updated with new ones!</div>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
            
            <div className="skills-list">
              {item.list.map((skill) => {
                return (
                  <SkillCard skill={skill} />
                )
              })}
            </div>
           </div>
            
          )
        })}
        </div>

    </div>
  )
}

export default Skills