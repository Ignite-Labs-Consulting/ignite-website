import { useScrollReveal } from '../hooks/useScrollReveal'
import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
        <path d="M22 2 12 12" />
        <circle cx="19" cy="5" r="3" />
      </svg>
    ),
    title: 'AI & Machine Learning',
    description:
      'Transform your operations with custom AI models, intelligent automation, and data-driven decision systems that deliver measurable competitive advantage.',
    gradient: 'orange',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Cloud Architecture',
    description:
      'Design and migrate to resilient, scalable cloud infrastructure on AWS, Azure, or GCP. We optimize for performance, security, and cost efficiency.',
    gradient: 'blue',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: 'Digital Transformation',
    description:
      'End-to-end enterprise modernization — from legacy system migration to new digital business models that position you for long-term growth.',
    gradient: 'purple',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    title: 'Technology Strategy',
    description:
      'Executive-level technology roadmapping, vendor evaluation, and governance frameworks that align your IT investments with business objectives.',
    gradient: 'orange',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Custom Software',
    description:
      'Bespoke applications built with modern frameworks and best practices — from web platforms and mobile apps to complex enterprise systems.',
    gradient: 'blue',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Cybersecurity',
    description:
      'Comprehensive security assessments, zero-trust architecture design, and compliance frameworks (SOC 2, ISO 27001) to protect your critical assets.',
    gradient: 'purple',
  },
]

export default function Services() {
  useScrollReveal()

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header reveal">
          <span className="section-badge">What We Do</span>
          <h2 className="section-title">
            Services Built for{' '}
            <span className="gradient-text">Enterprise Scale</span>
          </h2>
          <p className="section-subtitle">
            We bring deep expertise across the full technology stack, delivering
            integrated solutions that drive real business outcomes.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card reveal reveal-delay-${(index % 3) + 1}`}
              data-gradient={service.gradient}
            >
              <div className={`service-card__icon service-card__icon--${service.gradient}`}>
                {service.icon}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__link">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
