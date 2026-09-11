import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { galleryItems, galleryCategories } from '../data/gallery'

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section ref={ref} className="gallery" id="gallery">
      <div className="gallery-header">
        <motion.div
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Visual Showcase & Portfolio
        </motion.div>

        <motion.h2
          className="gallery-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Crafted for modern residential living.
        </motion.h2>

        <motion.p
          className="gallery-subheading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Explore our architecture, interior volumes, lush landscaped open environments, and thoughtful community spaces.
        </motion.p>

        {/* Category Tabs */}
        <motion.div
          className="gallery-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`gallery-category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Editorial Responsive Grid */}
      <motion.div layout className="gallery-masonry-grid">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              className={`gallery-card span-${item.span}`}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onClick={() => setSelectedPhoto(item)}
            >
              <div className="gallery-image-container">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="gallery-img"
                />
                <div className="gallery-card-overlay">
                  <div className="gallery-card-badge">{item.category}</div>
                  <div className="gallery-card-info">
                    <h3 className="gallery-card-title">{item.title}</h3>
                    <p className="gallery-card-subtitle">{item.subtitle}</p>
                  </div>
                  <div className="gallery-zoom-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="gallery-lightbox-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="gallery-lightbox-close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close image modal"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <div className="gallery-lightbox-img-wrap">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="gallery-lightbox-img"
                />
              </div>

              <div className="gallery-lightbox-caption">
                <span className="gallery-lightbox-category">{selectedPhoto.category}</span>
                <h3 className="gallery-lightbox-title">{selectedPhoto.title}</h3>
                <p className="gallery-lightbox-desc">{selectedPhoto.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
