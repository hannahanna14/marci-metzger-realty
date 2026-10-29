import { useState } from 'react'

export default function SearchBar() {
  const [moreOpen, setMoreOpen] = useState(false)
  const [location, setLocation] = useState('pahrump')
  const [type, setType]         = useState('')

  return (
    <div id="listings" className="search-bar-section">
      <h2 className="search-bar__heading">Find Your Dream Home</h2>
      <div className="search-bar">
        <div className="search-bar__field">
          <label htmlFor="sb-location">Location</label>
          <select id="sb-location" value={location} onChange={e => setLocation(e.target.value)}>
            <option value="pahrump">Pahrump, NV</option>
            <option value="">Any location</option>
            <option value="las-vegas">Las Vegas, NV</option>
            <option value="henderson">Henderson, NV</option>
            <option value="beatty">Beatty, NV</option>
          </select>
        </div>

        <div className="search-bar__field">
          <label htmlFor="sb-type">Type</label>
          <select id="sb-type" value={type} onChange={e => setType(e.target.value)}>
            <option value="">Any type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="land">Land</option>
            <option value="multi-family">Multi-Family</option>
          </select>
        </div>

        <div className="search-bar__actions">
          <button className="btn-search" aria-label="Search now">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            Search Now
          </button>
          <button className="btn-more" onClick={() => setMoreOpen(o => !o)} aria-expanded={moreOpen}>
            More {moreOpen ? '▲' : '▾'}
          </button>
        </div>
      </div>

      {moreOpen && (
        <div className="more-filters">
          <div className="more-filters__field">
            <label htmlFor="sb-sort">Sort By</label>
            <select id="sb-sort" defaultValue="Newest">
              <option>Newest</option>
              <option>Oldest</option>
              <option>Least Expensive to Most</option>
              <option>Most Expensive to Least</option>
              <option>Bedrooms (Low to High)</option>
              <option>Bedrooms (High to Low)</option>
              <option>Bathrooms (Low to High)</option>
              <option>Bathrooms (High to Low)</option>
            </select>
          </div>
          <div className="more-filters__field">
            <label htmlFor="sb-bedrooms">Bedrooms</label>
            <select id="sb-bedrooms" defaultValue="Any Number">
              <option>Any Number</option>
              <option>Studio</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
              <option>6+</option>
            </select>
          </div>
          <div className="more-filters__field">
            <label htmlFor="sb-baths">Baths</label>
            <select id="sb-baths" defaultValue="Any Number">
              <option>Any Number</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
              <option>6+</option>
            </select>
          </div>
          <div className="more-filters__field">
            <label htmlFor="sb-min-price">Min price</label>
            <input id="sb-min-price" type="number" min="0" />
          </div>
          <div className="more-filters__field">
            <label htmlFor="sb-max-price">Max price</label>
            <input id="sb-max-price" type="number" min="0" />
          </div>
        </div>
      )}
    </div>
  )
}
