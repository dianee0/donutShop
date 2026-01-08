import { ASSET_HOSTNAME } from "@/lib/assets";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: ASSET_HOSTNAME,
      },
    ],
  },
};

export default nextConfig;
