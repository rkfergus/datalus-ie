import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="section">
      <div className="container">
        <header className="section-head">
          <h2>Contact</h2>
          <p>Tell me about your project. I’ll get back within one business day.</p>
        </header>

        <form className="contact-form" method="post" action="#" aria-describedby="privacy-note">
          <label>
            <span>Name</span>
            <input type="text" name="name" required autoComplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required autoComplete="email" />
          </label>
          <label className="full">
            <span>Project brief</span>
            <textarea name="message" rows="5" required></textarea>
          </label>
          <div className="form-actions">
            <button className="btn btn-primary" type="submit">Send</button>
            <p id="privacy-note" className="privacy">By submitting, you agree to be contacted about your request.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
