import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const images = [
  { src: '/hero.jpg', alt: 'Rudransh Developers master development view', className: 'gallery-item gallery-item-1', delay: 0 },
  { src: '/pool.jpg', alt: 'Landscaped open spaces and serene residential environment', className: 'gallery-item gallery-item-2', delay: 0.1 },
  { src: '/interior.jpg', alt: 'Spacious, light-filled living spaces', className: 'gallery-item gallery-item-3', delay: 0.2 },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="gallery">
      <div className="gallery-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Visual Showcase
        </motion.div>
        <motion.h2
          className="gallery-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Crafted for modern life.
        </motion.h2>
      </div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className={img.className}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: img.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
