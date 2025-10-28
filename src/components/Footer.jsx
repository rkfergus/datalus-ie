import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const [year, setYear] = useState('')
  useEffect(() => setYear(String(new Date().getFullYear())), [])
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© <span>{year}</span> Datalus. All rights reserved.</p>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}
