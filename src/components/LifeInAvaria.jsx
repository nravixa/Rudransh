import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cards = [
  {
    src: '/pool.jpg',
    alt: 'Community pool and family amenities',
    category: 'Community',
    title: 'Family pools and community amenities',
  },
  {
    src: '/hero.jpg',
    alt: 'Sheikh Zayed Road connectivity',
    category: 'Connectivity',
    title: 'Near Sheikh Zayed Road and Avaria Metro',
  },
  {
    src: '/interior.jpg',
    alt: 'Proximity to Dubai Marina',
    category: 'Lifestyle',
    title: 'Dubai Marina, Ibn Battuta Mall & nearby destinations',
  },
]

export default function LifeInAvaria() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="life">
      <div className="life-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Location Insights
        </motion.div>

        <motion.h2
          className="life-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Life in Rudransh
        </motion.h2>

        <motion.p
          className="life-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          A connected Dubai community known for family living, accessibility and everyday convenience.
        </motion.p>
      </div>

      <div className="life-grid">
        {cards.map((card, i) => (
          <motion.article
            key={i}
            className="life-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.1 * i + 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="life-card-image">
              <img src={card.src} alt={card.alt} loading="lazy" />
            </div>
            <p className="life-card-category">{card.category}</p>
            <h3 className="life-card-title">{card.title}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
