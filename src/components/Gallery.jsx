import { useState, useEffect, useCallback } from 'react'

// 11 gallery images — user will drop their own into public/images/gallery/
const IMAGES = Array.from({ length: 11 }, (_, i) => ({
  src:  `/images/gallery/gallery-${i + 1}.jpg`,
  alt:  `Property photo ${i + 1}`,
}))

function ZoomIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
  )
}

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null)
  const isOpen = lightboxIdx !== null

  const close   = useCallback(() => setLightboxIdx(null), [])
  const prev    = useCallback(() => setLightboxIdx(i => (i - 1 + IMAGES.length) % IMAGES.length), [])
  const next    = useCallback(() => setLightboxIdx(i => (i + 1) % IMAGES.length), [])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    const handler = (e) => {
      if (e.key === 'Escape')     close()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [isOpen, close, prev, next])

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__header">
        <div className="gallery__header-left">
          <p className="section-label">Photo Gallery</p>
          <h2 className="section-title">Gallery</h2>
        </div>
        <button
          className="gallery__view-all"
          onClick={() => setLightboxIdx(0)}
          aria-label="View all photos"
        >
          View All Photos&nbsp;→
        </button>
      </div>

      <div className="gallery__grid">
        {IMAGES.map((img, idx) => (
          <button
            key={img.src}
            className="gallery__item"
            onClick={() => setLightboxIdx(idx)}
            aria-label={`Open ${img.alt}`}
            style={{ all: 'unset', display: 'block', cursor: 'pointer' }}
          >
            <div className="gallery__item" style={{ all: 'unset' }}>
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden', aspectRatio: '4/3', display: 'block' }}>
                <img src={img.src} alt={img.alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.45s ease', display: 'block' }} />
                <div className="gallery__item-overlay">
                  <ZoomIcon />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={close}
        >
          <button className="lightbox__close" onClick={close} aria-label="Close lightbox">✕</button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Previous image">‹</button>
          <div className="lightbox__img-wrap" onClick={e => e.stopPropagation()}>
            <img
              src={IMAGES[lightboxIdx].src}
              alt={IMAGES[lightboxIdx].alt}
              key={lightboxIdx}
            />
            <p className="lightbox__caption">{lightboxIdx + 1} / {IMAGES.length}</p>
          </div>
          <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); next() }} aria-label="Next image">›</button>
        </div>
      )}
    </section>
  )
}
