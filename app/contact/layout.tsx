import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get In Touch",
  description:
    "Ready to transform your space? Contact NestSpace Interiors today to schedule a design consultation with our expert team.",
  openGraph: {
    title: "Get In Touch | NestSpace Interiors",
    description:
      "Ready to transform your space? Contact NestSpace Interiors today to schedule a design consultation with our expert team.",
    url: "https://nestspace-interiors.vercel.app/contact",
    type: "website",
    images: [
      {
        url: "/images/hero-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Contact NestSpace Interiors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get In Touch | NestSpace Interiors",
    description:
      "Ready to transform your space? Contact NestSpace Interiors today to schedule a design consultation.",
    images: ["/images/hero-interior.jpg"],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
