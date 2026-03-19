import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const stats = [
  { value: '~2wks', label: 'Avg POC Turnaround',        sub: 'from kickoff to working demo'},
  { value: '100%',  label: 'Fixed-Price Projects',      sub: 'no surprise invoices, ever' },
  { value: '5★',    label: 'Average Client Rating',     sub: 'from verified reviews'      },
]

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'We move fast',
    desc: "Most agencies take months to ship something basic. We scope tight, start immediately, and get you a working product in weeks — not quarters.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Plain English, always',
    desc: "We explain what we're building and why in terms that make sense to you — not technical jargon. You're always in the loop, never in the dark.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'One price, no surprises',
    desc: "Every project is scoped and priced upfront. What we quote is what you pay. No hourly overages, no \"that's out of scope\" surprises.",
  },
]

// const testimonial = {
//   quote: "I had an idea for an app but no clue how to build it. Ignite Labs scoped it out in a call, showed me a working version in two weeks, and had it live within a month. Game-changer.",
//   name: 'Marcus T.',
//   role: 'Founder, RouteSync',
// }

export default function About() {
  useScrollReveal()

  return (
    <section className="about section" id="about">
      <div className="container about__layout">
        {/* Left: copy */}
        <div className="about__copy">
          <span className="section-label reveal">Why Ignite Labs</span>
          <h2 className="about__title reveal reveal-delay-1">
            Your idea deserves<br />
            <span className="gradient-text">a real engineering team</span>
          </h2>
          <p className="about__desc reveal reveal-delay-2">
            Most people with great ideas get stuck at the same wall: they don't know how
            to build it, they can't afford a big agency, and they don't have time to hire
            a dev team. That's exactly who we work with.
          </p>
          <p className="about__desc reveal reveal-delay-2">
            We specialize in turning concepts into working software — POCs to test your
            idea, MVPs to get your first users, and full products to launch your business.
            Fast, affordable, and built right.
          </p>

          <div className="about__values reveal reveal-delay-3">
            {values.map((v) => (
              <div key={v.title} className="about__value">
                <div className="about__value-icon">{v.icon}</div>
                <div>
                  <h3 className="about__value-title">{v.title}</h3>
                  <p className="about__value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* <blockquote className="about__testimonial reveal reveal-delay-4">
            <p className="about__testimonial-quote">"{testimonial.quote}"</p>
            <footer className="about__testimonial-footer">
              <span className="about__testimonial-stars" aria-label="5 stars">★★★★★</span>
              <span className="about__testimonial-name">{testimonial.name}</span>
              <span className="about__testimonial-role">{testimonial.role}</span>
            </footer>
          </blockquote> */}
        </div>

        {/* Right: stats */}
        <div className="about__stats-wrap reveal reveal-delay-2">
          <div className="about__stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="about__stat glass-card">
                <span className="about__stat-val gradient-text">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
                <span className="about__stat-sub">{s.sub}</span>
              </div>
            ))}
          </div>
          <div className="about__badge">
            <div className="about__badge-dot" />
            <span>Now accepting new projects — limited spots</span>
          </div>
        </div>
      </div>
    </section>
  )
}
