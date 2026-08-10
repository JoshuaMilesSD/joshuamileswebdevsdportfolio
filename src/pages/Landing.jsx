import { Link } from 'react-router-dom'
import headshotImage from '../assets/images/headshot2.JPG'
import HeroScene from '../components/HeroScene'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <div className="hero">
        <HeroScene />
        <div className="hero-content">
          <div className="hero-profile">
            <div className="hero-image">
              <img src={headshotImage} alt="Josh M - Full-Stack Developer & Digital Marketing Creative" className="headshot" />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">Full-Stack Developer & Digital Marketing Creative</h1>
              <p className="hero-subtitle">
                Building mobile apps with React, React Native, and Firebase — and driving growth
                through AI-powered content and paid ad campaigns across Meta, Google, and TikTok.
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
              <h3>Full-Stack & Mobile Development</h3>
              <p>React, React Native, Firebase, REST APIs, JavaScript (ES6+)</p>
            </div>
            <div className="skill-card">
              <h3>Digital Marketing & AI Content</h3>
              <p>Facebook/Meta Ads, Google Ads, TikTok Ads, AI UGC & ad creatives</p>
            </div>
            <div className="skill-card">
              <h3>Creative Leadership</h3>
              <p>Screenwriting, team leadership (50+), training & content strategy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
