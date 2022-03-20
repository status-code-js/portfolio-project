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
        <div>
        <h1 className="about-info">Hello! 
        <br />I am <span className="info-name">Sylwia.</span>
        <br />Front End Developer.
        <br />I enjoy creating. I am a lifelong learner.
        <br />I like
        <span className="switch-container">
        <span className="switch switch-design">nice UI💻</span>
        <span className="switch switch-gradients">gradients🎨</span>
        <span className="switch switch-walking">walking🏃‍♀️</span>
        <span className="switch switch-sea">sea🏝</span>
        <span className="switch switch-cats">cats🐱</span>
        
        </span>
        </h1>
        </div>
      </div>
    
     <Social />
     
    </div>
  ) 
}

export default About