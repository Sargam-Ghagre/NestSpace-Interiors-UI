import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/home/cta-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { DesignsGallery } from "./designs-gallery"

export const metadata: Metadata = {
  title: "Design Gallery",
  description:
    "Browse our curated gallery of interior design inspirations — living rooms, bedrooms, kitchens, bathrooms, and more. Find your perfect aesthetic.",
  keywords: [
    "interior design gallery",
    "design inspiration",
    "home decor ideas",
    "room designs",
    "luxury interiors gallery",
  ],
  openGraph: {
    title: "Design Gallery | NestSpace Interiors",
    description:
      "Browse our curated gallery of interior design inspirations — living rooms, bedrooms, kitchens, and more.",
    url: "https://nestspace-interiors.vercel.app/designs",
    type: "website",
    images: [
      {
        url: "/images/portfolio-2.jpg",
        width: 1200,
        height: 630,
        alt: "NestSpace Interiors Design Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Gallery | NestSpace Interiors",
    description:
      "Browse our curated gallery of interior design inspirations — living rooms, bedrooms, kitchens, and more.",
    images: ["/images/portfolio-2.jpg"],
  },
}

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Bathroom", "Office", "Dining", "Luxury"]


const allDesigns = [
  { id: 1, title: "Contemporary Living Space", category: "Living Room", image: "/images/portfolio-1.jpg", size: "tall" },
  { id: 2, title: "Modern Chef's Kitchen", category: "Kitchen", image: "/images/portfolio-2.jpg", size: "regular" },
  { id: 3, title: "Executive Corner Office", category: "Office", image: "/images/portfolio-3.jpg", size: "wide" },
  { id: 4, title: "Spa-Inspired Bathroom", category: "Bathroom", image: "/images/portfolio-4.jpg", size: "regular" },
  { id: 5, title: "Elegant Dining Room", category: "Dining", image: "/images/portfolio-5.jpg", size: "tall" },
  { id: 6, title: "Luxury Penthouse Suite", category: "Luxury", image: "/images/portfolio-6.jpg", size: "regular" },
  { id: 7, title: "Cozy Master Bedroom", category: "Bedroom", image: "/images/hero-interior.jpg", size: "regular" },
  { id: 8, title: "Creative Studio Space", category: "Office", image: "/images/about-hero.jpg", size: "wide" },
  { id: 9, title: "Minimalist Living Area", category: "Living Room", image: "/images/portfolio-5.jpg", size: "regular" },
  { id: 10, title: "Gourmet Kitchen Island", category: "Kitchen", image: "/images/portfolio-2.jpg", size: "tall" },
  { id: 11, title: "Tranquil Guest Bedroom", category: "Bedroom", image: "/images/portfolio-1.jpg", size: "regular" },
  { id: 12, title: "Modern Powder Room", category: "Bathroom", image: "/images/portfolio-4.jpg", size: "regular" },
  { id: 13, title: "Grand Dining Hall", category: "Dining", image: "/images/portfolio-5.jpg", size: "wide" },
  { id: 14, title: "Private Wine Cellar", category: "Luxury", image: "/images/portfolio-6.jpg", size: "tall" },
  { id: 15, title: "Open Concept Kitchen", category: "Kitchen", image: "/images/portfolio-2.jpg", size: "regular" },
  { id: 16, title: "Home Office Nook", category: "Office", image: "/images/portfolio-3.jpg", size: "regular" },
]

export default function AllDesignsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-36 pb-24 bg-linear-to-b from-secondary/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary)_0%,transparent_50%)] opacity-5" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Design Gallery
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              All Our Designs
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Explore our complete collection of interior designs across all categories and styles.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Designs Gallery Client Island */}
      <DesignsGallery designs={allDesigns} categories={categories} />

      <CTASection />
      <Footer />
    </main>
  )
}
