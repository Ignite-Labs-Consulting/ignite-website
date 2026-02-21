import { useState, useEffect } from 'react'
import Logo from './Logo'
import './Nav.css'

const navLinks = [
  { label: 'Services',    href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Stack',       href: '#stack'   },
  { label: 'About',       href: '#about'   },
]

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <a href="#" className="nav__logo" onClick={close} aria-label="Ignite Labs home">
            <Logo size={30} idPrefix="nav" />
          </a>

          {/* Desktop links */}
          <ul className="nav__links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav__link">{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary nav__cta">
            Start Building
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav__drawer${menuOpen ? ' nav__drawer--open' : ''}`} aria-hidden={!menuOpen}>
        <div className="nav__drawer-inner">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav__drawer-link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav__drawer-cta" onClick={close}>
            Start Building →
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className="nav__backdrop" onClick={close} aria-hidden="true" />
      )}
    </>
  )
}
