import React, { useState, useEffect } from 'react'
import yaml from 'js-yaml'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch('/projects.yml')
        const yamlText = await response.text()
        const data = yaml.load(yamlText)
        // Filter out hidden projects
        const visibleProjects = (data.projects || []).filter(project => !project.hide)
        setProjects(visibleProjects)
      } catch (error) {
        console.error('Error loading projects:', error)
        setProjects([])
      }
    }

    loadProjects()
  }, [])

  return (
    <main id="main">
      <section className="section">
        <div className="container">
          <header className="section-head">
            <h1>All Projects</h1>
            <p>A comprehensive view of my work across different technologies and domains.</p>
          </header>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}