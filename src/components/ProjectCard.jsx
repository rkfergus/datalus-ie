import React from 'react'

export default function ProjectCard({ project }) {
  const handleClick = () => {
    if (project.url) {
      window.open(project.url, '_blank');
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'Live': return 'status-badge status-live'
      case 'In Development': return 'status-badge status-development'
      case 'Work in Progress': return 'status-badge status-wip'
      case 'Planning': return 'status-badge status-planning'
      default: return 'status-badge'
    }
  }

  return (
    <article 
      className={`project-card ${project.url ? 'project-card-clickable' : ''}`}
      onClick={handleClick}
      style={{ cursor: project.url ? 'pointer' : 'default' }}
    >
      <div className="project-card-header">
        <div>
          <h3 className="project-title">{project.title}</h3>
          <span className="project-category">{project.category}</span>
        </div>
        <div className="project-meta">
          <span className="project-year">{project.year}</span>
          <span className={getStatusBadgeClass(project.status)}>{project.status}</span>
        </div>
      </div>
      
      <p className="project-description">{project.description}</p>
      
      <div className="tech-stack">
        <h4>Tech Stack</h4>
        <div className="tech-tags">
          {project.tech_stack?.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </article>
  )
}