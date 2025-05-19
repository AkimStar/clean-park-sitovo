/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Disable server-side features for static export
  trailingSlash: true,
  // Ensure compatibility with Netlify
  distDir: 'out',
};

module.exports = nextConfig;
