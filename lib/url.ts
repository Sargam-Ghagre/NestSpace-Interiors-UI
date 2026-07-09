export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  // Fallback for local development
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000"
  }
  return "https://nestspace-interiors.vercel.app"
}

export function absoluteUrl(path: string = ""): string {
  const baseUrl = getSiteUrl()
  return `${baseUrl}${path}`
}
