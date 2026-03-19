import { useScrollReveal } from '../hooks/useScrollReveal'
import './Services.css'

const services = [
  {
    color: 'orange',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Full Stack Engineering',
    badge: 'POC · MVP · Product',
    description:
      'You have an idea — we build the whole thing. Frontend, backend, database, and API, all working together. Whether you need a quick proof of concept to validate your idea or a full product to launch your business, we scope it, build it, and hand it to you.',
    bullets: [
      'Proof of concepts in days, not months',
      'Web apps, dashboards, internal tools',
      'You own 100% of the code',
    ],
    tags: ['React', 'Node.js', 'Python', 'PostgreSQL'],
  },
  {
    color: 'cyan',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 0 0-9.78 2.096A4.001 4.001 0 0 0 3 15z" />
      </svg>
    ),
    title: 'Cloud & Infrastructure',
    badge: 'Reliable · Scalable · Affordable',
    description:
      "Once we build it, we put it on the internet and keep it running. Your product gets a real home in the cloud — fast, secure, and ready to handle more users as your business grows. No servers to manage, no surprise downtime.",
    bullets: [
      'Deployed and live in hours, not days',
      'Scales automatically as you grow',
      'Monitoring and alerts included',
    ],
    tags: ['AWS', 'Vercel', 'Docker', 'CI/CD'],
  },
  {
    color: 'green',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Automation & Integration',
    badge: 'Save Time · Connect Tools · Scale',
    description:
      "Stop doing things by hand. We build automation that connects your tools, moves data where it needs to go, and handles repetitive tasks so you don't have to. From simple app integrations to custom bots and workflows — we automate the busywork.",
    bullets: [
      'Connect any two tools or platforms',
      'Custom workflows built to your process',
      'Saves hours of manual work every week',
    ],
    tags: ['Zapier', 'n8n', 'APIs', 'Webhooks'],
  },
]

export default function Services() {
  useScrollReveal()

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__header reveal">
          <span className="section-label">What We Do</span>
          <h2 className="services__title">
            Three things we're<br />
            <span className="gradient-text">good at</span>
          </h2>
          <p className="services__subtitle">
            We don't try to do everything. We go deep on full stack engineering, cloud,
            and automation — the three things most ideas need to become real products.
          </p>
        </div>

        <div className="services__grid services__grid--3">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`svc-card svc-card--tall glass-card reveal reveal-delay-${i + 1}`}
            >
              <div className="svc-card__top">
                <div className={`svc-card__icon svc-card__icon--${svc.color}`}>
                  {svc.icon}
                </div>
                <span className={`tag tag-${svc.color} svc-card__badge`}>{svc.badge}</span>
              </div>

              <h3 className="svc-card__title">{svc.title}</h3>
              <p className="svc-card__desc">{svc.description}</p>

              <ul className="svc-card__bullets">
                {svc.bullets.map((b) => (
                  <li key={b}>
                    <span className={`svc-card__bullet-dot svc-card__bullet-dot--${svc.color}`} aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="svc-card__tags">
                {svc.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
