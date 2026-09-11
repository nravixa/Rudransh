export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Column 1: Brand */}
        <div className="footer-col footer-col-brand">
          <div className="footer-brand-header">
            <img src="/logo.webp" alt="Rudransh Developers Logo" className="footer-logo-img" />
            <div className="footer-brand-text">
              <span className="footer-logo">RUDRANSH DEVELOPERS</span>
              <span className="footer-tagline">Premium Residential Projects</span>
            </div>
          </div>
          <p className="footer-brand-desc">
            Crafting enduring residential landmarks and master-planned communities designed for inspired living.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col footer-col-links">
          <h4 className="footer-heading">QUICK LINKS</h4>
          <nav className="footer-links-list">
            <a href="#overview" onClick={(e) => { e.preventDefault(); scrollTo('overview') }}>Home</a>
            <a href="#intro" onClick={(e) => { e.preventDefault(); scrollTo('intro') }}>About</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollTo('features') }}>Projects</a>
            <a href="#locations" onClick={(e) => { e.preventDefault(); scrollTo('locations') }}>Locations</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Contact</a>
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col footer-col-contact">
          <h4 className="footer-heading">CONTACT</h4>
          <div className="footer-contact-list">
            <a href="tel:9011196635" className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>9011196635</span>
            </a>
            <a href="tel:9792927799" className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>9792927799</span>
            </a>
          </div>
        </div>

        {/* Column 4: Follow Us */}
        <div className="footer-col footer-col-social">
          <h4 className="footer-heading">FOLLOW US</h4>
          <div className="footer-social-list">
            <a
              href="https://www.instagram.com/rudranshdevloper5711?stkn=M2p3cnk5MWZlbGdz"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Follow Rudransh Developer on Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com/share/18xKRpWWqG/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Follow Pratik Kshirsagar on Facebook"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © {new Date().getFullYear()} <a href="https://nravixa.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer-credit-link">NRAVIXA</a>. All rights reserved.
        </p>
        <p className="footer-meta">Building Spaces For Better Living</p>
      </div>
    </footer>
  )
}
