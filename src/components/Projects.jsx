import React, { useState, useEffect } from 'react'
import yaml from 'js-yaml'
import Project from './Project'

export default function Projects(){
  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Load and parse the YAML file
    const loadProjects = async () => {
      try {
        const response = await fetch('/projects.yml')
        const yamlText = await response.text()
        const data = yaml.load(yamlText)
        // Filter to only show featured projects that are not hidden (first 3)
        const featuredProjects = (data.projects || [])
          .filter(project => project.featured && !project.hide)
          .slice(0, 3)
        setProjects(featuredProjects)
      } catch (error) {
        console.error('Error loading projects:', error)
        setProjects([])
      }
    }

    loadProjects()
  }, [])

  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section-head">
          <h2>Featured Projects</h2>
          <p>Selected work that blends usability, performance, and a touch of delight.</p>
        </header>

        <div className="cards">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
