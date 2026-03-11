import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack:{
    root: "C:/Users/Work/Desktop/Blog Website/blog-spot",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  }
};

export default nextConfig;