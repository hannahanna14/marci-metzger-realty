import { useEffect, useRef } from 'react'
import SearchBar from './SearchBar'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    // Trigger the subtle zoom-out animation after mount
    const t = setTimeout(() => {
      if (bgRef.current) bgRef.current.classList.add('loaded')
    }, 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero__bg" ref={bgRef} />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">The Ridge Realty Group</p>
        <h1 className="hero__title">Pahrump Realtor</h1>

        <div className="hero__buttons">
          <a href="tel:2069196886" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            Call Now
          </a>
          <a href="#listings" className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            Search Listings
          </a>
        </div>
      </div>

      <SearchBar />
    </section>
  )
}
