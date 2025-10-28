import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import BrandPanels from './components/BrandPanels.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <BrandPanels />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
