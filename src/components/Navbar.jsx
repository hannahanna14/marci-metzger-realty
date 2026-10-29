import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Listings', href: '#listings' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight active section on scroll
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (href) => {
    setMenuOpen(false)
    setActive(href)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="#home" className="navbar__brand" aria-label="Marci Metzger home">
          <img src="/images/Logo.png" alt="Marci Metzger" />
        </a>

        <ul className="navbar__links">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href ? 'active' : ''}
                onClick={() => handleLinkClick(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mobile-nav-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {NAV_LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => handleLinkClick(l.href)}
          >
            {l.label}
          </a>
        ))}
      </nav>
    </>
  )
}
