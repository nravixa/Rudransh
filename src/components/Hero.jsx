import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Handle browser autoplay policy gracefully
      })
    }
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="overview">
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Rudransh Developers cinematic architectural video background"
        >
          <source src="/hero_sec.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          PREMIUM RESIDENTIAL PROJECTS · EST. SINCE INCEPTION
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          RUDRANSH<br />
          <span className="hero-title-sub">DEVELOPERS</span>
        </motion.h1>

        <motion.div
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Building spaces for better living.
        </motion.div>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Quality construction. Trusted locations. Crafted for life.
        </motion.p>

        <motion.div
          className="hero-cta-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <button
            className="hero-btn-primary"
            onClick={() => scrollTo('locations')}
            aria-label="Explore Our Projects"
          >
            <span>EXPLORE OUR PROJECTS</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          <button
            className="hero-btn-secondary"
            onClick={() => scrollTo('contact')}
            aria-label="Schedule Site Visit"
          >
            <span>SCHEDULE SITE VISIT</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => scrollTo('intro')}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to introduction"
      >
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </motion.div>
    </section>
  )
}
