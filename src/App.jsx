import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import ResidentialFeatures from './components/ResidentialFeatures'
import ProjectLocations from './components/ProjectLocations'
import Gallery from './components/Gallery'
import Architecture from './components/Architecture'
import Amenities from './components/Amenities'
import PropertyDetails from './components/PropertyDetails'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState('Mald – Gaware Phata')

  const handleSelectLocation = (locName) => {
    setSelectedLocation(locName)
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <ResidentialFeatures />
        <ProjectLocations onSelectLocation={handleSelectLocation} />
        <Gallery />
        <Architecture />
        <Amenities />
        <PropertyDetails />
        <ContactSection selectedLocation={selectedLocation} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
