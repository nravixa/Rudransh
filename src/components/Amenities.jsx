import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { amenityShowcase, allAmenitiesList } from '../data/amenities'

const amenityIcons = [
  // Roads
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="3 3" />
    </svg>
  ),
  // Security
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  // Parks
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22V12M12 12C12 7 7 4 3 6c0 4 3 8 9 6M12 12c0-5 5-8 9-6 0 4-3 8-9 6"/>
    </svg>
  ),
  // Water
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  ),
  // Electricity
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  // Drainage
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20M2 17h20M2 7h20"/>
    </svg>
  ),
  // Children Play
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4"/>
      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
    </svg>
  ),
  // Demarcation
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <line x1="9" y1="3" x2="9" y2="21"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
    </svg>
  ),
  // Connectivity
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
]

export default function Amenities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="amenities" id="amenities">
      <div className="amenities-inner">
        <div className="amenities-header">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Infrastructure & Amenities
          </motion.div>

          <motion.h2
            className="amenities-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Comprehensive residential features.
          </motion.h2>

          <motion.p
            className="amenities-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Planned with precision to elevate comfort, security, and everyday convenience for all homeowners.
          </motion.p>
        </div>

        {/* Supporting Visual Amenity Cards */}
        <div className="amenity-showcase-grid">
          {amenityShowcase.map((card, idx) => (
            <motion.div
              key={card.title}
              className="amenity-showcase-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx + 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="amenity-card-img-wrap">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="amenity-card-img"
                  loading="lazy"
                />
                <div className="amenity-card-overlay" />
                <span className="amenity-card-tag">{card.tag}</span>
              </div>
              <div className="amenity-card-content">
                <h3 className="amenity-card-title">{card.title}</h3>
                <p className="amenity-card-desc">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature List Grid */}
        <div className="amenities-grid">
          {allAmenitiesList.map((item, i) => (
            <motion.div
              key={item.name}
              className="amenity-item"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.04 * i + 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="amenity-icon">
                {amenityIcons[i % amenityIcons.length]}
              </div>
              <span className="amenity-name">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
