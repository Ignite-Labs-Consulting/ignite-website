import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const pillars = [
  {
    icon: '⚡',
    title: 'Speed to Value',
    description: 'Agile delivery frameworks that get you to production faster without sacrificing quality.',
  },
  {
    icon: '🔒',
    title: 'Security First',
    description: 'Every solution is architected with security and compliance baked in from day one.',
  },
  {
    icon: '📈',
    title: 'Outcome Driven',
    description: 'We measure success by your business results, not just technical deliverables.',
  },
  {
    icon: '🤝',
    title: 'True Partnership',
    description: 'We embed with your teams, transferring knowledge and building lasting capability.',
  },
]

export default function About() {
  useScrollReveal()

  return (
    <section className="about" id="about">
      <div className="container about__inner">
        {/* Visual column */}
        <div className="about__visual reveal">
          <div className="about__logo-wrapper">
            <img src="/logo.png" alt="Ignite Labs" className="about__logo" />
            <div className="about__logo-glow" aria-hidden="true" />
          </div>

          {/* Floating stat cards */}
          <div className="about__stat-card about__stat-card--1">
            <span className="about__stat-card-value gradient-text">12+</span>
            <span className="about__stat-card-label">Years Experience</span>
          </div>
          <div className="about__stat-card about__stat-card--2">
            <span className="about__stat-card-value gradient-text">50+</span>
            <span className="about__stat-card-label">Expert Consultants</span>
          </div>
          <div className="about__stat-card about__stat-card--3">
            <span className="about__stat-card-value gradient-text">18</span>
            <span className="about__stat-card-label">Industry Verticals</span>
          </div>
        </div>

        {/* Copy column */}
        <div className="about__copy">
          <span className="section-badge reveal">Who We Are</span>
          <h2 className="section-title reveal reveal-delay-1">
            The Team That{' '}
            <span className="gradient-text">Ignites Growth</span>
          </h2>
          <p className="about__text reveal reveal-delay-2">
            Founded in 2012, Ignite Labs has grown from a boutique advisory firm into a
            full-service enterprise technology consultancy trusted by Fortune 500 companies,
            high-growth startups, and public sector organizations worldwide.
          </p>
          <p className="about__text reveal reveal-delay-3">
            Our multidisciplinary teams combine business acumen with deep technical expertise
            to tackle your most complex challenges — delivering solutions that scale,
            perform, and last.
          </p>

          <div className="about__pillars reveal reveal-delay-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="about__pillar">
                <span className="about__pillar-icon">{pillar.icon}</span>
                <div>
                  <h3 className="about__pillar-title">{pillar.title}</h3>
                  <p className="about__pillar-desc">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
