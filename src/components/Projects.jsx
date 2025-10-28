import React from 'react'

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section-head">
          <h2>Featured Projects</h2>
          <p>Selected work that blends usability, performance, and a touch of delight.</p>
        </header>

        <div className="cards">
          <article className="card">
            <h3>Baseball Scorecard</h3>
            <p>A modern twist on classic scorekeeping — ritual, stats, and joy combined.</p>
            <div className="card-actions">
              <a className="btn btn-small btn-primary" href="#" aria-disabled="true">Case Study</a>
              <a className="btn btn-small btn-ghost" href="#" aria-disabled="true">Live Demo</a>
            </div>
          </article>

          <article className="card">
            <h3>Data Intake Forms</h3>
            <p>Opinionated components to make complex data entry feel effortless.</p>
            <div className="card-actions">
              <a className="btn btn-small btn-primary" href="#" aria-disabled="true">Case Study</a>
              <a className="btn btn-small btn-ghost" href="#" aria-disabled="true">Live Demo</a>
            </div>
          </article>

          <article className="card">
            <h3>Analytics Dashboards</h3>
            <p>Readable, accessible dashboards with drilldowns that respect attention.</p>
            <div className="card-actions">
              <a className="btn btn-small btn-primary" href="#" aria-disabled="true">Case Study</a>
              <a className="btn btn-small btn-ghost" href="#" aria-disabled="true">Live Demo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
