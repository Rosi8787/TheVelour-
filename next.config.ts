import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  allowedDevOrigins: [
    "192.168.110.143",
    "192.168.56.1",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "down-id.img.susercontent.com",
      },
    ],
  },
};

export default nextConfig;