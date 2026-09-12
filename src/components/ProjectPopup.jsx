import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import projectImg from '../assets/images/projects/06-tandulwadi-airport-road.webp'

export default function ProjectPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Auto open shortly after initial page load
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Save current scroll position and overflow styles
      const scrollY = window.scrollY || window.pageYOffset || 0
      const prevBodyOverflow = document.body.style.overflow
      const prevHtmlOverflow = document.documentElement.style.overflow
      const prevBodyPadding = document.body.style.paddingRight

      // Calculate scrollbar width to prevent layout shift on desktop
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`
      }

      // Lock body & html scrolling across all devices
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsOpen(false)
        }
      }

      window.addEventListener('keydown', handleKeyDown)

      return () => {
        document.body.style.overflow = prevBodyOverflow
        document.documentElement.style.overflow = prevHtmlOverflow
        document.body.style.paddingRight = prevBodyPadding
        window.removeEventListener('keydown', handleKeyDown)
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  const handleClose = (e) => {
    if (e) {
      if (typeof e.stopPropagation === 'function') {
        e.stopPropagation()
      }
      if (typeof e.preventDefault === 'function' && e.type === 'touchend') {
        e.preventDefault()
      }
    }
    setIsOpen(false)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose(e)
    }
  }

  // Pre-filled WhatsApp message
  const whatsappPhone = '919792927799'
  const whatsappMessage = [
    'Hello Rudransh Developers,',
    '',
    'I am interested in your ongoing project at Tandulwadi – Airport Road.',
    '',
    'I would like to know more about the project, including the available units, pricing and other details.',
    '',
    'Please contact me.',
    '',
    'Thank you.',
  ].join('\n')

  const encodedMessage = encodeURIComponent(whatsappMessage)
  const isMobile =
    typeof navigator !== 'undefined' &&
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const whatsappUrl = isMobile
    ? `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${whatsappPhone}&text=${encodedMessage}`

  // Existing Google Maps URL for Tandulwadi Airport Road
  const mapUrl =
    'https://www.google.com/maps/search/?api=1&query=Tandulwadi+Airport+Road+Maharashtra'

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="project-popup-overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-project-title"
        >
          <motion.div
            className="project-popup-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close Button - positioned absolute, always on top */}
            <button
              type="button"
              className="project-popup-close"
              onClick={handleClose}
              onTouchEnd={handleClose}
              aria-label="Close popup"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                stroke="currentColor"
                strokeWidth="2.2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Scrollable Content Container - isolates scrolling from close button */}
            <div className="project-popup-scrollable">
              {/* Featured Image */}
              <div className="project-popup-media">
                <img
                  src={projectImg}
                  alt="Rudransh Developers — Tandulwadi Airport Road Ongoing Project"
                  className="project-popup-img"
                  loading="eager"
                />
                <div className="project-popup-badge-overlay">
                  <span className="project-popup-badge-pulse" />
                  ONGOING PROJECT
                </div>
              </div>

              {/* Content Body */}
              <div className="project-popup-body">
                <div className="project-popup-subheading">RUDRANSH DEVELOPERS · EXCLUSIVE SPOTLIGHT</div>
                <h2 id="popup-project-title" className="project-popup-title">
                  TANDULWADI – AIRPORT ROAD
                </h2>

                <div className="project-popup-location">
                  <span className="location-pin" aria-hidden="true">📍</span>
                  <span>Tandulwadi – Airport Road</span>
                </div>

                <p className="project-popup-desc">
                  Discover our ongoing residential project in a prime location. Flagship development
                  along the high-speed airport transit corridor offering outstanding long-term appreciation and quality living.
                </p>

                <div className="project-popup-ctas">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="popup-btn popup-btn-outline"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="17"
                      height="17"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                      <line x1="8" y1="2" x2="8" y2="18"></line>
                      <line x1="16" y1="6" x2="16" y2="22"></line>
                    </svg>
                    VIEW LOCATION
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="popup-btn popup-btn-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="17"
                      height="17"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.83.822 2.796.822 3.182 0 5.768-2.586 5.769-5.766.001-3.182-2.585-5.808-5.769-5.808zm3.387 8.24c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.037-.478-1.611-.667-2.628-2.316-2.709-2.423-.081-.107-.648-.864-.648-1.65 0-.785.412-1.17.558-1.328.146-.159.32-.198.428-.198.107 0 .214.002.308.007.098.005.231-.038.36.273.136.326.467 1.14.509 1.224.041.085.068.185.013.295-.054.108-.082.176-.162.271-.081.096-.171.213-.245.286-.081.082-.167.172-.072.336.096.163.424.701.91 1.134.626.559 1.155.733 1.319.814.164.082.261.072.358-.041.097-.113.414-.482.525-.647.111-.164.222-.137.373-.082.151.054.957.452 1.121.534.164.082.273.123.313.191.041.069.041.399-.103.804z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.61 0-3.11-.46-4.38-1.26l-.31-.2-3.25.91.92-3.17-.21-.33A8.163 8.163 0 013.8 12c0-4.52 3.68-8.2 8.2-8.2 4.52 0 8.2 3.68 8.2 8.2 0 4.52-3.68 8.2-8.2 8.2z"
                      />
                    </svg>
                    ENQUIRE NOW
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
