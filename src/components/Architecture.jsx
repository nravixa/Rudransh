import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

export default function Architecture() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="architecture">
      <motion.div className="architecture-image-wrap" style={{ y: imageY }}>
        <img
          src="/pool.jpg"
          alt="Rudransh Developers architectural landscape and open community"
          loading="lazy"
        />
      </motion.div>

      <div className="architecture-overlay" />

      <motion.div
        className="architecture-content"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h2>Built with integrity. Conceived for generations.</h2>
        <p>
          At Rudransh Developers, we believe that true residential value lies in 
          structural permanence, harmonious layouts, and honest execution. 
          Every development is thoughtfully integrated with its surroundings, 
          offering families space to grow, connect, and thrive in comfort.
        </p>
      </motion.div>
    </section>
  )
}
