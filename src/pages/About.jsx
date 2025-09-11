import headshotImage from '../assets/images/headshot2.JPG'
import './About.css'

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <div className="about-image">
              <img src={headshotImage} alt="Josh M - Front-End Developer" className="about-headshot" />
            </div>
            <div className="about-title-section">
              <h1>About Me</h1>
              <div className="about-intro">
                <p>
                  I'm a passionate front-end web developer with a strong foundation in modern web technologies 
                  and a keen eye for creating user-friendly experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>My Journey</h2>
            <p>
              I began my web development journey at the UCSD Bootcamp in 2019-2020, where I learned 
              JavaScript and the fundamentals of web development. Since then, I've continued to expand 
              my skills and stay current with modern technologies.
            </p>
          </div>

          <div className="about-section">
            <h2>Education & Certifications</h2>
            <div className="certifications">
              <div className="cert-item">
                <h3>UCSD Bootcamp (2019-2020)</h3>
                <p>JavaScript and Web Development Fundamentals</p>
              </div>
              <div className="cert-item">
                <h3>FreeCodeCamp - Frontend Libraries Certificate</h3>
                <p>React, Redux, jQuery, and other frontend frameworks</p>
              </div>
              <div className="cert-item">
                <h3>FreeCodeCamp - Responsive Web Design Certificate</h3>
                <p>HTML5, CSS3, Flexbox, Grid, and responsive design principles</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Technical Skills</h2>
            <div className="skills-categories">
              <div className="skill-category">
                <h3>Frontend Development</h3>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>React</li>
                  <li>HTML5 & CSS3</li>
                  <li>Responsive Design</li>
                  <li>CSS Frameworks</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>No-Code/Low-Code Platforms</h3>
                <ul>
                  <li>WordPress (Master level)</li>
                  <li>Website Builders</li>
                  <li>CMS Platforms</li>
                  <li>E-commerce Solutions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>What I Do</h2>
            <p>
              I specialize in creating modern, responsive web applications using React and JavaScript. 
              I'm also highly skilled in WordPress development and various no-code/low-code solutions, 
              allowing me to choose the best tool for each project's specific needs.
            </p>
            <p>
              Whether you need a custom React application, a WordPress site, or guidance on the best 
              platform for your project, I bring both technical expertise and practical experience 
              to deliver results that work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About