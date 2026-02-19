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

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16a2 2 0 0 1 .27.92z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (800) 446-4483',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@ignitelabs.io',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Headquarters',
    value: 'San Francisco, CA',
  },
]

export default function Contact() {
  useScrollReveal()
  const [form, setForm] = useState<FormData>(initialForm)
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
    <section className="contact" id="contact">
      <div className="contact__orb contact__orb--orange" aria-hidden="true" />
      <div className="contact__orb contact__orb--purple" aria-hidden="true" />

      <div className="container contact__inner">
        {/* Left column */}
        <div className="contact__info reveal">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title" style={{ color: 'white' }}>
            Ready to{' '}
            <span className="gradient-text">Ignite Change?</span>
          </h2>
          <p className="contact__info-text">
            Tell us about your project and we'll set up a complimentary discovery
            call within 24 hours. No commitments, just a conversation.
          </p>

          <div className="contact__details">
            {contactInfo.map((item) => (
              <div key={item.label} className="contact__detail">
                <div className="contact__detail-icon">{item.icon}</div>
                <div>
                  <div className="contact__detail-label">{item.label}</div>
                  <div className="contact__detail-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — form */}
        <div className="contact__form-wrapper reveal reveal-delay-2">
          {state === 'success' ? (
            <div className="contact__success">
              <div className="contact__success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll be in touch within 24 hours.</p>
              <button className="btn btn-primary" onClick={() => setState('idle')}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={handleChange}
                    autoComplete="organization"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service…</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="cloud">Cloud Architecture</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="strategy">Technology Strategy</option>
                    <option value="software">Custom Software</option>
                    <option value="security">Cybersecurity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Tell Us About Your Project *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your challenge, goals, timeline, and any relevant context…"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {state === 'error' && (
                <div className="contact__error" role="alert">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={state === 'submitting'}
              >
                {state === 'submitting' ? (
                  <>
                    <span className="contact__spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
