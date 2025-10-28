import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1>Data, Intuitively</h1>
        <p className="subhead">Helping people work with data through elegant, easy-to-use applications.</p>
        <div className="actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#about" className="btn btn-ghost">Learn More</a>
        </div>
      </div>
    </section>
  )
}
