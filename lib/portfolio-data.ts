export type Project = {
  title: string
  category: string
  location: string
  date: string
  area: string
  duration: string
  heroImage: string
  description: string
  challenge: string
  solution: string
  gallery: string[]
  beforeAfter: {
    before: string
    after: string
  }
}

export const projects: Record<string, Project> = {
  "modern-living-room": {
    title: "Modern Living Room",
    category: "Home",
    location: "Manhattan, NY",
    date: "2024",
    area: "850 sq ft",
    duration: "6 weeks",
    heroImage: "/images/portfolio-1.jpg",
    description:
      "This contemporary living room transformation was designed for a young professional couple seeking a sophisticated yet comfortable space in their Manhattan apartment. The design features clean lines, a neutral color palette with warm accents, and carefully curated furniture pieces that maximize both style and functionality.",
    challenge:
      "The main challenge was to create an open, airy feel in a relatively compact space while accommodating the clients' extensive book collection and entertainment needs.",
    solution:
      "We implemented custom built-in shelving that serves as both a display unit and room divider, creating defined zones without sacrificing the open floor plan. The use of mirrors strategically placed opposite the windows amplifies natural light, making the space feel larger.",
    gallery: [
      "/images/portfolio-1.jpg",
      "/images/portfolio-5.jpg",
      "/images/hero-interior.jpg",
      "/images/portfolio-6.jpg",
    ],
    beforeAfter: {
      before: "/images/portfolio-3.jpg",
      after: "/images/portfolio-1.jpg",
    },
  },
  "luxury-kitchen": {
    title: "Luxury Kitchen",
    category: "Kitchen",
    location: "Beverly Hills, CA",
    date: "2024",
    area: "400 sq ft",
    duration: "8 weeks",
    heroImage: "/images/portfolio-2.jpg",
    description:
      "A complete kitchen transformation featuring premium materials and state-of-the-art appliances. This modular kitchen design combines stunning aesthetics with smart functionality, maximizing every inch of space with innovative storage solutions.",
    challenge:
      "The clients desired a chef-worthy kitchen that could handle professional cooking while maintaining the elegance expected of a Beverly Hills residence.",
    solution:
      "We selected commercial-grade appliances integrated seamlessly into custom cabinetry. The marble countertops and brass fixtures add luxury, while deep drawers and pull-out organizers ensure everything has its place.",
    gallery: [
      "/images/portfolio-2.jpg",
      "/images/portfolio-5.jpg",
      "/images/portfolio-4.jpg",
      "/images/hero-interior.jpg",
    ],
    beforeAfter: {
      before: "/images/portfolio-3.jpg",
      after: "/images/portfolio-2.jpg",
    },
  },
  "executive-office": {
    title: "Executive Office",
    category: "Office",
    location: "Chicago, IL",
    date: "2023",
    area: "1,200 sq ft",
    duration: "10 weeks",
    heroImage: "/images/portfolio-3.jpg",
    description:
      "An executive workspace designed for a tech company CEO, balancing the need for a commanding presence with the flexibility for collaborative work. The design reflects the company's innovative spirit while providing a refined environment for high-stakes meetings.",
    challenge:
      "Creating a space that could serve as both a private executive office and a meeting room for up to 8 people, while incorporating the latest technology for video conferencing.",
    solution:
      "A convertible workspace with a motorized partition allows the space to transform from intimate office to conference room. Integrated technology is hidden when not in use, maintaining the clean aesthetic.",
    gallery: [
      "/images/portfolio-3.jpg",
      "/images/about-hero.jpg",
      "/images/portfolio-6.jpg",
      "/images/hero-interior.jpg",
    ],
    beforeAfter: {
      before: "/images/portfolio-1.jpg",
      after: "/images/portfolio-3.jpg",
    },
  },
  "spa-bathroom": {
    title: "Spa Bathroom",
    category: "Luxury",
    location: "Miami, FL",
    date: "2024",
    area: "250 sq ft",
    duration: "5 weeks",
    heroImage: "/images/portfolio-4.jpg",
    description:
      "A spa-like bathroom retreat featuring a freestanding tub, rain shower, and premium marble finishes throughout. This luxury bathroom brings the resort experience home.",
    challenge:
      "Transforming a dated bathroom into a spa-like sanctuary while working within the constraints of the existing plumbing layout.",
    solution:
      "By relocating the vanity and installing a freestanding tub, we completely changed the flow of the space. Heated floors, ambient lighting, and a steam shower complete the spa experience.",
    gallery: [
      "/images/portfolio-4.jpg",
      "/images/portfolio-6.jpg",
      "/images/hero-interior.jpg",
      "/images/portfolio-1.jpg",
    ],
    beforeAfter: {
      before: "/images/portfolio-2.jpg",
      after: "/images/portfolio-4.jpg",
    },
  },
  "elegant-dining": {
    title: "Elegant Dining",
    category: "Home",
    location: "San Francisco, CA",
    date: "2023",
    area: "300 sq ft",
    duration: "4 weeks",
    heroImage: "/images/portfolio-5.jpg",
    description:
      "A formal dining room designed for memorable gatherings, featuring a custom dining table, statement lighting, and carefully curated artwork.",
    challenge:
      "Creating a space that feels intimate for everyday family meals while being impressive enough for formal entertaining.",
    solution:
      "Adjustable lighting allows the mood to shift from casual to formal. The extendable dining table accommodates 6-12 guests, and the sideboard provides ample storage for fine china.",
    gallery: [
      "/images/portfolio-5.jpg",
      "/images/portfolio-1.jpg",
      "/images/hero-interior.jpg",
      "/images/portfolio-2.jpg",
    ],
    beforeAfter: {
      before: "/images/portfolio-3.jpg",
      after: "/images/portfolio-5.jpg",
    },
  },
  "penthouse-living": {
    title: "Penthouse Living",
    category: "Luxury",
    location: "New York, NY",
    date: "2024",
    area: "3,500 sq ft",
    duration: "16 weeks",
    heroImage: "/images/portfolio-6.jpg",
    description:
      "A complete penthouse renovation featuring double-height ceilings, a custom spiral staircase, and breathtaking city views. This luxury residence showcases the pinnacle of contemporary design.",
    challenge:
      "Maximizing the stunning views while creating intimate living spaces within the vast open floor plan.",
    solution:
      "Strategic furniture groupings and custom millwork create distinct zones while maintaining visual flow. Floor-to-ceiling windows remain unobstructed to frame the city skyline.",
    gallery: [
      "/images/portfolio-6.jpg",
      "/images/hero-interior.jpg",
      "/images/portfolio-4.jpg",
      "/images/portfolio-5.jpg",
    ],
    beforeAfter: {
      before: "/images/about-hero.jpg",
      after: "/images/portfolio-6.jpg",
    },
  },
  "cozy-bedroom": {
    title: "Cozy Bedroom",
    category: "Home",
    location: "Seattle, WA",
    date: "2023",
    area: "450 sq ft",
    duration: "4 weeks",
    heroImage: "/images/hero-interior.jpg",
    description:
      "A serene bedroom retreat with warm textures and soft lighting, designed to promote rest and relaxation.",
    challenge:
      "Creating a peaceful sanctuary that feels separate from the busy home office adjacent to the space.",
    solution:
      "Sound-dampening materials, blackout curtains, and a carefully chosen color palette create an oasis of calm. The custom headboard with integrated reading lights adds functionality.",
    gallery: [
      "/images/hero-interior.jpg",
      "/images/portfolio-1.jpg",
      "/images/portfolio-5.jpg",
      "/images/portfolio-4.jpg",
    ],
    beforeAfter: {
      before: "/images/portfolio-3.jpg",
      after: "/images/hero-interior.jpg",
    },
  },
  "modern-workspace": {
    title: "Modern Workspace",
    category: "Office",
    location: "Austin, TX",
    date: "2024",
    area: "2,800 sq ft",
    duration: "12 weeks",
    heroImage: "/images/about-hero.jpg",
    description:
      "A collaborative open office designed for a creative agency, featuring flexible workstations and inspiring breakout spaces.",
    challenge:
      "Accommodating 30 employees in an open plan while providing privacy options and reducing noise distractions.",
    solution:
      "Phone booths, acoustic panels, and strategic layout create quiet zones. The central collaboration area encourages teamwork while perimeter desks offer focused work options.",
    gallery: [
      "/images/about-hero.jpg",
      "/images/portfolio-3.jpg",
      "/images/hero-interior.jpg",
      "/images/portfolio-6.jpg",
    ],
    beforeAfter: {
      before: "/images/portfolio-1.jpg",
      after: "/images/about-hero.jpg",
    },
  },
}

export type ProjectId = keyof typeof projects
