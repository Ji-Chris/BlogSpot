import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack:{
    root: "C:/Users/Work/Desktop/Blog Website/blog-spot",
  },

  images: {
    domains: ["localhost" , "www.svgrepo.com"]
  }
};


export default nextConfig;