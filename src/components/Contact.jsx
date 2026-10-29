import { useState } from 'react'

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Simple mailto fallback — replace with a real form service (Formspree, etc.) for production
    const subject  = encodeURIComponent('Website Inquiry from ' + form.name)
    const body     = encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' <' + form.email + '>')
    window.location.href = `mailto:marci@marcimetzger.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        {/* Form */}
        <div className="contact__form-wrap">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Call or Visit</h2>

          {sent ? (
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f0f5ee', borderRadius: '6px', borderLeft: '4px solid #4a5a3a' }}>
              <p style={{ fontWeight: 600 }}>Thank you! Your message has been sent.</p>
              <p style={{ fontSize: '0.9rem', color: '#6b6b6b', marginTop: '0.3rem' }}>Marci will be in touch soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-name">Name *</label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email">Email *</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cf-message">Message *</label>
                <textarea
                  id="cf-message"
                  name="message"
                  placeholder="How can Marci help you?"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn-submit">
                Send Message <ArrowIcon />
              </button>
            </form>
          )}
        </div>

        {/* Info + Map */}
        <div className="contact__info-wrap">
          <div>
            <div style={{ height: '2.5rem' }} /> {/* vertical rhythm spacer */}
          </div>

          <div className="contact-info-item">
            <div className="contact-info-item__icon"><PinIcon /></div>
            <div className="contact-info-item__text">
              <div className="contact-info-item__label">Address</div>
              <div className="contact-info-item__value">Pahrump, NV</div>
              <div className="contact-info-item__sub">
                <a href="https://maps.google.com/?q=Pahrump,NV" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--clr-forest)', fontSize: '0.82rem' }}>
                  Get directions →
                </a>
              </div>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-item__icon"><PhoneIcon /></div>
            <div className="contact-info-item__text">
              <div className="contact-info-item__label">Phone</div>
              <div className="contact-info-item__value">
                <a href="tel:2069196886">206-919-6886</a>
              </div>
              <div className="contact-info-item__sub">Call or text</div>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-item__icon"><ClockIcon /></div>
            <div className="contact-info-item__text">
              <div className="contact-info-item__label">Hours</div>
              <div className="contact-info-item__value">8:00 AM – 7:00 PM</div>
              <div className="contact-info-item__sub">7 days a week</div>
            </div>
          </div>

          {/* Embedded map */}
          <div className="map-embed">
            <iframe
              title="Pahrump NV map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52978.09014870736!2d-115.99741645!3d36.20829895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c96a0a7c0b3db5%3A0x8b4a63a7b1c2d5e3!2sPahrump%2C%20NV!5e0!3m2!1sen!2sus!4v1698600000000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
