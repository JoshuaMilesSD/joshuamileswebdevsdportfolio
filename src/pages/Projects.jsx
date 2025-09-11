import { useState } from 'react'
import PomodoroClockone from '../projects/PomodoroClockone'
import WeatherApp from '../projects/WeatherApp'
import Calculator from '../projects/Calculator'
import './Projects.css'

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
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
      <div className="project-header" onClick={onClick}>
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
        
        <button className="demo-button">
          {isActive ? 'Hide Demo' : 'View Demo'}
        </button>
      </div>
      
      {isActive && (
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
          Here are some of the React projects I've built to demonstrate my skills in 
          frontend development. Each project showcases different aspects of React and JavaScript.
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
            These projects were built as part of my portfolio to showcase my React and JavaScript skills. 
            Each project demonstrates different concepts like state management, API integration, 
            component lifecycle, and responsive design. The code is clean, well-structured, 
            and follows React best practices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects