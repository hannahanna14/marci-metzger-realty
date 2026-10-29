// Icons as inline SVG components
const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9H4a2 2 0 000 4h2"/><path d="M18 9h2a2 2 0 010 4h-2"/>
    <path d="M6 9V5a1 1 0 011-1h10a1 1 0 011 1v4"/><path d="M6 9c0 4 2 7 6 8 4-1 6-4 6-8"/>
    <path d="M9 21h6"/><path d="M12 17v4"/>
  </svg>
)

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)

const CARDS = [
  {
    Icon: TrophyIcon,
    title: 'Top Residential Sales Last 5 Years',
    text: 'We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.',
  },
  {
    Icon: HomeIcon,
    title: "Don't Just List it... Get it SOLD!",
    text: 'Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
  },
  {
    Icon: UsersIcon,
    title: 'Guide to Buyers',
    text: 'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        {/* Photo */}
        <div className="about__photo-wrap">
          <img
            src="/images/marci-portrait.jpg"
            alt="Marci Metzger, Realtor"
            className="about__photo"
            loading="lazy"
          />
          <div className="about__photo-accent" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="about__content">
          <p className="section-label">About</p>
          <h2 className="about__name">Marci Metzger</h2>
          <p className="about__subtitle">Realtor for nearly 3 decades</p>

          <a href="tel:2069196886" className="about__phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.0 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            206-919-6886
          </a>

          <p className="about__intro-head">Get It Sold</p>
          <p className="about__bio">
            Your trusted local expert in Pahrump, helping you buy, sell, and find the perfect
            place to call home. With nearly three decades of experience, Marci brings the knowledge,
            dedication, and personalized service needed to protect your hard-earned investment.
          </p>

          <div className="about__cards">
            {CARDS.map(({ Icon, title, text }) => (
              <div className="about-card" key={title}>
                <div className="about-card__icon">
                  <Icon />
                </div>
                <h3 className="about-card__title">{title}</h3>
                <p className="about-card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
