import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Introduction() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="intro" id="intro">
      <div className="intro-inner">
        <div className="intro-left">
          <motion.div
            className="section-label"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0}
          >
            Who We Are
          </motion.div>

          <motion.h2
            className="intro-heading"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
          >
            Designed for a life beyond ordinary.
          </motion.h2>
        </div>

        <div className="intro-right">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
          >
            Rudransh Developer & Real-Estate is a trusted name in premium residential construction, 
            delivering thoughtfully designed homes across key locations. Our projects 
            reflect a deep commitment to quality craftsmanship, honest pricing and 
            long-term community value.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3}
          >
            From Mald to Tandulwadi, we build residences that bring together smart design, 
            strong construction standards and access to essential infrastructure — so every 
            family we serve can call their home, truly theirs.
          </motion.p>

          <motion.div
            className="intro-detail"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={4}
          >
            <div className="intro-detail-item">
              <label>Projects</label>
              <span>6+ Active</span>
            </div>
            <div className="intro-detail-item">
              <label>Locations</label>
              <span>Across Region</span>
            </div>
            <div className="intro-detail-item">
              <label>Focus</label>
              <span>Residential</span>
            </div>
            <div className="intro-detail-item">
              <label>Quality</label>
              <span>Premium</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
