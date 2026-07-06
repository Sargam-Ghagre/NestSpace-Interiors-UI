import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Explore our luxury interior design projects — from modern living rooms and elegant kitchens to executive offices and boutique hospitality spaces.",
  keywords: [
    "interior design portfolio",
    "luxury design projects",
    "residential interiors",
    "commercial interiors",
    "design case studies",
  ],
  openGraph: {
    title: "Our Portfolio | NestSpace Interiors",
    description:
      "Explore our luxury interior design projects — from modern living rooms to executive offices.",
    url: "https://nestspace-interiors.vercel.app/portfolio",
    type: "website",
    images: [
      {
        url: "/images/portfolio-1.jpg",
        width: 1200,
        height: 630,
        alt: "NestSpace Interiors Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | NestSpace Interiors",
    description:
      "Explore our luxury interior design projects — from modern living rooms to executive offices.",
    images: ["/images/portfolio-1.jpg"],
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
