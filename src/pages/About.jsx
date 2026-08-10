import headshotImage from '../assets/images/headshot2.JPG'
import './About.css'

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <div className="about-image">
              <img src={headshotImage} alt="Josh M - Full-Stack Developer & Digital Marketing Creative" className="about-headshot" />
            </div>
            <div className="about-title-section">
              <h1>About Me</h1>
              <div className="about-intro">
                <p>
                  I'm a full-stack developer and digital marketing creative who combines React Native
                  app development with AI-powered content creation and paid social advertising. I'm the
                  founder of Daily Adventure LLC, where I build mobile products and drive their growth
                  from the ground up.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>My Journey</h2>
            <p>
              I started my development journey through UC San Diego Extended Learning's Front-End Web
              Development program in 2023, building on a foundation from FreeCodeCamp's JavaScript and
              responsive design curriculum. Since then, I've expanded into React Native and mobile app
              development, founding Daily Adventure LLC to build and launch a consumer app on iOS and
              Android.
            </p>
            <p>
              Alongside development, I run AI-generated content and paid ad campaigns across Facebook,
              Google, and TikTok, combining a storyteller's instinct — I've written two feature-length
              screenplays — with data-driven marketing execution. That creative and technical mix is
              backed by 6+ years leading 50+ associates at Walmart.
            </p>
          </div>

          <div className="about-section">
            <h2>Experience</h2>
            <div className="certifications">
              <div className="cert-item">
                <h3>Founder & Lead Developer — Daily Adventure LLC</h3>
                <p>February 2026 – Present</p>
                <ul>
                  <li>Built a consumer mobile application from the ground up using React Native, targeting iOS and Android</li>
                  <li>Navigated the full App Store Connect and Google Play Console submission process, including provisioning, compliance, and app review</li>
                  <li>Integrated Firebase (Auth, Firestore, Storage) and multiple third-party APIs for a scalable, feature-rich product</li>
                  <li>Developed and executed go-to-market strategy including AI UGC content, paid social campaigns, and TikTok affiliate promotion</li>
                </ul>
              </div>
              <div className="cert-item">
                <h3>Auto Customer Care Coach — Walmart</h3>
                <p>2021 – October 2025</p>
                <ul>
                  <li>Led and coached 50+ associates across departments, focusing on performance, training, and compliance</li>
                  <li>Improved workflow processes that reduced service times and boosted customer satisfaction scores</li>
                  <li>Used data analysis to optimize staffing and operations across departments</li>
                </ul>
              </div>
              <div className="cert-item">
                <h3>Stocking Coach — Walmart</h3>
                <p>2019 – 2021</p>
                <ul>
                  <li>Managed overnight stocking operations, ensuring accurate inventory flow and on-time execution</li>
                  <li>Developed training resources that improved team onboarding speed and knowledge retention</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Education & Certifications</h2>
            <div className="certifications">
              <div className="cert-item">
                <h3>Front-End Web Development Certificate</h3>
                <p>UC San Diego Extended Learning, 2023</p>
              </div>
              <div className="cert-item">
                <h3>FreeCodeCamp - Responsive Web Design Certificate</h3>
                <p>HTML5, CSS3, Flexbox, Grid, and responsive design principles</p>
              </div>
              <div className="cert-item">
                <h3>FreeCodeCamp - JavaScript Algorithms & Data Structures Certificate</h3>
                <p>Modern JavaScript fundamentals and problem solving</p>
              </div>
              <div className="cert-item">
                <h3>FreeCodeCamp - Front-End Libraries Certificate</h3>
                <p>React, Redux, and other frontend frameworks</p>
              </div>
              <div className="cert-item">
                <h3>Walmart Leadership & Operations Training</h3>
                <p>Team leadership, coaching, and process optimization</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>Technical Skills</h2>
            <div className="skills-categories">
              <div className="skill-category">
                <h3>Frontend & Mobile</h3>
                <ul>
                  <li>JavaScript (ES6+)</li>
                  <li>React & React Native</li>
                  <li>HTML5 & CSS3</li>
                  <li>Tailwind CSS & Bootstrap</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend & Tools</h3>
                <ul>
                  <li>Firebase (Auth, Firestore, Storage)</li>
                  <li>REST APIs</li>
                  <li>Git & GitHub</li>
                  <li>Node.js basics</li>
                  <li>Claude Code CLI & AI dev tools</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>App Publishing</h3>
                <ul>
                  <li>Apple App Store Connect</li>
                  <li>Google Play Console</li>
                  <li>App review, provisioning & deployment</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Digital Marketing & Content</h3>
                <ul>
                  <li>Facebook/Meta Ads & Google Ads</li>
                  <li>TikTok Ads & TikTok affiliate marketing</li>
                  <li>AI UGC content & ad creative production</li>
                  <li>Ad scripts & branded content</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Creative & Leadership</h3>
                <ul>
                  <li>Screenwriting & scripting</li>
                  <li>Graphic design</li>
                  <li>Team leadership (50+ associates)</li>
                  <li>Training & process optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>What I Do</h2>
            <p>
              I help early-stage founders and small businesses launch and grow — building React and
              React Native applications from concept to app-store deployment, and running paid social
              campaigns backed by AI-generated content that turns qualified interest into customers.
            </p>
            <p>
              Whether you need a custom mobile app, a React web application, or a digital marketing
              campaign across Meta, Google, and TikTok, I bring both technical expertise and hands-on
              creative execution to deliver results that work.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
