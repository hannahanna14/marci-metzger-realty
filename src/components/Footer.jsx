// Social icon SVGs
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const YelpIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10.2 2.8c1.1-1.2 3.2-.5 3.2 1.1v5.3c0 .8-1.1 1.1-1.5.4L9.6 5.1c-.4-.7 0-1.7.6-2.3Z"/>
    <path d="M20.2 7.1c1.6.1 2.3 2.2 1 3.2l-4.4 3.1c-.7.5-1.5-.3-1.1-1l2.2-4.5c.4-.7 1.3-.9 2.3-.8Z"/>
    <path d="M20.3 17.4c.5 1.5-1.1 3.1-2.6 2.2l-4.6-2.7c-.7-.4-.3-1.5.5-1.5l5-.2c.8 0 1.4 1 1.7 2.2Z"/>
    <path d="M9.7 21.3c-1.4.8-3.3-.5-2.7-2.1l1.8-5.1c.3-.8 1.4-.7 1.6.1l.8 5c.1.8-.6 1.6-1.5 2.1Z"/>
    <path d="M2.4 15.1c-.8-1.4.4-3.3 2-2.8l5.2 1.6c.8.2.7 1.4-.1 1.6l-4.9 1c-.8.2-1.7-.5-2.2-1.4Z"/>
  </svg>
)

const SOCIALS = [
  { Icon: FacebookIcon, href: 'https://www.facebook.com/', label: 'Facebook' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/', label: 'Instagram' },
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { Icon: YelpIcon, href: 'https://www.yelp.com/', label: 'Yelp' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">Marci Metzger — The Ridge Realty Group</span>

        <div className="footer__socials">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>

        <p className="footer__copy">
          © {year} Marci Metzger – The Ridge Realty Group. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
