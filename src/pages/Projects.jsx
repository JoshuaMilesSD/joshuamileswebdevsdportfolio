import { useState } from 'react'
import PomodoroClockone from '../projects/PomodoroClockone'
import WeatherApp from '../projects/WeatherApp'
import Calculator from '../projects/Calculator'
import './Projects.css'

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 'daily-adventure',
      title: 'Daily Adventure App',
      description: 'A consumer mobile app for iOS and Android, built from the ground up as Founder & Lead Developer of Daily Adventure LLC.',
      technologies: ['React Native', 'Firebase', 'REST APIs', 'iOS & Android'],
      features: [
        'Firebase Auth, Firestore, and Storage integration',
        'Multiple third-party API integrations',
        'Full App Store Connect & Google Play Console submission pipeline',
        'End-to-end product build, from concept to launch'
      ],
      status: 'In development — launching on iOS & Android'
    },
    {
      id: 'ai-ad-campaigns',
      title: 'AI Ad & UGC Content Campaigns',
      description: 'Paid ad campaigns across Facebook, Google, and TikTok using AI-generated UGC creatives, ad scripts, and TikTok affiliate content.',
      technologies: ['Meta Ads Manager', 'Google Ads', 'TikTok Ads Manager', 'AI Content Tools'],
      features: [
        'AI-generated UGC-style video & image ad creatives',
        'Ad scripts with hooks, storytelling arcs, and CTAs',
        'TikTok affiliate content driving product discovery',
        'Audience targeting, creative testing, and performance review'
      ],
      link: 'https://www.fiverr.com/joshuamilessd',
      linkLabel: 'View Services on Fiverr'
    },
    {
      id: 'screenplays',
      title: 'Feature Screenplays',
      description: 'Two completed feature-length screenplays with full narrative structure, character development, and scene direction.',
      technologies: ['Screenwriting', 'Story Structure', 'Dialogue'],
      features: [
        'Full three-act narrative structure',
        'Original characters and dialogue',
        'Demonstrates long-form creative discipline'
      ]
    },
    {
      id: 'pomodoro',
      title: 'Pomodoro Clock',
      description: 'A productivity timer app that helps you work in focused intervals using the Pomodoro Technique.',
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5'],
      features: [
        'Customizable work and break intervals',
        'Audio notifications',
        'Start, pause, and reset functionality',
        'Visual countdown display'
      ],
      component: PomodoroClockone
    },
    {
      id: 'weather',
      title: 'Weather App',
      description: 'A responsive weather application that shows current weather conditions for any city or your current location.',
      technologies: ['React', 'JavaScript', 'Geolocation API', 'CSS3'],
      features: [
        'Search weather by city name',
        'Current location detection',
        'Real-time weather data',
        'Responsive design'
      ],
      component: WeatherApp
    },
    {
      id: 'calculator',
      title: 'Calculator',
      description: 'A fully functional calculator built with React that handles basic arithmetic operations.',
      technologies: ['React', 'JavaScript', 'CSS Grid', 'State Management'],
      features: [
        'Basic arithmetic operations',
        'Decimal number support',
        'Clear and reset functionality',
        'Responsive button layout'
      ],
      component: Calculator
    }
  ]

  const ProjectCard = ({ project, isActive, onClick }) => (
    <div className={`project-card ${isActive ? 'active' : ''}`}>
      <div
        className="project-header"
        onClick={project.component ? onClick : undefined}
        style={{ cursor: project.component ? 'pointer' : 'default' }}
      >
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {project.component && (
          <button className="demo-button">
            {isActive ? 'Hide Demo' : 'View Demo'}
          </button>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="demo-button"
            onClick={(e) => e.stopPropagation()}
          >
            {project.linkLabel || 'Learn More'}
          </a>
        )}

        {project.status && (
          <p className="project-status">{project.status}</p>
        )}
      </div>

      {isActive && project.component && (
        <div className="project-demo">
          <project.component />
        </div>
      )}
    </div>
  )

  return (
    <div className="projects">
      <div className="container">
        <h1>My Projects</h1>
        <p className="projects-intro">
          A mix of product builds, marketing work, and creative projects — from a live mobile app
          and paid ad campaigns to the React fundamentals projects that got me started.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onClick={() => setActiveProject(
                activeProject === project.id ? null : project.id
              )}
            />
          ))}
        </div>

        <div className="projects-note">
          <h3>About These Projects</h3>
          <p>
            The Daily Adventure App and marketing campaigns reflect my current work building and
            growing a product end-to-end. The Pomodoro Clock, Weather App, and Calculator are the
            React fundamentals projects that built my frontend foundation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
