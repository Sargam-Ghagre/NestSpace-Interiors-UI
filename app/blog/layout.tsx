import { Metadata } from "next"
import { absoluteUrl } from "@/lib/url"

export const metadata: Metadata = {
  title: "Interior Design Blog",
  description:
    "Explore expert interior design tips, trends, and inspiration from the NestSpace Interiors team. From sustainable materials to small-space solutions.",
  keywords: [
    "interior design blog",
    "design tips",
    "home decor trends",
    "interior inspiration",
    "design ideas",
  ],
  openGraph: {
    title: "Interior Design Blog | NestSpace Interiors",
    description:
      "Expert interior design tips, trends, and inspiration from the NestSpace Interiors team.",
    url: absoluteUrl("/blog"),
    type: "website",
    images: [
      {
        url: "/images/blog-hero.jpg",
        width: 1200,
        height: 630,
        alt: "NestSpace Interiors Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Blog | NestSpace Interiors",
    description:
      "Expert interior design tips, trends, and inspiration from the NestSpace Interiors team.",
    images: ["/images/blog-hero.jpg"],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
