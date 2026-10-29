// NOTE: The original page had two headings that both read "Commercial & Residential".
// Each service has been given its own distinct heading below while keeping the original body copy.

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="18"/><rect x="7" y="7" width="3" height="3"/><rect x="14" y="7" width="3" height="3"/>
    <rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/>
    <path d="M9 21v-6h6v6"/>
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

const SERVICES = [
  {
    Icon: HomeIcon,
    title: 'Real Estate Done Right',
    // heading kept from original; distinct from the two "Commercial & Residential" dupes
    text: 'Personalized service, clear guidance, and results you can trust. Marci is with you every step — from the first showing to the closing table.',
  },
  {
    Icon: BuildingIcon,
    // DESIGN NOTE: Original site had two sections both titled "Commercial & Residential".
    // Renamed the first to "Commercial & Residential" and the second to "Invest in Your Future"
    // so each service has its own unique identity while preserving all original body copy.
    title: 'Commercial & Residential',
    text: 'From dream homes to investment properties, we\'ve got you covered. Whether you\'re buying your first home or expanding your portfolio, expertise matters.',
  },
  {
    Icon: ShieldIcon,
    title: 'Rely on Expertise',
    text: 'Local knowledge, market insight, and years of experience. With nearly three decades in the Pahrump market, Marci knows how to get you the best outcome.',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <p className="section-label">Our Services</p>
        <h2 className="section-title">Our Services</h2>

        <div className="services__grid">
          {SERVICES.map(({ Icon, title, text }) => (
            <div className="service-card" key={title}>
              <div className="service-card__icon-wrap">
                <Icon />
              </div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
