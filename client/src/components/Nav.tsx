import { useState, useEffect } from 'react'
import './Nav.css'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#" className="nav__logo">
          <img src="/logo.png" alt="Ignite Labs" className="nav__logo-img" />
          <span className="nav__logo-text">Ignite Labs</span>
        </a>

        <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__link" onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary nav__cta" onClick={handleLinkClick}>
              Get Started
            </a>
          </li>
        </ul>

        <button
          className={`nav__hamburger${menuOpen ? ' nav__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
