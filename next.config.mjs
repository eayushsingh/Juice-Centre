/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Prevent hydration issues
  reactStrictMode: true,
  // Smooth client navigation
  experimental: {
    scrollRestoration: true,
  },
  // Performance and stability
  generateEtags: false,
  poweredByHeader: false,
}

export default nextConfig
