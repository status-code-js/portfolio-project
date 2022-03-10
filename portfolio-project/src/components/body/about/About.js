import React from 'react'
import './About.css'
import Social from '../../common/social-links/Social'

function About() {
  return (
    <div className="about">
      <div className="about-top">
      <div className="about-photo">
          <img src={require('../../../assets/code.png')} className="picture"/>
        </div>
        <div className="about-info">
        Hello! I am <span className="info-name">Sylwia</span>. 
        <br />Front End Developer.
        <br />I love creating and minimalism. I am a lifelong learner.
        </div>
      </div>

     <Social />
    </div>
  ) 
}

export default About