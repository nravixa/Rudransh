import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  const phone = '919011196635'
  const defaultMessage = encodeURIComponent('Hello Rudransh Developer & Real-Estate, I would like to enquire about your property projects.')
  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMessage}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with Rudransh Developer & Real-Estate on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <svg
        className="floating-whatsapp-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.54 1.83.822 2.796.822 3.182 0 5.768-2.586 5.769-5.766.001-3.182-2.585-5.808-5.769-5.808zm3.387 8.24c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.037-.478-1.611-.667-2.628-2.316-2.709-2.423-.081-.107-.648-.864-.648-1.65 0-.785.412-1.17.558-1.328.146-.159.32-.198.428-.198.107 0 .214.002.308.007.098.005.231-.038.36.273.136.326.467 1.14.509 1.224.041.085.068.185.013.295-.054.108-.082.176-.162.271-.081.096-.171.213-.245.286-.081.082-.167.172-.072.336.096.163.424.701.91 1.134.626.559 1.155.733 1.319.814.164.082.261.072.358-.041.097-.113.414-.482.525-.647.111-.164.222-.137.373-.082.151.054.957.452 1.121.534.164.082.273.123.313.191.041.069.041.399-.103.804z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.982-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.61 0-3.11-.46-4.38-1.26l-.31-.2-3.25.91.92-3.17-.21-.33A8.163 8.163 0 013.8 12c0-4.52 3.68-8.2 8.2-8.2 4.52 0 8.2 3.68 8.2 8.2 0 4.52-3.68 8.2-8.2 8.2z" />
      </svg>
    </motion.a>
  )
}
