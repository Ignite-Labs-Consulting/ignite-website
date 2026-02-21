import { useState, FormEvent } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Contact.css'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

const initialForm: FormData = { name: '', email: '', company: '', service: '', message: '' }

export default function Contact() {
  useScrollReveal()
  const [form, setForm]   = useState<FormData>(initialForm)
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setState('submitting')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.message || 'Something went wrong')
      }
      setState('success')
      setForm(initialForm)
    } catch (err) {
      setState('error')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="contact section bg-grid" id="contact">
      <div className="contact__orb contact__orb--1" aria-hidden="true" />
      <div className="contact__orb contact__orb--2" aria-hidden="true" />

      <div className="container contact__layout">
        {/* Left info */}
        <div className="contact__info reveal">
          <span className="section-label">Let's Build Together</span>
          <h2 className="contact__title">
            Tell us your idea.<br />
            <span className="gradient-text">We'll take it from there.</span>
          </h2>
          <p className="contact__desc">
            No tech background required. Just tell us what you're trying to build,
            who it's for, and what you need. We'll scope it, price it, and get started —
            usually within the week.
          </p>

          <div className="contact__reassurances">
            <div className="contact__reassurance">
              <span className="contact__reassurance-icon" aria-hidden="true">✓</span>
              <span>Free 30-minute call — no commitment</span>
            </div>
            <div className="contact__reassurance">
              <span className="contact__reassurance-icon" aria-hidden="true">✓</span>
              <span>Fixed price before any work starts</span>
            </div>
            <div className="contact__reassurance">
              <span className="contact__reassurance-icon" aria-hidden="true">✓</span>
              <span>POC in as little as 2 weeks</span>
            </div>
            <div className="contact__reassurance">
              <span className="contact__reassurance-icon" aria-hidden="true">✓</span>
              <span>You own 100% of everything we build</span>
            </div>
          </div>

          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact__detail-label">Email us anytime</div>
                <a href="mailto:hello@ignitelabs.io" className="contact__detail-val">hello@ignitelabs.io</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="contact__form-wrap reveal reveal-delay-2">
          {state === 'success' ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>We got it!</h3>
              <p>We'll review your idea and reach out within 24 hours to schedule your free call.</p>
              <button className="btn btn-primary" onClick={() => setState('idle')}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Your name *</label>
                  <input id="name" name="name" type="text" placeholder="Jane Smith"
                    value={form.name} onChange={handleChange} required autoComplete="name" />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email address *</label>
                  <input id="email" name="email" type="email" placeholder="jane@example.com"
                    value={form.email} onChange={handleChange} required autoComplete="email" />
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="company">Business / Project name</label>
                  <input id="company" name="company" type="text" placeholder="My Startup"
                    value={form.company} onChange={handleChange} autoComplete="organization" />
                </div>
                <div className="contact__field">
                  <label htmlFor="service">What stage are you at?</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Pick the closest one…</option>
                    <option value="idea">Just an idea — need a POC</option>
                    <option value="mvp">Ready to build an MVP</option>
                    <option value="existing">I have something and need help</option>
                    <option value="automate">I need automation / integrations</option>
                    <option value="cloud">I need cloud / hosting help</option>
                    <option value="unsure">Not sure — I just need to talk</option>
                  </select>
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Tell us about your idea *</label>
                <textarea
                  id="message" name="message" rows={5}
                  placeholder="What are you trying to build? What problem does it solve? Who's it for? Don't worry about technical details — just describe it like you'd explain it to a friend."
                  value={form.message} onChange={handleChange} required
                />
              </div>

              {state === 'error' && (
                <div className="contact__error" role="alert">{error}</div>
              )}

              <button type="submit" className="btn btn-primary contact__submit"
                disabled={state === 'submitting'}>
                {state === 'submitting' ? (
                  <><span className="contact__spinner" /> Sending…</>
                ) : (
                  <>
                    Send My Idea
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
              <p className="contact__form-note">
                We respond within 24 hours. No spam, no pressure.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
