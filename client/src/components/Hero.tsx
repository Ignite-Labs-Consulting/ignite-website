import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Hero.css'

const LAUNCH_STEPS = [
  { text: 'Idea scoped & roadmap approved',   delay: 800  },
  { text: 'Full stack app engineered',         delay: 1500 },
  { text: 'Deployed to the cloud',             delay: 2200 },
  { text: 'Automation workflows connected',    delay: 2900 },
  { text: 'Live — ready for real users',       delay: 3600 },
]

const MINI_STATS = [
  { value: 'POC',  label: 'to MVP in weeks' },
  { value: '~2wk', label: 'avg first build'  },
  { value: 'Yours', label: '100% you own it' },
]

const stats = [
  { value: '150+', label: 'Ideas brought to life'  },
  { value: '~2wks', label: 'POC turnaround'        },
  { value: '3',    label: 'Core specialties'        },
  { value: '5★',   label: 'Client satisfaction'    },
]

export default function Hero() {
  useScrollReveal()
  const [visibleCount, setVisibleCount] = useState(0)
  const [showStats, setShowStats]       = useState(false)
  const [started, setStarted]           = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const timers: ReturnType<typeof setTimeout>[] = []
    LAUNCH_STEPS.forEach((step, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), step.delay))
    })
    timers.push(setTimeout(() => setShowStats(true), 4400))
    return () => timers.forEach(clearTimeout)
  }, [started])

  return (
    <section className="hero bg-grid" id="home" ref={sectionRef}>
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="container hero__layout">
        {/* ── Left content ── */}
        <div className="hero__content">
          <div className="hero__eyebrow reveal">
            <span className="hero__dot" aria-hidden="true" />
            Full Stack · Cloud · Automation
          </div>

          <h1 className="hero__title reveal reveal-delay-1">
            Have an idea?<br />
            <span className="gradient-text">Let's build it.</span>
          </h1>

          <p className="hero__sub reveal reveal-delay-2">
            We turn ideas into working software — fast. POCs, MVPs, and full products for
            entrepreneurs and small businesses. You bring the vision; we bring the code,
            cloud, and automation to make it real.
          </p>

          <div className="hero__actions reveal reveal-delay-3">
            <a href="#contact" className="btn btn-primary btn-lg">
              Start Building
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn-outline btn-lg">
              See What We Do
            </a>
          </div>

          <div className="hero__stats reveal reveal-delay-4">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-val gradient-text">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: idea → product card ── */}
        <div className="hero__card-wrap reveal reveal-delay-2">
          <div className="hero__card">
            {/* Browser chrome */}
            <div className="hero__card-header">
              <div className="hero__card-dots">
                <span className="dot dot--red"    />
                <span className="dot dot--yellow" />
                <span className="dot dot--green"  />
              </div>
              <div className="hero__url-bar">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>youridea.com</span>
              </div>
            </div>

            {/* Card body */}
            <div className="hero__card-body">
              <div className="hero__launch-title">
                <span className="hero__launch-fire" aria-hidden="true">🚀</span>
                Your idea is now a product!
              </div>

              <div className="hero__launch-steps">
                {LAUNCH_STEPS.slice(0, visibleCount).map((step, i) => (
                  <div key={i} className="hero__launch-step">
                    <span className="hero__launch-check" aria-hidden="true">✓</span>
                    <span>{step.text}</span>
                  </div>
                ))}
                {visibleCount < LAUNCH_STEPS.length && (
                  <span className="hero__terminal-cursor" aria-hidden="true" />
                )}
              </div>

              {showStats && (
                <div className="hero__mini-stats">
                  {MINI_STATS.map((s) => (
                    <div key={s.label} className="hero__mini-stat">
                      <span className="hero__mini-stat-val">{s.value}</span>
                      <span className="hero__mini-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="hero__card-glow" aria-hidden="true" />
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
