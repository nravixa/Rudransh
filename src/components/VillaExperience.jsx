import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    num: '01',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: '4BR + Maid Layout',
    desc: 'Generously proportioned bedrooms with dedicated maid quarters, designed for both comfort and privacy.',
  },
  {
    num: '02',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Private Pool Lifestyle',
    desc: 'An expansive infinity-edge pool overlooking the desert horizon, a space to pause and be still.',
  },
  {
    num: '03',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 3v9l5 3"/>
      </svg>
    ),
    title: 'Bright Open Interiors',
    desc: 'Double-height volumes and panoramic glazing flood every room with natural light throughout the day.',
  },
  {
    num: '04',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18v14a1 1 0 01-1 1H4a1 1 0 01-1-1V6zM3 6l2-3h14l2 3M10 10h4"/>
      </svg>
    ),
    title: 'Modern Kitchen',
    desc: 'Bespoke cabinetry, integrated appliances and Calacatta marble surfaces — a kitchen worthy of the chef within.',
  },
  {
    num: '05',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Community Access',
    desc: 'Access to curated community facilities including family pools, green corridors, and leisure zones.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function VillaExperience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const imgRef = useRef(null)
  const imgInView = useInView(imgRef, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="experience" id="villa">
      <div className="experience-header">
        <motion.div
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          The Residence
        </motion.div>
        <motion.h2
          className="experience-heading"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={1}
        >
          Villa features
        </motion.h2>
      </div>

      <div className="experience-inner">
        {/* Image */}
        <motion.div
          ref={imgRef}
          className="experience-image"
          initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          animate={imgInView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : {}}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src="/interior.jpg"
            alt="Luxury villa interior with panoramic desert views"
            loading="lazy"
          />
        </motion.div>

        {/* Features list */}
        <div className="features-list">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              className="feature-item"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              custom={i + 2}
            >
              <span className="feature-number">{f.num}</span>
              <div className="feature-content-wrap">
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-text">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
