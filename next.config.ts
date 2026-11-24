import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages: emit /x/index.html so /x and /x/ resolve even when /x/<slug> pages exist.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
