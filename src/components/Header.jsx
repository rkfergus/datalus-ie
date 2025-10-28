import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <Link className="logo" to="/" aria-label="Datalus home">Datalus</Link>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(o => !o)}
        >
          <span className="sr-only">Toggle navigation</span>
          ☰
        </button>

        <nav id="site-nav" className={"site-nav" + (open ? " open" : "")} aria-label="Primary">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="btn btn-accent">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
