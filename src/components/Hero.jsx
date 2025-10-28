import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1>Data, Intuitively</h1>
        <p className="subhead">Helping people work with data through elegant, easy-to-use applications.</p>
        <div className="actions">
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <Link to="/about" className="btn btn-ghost">Learn More</Link>
        </div>
      </div>
    </section>
  )
}
