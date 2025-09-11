import { Link } from 'react-router-dom'
import headshotImage from '../assets/images/headshot2.JPG'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-profile">
            <div className="hero-image">
              <img src={headshotImage} alt="Josh M - Front-End Developer" className="headshot" />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">Front-End Web Developer</h1>
              <p className="hero-subtitle">
                Creating modern, responsive web experiences with React, JavaScript, and WordPress
              </p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">View My Work</Link>
                <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="skills-preview">
        <div className="container">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend Development</h3>
              <p>React, JavaScript, HTML5, CSS3</p>
            </div>
            <div className="skill-card">
              <h3>No-Code/Low-Code</h3>
              <p>WordPress, Site Builders</p>
            </div>
            <div className="skill-card">
              <h3>Certifications</h3>
              <p>FreeCodeCamp Frontend Libraries & Responsive Design</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing