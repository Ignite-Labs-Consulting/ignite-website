import { useScrollReveal } from '../hooks/useScrollReveal'
import './Hero.css'

const stats = [
  { value: '150+', label: 'Enterprise Clients' },
  { value: '$2.4B', label: 'Value Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '12+', label: 'Years of Excellence' },
]

export default function Hero() {
  useScrollReveal()

  return (
    <section className="hero" id="home">
      {/* Background orbs */}
      <div className="hero__orb hero__orb--orange" aria-hidden="true" />
      <div className="hero__orb hero__orb--blue" aria-hidden="true" />
      <div className="hero__orb hero__orb--purple" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__badge reveal">
          <span className="hero__badge-dot" />
          Enterprise Technology Consulting
        </div>

        <h1 className="hero__title reveal reveal-delay-1">
          Ignite Your{' '}
          <span className="gradient-text">Digital Future</span>
        </h1>

        <p className="hero__description reveal reveal-delay-2">
          We partner with forward-thinking enterprises to design, build, and scale
          transformative technology solutions. From AI strategy to cloud architecture,
          we turn your boldest ambitions into measurable results.
        </p>

        <div className="hero__actions reveal reveal-delay-3">
          <a href="#contact" className="btn btn-primary hero__btn">
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#services" className="btn btn-secondary hero__btn">
            Explore Services
          </a>
        </div>

        <div className="hero__stats reveal reveal-delay-4">
          {stats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value gradient-text">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
