import React from 'react'

export default function About(){
  return (
    <section id="about" className="section alt">
      <div className="container about-grid">
        <div>
          <h2>About Datalus</h2>
          <p>Datalus helps teams ship dependable data tools—clean UX, solid engineering, and tidy ops. From single-purpose internal tools to public-facing web apps.</p>
          <ul className="checks">
            <li>Frontend: React, modern HTML/CSS</li>
            <li>Backend: Python (Flask/Django), REST</li>
            <li>Infra: Docker, GitHub Actions, cloud-native</li>
          </ul>
        </div>
        <aside className="highlight">
          <h3>Availability</h3>
          <p>Taking on one new project this quarter.</p>
          <a className="btn btn-primary" href="#contact">Start a conversation</a>
        </aside>
      </div>
    </section>
  )
}
