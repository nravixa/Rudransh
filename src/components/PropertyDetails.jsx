import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const details = [
  { label: 'Developer', value: 'Rudransh Developers' },
  { label: 'Property Type', value: 'Premium Residential' },
  { label: 'Locations', value: '6 Prime Growth Hubs' },
  { label: 'Documentation', value: '100% Clear Titles' },
  { label: 'Direct Helpline', value: '9011196635 / 9792927799' },
  { label: 'Status', value: 'Ready for Booking & Visits' },
]

export default function PropertyDetails() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="details">
      <div className="details-inner">
        <div className="details-left">
          <motion.div
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Developer Overview
          </motion.div>
          <motion.h2
            className="details-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Project specifications
          </motion.h2>
        </div>

        <motion.div
          className="details-right"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {details.map((d) => (
            <div key={d.label} className="detail-item">
              <label>{d.label}</label>
              <span>{d.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
