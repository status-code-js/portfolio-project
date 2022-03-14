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
        <h2>Hello! I am <span className="info-name">Sylwia.</span></h2>
        <br />Front End Developer.
        <br />I enjoy creating. I am a lifelong learner📚 
        I love vivid colors and gradients. 
        And cats🐱 And sea🏝 And walking🏃‍♀️
        </div>
      </div>
    
     <Social />
     
    </div>
  ) 
}

export default About