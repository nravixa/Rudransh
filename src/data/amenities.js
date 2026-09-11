import parkingImg from '../assets/images/amenities/amenity-parking.webp'
import securityImg from '../assets/images/amenities/amenity-security.webp'
import gardenImg from '../assets/images/amenities/amenity-garden.webp'
import clubhouseImg from '../assets/images/amenities/amenity-clubhouse.webp'
import waterImg from '../assets/images/amenities/amenity-water.webp'
import powerImg from '../assets/images/amenities/amenity-power.webp'

export const amenityShowcase = [
  {
    title: 'Gated Security & CCTV',
    tag: 'Round-the-Clock Protection',
    desc: '24/7 manned security entrances, automated boom barriers, and comprehensive CCTV monitoring.',
    image: securityImg,
    alt: 'Rudransh Developer & Real-Estate — Gated security and CCTV surveillance',
  },
  {
    title: 'Covered & Designated Parking',
    tag: 'Organized Vehicle Bays',
    desc: 'Spacious, well-illuminated paved parking bays designed for smooth vehicle ingress and egress.',
    image: parkingImg,
    alt: 'Rudransh Developer & Real-Estate — Covered parking infrastructure',
  },
  {
    title: 'Landscaped Parks & Gardens',
    tag: 'Green Living Spaces',
    desc: 'Lush tree-lined walking tracks, curated flower gardens, and open green recreation grounds.',
    image: gardenImg,
    alt: 'Rudransh Developer & Real-Estate — Landscaped green gardens and walking tracks',
  },
  {
    title: 'Community Clubhouse & Fitness',
    tag: 'Social & Wellness Hub',
    desc: 'Modern recreational hall, indoor activities, and open leisure areas for family gatherings.',
    image: clubhouseImg,
    alt: 'Rudransh Developer & Real-Estate — Community clubhouse and leisure amenities',
  },
  {
    title: 'Dedicated Water Infrastructure',
    tag: '24/7 Water Security',
    desc: 'Abundant underground and overhead water storage networks paired with rainwater harvesting.',
    image: waterImg,
    alt: 'Rudransh Developer & Real-Estate — Water supply and storage network',
  },
  {
    title: 'Continuous Electrification & Backup',
    tag: 'Uninterrupted Power',
    desc: 'Modern electrical cabling, bright street lighting corridors, and reliable common-area backup.',
    image: powerImg,
    alt: 'Rudransh Developer & Real-Estate — Power infrastructure and street lighting',
  },
]

export const allAmenitiesList = [
  { name: 'Wide Internal Concrete Roads' },
  { name: 'Gated Security & 24/7 CCTV' },
  { name: 'Landscaped Green Parks' },
  { name: 'Reliable 24/7 Water Supply' },
  { name: 'Electrification & LED Streetlights' },
  { name: 'Underground Drainage Network' },
  { name: "Children's Safe Play Area" },
  { name: 'Clear Individual Plot Demarcation' },
  { name: 'Strategic Highway Connectivity' },
]

export default { amenityShowcase, allAmenitiesList }
