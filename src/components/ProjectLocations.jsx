import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const locations = [
  {
    num: '01',
    name: 'Mald – Gaware Phata',
    highlight: 'Prime Highway Connectivity',
    tag: 'Strategic Growth Sector',
    desc: 'High-connectivity residential zone with smooth road access, expanding infrastructure, and serene surroundings.',
    image: '/hero.jpg',
  },
  {
    num: '02',
    name: 'Mald – Gokul Nagar',
    highlight: 'Peaceful Neighborhood Living',
    tag: 'Community Living',
    desc: 'Master-planned residential layout tailored for family life, landscaped surroundings, and everyday convenience.',
    image: '/interior.jpg',
  },
  {
    num: '03',
    name: 'Sawal',
    highlight: 'Scenic & Natural Ambiance',
    tag: 'Green Living Corridor',
    desc: 'Open green vistas with pristine air quality and calm residential atmosphere designed for peaceful living.',
    image: '/pool.jpg',
  },
  {
    num: '04',
    name: 'Malegaon Budruk (Bk)',
    highlight: 'Thriving Residential Belt',
    tag: 'High Investment Value',
    desc: 'Rapidly growing residential sector with strong civic connectivity, proximity to markets, and quality development.',
    image: '/hero.jpg',
  },
  {
    num: '05',
    name: 'Jamdar Road, Kasba',
    highlight: 'Central Town Convenience',
    tag: 'Established Hub',
    desc: 'Central location benefits with seamless access to schools, healthcare, daily necessities, and commercial landmarks.',
    image: '/interior.jpg',
  },
  {
    num: '06',
    name: 'Tandulwadi – Airport Road',
    highlight: 'Airport Corridor Access',
    tag: 'Aviation & Transit Corridor',
    desc: 'Flagship location along the high-speed airport transit corridor offering outstanding long-term appreciation.',
    image: '/pool.jpg',
  },
]

export default function ProjectLocations({ onSelectLocation }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hoveredIdx, setHoveredIdx] = useState(0)

  return (
    <section ref={ref} className="locations-section" id="locations">
      <div className="locations-container">
        <div className="locations-header">
          <div className="locations-header-left">
            <motion.div
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Our Project Locations
            </motion.div>
            <motion.h2
              className="locations-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Where We Build.
            </motion.h2>
          </div>
          <motion.p
            className="locations-header-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Carefully curated residential locations chosen for their accessibility, natural surroundings, and lasting investment potential.
          </motion.p>
        </div>

        {/* Editorial Two-Column Layout on Desktop, Single Column on Mobile */}
        <div className="locations-editorial-grid">
          {/* Left Column: Numbered Interactive Location List */}
          <div className="locations-list">
            {locations.map((loc, idx) => {
              const isHovered = hoveredIdx === idx
              return (
                <motion.div
                  key={loc.num}
                  className={`location-item ${isHovered ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onClick={() => onSelectLocation && onSelectLocation(loc.name)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 * idx + 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <div className="location-item-top">
                    <span className="location-num">{loc.num}</span>
                    <div className="location-main-info">
                      <h3 className="location-name">{loc.name}</h3>
                      <div className="location-meta-line">
                        <span className="location-highlight">{loc.highlight}</span>
                        <span className="location-tag">{loc.tag}</span>
                      </div>
                    </div>
                    <div className="location-arrow">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </div>

                  {/* Underline transition animation */}
                  <div className="location-line">
                    <div className={`location-line-fill ${isHovered ? 'expanded' : ''}`} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right Column: Dynamic Editorial Preview Card */}
          <div className="locations-preview-col">
            <AnimatePresence mode="wait">
              {locations[hoveredIdx] && (
                <motion.div
                  key={hoveredIdx}
                  className="location-preview-card"
                  initial={{ opacity: 0, scale: 0.96, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="preview-image-wrap">
                    <img
                      src={locations[hoveredIdx].image}
                      alt={locations[hoveredIdx].name}
                      className="preview-image"
                      loading="lazy"
                    />
                    <div className="preview-overlay" />
                    <div className="preview-badge">
                      <span>{locations[hoveredIdx].num} · RUDRANSH DEVELOPERS</span>
                    </div>
                  </div>

                  <div className="preview-content">
                    <div className="preview-tag">{locations[hoveredIdx].tag}</div>
                    <h4 className="preview-title">{locations[hoveredIdx].name}</h4>
                    <p className="preview-desc">{locations[hoveredIdx].desc}</p>

                    <div className="preview-actions">
                      <a
                        href="#contact"
                        className="preview-enquire-btn"
                        onClick={(e) => {
                          if (onSelectLocation) {
                            onSelectLocation(locations[hoveredIdx].name)
                          }
                        }}
                      >
                        <span>Enquire for this Location</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
