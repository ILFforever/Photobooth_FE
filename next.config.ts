import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Increase body size limit for file uploads (500MB)
    serverActionsBodySizeLimit: '500mb',
  },
};

export default nextConfig;
