import React from 'react'

export default function BrandPanels(){
  return (
    <section className="brand-panels" aria-label="Brand Colors">
      <div className="container panels-grid">
        <article className="panel mint">
          <h3>Mint</h3>
          <p>Primary actions and highlights.</p>
        </article>
        <article className="panel coral">
          <h3>Coral</h3>
          <p>Secondary calls to action.</p>
        </article>
        <article className="panel ash">
          <h3>Ash Gray</h3>
          <p>Cards and subtle backgrounds.</p>
        </article>
        <article className="panel lavender">
          <h3>Lavender</h3>
          <p>Soft section backgrounds.</p>
        </article>
      </div>
    </section>
  )
}
