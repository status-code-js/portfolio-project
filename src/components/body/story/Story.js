import React from 'react'
import './Story.css'
import About from '../about/About';

function Story() {
  return (
    <div className="contact">
     <label className="section-title">My quick story</label>
      
    <div className="contact-container">
      <div className="contact-info">
        <p><span className="story-quote">My passion for programming started when my husband gave me for my birthday a book</span> "Head First JavaScript Programming" of E. Freeman and E. Robson. I thought it was a joke: how will I, a philologist, be able to read a 600 page programming book! I did not even suspect that this would be the beginning of my adventure in the world of programming.</p>
        <p>Then I made tutorials on Youtube, I attended the courses on Udemy and finally I took two bootcamps on freeCodeCamp: "Responsive Web Design" and "JavaScript Algorithms and Data Structures". That's how I learned JavaScript, React, HTML, CSS and <a href="#skills" className="story-link">other web technologies</a>.</p>
        <p>I am curious by nature and I love learning. Every new project is for me a new challenge and an opportunity to grow as a software developer. <span className="story-quote">I am passionate about making digital products that offer a great experience to users</span> so that they receive positive emotions through website interactions.</p>
        <p><span className="story-quote">I invite you to take a look at my projects</span> that you can find below. They combine functionality and nice interface. I love them very much. I hope you will like them too!</p>
        <p>Feel free to <a href="#contact" className="story-link">contact me</a> if you're looking for a developer, have a suggestion or just want to connect.</p>
      </div>
      
      </div>

      </div>
  )
}

export default Story