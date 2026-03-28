import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Hero Section - Strong Value Proposition */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-badge">🎓 Currently Pursuing IFTS Course + Seeking 360h Internship</div>
          <h1><span>Mohamed Sabir</span></h1>
          <h2>Junior Web Developer</h2>
          <p className="hero-tagline">
            Building robust web applications with <strong>Java</strong>, <strong>Spring Boot</strong> & <strong>Angular</strong>
          </p>
          <p className="hero-location">📍 Bologna, Italy</p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">11</span>
              <span className="stat-label">Months Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">4</span>
              <span className="stat-label">Languages</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
      </header>

      {/* About Section - Positioning Statement */}
      <section className="section about" id="about">
        <div className="container">
          <h3 className="section-title">About Me</h3>
          <div className="about-content">
            <p className="about-intro">
              I'm a <strong>junior developer currently pursuing an IFTS course in Web Application Development</strong> with Java, React, and Generative AI. This 800-hour program includes a <strong>360-hour internship</strong>, and I'm actively seeking a software house or enterprise where I can contribute and grow.
            </p>
            <p>
              My stack centers around <strong>Java 21</strong> and <strong>Spring Boot</strong> for backend development, paired with <strong>React</strong> for creating dynamic user interfaces. I've worked with RESTful APIs, relational databases, and Agile methodologies in a professional team environment.
            </p>
            <p>
              During my previous 8-month internship at 3Dinformatica, I developed features for digital signature management systems used by real clients. I'm passionate about writing clean, maintainable code and solving complex problems.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section - Proof of Competence */}
      <section className="section experience" id="experience">
        <div className="container">
          <h3 className="section-title">Experience</h3>

          <div className="experience-card featured">
            <div className="experience-header">
              <div className="experience-role">
                <h4>Web Application Developer (Intern)</h4>
                <span className="company">3Dinformatica, Bologna</span>
              </div>
              <span className="experience-date">Apr 2024 – Feb 2025</span>
            </div>
            <div className="experience-body">
              <p className="experience-summary">
                Developed a production web application for digital signature management, working in an Agile team with bi-weekly sprints and code reviews.
              </p>
              <ul className="experience-highlights">
                <li>Built features to <strong>extract and validate information</strong> from PADES/CADES digitally signed files</li>
                <li>Implemented signer retrieval, signature verification, and signing date extraction</li>
                <li>Developed <strong>RESTful APIs</strong> using Java 17, Spring Boot, and JPA</li>
                <li>Created dynamic frontend components with <strong>Angular 18</strong></li>
                <li>Integrated backend/frontend layers and managed data with <strong>MySQL</strong></li>
                <li>Participated in planning sessions, code reviews, and Agile ceremonies</li>
              </ul>
              <div className="tech-stack">
                <span className="tech-tag">Java 17</span>
                <span className="tech-tag">Spring Boot</span>
                <span className="tech-tag">JPA/Hibernate</span>
                <span className="tech-tag">Angular</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">Git</span>
                <span className="tech-tag">Agile/Scrum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills" id="skills">
        <div className="container">
          <h3 className="section-title">Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages</h4>
              <div className="skill-items">
                <span className="skill-item featured">Java</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">TypeScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Frameworks</h4>
              <div className="skill-items">
                <span className="skill-item featured">Spring Boot</span>
                <span className="skill-item featured">Angular</span>
                <span className="skill-item">Hibernate/JPA</span>
                <span className="skill-item">React</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Databases</h4>
              <div className="skill-items">
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">MySQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Tools & Platforms</h4>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">Maven</span>
                <span className="skill-item">Tomcat</span>
                <span className="skill-item">VS Code</span>
                <span className="skill-item">IntelliJ IDEA</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Methodologies</h4>
              <div className="skill-items">
                <span className="skill-item featured">Agile/Scrum</span>
                <span className="skill-item">Code Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects" id="projects">
        <div className="container">
          <h3 className="section-title">Projects</h3>
          <div className="projects-grid">
            <a href="https://github.com/M0HAMEDsabir/TerminaleOspedale" target="_blank" rel="noopener noreferrer" className="project-card featured">
              <div className="project-icon">🏥</div>
              <div className="project-content">
                <h4>Terminale Ospedale</h4>
                <p className="project-description">
                  Hospital terminal web application for managing patient information and hospital workflows. Built with Java backend and Angular frontend.
                </p>
                <div className="project-tags">
                  <span className="project-tag">Java</span>
                  <span className="project-tag">Angular</span>
                  <span className="project-tag">Full-Stack</span>
                </div>
              </div>
              <div className="project-link">
                <span>View on GitHub →</span>
              </div>
            </a>

            <a href="https://github.com/M0HAMEDsabir/MenuRistorante" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-icon">🍽️</div>
              <div className="project-content">
                <h4>Menu Ristorante</h4>
                <p className="project-description">
                  Recipe website with dynamic recipe listing functionality. Interactive menu built with JavaScript for seamless browsing experience.
                </p>
                <div className="project-tags">
                  <span className="project-tag">JavaScript</span>
                  <span className="project-tag">HTML</span>
                  <span className="project-tag">CSS</span>
                </div>
              </div>
              <div className="project-link">
                <span>View on GitHub →</span>
              </div>
            </a>

            <a href="https://github.com/M0HAMEDsabir/minitube" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-icon">📺</div>
              <div className="project-content">
                <h4>Minitube</h4>
                <p className="project-description">
                  YouTube-inspired web application interface. Frontend project showcasing UI/UX design skills.
                </p>
                <div className="project-tags">
                  <span className="project-tag">HTML</span>
                  <span className="project-tag">CSS</span>
                  <span className="project-tag">Frontend</span>
                </div>
              </div>
              <div className="project-link">
                <span>View on GitHub →</span>
              </div>
            </a>
          </div>
          <div className="projects-cta">
            <a href="https://github.com/M0HAMEDsabir" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section education" id="education">
        <div className="container">
          <h3 className="section-title">Education</h3>
          <div className="education-list">
            <div className="education-item upcoming">
              <div className="education-year">2025–2026</div>
              <div className="education-details">
                <h4>IFTS Web App & Generative AI Developer</h4>
                <p>Java, React, Generative AI — 360h Internship Included</p>
                <span className="institution">CNA Formazione, Bologna</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-year">2023–2024</div>
              <div className="education-details">
                <h4>IFTS Web Application Developer</h4>
                <p>Java & Angular Specialization</p>
                <span className="institution">CNA Formazione, Bologna</span>
              </div>
            </div>
            <div className="education-item">
              <div className="education-year">2020–2022</div>
              <div className="education-details">
                <h4>High School Diploma</h4>
                <p>Experimental Sciences</p>
                <span className="institution">Morocco</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section languages" id="languages">
        <div className="container">
          <h3 className="section-title">Languages</h3>
          <div className="languages-grid">
            <div className="language-item">
              <span className="language-name">Italian</span>
              <span className="language-level">Fluent</span>
            </div>
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">Fluent</span>
            </div>
            <div className="language-item">
              <span className="language-name">French</span>
              <span className="language-level">Intermediate</span>
            </div>
            <div className="language-item">
              <span className="language-name">Arabic</span>
              <span className="language-level">Native</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section contact" id="contact">
        <div className="container">
          <h3 className="section-title">Let's Connect</h3>
          <p className="contact-intro">
            I'm actively seeking <strong>internship opportunities</strong> as a Junior Web Developer.
            If you're looking for a motivated developer with real-world experience, I'd love to hear from you.
          </p>
          <div className="contact-methods">
            <a href="mailto:simosabir208@gmail.com" className="contact-item">
              <span className="contact-icon">📧</span>
              <span className="contact-label">Email</span>
              <span className="contact-value">simosabir208@gmail.com</span>
            </a>
            <a href="tel:+393512039353" className="contact-item">
              <span className="contact-icon">📱</span>
              <span className="contact-label">Phone</span>
              <span className="contact-value">+39 351 203 9353</span>
            </a>
            <a href="https://www.linkedin.com/in/mohamedsabirr" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">🔗</span>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">mohamedsabirr</span>
            </a>
            <a href="https://github.com/M0HAMEDsabir" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">💻</span>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">M0HAMEDsabir</span>
            </a>
          </div>
          <div className="contact-cta" style={{ textAlign: 'center' }}>
            <a href="mailto:simosabir208@gmail.com?subject=Internship Opportunity" className="btn btn-primary btn-large">
              Send Me a Message
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Mohamed Sabir. Built with React.</p>
        <p className="footer-note">Available for internship opportunities in Bologna, Italy.</p>
        <p className="footer-note"> Autorizzo il trattamento dei miei dati personali, ai sensi del D.lgs. 196 del 30 giugno 2003 </p>
      </footer>
    </div>
  )
}

export default App