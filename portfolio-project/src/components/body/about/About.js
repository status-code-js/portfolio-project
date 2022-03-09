import React from 'react'
import './About.css'
import Social from '../../common/social-links/Social'

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello! I am <span className="info-name">Sylwia</span>. 
        <br />Front End Developer👩🏼‍💻.
        I love creating. 
        <br />I am a lifelong learner.
        </div>
        <div className="about-photo">
          <img src={require('../../../assets/coding-pic.png')} className="picture"/>
        </div>

      </div>


     <Social />
    </div>
  ) 
}

export default About