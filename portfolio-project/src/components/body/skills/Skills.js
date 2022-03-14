import React from 'react'
import './Skills.css'
import { SkillsData } from '../../data/SkillsData'
import SkillCard from './SkillCard'

function Skills() {
  const data = SkillsData

  return (
    <div className="skills">
      <label className="skills-title">Skills</label>
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