import React, { useEffect, useState } from 'react'

export default function Footer(){
  const [year, setYear] = useState('')
  useEffect(() => setYear(String(new Date().getFullYear())), [])
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© <span>{year}</span> Datalus. All rights reserved.</p>
        <nav className="footer-nav" aria-label="Footer">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
