/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320],
  },
  compress: true,
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
