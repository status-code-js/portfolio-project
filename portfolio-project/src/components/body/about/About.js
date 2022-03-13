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
        <br />I love vivid colors and gradients. I am happiest when I am creating.
        I am a lifelong learner and cat lovera🐱
        </div>
      </div>
    
     <Social />
     
    </div>
  ) 
}

export default About