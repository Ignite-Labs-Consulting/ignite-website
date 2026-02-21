import Logo from './Logo'
import './Footer.css'

const links = {
  Services: [
    { label: 'Full Stack Engineering', href: '#services' },
    { label: 'Cloud & Infrastructure', href: '#services' },
    { label: 'Automation',             href: '#services' },
  ],
  Company: [
    { label: 'Why Choose Us', href: '#about'   },
    { label: 'How It Works',  href: '#process' },
    { label: 'Tech Stack',    href: '#stack'   },
    { label: 'Contact Us',    href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__divider" />

      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <a href="#" aria-label="Ignite Labs home" className="footer__logo">
            <Logo size={28} idPrefix="footer" />
          </a>
          <p className="footer__tagline">
            Full stack engineering, cloud, and automation<br />for entrepreneurs and small businesses.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-btn" aria-label="LinkedIn" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="footer__social-btn" aria-label="GitHub" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href="#" className="footer__social-btn" aria-label="Twitter / X" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer__links">
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="footer__col">
              <h4 className="footer__col-heading">{category}</h4>
              <ul className="footer__col-list">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="footer__link">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">© {year} Ignite Labs. All rights reserved.</p>
          <p className="footer__made">
            Built with <span className="gradient-text" style={{ fontWeight: 700 }}>🔥</span> by Ignite Labs
          </p>
        </div>
      </div>
    </footer>
  )
}
