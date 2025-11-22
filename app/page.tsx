'use client'

import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="/" className="logo">Photography by Simo</a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Capturing Moments,<br />Creating Memories</h1>
          <p className="hero-subtitle">Professional Photography by Simo</p>
          <a href="#contact" className="cta-button">Book a Session</a>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">A glimpse into my work</p>
          <div className="gallery">
            <div className="gallery-item" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              <div className="gallery-overlay">
                <span className="gallery-category">Portraits</span>
              </div>
            </div>
            <div className="gallery-item" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
              <div className="gallery-overlay">
                <span className="gallery-category">Weddings</span>
              </div>
            </div>
            <div className="gallery-item" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
              <div className="gallery-overlay">
                <span className="gallery-category">Landscapes</span>
              </div>
            </div>
            <div className="gallery-item" style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'}}>
              <div className="gallery-overlay">
                <span className="gallery-category">Events</span>
              </div>
            </div>
            <div className="gallery-item" style={{background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'}}>
              <div className="gallery-overlay">
                <span className="gallery-category">Nature</span>
              </div>
            </div>
            <div className="gallery-item" style={{background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'}}>
              <div className="gallery-overlay">
                <span className="gallery-category">Urban</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Simo</h2>
              <p>With years of experience in photography, I specialize in capturing the authentic moments that tell your unique story. From intimate portraits to grand celebrations, my passion is creating images that you'll treasure for a lifetime.</p>
              <p>Every photograph is an opportunity to preserve a memory, and I approach each session with creativity, professionalism, and attention to detail.</p>
            </div>
            <div className="about-image">
              <div className="placeholder-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📸</div>
              <h3>Portrait Photography</h3>
              <p>Professional headshots, family portraits, and personal branding sessions</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💑</div>
              <h3>Wedding Photography</h3>
              <p>Comprehensive coverage of your special day from start to finish</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎉</div>
              <h3>Event Photography</h3>
              <p>Corporate events, parties, and celebrations captured beautifully</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌄</div>
              <h3>Landscape & Nature</h3>
              <p>Stunning outdoor photography showcasing natural beauty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Let's create something beautiful together</p>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows={6} required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Photography by Simo. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
