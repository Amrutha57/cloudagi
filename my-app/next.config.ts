import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "logo.clearbit.com",
      // add other image hosts if needed, e.g. "upload.wikimedia.org"
    ],
  },
};

export default nextConfig;
