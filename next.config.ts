import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Increase body size limit for API routes (file uploads)
  experimental: {
    bodySizeLimit: '500mb',
  },
};

export default nextConfig;
