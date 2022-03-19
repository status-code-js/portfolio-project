import React from 'react'
import About from './about/About'
import './Body.css'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import Contact from './contact/Contact'
import Story from './story/Story'

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="story">
        <Story />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Body