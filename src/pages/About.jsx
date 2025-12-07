import React, { useEffect, useState } from 'react'
import yaml from 'js-yaml'
import { Link } from 'react-router-dom'

export default function About() {
  const [content, setContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const response = await fetch('/about.yml')
        const yamlText = await response.text()
        const data = yaml.load(yamlText)
        setContent(data?.about || null)
      } catch (error) {
        console.error('Error loading about content:', error)
        setContent(null)
      } finally {
        setIsLoading(false)
      }
    }

    loadAbout()
  }, [])

  const focusPoints = content?.focus_points || []
  const highlight = content?.highlight || {}
  const resume = content?.resume || {}
  const socials = content?.socials || []

  return (
    <main id="main">
      <section id="about" className="section alt">
        <div className="container about-grid">
          <div>
            <h2>{content?.title || 'About Datalus'}</h2>

            {(content?.paragraphs || []).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {content?.focus_heading && <h3>{content.focus_heading}</h3>}
            <ul className="checks">
              {focusPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
              {focusPoints.length === 0 && (
                <li>{isLoading ? 'Loading about content...' : 'Content unavailable.'}</li>
              )}
            </ul>
          </div>

          <div className="about-right">
            <aside className="highlight">
              <h3>{highlight.title || 'Availability'}</h3>
              {highlight.intro && <p>{highlight.intro}</p>}
              {(highlight.details || []).map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
              {highlight.cta_text && highlight.cta_link ? (
                <Link className="btn btn-primary" to={highlight.cta_link}>
                  {highlight.cta_text}
                </Link>
              ) : (
                <Link className="btn btn-primary" to="/contact">
                  Start a conversation
                </Link>
              )}
            </aside>

            {(resume.file || socials.length > 0) && (
              <div className="about-meta">
                {resume.file && (
                  <p className="resume-link">
                    <a href={resume.file} download>
                      {resume.label || 'Download resume'}
                    </a>
                    {resume.note && <span className="resume-note">({resume.note})</span>}
                  </p>
                )}
                {socials.length > 0 && (
                  <div className="about-social">
                    <span>Find me online</span>
                    <div className="social-links">
                      {socials.map(({ label, url, icon }, idx) => (
                        <a key={idx} href={url} target="_blank" rel="noreferrer" aria-label={label}>
                          {icon === 'linkedin' && (
                            <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M20.45 20.45h-3.551V14.88c0-1.329-.023-3.04-1.852-3.04-1.854 0-2.137 1.45-2.137 2.947v5.663H9.36V9h3.41v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.603 0 4.27 2.372 4.27 5.455v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.113 20.45H3.558V9h3.555v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.73v20.54C0 23.224.792 24 1.77 24h20.455C23.2 24 24 23.224 24 22.27V1.73C24 .773 23.2 0 22.225 0z"/></svg>
                          )}
                          {icon === 'github' && (
                            <svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.55v-1.9c-3.2.7-3.87-1.55-3.87-1.55-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.44-2.69 5.41-5.25 5.7.41.35.77 1.05.77 2.13v3.16c0 .3.21.66.8.55A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
