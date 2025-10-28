import React from 'react'

export default function Project({ title, description, url }) {
  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <article 
      className={`card ${url ? 'card-clickable' : ''}`}
      onClick={handleClick}
      style={{ cursor: url ? 'pointer' : 'default' }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}