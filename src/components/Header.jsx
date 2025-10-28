import React, { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a className="logo" href="/" aria-label="Datalus home">Datalus</a>

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
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact" className="btn btn-accent">Contact</a>
        </nav>
      </div>
    </header>
  )
}
