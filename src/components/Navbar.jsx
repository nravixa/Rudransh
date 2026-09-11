import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      const currentScrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${currentScrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      const savedTop = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      if (savedTop) {
        const y = parseInt(savedTop, 10) * -1
        window.scrollTo(0, y)
      }
    }

    return () => {
      const savedTop = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      if (savedTop) {
        const y = parseInt(savedTop, 10) * -1
        window.scrollTo(0, y)
      }
    }
  }, [menuOpen])

  const scrollTo = (id) => {
    if (menuOpen) {
      const savedTop = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      if (savedTop) {
        const y = parseInt(savedTop, 10) * -1
        window.scrollTo(0, y)
      }
      setMenuOpen(false)
    }
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 60)
    }
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); scrollTo('overview') }}>
          <img src="/logo.webp" alt="Rudransh Developer & Real-Estate Logo" className="navbar-logo-img" />
          <div className="navbar-brand-text">
            <span className="navbar-brand-name">RUDRANSH</span>
            <span className="navbar-brand-sub">DEVELOPER & REAL-ESTATE</span>
          </div>
        </a>

        <div className="navbar-tagline">Premium Residential Projects</div>

        <ul className="navbar-links">
          <li><a href="#overview" onClick={(e) => { e.preventDefault(); scrollTo('overview') }}>Home</a></li>
          <li><a href="#intro" onClick={(e) => { e.preventDefault(); scrollTo('intro') }}>About Us</a></li>
          <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('features') }}>Projects</a></li>
          <li><a href="#locations" onClick={(e) => { e.preventDefault(); scrollTo('locations') }}>Locations</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Contact</a></li>
        </ul>

        <div className="navbar-phone-cta">
          <a href="tel:9011196635" className="nav-call-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>9011196635</span>
          </a>
        </div>

        <button
          className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mobile-menu-inner">
              <nav className="mobile-menu-links">
                <a className="mobile-menu-link" onClick={() => scrollTo('overview')}>Home</a>
                <a className="mobile-menu-link" onClick={() => scrollTo('intro')}>About Us</a>
                <a className="mobile-menu-link" onClick={() => scrollTo('features')}>Projects</a>
                <a className="mobile-menu-link" onClick={() => scrollTo('locations')}>Locations</a>
                <a className="mobile-menu-link" onClick={() => scrollTo('contact')}>Contact</a>
              </nav>

              <div className="mobile-menu-contact">
                <div className="mobile-menu-label">CONTACT US</div>
                <a href="tel:9011196635" className="mobile-phone-link">9011196635</a>
                <a href="tel:9792927799" className="mobile-phone-link">9792927799</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
