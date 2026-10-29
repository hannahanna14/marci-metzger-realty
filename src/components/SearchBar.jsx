import { useState } from 'react'

export default function SearchBar() {
  const [moreOpen, setMoreOpen] = useState(false)
  const [location, setLocation] = useState('')
  const [type, setType]         = useState('')
  const [price, setPrice]       = useState('')

  return (
    // id="listings" is here so nav "Listings" link scrolls to this element
    <div id="listings" className="search-bar-section">
      <div className="search-bar">
        {/* Location */}
        <div className="search-bar__field">
          <label htmlFor="sb-location">Location</label>
          <select id="sb-location" value={location} onChange={e => setLocation(e.target.value)}>
            <option value="">Any location</option>
            <option value="pahrump">Pahrump, NV</option>
            <option value="las-vegas">Las Vegas, NV</option>
            <option value="henderson">Henderson, NV</option>
            <option value="beatty">Beatty, NV</option>
          </select>
        </div>

        {/* Type */}
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

        {/* Price */}
        <div className="search-bar__field">
          <label htmlFor="sb-price">Price range</label>
          <select id="sb-price" value={price} onChange={e => setPrice(e.target.value)}>
            <option value="">Any price</option>
            <option value="0-200k">Under $200k</option>
            <option value="200k-400k">$200k – $400k</option>
            <option value="400k-700k">$400k – $700k</option>
            <option value="700k+">Over $700k</option>
          </select>
        </div>

        {/* Actions */}
        <div className="search-bar__actions">
          <button className="btn-search" aria-label="Search listings">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            Search
          </button>
          <button className="btn-more" onClick={() => setMoreOpen(o => !o)} aria-expanded={moreOpen}>
            More {moreOpen ? '▲' : '▾'}
          </button>
        </div>
      </div>

      {/* More filters panel */}
      {moreOpen && (
        <div className="more-filters">
          <select aria-label="Bedrooms">
            <option value="">Bedrooms</option>
            <option>1+</option><option>2+</option><option>3+</option><option>4+</option>
          </select>
          <select aria-label="Bathrooms">
            <option value="">Bathrooms</option>
            <option>1+</option><option>2+</option><option>3+</option>
          </select>
          <select aria-label="Property status">
            <option value="">Status</option>
            <option>For Sale</option><option>Under Contract</option><option>Sold</option>
          </select>
        </div>
      )}
    </div>
  )
}
