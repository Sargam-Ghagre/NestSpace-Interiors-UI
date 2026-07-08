/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
  },
  experimental: {
    viewTransition: true,
  },
  serverExternalPackages: ['recharts'],
}

export default nextConfig