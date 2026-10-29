import './Affiliations.css'

const AFFILIATIONS = [
  {
    src: '/images/ridge.png',
    alt: 'The Ridge Realty Group',
  },
  {
    src: '/images/housing.png',
    alt: 'Equal Housing Opportunity',
  },
  {
    src: '/images/realtor.png',
    alt: 'REALTOR',
  },
  {
    src: '/images/pahrump.png',
    alt: 'Pahrump Valley Chamber of Commerce',
  },
]

export default function Affiliations() {
  return (
    <section className="affiliations" aria-label="Affiliations and memberships">
      <p className="affiliations__label">Proudly affiliated with</p>
      <ul className="affiliations__logos">
        {AFFILIATIONS.map(({ src, alt }) => (
          <li className="affiliations__logo" key={alt}>
            <img src={src} alt={alt} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  )
}
