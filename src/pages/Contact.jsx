import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact">
      <div className="container">
        <h1>Get In Touch</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Work Together</h2>
            <p>
              I'm always interested in new opportunities and exciting projects. 
              Whether you need a custom web application, WordPress development, 
              or consultation on the best platform for your needs, I'd love to hear from you.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <p>Available for project inquiries</p>
              </div>
              <div className="contact-method">
                <h3>Response Time</h3>
                <p>I typically respond within 24 hours</p>
              </div>
              <div className="contact-method">
                <h3>Project Types</h3>
                <p>Web development, WordPress, consulting</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact