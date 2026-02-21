import { useScrollReveal } from '../hooks/useScrollReveal'
import './Process.css'

const steps = [
  {
    number: '01',
    color: 'orange',
    title: 'Share Your Idea',
    description:
      "Book a free 30-minute call. Tell us what you're trying to build — no technical details needed. Just the idea, the problem it solves, and who it's for. We'll ask the right questions.",
  },
  {
    number: '02',
    color: 'cyan',
    title: 'We Scope & Price It',
    description:
      "We map out exactly what to build for your first version (POC or MVP), how long it takes, and what it costs — one clear, fixed price. We present it plainly; you approve before anything starts.",
  },
  {
    number: '03',
    color: 'blue',
    title: 'We Build & Show You',
    description:
      "We start building and send you working demos every week. You test it, give feedback, and we refine it. Full transparency — you always know what's done and what's next.",
  },
  {
    number: '04',
    color: 'green',
    title: 'You Launch & Own It',
    description:
      "We deploy your product, walk you through how everything works, and hand it over completely — code, hosting, everything. It's yours. We stay on for support and future builds.",
  },
]

export default function Process() {
  useScrollReveal()

  return (
    <section className="process section" id="process">
      <div className="container">
        <div className="process__header reveal">
          <span className="section-label">How It Works</span>
          <h2 className="process__title">
            From idea to live product<br />
            <span className="gradient-text">in 4 simple steps</span>
          </h2>
          <p className="process__subtitle">
            No technical knowledge needed. If you can explain what you want to build,
            we can build it.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`process__step reveal reveal-delay-${i + 1}`}
            >
              <div className={`process__num process__num--${step.color}`}>
                {step.number}
              </div>
              {i < steps.length - 1 && (
                <div className={`process__connector process__connector--${step.color}`} aria-hidden="true" />
              )}
              <div className="process__body">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process__cta reveal">
          <p className="process__cta-text">The first call is free — no commitment needed.</p>
          <a href="#contact" className="btn btn-primary">
            Book a Free Call
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
