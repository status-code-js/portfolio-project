import React from 'react'
import './Skills.css'
import { SkillsData } from '../../data/SkillsData'

function Skills() {
  const data = SkillsData

  return (
    <div className="skills">
      <label className="skills-title">Skills</label>
      <div className="skills-container"></div>

    </div>
  )
}

export default Skills