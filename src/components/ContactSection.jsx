import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export default function ContactSection({ selectedLocation }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: selectedLocation || 'Mald – Gaware Phata',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState(null)

  useEffect(() => {
    if (selectedLocation) {
      setFormData((prev) => ({ ...prev, location: selectedLocation }))
    }
  }, [selectedLocation])

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.'
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.'
    }

    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '')
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number.'
    } else if (!/^[0-9+]{10,15}$/.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit phone number.'
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address.'
      }
    }

    if (!formData.location) {
      errs.location = 'Please select a preferred project location.'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Build the required WhatsApp message format
    const lines = [
      'Hello Rudransh Developers,',
      '',
      'I am interested in your residential projects and would like to know more.',
      '',
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Email: ${formData.email.trim() || 'N/A'}`,
      `Preferred Project / Location: ${formData.location}`,
      `Message: ${formData.message.trim() || 'Interested in project details, pricing, and scheduling a site visit.'}`,
      '',
      'Please contact me regarding the project.',
      '',
      'Thank you.',
    ]

    const fullMessage = lines.join('\n')
    const encodedText = encodeURIComponent(fullMessage)
    // WhatsApp international format: 919792927799
    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    const whatsappUrl = isMobile
      ? `https://api.whatsapp.com/send?phone=919792927799&text=${encodedText}`
      : `https://web.whatsapp.com/send?phone=919792927799&text=${encodedText}`

    setSubmittedWhatsAppUrl(whatsappUrl)

    // Short delay for visual feedback before opening WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      setIsSubmitting(false)
    }, 400)
  }

  const handleReset = () => {
    setSubmittedWhatsAppUrl(null)
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: selectedLocation || 'Mald – Gaware Phata',
      message: '',
    })
    setErrors({})
  }

  return (
    <section ref={ref} className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Left Column: Heading, Subheading, Phone Numbers, Call CTA */}
          <div className="contact-left">
            <motion.div
              className="contact-label"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              CONTACT US
            </motion.div>

            <motion.h2
              className="contact-heading"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Find Your Next Address.
            </motion.h2>

            <motion.p
              className="contact-subheading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Explore our residential projects and find a location that feels right for you.
            </motion.p>

            {/* Direct Phone Numbers List */}
            <motion.div
              className="contact-phone-block"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="phone-block-title">Direct Inquiries:</div>
              <div className="phone-numbers">
                <a href="tel:9011196635" className="phone-link">
                  <span className="phone-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </span>
                  <span className="phone-digit">9011196635</span>
                </a>

                <a href="tel:9792927799" className="phone-link">
                  <span className="phone-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </span>
                  <span className="phone-digit">9792927799</span>
                </a>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="contact-cta-row"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <a href="tel:9011196635" className="contact-btn-call" aria-label="Call Rudransh Developer & Real-Estate">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>CALL NOW</span>
              </a>

              <button
                type="button"
                className="contact-btn-enquire"
                onClick={() => {
                  const formEl = document.getElementById('enquiry-form-card')
                  if (formEl) formEl.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>ENQUIRE NOW</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Premium Residential Enquiry Form */}
          <motion.div
            id="enquiry-form-card"
            className="contact-form-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="form-card-inner">
              <h3 className="form-card-title">Schedule a Consultation</h3>
              <p className="form-card-desc">
                Fill in your details below. Your enquiry will directly connect to our team via WhatsApp for immediate assistance and brochures.
              </p>

              <AnimatePresence mode="wait">
                {submittedWhatsAppUrl ? (
                  <motion.div
                    className="form-success-box"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="success-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h4>Enquiry Ready!</h4>
                    <p>
                      WhatsApp is opening with your pre-filled inquiry for <strong>{formData.location}</strong>.
                    </p>

                    <div className="whatsapp-redirect-actions">
                      <a
                        href={submittedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-reopen-btn"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.087-.178.181-.077.354.101.173.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                        </svg>
                        <span>Open in WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        className="form-reset-btn"
                        onClick={handleReset}
                      >
                        Send another enquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="enquiry-form" noValidate>
                    <div className="form-group">
                      <label htmlFor="name">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Ramesh Patil"
                        value={formData.name}
                        className={errors.name ? 'input-error' : ''}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value })
                          if (errors.name) setErrors({ ...errors, name: null })
                        }}
                      />
                      {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">
                        Phone Number <span className="req">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        className={errors.phone ? 'input-error' : ''}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value })
                          if (errors.phone) setErrors({ ...errors, phone: null })
                        }}
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address (Optional)</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. ramesh.patil@gmail.com"
                        value={formData.email}
                        className={errors.email ? 'input-error' : ''}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value })
                          if (errors.email) setErrors({ ...errors, email: null })
                        }}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label htmlFor="location">
                        Preferred Project / Location <span className="req">*</span>
                      </label>
                      <select
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      >
                        <option value="Mald – Gaware Phata">01 — Mald – Gaware Phata</option>
                        <option value="Mald – Gokul Nagar">02 — Mald – Gokul Nagar</option>
                        <option value="Sawal">03 — Sawal</option>
                        <option value="Malegaon Budruk (Bk)">04 — Malegaon Budruk (Bk)</option>
                        <option value="Jamdar Road, Kasba">05 — Jamdar Road, Kasba</option>
                        <option value="Tandulwadi – Airport Road">06 — Tandulwadi – Airport Road</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message (Optional)</label>
                      <textarea
                        id="message"
                        rows="3"
                        placeholder="Tell us about your requirements or preferred time for a site visit..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="form-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Connecting to WhatsApp...</span>
                      ) : (
                        <span>Send Enquiry</span>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
