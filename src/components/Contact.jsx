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

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    // Sending is simulated because this site is static.
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
            <div
              role="status"
              style={{ marginTop: '2rem', padding: '1.5rem', background: '#f0f5ee', borderRadius: '6px', borderLeft: '4px solid #4a5a3a' }}
            >
              <p style={{ fontWeight: 600 }}>Thank you! Your message has been sent.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <h3 className="contact__form-title">Send Message</h3>
              <div className="form-group">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cf-email">Email *</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <button type="submit" className="btn-submit">
                Send
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
              <div className="contact-info-item__value">3190 HW-160, Suite F, Pahrump, Nevada 89048</div>
              <div className="contact-info-item__sub">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3190+HW-160%2C+Suite+F%2C+Pahrump%2C+Nevada+89048"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--clr-forest)', fontSize: '0.82rem' }}
                >
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
                <a href="tel:2069196886">(206) 919-6886</a>
              </div>
              <div className="contact-info-item__sub">Call or text</div>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-item__icon"><ClockIcon /></div>
            <div className="contact-info-item__text">
              <div className="contact-info-item__label">Hours</div>
              <div className="contact-info-item__value">Open daily, 8:00 am to 7:00 pm</div>
              <div className="contact-info-item__sub">Appointments outside office hours available upon request. Just call!</div>
            </div>
          </div>

          {/* Embedded map */}
          <div className="map-embed">
            <iframe
              title="Map of Pahrump, Nevada"
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
