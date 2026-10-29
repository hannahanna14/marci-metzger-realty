import { useEffect, useRef } from 'react'

const STATS = [
  { number: '$28.5M', label: 'In Sales' },
  { number: '~90',    label: 'Clients (2021)' },
  { number: 'NEARLY 3 DECADES', label: 'Of Experience', serif: true },
]

export default function Stats() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats" ref={ref}>
      <div className="stats__inner">
        {STATS.map((s) => (
          <div className="stat-item" key={s.label}>
            <div className={`stat-item__number${s.serif ? ' stat-item__number--sm' : ''}`}>
              {s.serif
                ? <><em>Nearly</em> 3 <em>Decades</em></>
                : s.number
              }
            </div>
            <div className="stat-item__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
